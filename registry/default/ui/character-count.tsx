'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Textarea, type TextareaProps } from '@/ui/textarea';

type CountMode = 'characters' | 'words';

interface CharacterCountProps extends Omit<
  TextareaProps,
  'value' | 'defaultValue'
> {
  id: string;
  maxCount: number;
  mode?: CountMode;
  threshold?: number;
  value?: string;
  defaultValue?: string;
  textareaClassName?: string;
  descriptionText?: string;
  formatMessage?: (remaining: number, mode: CountMode) => string;
}

type CharacterCountMessageProps = React.ComponentProps<'div'>;

const countText = (text: string, mode: CountMode) =>
  Array.from(
    new Intl.Segmenter(undefined, {
      granularity: mode === 'words' ? 'word' : 'grapheme',
    }).segment(text),
  ).filter((segment) => mode === 'characters' || segment.isWordLike).length;

const defaultFormatMessage = (remaining: number, mode: CountMode) => {
  const count = Math.abs(remaining);
  const noun = mode === 'words' ? 'word' : 'character';
  const unit = count === 1 ? noun : `${noun}s`;
  return remaining < 0
    ? `You have ${count} ${unit} too many`
    : `You have ${count} ${unit} remaining`;
};

const CharacterCount = ({
  id,
  maxCount,
  mode = 'characters',
  threshold = 0,
  defaultValue = '',
  value,
  error,
  className,
  textareaClassName,
  descriptionText = `You can enter up to ${maxCount} ${mode}`,
  onChange,
  formatMessage = defaultFormatMessage,
  'aria-describedby': ariaDescribedBy,
  ...props
}: CharacterCountProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [announcement, setAnnouncement] = useState('');
  const currentValue = value ?? internalValue;
  const remaining = maxCount - countText(currentValue, mode);
  const isOverLimit = remaining < 0;
  const showMessage =
    maxCount - remaining >= Math.ceil((maxCount * threshold) / 100);
  const message = formatMessage(remaining, mode);

  useEffect(() => {
    const timeout = setTimeout(() => setAnnouncement(message), 1000);
    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <div className={cn('font-govuk mb-govuk-r6', className)}>
      <Textarea
        id={id}
        value={currentValue}
        onChange={(event) => {
          if (value === undefined) setInternalValue(event.target.value);
          onChange?.(event);
        }}
        error={error || isOverLimit}
        aria-describedby={`${ariaDescribedBy ?? ''} ${id}-info`.trim()}
        className={cn('mb-govuk-1', textareaClassName)}
        {...props}
      />
      <div id={`${id}-info`} className='sr-only'>
        {descriptionText}
      </div>
      <CharacterCountMessage
        aria-hidden='true'
        className={cn(
          isOverLimit && 'text-govuk-error font-bold',
          !showMessage && 'invisible',
        )}
      >
        {message}
      </CharacterCountMessage>
      <div className='sr-only' aria-live='polite' aria-hidden={!showMessage}>
        {announcement}
      </div>
    </div>
  );
};

const CharacterCountMessage = ({
  className,
  ...props
}: CharacterCountMessageProps) => (
  <div
    className={cn(
      'font-govuk text-govuk-body text-govuk-dark-grey',
      'mt-0 mb-0 tabular-nums',
      className,
    )}
    {...props}
  />
);

export {
  CharacterCount,
  CharacterCountMessage,
  type CharacterCountProps,
  type CharacterCountMessageProps,
};
