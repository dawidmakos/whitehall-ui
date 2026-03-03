import React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { buttonVariants, disabledStyles } from "./Button.variants";

// ---------------------------------------------------------------------------
// GOV.UK Design System – Button
// https://design-system.service.gov.uk/components/button/
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Start button arrow icon – exact SVG from GOV.UK Frontend
// ---------------------------------------------------------------------------
function StartIcon() {
  return (
    <svg
      className="ml-1.25 sm:ml-2.5 align-middle shrink-0 self-center forced-color-adjust-auto"
      xmlns="http://www.w3.org/2000/svg"
      width="17.5"
      height="19"
      viewBox="0 0 33 40"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Component types
// ---------------------------------------------------------------------------
export type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render the button as a link (anchor tag) */
  asChild?: boolean;
  /** Prevent the button from being interacted with */
  disabled?: boolean;
  /** Keep the button focusable when disabled (useful for loading states) */
  focusableWhenDisabled?: boolean;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      disabled = false,
      focusableWhenDisabled = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <BaseButton
        ref={ref}
        disabled={disabled}
        focusableWhenDisabled={focusableWhenDisabled}
        className={cn(buttonVariants({ variant }), disabledStyles, className)}
        {...props}
      >
        {children}
        {variant === "start" && <StartIcon />}
      </BaseButton>
    );
  },
);

Button.displayName = "Button";

export { Button };
