import { cva, type VariantProps } from "class-variance-authority";

// ---------------------------------------------------------------------------
// GOV.UK Design System – Button Variants
// https://design-system.service.gov.uk/components/button/
//
// Colour tokens are taken directly from the GOV.UK Frontend SCSS source:
//   Primary (default):  bg #0f7a52  hover #0b5c3e  shadow #083d29
//   Secondary:          bg #f3f3f3  hover #cecece  shadow #858686
//   Warning:            bg #ca3535  hover #982828  shadow #651b1b
//   Inverse:            bg #ffffff  hover #f4f8fb  shadow #0f385c
//
// Focus state:  bg #ffdd00  text #0b0c0c  shadow 0 2px 0 #0b0c0c
// ---------------------------------------------------------------------------

export const buttonVariants = cva(
  // ── Base styles (shared across all variants) ──────────────────────────
  [
    // Layout
    "relative inline-block w-full sm:w-auto",
    // Box model — 2px border (transparent by default), 2px bottom shadow
    "border-2 border-transparent rounded-none",
    "box-border",
    // Spacing — padding mirrors GOV.UK's govuk-spacing(2) minus border
    "px-[10px] py-[7px]",
    // Bottom margin includes room for the shadow
    "mb-[18px]",
    // Typography — GOV.UK uses 19px / 19px with GDS Transport; we use Arial
    "text-[19px] leading-[19px] font-normal",
    "font-[Arial,_Helvetica,_sans-serif]",
    "text-center no-underline",
    // Cursor
    "cursor-pointer",
    // Webkit reset
    "appearance-none",
    // Active — press down to eat the shadow
    "active:top-[2px] active:shadow-none",
    // Focus — GOV.UK yellow/black states handled via .govuk-focus in CSS
    // (compound :focus-visible:not(:active):not(:hover) requires real CSS
    //  for proper specificity and box-shadow override)
    "govuk-focus",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-[#0f7a52] text-white",
          "shadow-[0_2px_0_#083d29]",
          "hover:bg-[#0b5c3e]",
          // Links rendered as buttons
          "visited:text-white active:text-white",
        ],
        secondary: [
          "bg-[#f3f3f3] text-[#0b0c0c]",
          "shadow-[0_2px_0_#858686]",
          "hover:bg-[#cecece]",
          "visited:text-[#0b0c0c] active:text-[#0b0c0c]",
        ],
        warning: [
          "bg-[#ca3535] text-white",
          "shadow-[0_2px_0_#651b1b]",
          "hover:bg-[#982828]",
          "visited:text-white active:text-white",
        ],
        inverse: [
          "bg-white text-[#1d70b8]",
          "shadow-[0_2px_0_#0f385c]",
          "hover:bg-[#f4f8fb]",
          "visited:text-[#1d70b8] active:text-[#1d70b8]",
        ],
        start: [
          "bg-[#0f7a52] text-white",
          "shadow-[0_2px_0_#083d29]",
          "hover:bg-[#0b5c3e]",
          "visited:text-white active:text-white",
          // Start-specific overrides
          "font-bold text-[24px] leading-[1]",
          "inline-flex items-center justify-center",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// Disabled styles (applied via data-disabled attribute from Base UI)
export const disabledStyles =
  "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:active:top-0 data-[disabled]:hover:bg-inherit";

export type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;
