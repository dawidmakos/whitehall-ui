'use client';

import { useId, useRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import { cn, mergeRefs } from '@/lib/utils';

interface FileUploadProps extends Omit<React.ComponentProps<'input'>, 'type'> {
  error?: boolean;
  enhanced?: boolean;
  chooseFileButtonText?: string;
  dropInstructionText?: string;
  noFileChosenText?: string;
}

const fileUploadButtonVariants = cva(
  [
    'group block w-full text-left cursor-pointer appearance-none',
    'font-govuk text-govuk-body text-govuk-black',
    'p-govuk-file-upload sm:p-govuk-file-upload-lg',
    'border-2 bg-white',
    'focus:outline-3 focus:outline-govuk-yellow focus:outline-offset-0',
    'focus:border-solid focus:border-govuk-black focus:bg-govuk-light-grey',
    'active:border-solid',
    'focus:inset-ring-2 focus:inset-ring-govuk-black',
    'disabled:opacity-50 disabled:pointer-events-none',
  ],
  {
    variants: {
      empty: {
        true: [
          'border-dashed border-govuk-grey',
          'hover:border-govuk-file-upload-hover-border hover:bg-govuk-light-grey',
        ],
        false: [
          'border-solid border-govuk-mid-grey',
          'hover:border-dashed hover:border-govuk-file-upload-hover-border',
        ],
      },
      dragging: {
        true: 'border-solid border-govuk-black bg-govuk-light-grey',
      },
      error: {
        true: 'border-solid border-govuk-error',
      },
    },
    defaultVariants: {
      empty: true,
    },
  },
);

const FileUpload = ({
  className,
  id,
  disabled,
  error,
  enhanced = true,
  chooseFileButtonText = 'Choose file',
  dropInstructionText = 'or drop file',
  noFileChosenText = 'No file chosen',
  onChange,
  ref,
  'aria-describedby': ariaDescribedBy,
  ...props
}: FileUploadProps) => {
  const internalRef = useRef<HTMLInputElement>(null);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [dragging, setDragging] = useState(false);

  const generatedId = useId();
  const buttonId = id ?? generatedId;
  const statusId = `${buttonId}-status`;

  const empty = fileNames.length === 0;
  const status =
    fileNames.length > 1
      ? `${fileNames.length} files chosen`
      : (fileNames[0] ?? noFileChosenText);

  if (!enhanced) {
    return (
      <input
        ref={ref}
        id={id}
        type='file'
        disabled={disabled}
        onChange={onChange}
        aria-describedby={ariaDescribedBy}
        className={cn(
          'max-w-full -ml-govuk-1 p-govuk-1',
          'font-govuk text-govuk-body text-govuk-black',
          'file:font-govuk file:text-govuk-body file:text-inherit',
          'file:mr-govuk-2 file:px-govuk-2 file:py-px file:cursor-pointer',
          'file:border file:border-govuk-dark-grey file:rounded-xs',
          'file:bg-govuk-light-grey hover:file:bg-govuk-mid-grey',
          'focus:outline-3 focus:outline-govuk-yellow',
          'focus:inset-ring-4 focus:inset-ring-govuk-black',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className,
        )}
        {...props}
      />
    );
  }

  return (
    <div
      className={cn(
        'relative block',
        disabled && 'cursor-not-allowed',
        className,
      )}
    >
      <button
        type='button'
        id={buttonId}
        aria-describedby={`${statusId} ${ariaDescribedBy ?? ''}`.trim()}
        disabled={disabled}
        onClick={() => internalRef.current?.click()}
        onDragOver={(event) => event.preventDefault()}
        onDragEnter={() => !disabled && setDragging(true)}
        onDragLeave={(event) => {
          if (
            event.relatedTarget instanceof Node &&
            event.currentTarget.contains(event.relatedTarget)
          ) {
            return;
          }
          setDragging(false);
        }}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          const input = internalRef.current;
          const { files } = event.dataTransfer;
          if (
            disabled ||
            !input ||
            files.length === 0 ||
            (!input.multiple && files.length > 1)
          ) {
            return;
          }
          input.files = files;
          input.dispatchEvent(new Event('change', { bubbles: true }));
        }}
        className={cn(fileUploadButtonVariants({ empty, dragging, error }))}
      >
        <span
          id={statusId}
          aria-live='polite'
          className={cn(
            'block mb-govuk-2 px-govuk-2 py-govuk-3',
            'text-left wrap-break-word font-govuk text-govuk-body',
            empty
              ? 'bg-govuk-tag-blue-bg text-govuk-black'
              : 'bg-govuk-brand text-white',
          )}
        >
          {status}
        </span>
        <span className='flex flex-wrap items-baseline'>
          <span
            className={cn(
              'inline-block',
              'px-govuk-button-x pt-govuk-button-pt pb-govuk-button-pb',
              'mr-govuk-2 mb-govuk-file-upload-pseudo-mb',
              'border-2 border-transparent',
              'font-govuk text-govuk-body leading-none',
              'bg-govuk-light-grey text-govuk-black shadow-govuk-light-grey',
              'group-hover:bg-govuk-mid-grey',
              'group-focus:bg-govuk-yellow group-focus:shadow-govuk-yellow',
            )}
          >
            {chooseFileButtonText}
          </span>
          <span
            className={cn(
              'inline-block mt-govuk-file-upload-instruction-mt mb-0',
              'text-left font-govuk text-govuk-body text-govuk-black',
            )}
          >
            {dropInstructionText}
          </span>
        </span>
      </button>
      <input
        ref={mergeRefs(internalRef, ref)}
        id={`${buttonId}-input`}
        type='file'
        disabled={disabled}
        hidden
        onChange={(event) => {
          setFileNames(
            Array.from(event.target.files ?? [], (file) => file.name),
          );
          onChange?.(event);
        }}
        {...props}
      />
    </div>
  );
};

export { FileUpload, fileUploadButtonVariants, type FileUploadProps };
