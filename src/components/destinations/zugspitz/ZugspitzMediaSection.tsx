
import React, { useState } from 'react';
import { Clock, ThumbsUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ZugspitzMediaSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = {
      email,
      source: 'zugspitz_waitlist',
      submitted_at: new Date().toISOString()
    };
    
    console.log('Submitting to Zapier:', payload);
    
    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/21931910/2l4yeck/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(payload)
      });
      
      console.log('Zapier response:', response);
      
      setEmail('');
      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "Thanks for signing up. We'll notify you when registration opens!"
      });
    } catch (error) {
      console.error('Error submitting to Zapier:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl overflow-hidden aspect-video">
        <iframe
          src="https://www.youtube.com/embed/mPx3YCji3kU"
          title="Zugspitz Ultratrail Video"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-gray-600 mb-1">Starting from</p>
            <p className="font-cabinet text-4xl font-bold text-charcoal">11.460 DKK</p>
            <p className="text-sm text-gray-500">incl. VAT</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 mb-1">Registration status</p>
            <div className="bg-[#F1F0FB] px-3 py-1.5 rounded-full">
              <p className="font-cabinet text-sm font-medium text-[#9F9EA1] flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Opens later
              </p>
            </div>
          </div>
        </div>
        <div className="text-center py-8">
          <h3 className="font-cabinet text-xl font-bold text-charcoal mb-6">Get notified when registration opens</h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSuccess}
              placeholder="Enter your email"
              className="flex-1 h-[56px] px-6 rounded-full font-inter focus:outline-none focus:ring-2 focus:ring-black/20"
            />
            {isSuccess ? (
              <div className="bg-transparent border-2 border-black text-black h-[56px] px-8 rounded-full flex items-center justify-center">
                <ThumbsUp className="w-6 h-6 animate-fade-in text-black" />
              </div>
            ) : (
              <Button 
                type="submit"
                variant="black"
                size="xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Notify me'}
              </Button>
            )}
          </form>
        </div>
      </div>

      {/* Zugspitz-specific amenities */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h2 className="font-cabinet text-2xl font-bold mb-8 text-center">What's Included in Your Package</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-3">
              <img src="/lovable-uploads/a372fe5f-3385-44a7-bb8b-4961448afc3d.png" alt="Race Entry" className="w-16 h-16" />
            </div>
            <h4 className="font-cabinet text-lg font-bold mb-1">Race Entry</h4>
            <p className="text-sm text-gray-600">Official entry to the trail run</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3">
              <img src="/lovable-uploads/38b791a4-b1f2-46b4-94e9-3a846f425922.png" alt="Flights" className="w-16 h-16" />
            </div>
            <h4 className="font-cabinet text-lg font-bold mb-1">Flights</h4>
            <p className="text-sm text-gray-600">Round trip from Copenhagen</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3">
              <img src="/lovable-uploads/c84fb355-d0d8-4186-98d2-586a852eff71.png" alt="Transportation" className="w-16 h-16" />
            </div>
            <h4 className="font-cabinet text-lg font-bold mb-1">Transportation</h4>
            <p className="text-sm text-gray-600">Airport transfers to accommodation</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3">
              <img src="/lovable-uploads/ba002ac9-1745-47a1-a01f-ca8bfa53b60d.png" alt="Luxury Hotel" className="w-16 h-16" />
            </div>
            <h4 className="font-cabinet text-lg font-bold mb-1">Luxury Hotel</h4>
            <p className="text-sm text-gray-600">4-star hotel accommodation</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3">
              <img src="/lovable-uploads/9e398900-45e9-4cd0-b353-b07f3c3bfcfb.png" alt="Local Cuisine" className="w-16 h-16" />
            </div>
            <h4 className="font-cabinet text-lg font-bold mb-1">Local Cuisine</h4>
            <p className="text-sm text-gray-600">Breakfasts and lunches included</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3">
              <img src="/lovable-uploads/04b6b51f-4515-415d-b591-7608f760c49d.png" alt="Coaching" className="w-16 h-16" />
            </div>
            <h4 className="font-cabinet text-lg font-bold mb-1">Coaching</h4>
            <p className="text-sm text-gray-600">Pre-race briefing and strategy</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3">
              <img src="/lovable-uploads/a18f161c-12fd-4a39-819c-2ffac95a8982.png" alt="Social" className="w-16 h-16" />
            </div>
            <h4 className="font-cabinet text-lg font-bold mb-1">Social</h4>
            <p className="text-sm text-gray-600">Social jog and post race celebrations</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3">
              <img src="/lovable-uploads/f7ffb7d1-9191-46d5-ae2a-7b1a4d9c5350.png" alt="Recovery" className="w-16 h-16" />
            </div>
            <h4 className="font-cabinet text-lg font-bold mb-1">Recovery</h4>
            <p className="text-sm text-gray-600">Trail Squad physiotherapy available</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3">
              <img src="/lovable-uploads/1c4eceb7-97ce-45ca-b50f-0844491ca83a.png" alt="Race Kit" className="w-16 h-16" />
            </div>
            <h4 className="font-cabinet text-lg font-bold mb-1">Race Kit</h4>
            <p className="text-sm text-gray-600">Superior Trail Squad merchandise</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-3">
              <img src="/lovable-uploads/91b914ac-eb58-43d2-b8b9-c464cad202da.png" alt="Community" className="w-16 h-16" />
            </div>
            <h4 className="font-cabinet text-lg font-bold mb-1">Community</h4>
            <p className="text-sm text-gray-600">Monthly training runs for fellow runners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZugspitzMediaSection;
