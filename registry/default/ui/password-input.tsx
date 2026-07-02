import { useId, useState } from 'react';
import { cn } from '@/lib/utils';
import { TextInput } from '@/ui/text-input';
import { Button } from '@/ui/button';

interface PasswordInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'width'
> {
  ref?: React.Ref<HTMLInputElement>;
  error?: boolean;
  disabled?: boolean;
  showPasswordText?: string;
  hidePasswordText?: string;
  showPasswordAriaLabel?: string;
  hidePasswordAriaLabel?: string;
  passwordShownAnnouncement?: string;
  passwordHiddenAnnouncement?: string;
}

const PasswordInput = ({
  className,
  id,
  error = false,
  disabled = false,
  autoComplete = 'current-password',
  showPasswordText = 'Show',
  hidePasswordText = 'Hide',
  showPasswordAriaLabel = 'Show password',
  hidePasswordAriaLabel = 'Hide password',
  passwordShownAnnouncement = 'Your password is shown',
  passwordHiddenAnnouncement = 'Your password is hidden',
  ref,
  ...props
}: PasswordInputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [shown, setShown] = useState(false);

  return (
    <div className='flex items-start'>
      <TextInput
        ref={ref}
        id={inputId}
        type={shown ? 'text' : 'password'}
        error={error}
        disabled={disabled}
        spellCheck={false}
        autoCapitalize='none'
        autoComplete={autoComplete}
        className={cn('flex-auto', className)}
        {...props}
      />
      <Button
        type='button'
        variant='secondary'
        disabled={disabled}
        aria-controls={inputId}
        aria-label={shown ? hidePasswordAriaLabel : showPasswordAriaLabel}
        onClick={() => setShown((prev) => !prev)}
        className={cn(
          'mt-0 mb-0 ml-govuk-1',
          'w-24 sm:w-24 shrink-0 grow-0',
          'leading-none whitespace-nowrap',
        )}
      >
        {shown ? hidePasswordText : showPasswordText}
      </Button>
      <span className='sr-only' aria-live='polite'>
        {shown ? passwordShownAnnouncement : passwordHiddenAnnouncement}
      </span>
    </div>
  );
};

export { PasswordInput, type PasswordInputProps };
