import { useId, useRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

interface FileUploadProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  ref?: React.Ref<HTMLInputElement>;
  disabled?: boolean;
  error?: boolean;
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
    'focus:border-govuk-black focus:bg-govuk-light-grey',
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
        false: '',
      },
      error: {
        true: 'border-govuk-error',
        false: '',
      },
    },
    defaultVariants: {
      empty: true,
      dragging: false,
      error: false,
    },
  },
);

const statusStyles = [
  'block mb-govuk-2 px-govuk-2 py-govuk-3',
  'text-left wrap-break-word font-govuk text-govuk-body',
];

const pseudoButtonStyles = [
  'inline-block leading-none',
  'px-govuk-button-x pt-govuk-button-pt pb-govuk-button-pb',
  'mr-govuk-2 mb-govuk-file-upload-pseudo-mb',
  'border-2 border-transparent',
  'font-govuk text-govuk-body',
  'bg-govuk-light-grey text-govuk-black shadow-govuk-light-grey',
  'group-hover:bg-govuk-mid-grey',
  'group-focus:bg-govuk-yellow group-focus:shadow-govuk-yellow',
];

const instructionStyles = [
  'inline-block mt-govuk-file-upload-instruction-mt mb-0',
  'text-left font-govuk text-govuk-body text-govuk-black',
];

const FileUpload = ({
  className,
  id,
  name,
  disabled = false,
  error = false,
  multiple,
  chooseFileButtonText = 'Choose file',
  dropInstructionText = 'or drop file',
  noFileChosenText = 'No file chosen',
  onChange,
  ref,
  ...props
}: FileUploadProps) => {
  const internalRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState(noFileChosenText);
  const [empty, setEmpty] = useState(true);
  const [dragging, setDragging] = useState(false);

  const generatedId = useId();
  const buttonId = id ?? generatedId;
  const inputId = `${buttonId}-input`;

  const setRefs = (node: HTMLInputElement | null) => {
    internalRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  const updateFromFiles = (files: FileList | null) => {
    if (!files || files.length === 0) {
      setStatus(noFileChosenText);
      setEmpty(true);
    } else if (files.length === 1) {
      setStatus(files[0].name);
      setEmpty(false);
    } else {
      setStatus(`${files.length} files chosen`);
      setEmpty(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFromFiles(event.target.files);
    onChange?.(event);
  };

  const handleDrop = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDragging(false);
    if (disabled) {
      return;
    }
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0 && internalRef.current) {
      internalRef.current.files = droppedFiles;
      updateFromFiles(droppedFiles);
      internalRef.current.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

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
        disabled={disabled}
        onClick={() => internalRef.current?.click()}
        onDragOver={(event) => event.preventDefault()}
        onDragEnter={() => !disabled && setDragging(true)}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={fileUploadButtonVariants({ empty, dragging, error })}
      >
        <span
          aria-live='polite'
          className={cn(
            statusStyles,
            empty
              ? 'bg-govuk-tag-blue-bg text-govuk-black'
              : 'bg-govuk-brand text-white',
          )}
        >
          {status}
        </span>
        <span className='flex flex-wrap items-baseline'>
          <span className={cn(pseudoButtonStyles)}>{chooseFileButtonText}</span>
          <span className={cn(instructionStyles)}>{dropInstructionText}</span>
        </span>
      </button>
      <input
        ref={setRefs}
        id={inputId}
        name={name}
        type='file'
        multiple={multiple}
        disabled={disabled}
        hidden
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export { FileUpload, fileUploadButtonVariants, type FileUploadProps };
