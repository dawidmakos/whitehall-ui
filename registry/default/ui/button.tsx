import { Button as BaseButton } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'relative inline-block w-full sm:w-auto',
    'border-2 border-transparent rounded-none',
    'box-border',
    'px-govuk-button-x pt-govuk-button-pt pb-govuk-button-pb',
    'mb-govuk-button-bottom',
    'text-govuk-body font-normal',
    'font-govuk',
    'text-center no-underline',
    'cursor-pointer',
    'appearance-none',
    'active:top-govuk-button-press',
    'focus:border-govuk-yellow focus:outline-3 focus:outline-transparent',
    'focus:shadow-govuk-clear focus:inset-ring-1 focus:inset-ring-govuk-yellow',
    'focus:not-[:active]:not-[:hover]:bg-govuk-yellow',
    'focus:not-[:active]:not-[:hover]:text-govuk-black',
    'focus:not-[:active]:not-[:hover]:shadow-govuk-yellow',
    'focus:not-[:active]:not-[:hover]:inset-ring-0',
    'focus:not-[:active]:not-[:hover]:border-govuk-yellow',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-govuk-green text-white',
          'shadow-govuk-green',
          'hover:not-data-[disabled]:bg-govuk-green-hover',
          'visited:text-white active:text-white',
        ],
        secondary: [
          'bg-govuk-light-grey text-govuk-black',
          'shadow-govuk-light-grey',
          'hover:not-data-[disabled]:bg-govuk-grey',
          'visited:text-govuk-black active:text-govuk-black',
        ],
        warning: [
          'bg-govuk-red text-white',
          'shadow-govuk-red',
          'hover:not-data-[disabled]:bg-govuk-red-hover',
          'visited:text-white active:text-white',
        ],
        inverse: [
          'bg-white text-govuk-brand',
          'shadow-govuk-inverse',
          'hover:not-data-[disabled]:bg-govuk-inverse-hover',
          'visited:text-govuk-brand active:text-govuk-brand',
        ],
        start: [
          'bg-govuk-green text-white',
          'shadow-govuk-green',
          'hover:not-data-[disabled]:bg-govuk-green-hover',
          'visited:text-white active:text-white',
          'font-bold text-govuk-start',
          'inline-flex items-center justify-center',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const disabledStyles =
  'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:active:top-0';

const StartIcon = () => (
  <svg
    className='ml-govuk-1 sm:ml-govuk-2 align-middle shrink-0 self-center forced-color-adjust-auto'
    xmlns='http://www.w3.org/2000/svg'
    width='17.5'
    height='19'
    viewBox='0 0 33 40'
    aria-hidden='true'
    focusable='false'
  >
    <path fill='currentColor' d='M0 0h13l20 20-20 20H0l20-20z' />
  </svg>
);

type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>['variant']
>;

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disabled?: boolean;
  focusableWhenDisabled?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

const Button = ({
  className,
  variant = 'default',
  disabled = false,
  focusableWhenDisabled = false,
  children,
  ref,
  ...props
}: ButtonProps) => (
  <BaseButton
    ref={ref}
    disabled={disabled}
    focusableWhenDisabled={focusableWhenDisabled}
    className={cn(buttonVariants({ variant }), disabledStyles, className)}
    {...props}
  >
    {children}
    {variant === 'start' && <StartIcon />}
  </BaseButton>
);

export { Button, buttonVariants, type ButtonProps, type ButtonVariant };
