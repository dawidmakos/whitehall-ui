'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { cn } from '@/lib/utils';
import { TextInput, type TextInputProps } from '@/ui/text-input';
import { Button } from '@/ui/button';

interface PasswordInputProps extends Omit<
  TextInputProps,
  'type' | 'width' | 'prefix' | 'suffix'
> {
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
  disabled,
  showPasswordText = 'Show',
  hidePasswordText = 'Hide',
  showPasswordAriaLabel = 'Show password',
  hidePasswordAriaLabel = 'Hide password',
  passwordShownAnnouncement = 'Your password is visible',
  passwordHiddenAnnouncement = 'Your password is hidden',
  ...props
}: PasswordInputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [shown, setShown] = useState<boolean>();
  const toggleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const form = toggleRef.current?.closest('form');
    const hide = () => flushSync(() => setShown((prev) => prev && false));
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) hide();
    };
    form?.addEventListener('submit', hide);
    globalThis.addEventListener('pageshow', handlePageShow);
    return () => {
      form?.removeEventListener('submit', hide);
      globalThis.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return (
    <div className='flex items-start'>
      <TextInput
        id={inputId}
        type={shown ? 'text' : 'password'}
        disabled={disabled}
        spellCheck={false}
        autoCapitalize='none'
        autoComplete='current-password'
        className={cn('flex-auto', className)}
        {...props}
      />
      <Button
        ref={toggleRef}
        type='button'
        variant='secondary'
        disabled={disabled}
        aria-controls={inputId}
        aria-label={shown ? hidePasswordAriaLabel : showPasswordAriaLabel}
        onClick={() => setShown((prev) => !prev)}
        className={cn(
          'mt-0 mb-0 ml-govuk-1',
          'w-24 sm:w-24 shrink-0 grow-0',
          'whitespace-nowrap',
        )}
      >
        {shown ? hidePasswordText : showPasswordText}
      </Button>
      <span className='sr-only' aria-live='polite'>
        {shown !== undefined &&
          (shown ? passwordShownAnnouncement : passwordHiddenAnnouncement)}
      </span>
    </div>
  );
};

export { PasswordInput, type PasswordInputProps };
