
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { CheckCircle2, CircleDot } from "lucide-react"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    step: number;
    totalSteps: number;
  }
>(({ className, value, step, totalSteps, ...props }, ref) => (
  <div className="w-full"> {/* Ensure full width container */}
    {[...Array(totalSteps)].map((_, index) => (
      <div 
        key={index} 
        className="flex items-center space-x-2 w-full" // Added w-full here
      >
        {index < step ? (
          <CheckCircle2 className="text-green-500 w-6 h-6" />
        ) : index === step ? (
          <CircleDot className="text-primary w-6 h-6" />
        ) : (
          <CircleDot className="text-gray-300 w-6 h-6" />
        )}
        {index < totalSteps - 1 && (
          <ProgressPrimitive.Root
            ref={ref}
            className={cn(
              "relative h-1 w-full overflow-hidden rounded-full", 
              index < step ? "bg-green-500" : "bg-gray-200",
              className
            )}
            {...props}
          >
            <ProgressPrimitive.Indicator
              className="h-full w-full flex-1 bg-green-500 transition-all"
              style={{ 
                transform: `translateX(${index < step ? "0%" : "-100%"})` 
              }}
            />
          </ProgressPrimitive.Root>
        )}
      </div>
    ))}
  </div>
))
Progress.displayName = "Progress"

export { Progress }
