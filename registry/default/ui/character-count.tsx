import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/ui/textarea';

type CountMode = 'characters' | 'words';

interface CharacterCountProps {
  id: string;
  maxCount: number;
  mode?: CountMode;
  threshold?: number;
  rows?: number;
  defaultValue?: string;
  value?: string;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  textareaClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  ref?: React.Ref<HTMLTextAreaElement>;
  formatMessage?: (remaining: number, mode: CountMode) => string;
}

interface CharacterCountMessageProps extends React.ComponentPropsWithoutRef<'div'> {
  ref?: React.Ref<HTMLDivElement>;
}

const countWords = (text: string): number => {
  const trimmed = text.trim();
  if (trimmed === '') return 0;
  return trimmed.split(/\s+/).length;
};

const defaultFormatMessage = (remaining: number, mode: CountMode): string => {
  const unit = mode === 'words' ? 'words' : 'characters';
  if (remaining >= 0) {
    return `You have ${remaining} ${unit} remaining`;
  }
  const over = Math.abs(remaining);
  return `You have ${over} ${unit} too many`;
};

const getCount = (text: string, mode: CountMode): number => {
  if (mode === 'words') return countWords(text);
  return text.length;
};

const CharacterCount = ({
  id,
  maxCount,
  mode = 'characters',
  threshold = 0,
  rows = 5,
  defaultValue = '',
  value,
  error = false,
  disabled = false,
  className,
  textareaClassName,
  onChange,
  name,
  ref,
  formatMessage = defaultFormatMessage,
}: CharacterCountProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value ?? internalValue;
  const currentCount = getCount(currentValue, mode);
  const remaining = maxCount - currentCount;
  const isOverLimit = remaining < 0;
  const thresholdValue = Math.ceil((maxCount * threshold) / 100);
  const showMessage = threshold === 0 || currentCount >= thresholdValue;
  const message = formatMessage(remaining, mode);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    },
    [value, onChange],
  );

  return (
    <div className={cn('font-govuk mb-govuk-6', className)}>
      <Textarea
        ref={ref}
        id={id}
        name={name}
        rows={rows}
        value={currentValue}
        onChange={handleChange}
        error={error || isOverLimit}
        disabled={disabled}
        aria-describedby={`${id}-info`}
        className={cn('mb-govuk-1', textareaClassName)}
      />
      <CharacterCountMessage
        id={`${id}-info`}
        className={cn(
          isOverLimit && 'text-govuk-error font-bold',
          !showMessage && 'invisible',
        )}
      >
        {message}
      </CharacterCountMessage>
    </div>
  );
};

const CharacterCountMessage = ({
  className,
  children,
  ref,
  ...props
}: CharacterCountMessageProps) => (
  <div
    ref={ref}
    className={cn(
      'font-govuk text-govuk-body text-govuk-dark-grey',
      'mt-0 mb-0 tabular-nums',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export { CharacterCount, CharacterCountMessage };

export type { CharacterCountProps, CharacterCountMessageProps };
