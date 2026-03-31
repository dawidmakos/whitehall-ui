import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

type AccordionValue = React.ComponentProps<typeof BaseAccordion.Root>['value'];

interface AccordionProps extends Omit<
  React.ComponentProps<typeof BaseAccordion.Root>,
  'className'
> {
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
  showAllSections?: string[];
}

interface AccordionSectionProps extends Omit<
  React.ComponentProps<typeof BaseAccordion.Item>,
  'className'
> {
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
}

interface AccordionHeadingProps extends Omit<
  React.ComponentProps<typeof BaseAccordion.Trigger>,
  'className'
> {
  ref?: React.Ref<HTMLButtonElement>;
  className?: string;
  summary?: React.ReactNode;
}

interface AccordionContentProps extends Omit<
  React.ComponentProps<typeof BaseAccordion.Panel>,
  'className'
> {
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
}

const Accordion = ({
  className,
  ref,
  children,
  showAllSections,
  defaultValue,
  ...props
}: AccordionProps) => {
  const [openSections, setOpenSections] = useState<AccordionValue>(
    (defaultValue as string[]) ?? [],
  );

  const allOpen =
    showAllSections !== undefined &&
    showAllSections.length > 0 &&
    showAllSections.every((v) => (openSections as string[]).includes(v));

  const handleToggleAll = useCallback(() => {
    if (allOpen) {
      setOpenSections([]);
    } else {
      setOpenSections(showAllSections ?? []);
    }
  }, [allOpen, showAllSections]);

  return (
    <BaseAccordion.Root
      ref={ref}
      multiple
      value={openSections}
      onValueChange={setOpenSections}
      className={cn(
        'mb-govuk-6 font-govuk text-govuk-body text-govuk-black',
        'border-b border-govuk-mid-grey',
        className,
      )}
      {...props}
    >
      {showAllSections && (
        <div className='pb-govuk-1'>
          <button
            type='button'
            onClick={handleToggleAll}
            aria-expanded={allOpen}
            className={cn(
              'group inline-flex items-center',
              'py-govuk-1 border-0 bg-transparent cursor-pointer',
              'font-govuk text-govuk-body text-govuk-brand',
              'hover:text-govuk-black hover:bg-govuk-light-grey',
              'focus-visible:govuk-link-focus focus-visible:outline-none',
            )}
          >
            <svg
              className={cn(
                'transition-transform',
                allOpen ? '' : 'rotate-180',
              )}
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 20 20'
              aria-hidden='true'
              focusable='false'
            >
              <circle
                className='fill-none stroke-current group-hover:fill-govuk-black group-hover:stroke-govuk-black'
                cx='10'
                cy='10'
                r='9'
                strokeWidth='1'
              />
              <polyline
                className='fill-none stroke-current group-hover:stroke-govuk-light-grey'
                points='6.5 8.5 10 12 13.5 8.5'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span className='ml-govuk-1'>
              {allOpen ? 'Hide all sections' : 'Show all sections'}
            </span>
          </button>
        </div>
      )}
      {children}
    </BaseAccordion.Root>
  );
};

const AccordionSection = ({
  className,
  ref,
  children,
  ...props
}: AccordionSectionProps) => (
  <BaseAccordion.Item ref={ref} className={cn(className)} {...props}>
    {children}
  </BaseAccordion.Item>
);

const AccordionHeading = ({
  className,
  ref,
  children,
  summary,
  ...props
}: AccordionHeadingProps) => (
  <BaseAccordion.Header render={<h2 />} className='m-0 p-0'>
    <BaseAccordion.Trigger
      ref={ref}
      className={cn(
        'group w-full',
        'pt-govuk-2 pb-govuk-2 govuk-accordion-button-border',
        'bg-transparent cursor-pointer text-left',
        'hover:bg-govuk-light-grey',
        'focus-visible:outline-none',
        className,
      )}
      {...props}
    >
      <span className='block mb-govuk-2'>
        <span className='text-govuk-heading-m font-bold text-govuk-black group-focus-visible:govuk-link-focus'>
          {children}
        </span>
      </span>
      {summary && (
        <span className='block mb-govuk-2'>
          <span className='text-govuk-body text-govuk-dark-grey group-focus-visible:govuk-link-focus'>
            {summary}
          </span>
        </span>
      )}
      <span className='block mb-govuk-2'>
        <span className='group-focus-visible:govuk-link-focus inline-flex items-center text-govuk-body text-govuk-brand group-hover:text-govuk-black'>
          <svg
            className='govuk-accordion-chevron transition-transform group-data-panel-open:rotate-180'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 20 20'
            aria-hidden='true'
            focusable='false'
          >
            <circle
              className='fill-none stroke-current group-hover:fill-govuk-black group-hover:stroke-govuk-black'
              cx='10'
              cy='10'
              r='9'
              strokeWidth='1'
            />
            <polyline
              className='fill-none stroke-current group-hover:stroke-govuk-light-grey'
              points='6.5 8.5 10 12 13.5 8.5'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='ml-govuk-1 group-data-panel-open:hidden'>Show</span>
          <span className='ml-govuk-1 hidden group-data-panel-open:inline'>
            Hide
          </span>
        </span>
      </span>
    </BaseAccordion.Trigger>
  </BaseAccordion.Header>
);

const AccordionContent = ({
  className,
  ref,
  children,
  ...props
}: AccordionContentProps) => (
  <BaseAccordion.Panel
    ref={ref}
    className={cn('pt-govuk-3 pb-govuk-8 *:last:mb-0', className)}
    {...props}
  >
    {children}
  </BaseAccordion.Panel>
);

export { Accordion, AccordionSection, AccordionHeading, AccordionContent };
export type {
  AccordionProps,
  AccordionSectionProps,
  AccordionHeadingProps,
  AccordionContentProps,
};
