"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track 
      className="relative h-2 w-full grow overflow-hidden rounded-full"
      style={{ backgroundColor: 'hsl(217 91% 60% / 0.2)' }}
    >
      <SliderPrimitive.Range 
        className="absolute h-full" 
        style={{ backgroundColor: 'hsl(217 91% 60%)' }}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb 
      className="block h-5 w-5 rounded-full border-2 shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer hover:scale-110"
      style={{ 
        backgroundColor: 'white',
        borderColor: 'hsl(217 91% 60%)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }