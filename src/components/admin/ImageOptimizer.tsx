import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useImageOptimizer } from '@/hooks/useImageOptimizer';
import { galleryImages } from '@/config/galleryImages';
import { Loader2 } from 'lucide-react';

export const ImageOptimizer = () => {
  const { batchOptimize, isOptimizing, progress } = useImageOptimizer();
  const [results, setResults] = useState<any[]>([]);

  const handleOptimize = async () => {
    const optimizedResults = await batchOptimize(galleryImages);
    setResults(optimizedResults);
    
    // Generate new config file content
    const newConfig = optimizedResults.map(r => `  "${r.optimizedUrl}",`).join('\n');
    console.log('New gallery config:\n', `export const galleryImages = [\n${newConfig}\n];`);
  };

  const progressPercent = progress.total > 0 ? (progress.current / progress.total) * 100 : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Image Optimizer</CardTitle>
        <CardDescription>
          Convert gallery images to optimized WebP format
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Button 
            onClick={handleOptimize} 
            disabled={isOptimizing}
          >
            {isOptimizing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isOptimizing ? 'Optimizing...' : `Optimize ${galleryImages.length} Images`}
          </Button>
          
          {isOptimizing && (
            <span className="text-sm text-muted-foreground">
              {progress.current} / {progress.total}
            </span>
          )}
        </div>

        {isOptimizing && (
          <Progress value={progressPercent} className="w-full" />
        )}

        {results.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Results:</h3>
            <div className="max-h-60 overflow-y-auto space-y-2">
              {results.map((result, index) => (
                <div 
                  key={index} 
                  className={`text-sm p-2 rounded ${result.success ? 'bg-green-50' : 'bg-red-50'}`}
                >
                  {result.success ? '✓' : '✗'} {result.originalUrl.split('/').pop()}
                  {result.success && <div className="text-xs text-gray-600 mt-1">{result.optimizedUrl}</div>}
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="text-sm font-semibold mb-2">Copy this to galleryImages.ts:</p>
              <pre className="text-xs overflow-x-auto">
                {`export const galleryImages = [\n${results.map(r => `  "${r.optimizedUrl}",`).join('\n')}\n];`}
              </pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
