
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#d0ff00] text-black hover:bg-[#b3e600] shadow-md shadow-[#d0ff00]/20 hover:shadow-lg hover:shadow-[#d0ff00]/30",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        greenNeon: "bg-[#d0ff00] text-black hover:bg-[#c5f000] shadow-md shadow-[#d0ff00]/20 hover:shadow-lg hover:shadow-[#d0ff00]/30",
        outlineNeon: "border border-[#d0ff00]/40 bg-transparent text-[#d0ff00] hover:bg-[#d0ff00]/10 hover:border-[#d0ff00]/60 hover:text-white shadow-sm hover:shadow-md hover:shadow-[#d0ff00]/10",
        redNeon: "bg-[#cf0f00] text-white hover:bg-[#b80e00] shadow-md shadow-[#cf0f00]/20 hover:shadow-lg hover:shadow-[#cf0f00]/30 font-bold text-base",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-base",
        xl: "h-12 rounded-md px-10 py-6 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
