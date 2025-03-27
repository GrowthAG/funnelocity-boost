
import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CustomProgressProps {
  value: number;
  className?: string;
  indicatorClassName?: string;
}

const CustomProgress = ({
  value,
  className,
  indicatorClassName,
}: CustomProgressProps) => {
  return (
    <Progress
      value={value}
      className={className}
      style={{
        /* This overrides the default style */
      }}
    >
      <div
        className={cn("h-full w-full flex-1 transition-all", indicatorClassName)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </Progress>
  );
};

export { CustomProgress };
