import { Select as SelectPrimitive } from '@base-ui/react/select';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const selectTriggerVariants = cva(
  [
    'box-border',
    'max-w-full',
    'h-10',
    'py-1.25 pr-1.25 pl-2',
    'border-2 border-govuk-black',
    'rounded-none',
    'appearance-none',
    'text-govuk-body leading-[1.25] font-normal font-govuk text-govuk-black',
    'bg-white',
    'inline-flex items-center',
    'cursor-pointer',
    'focus:outline-3 focus:outline-govuk-yellow focus:outline-offset-0',
    'focus:inset-ring-2 focus:inset-ring-govuk-black',
    'data-popup-open:outline-3 data-popup-open:outline-govuk-yellow data-popup-open:outline-offset-0',
    'data-popup-open:inset-ring-2 data-popup-open:inset-ring-govuk-black',
    'data-disabled:opacity-50 data-disabled:cursor-not-allowed',
  ],
  {
    variants: {
      error: {
        true: 'border-govuk-error focus:border-govuk-black',
        false: '',
      },
    },
    defaultVariants: {
      error: false,
    },
  },
);

interface SelectItem {
  value: string;
  label: string;
}

interface SelectProps {
  children: React.ReactNode;
  className?: string;
  error?: boolean;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string | null) => void;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  items?: SelectItem[];
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

const Select = ({
  children,
  className,
  error = false,
  placeholder,
  defaultValue,
  value,
  onValueChange,
  disabled,
  name,
  required,
  items,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: SelectProps) => (
  <SelectPrimitive.Root
    defaultValue={defaultValue}
    value={value}
    onValueChange={onValueChange}
    disabled={disabled}
    name={name}
    required={required}
    items={items}
  >
    <SelectPrimitive.Trigger
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn(selectTriggerVariants({ error }), className)}
    >
      <span className='relative flex-1 text-left'>
        <SelectPrimitive.Value placeholder={placeholder} />
        {items && (
          <span
            aria-hidden='true'
            className='invisible block h-0 overflow-hidden'
          >
            {items.map((item) => (
              <span key={item.value} className='block whitespace-nowrap'>
                {item.label}
              </span>
            ))}
          </span>
        )}
      </span>
      <SelectPrimitive.Icon className='ml-govuk-1 flex-none'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          aria-hidden='true'
        >
          <path d='M4 6L8 10L12 6' stroke='currentColor' strokeWidth='2' />
        </svg>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        alignItemWithTrigger={false}
        side='bottom'
        align='start'
        sideOffset={-2}
        collisionPadding={0}
        positionMethod='fixed'
        className='z-50'
      >
        <SelectPrimitive.Popup
          className={cn(
            'w-anchor box-border',
            'border-2 border-govuk-black',
            'max-h-60 overflow-y-auto',
            'bg-white',
            'outline-none',
          )}
        >
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
);

interface SelectItemProps {
  children: React.ReactNode;
  className?: string;
  value: string;
  label?: string;
  disabled?: boolean;
}

const SelectItem = ({
  children,
  className,
  value,
  label,
  disabled,
  ...props
}: SelectItemProps) => (
  <SelectPrimitive.Item
    value={value}
    label={label ?? (typeof children === 'string' ? children : undefined)}
    disabled={disabled}
    className={cn(
      'py-govuk-1 pr-govuk-1 pl-2',
      'text-govuk-body font-govuk text-govuk-black',
      'cursor-pointer select-none',
      'outline-none',
      'data-highlighted:bg-govuk-brand data-highlighted:text-white',
      'data-disabled:opacity-50 data-disabled:cursor-not-allowed',
      className,
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);

export {
  Select,
  SelectItem,
  selectTriggerVariants,
  type SelectProps,
  type SelectItemProps,
};
