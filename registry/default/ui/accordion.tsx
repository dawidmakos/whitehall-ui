'use client';

import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface AccordionProps extends Omit<
  React.ComponentProps<typeof BaseAccordion.Root>,
  | 'className'
  | 'value'
  | 'onValueChange'
  | 'multiple'
  | 'loopFocus'
  | 'orientation'
> {
  className?: string;
  showAllSections?: string[];
}

type AccordionSectionProps = React.ComponentProps<typeof BaseAccordion.Item>;

interface AccordionHeadingProps extends Omit<
  React.ComponentProps<typeof BaseAccordion.Trigger>,
  'className'
> {
  className?: string;
  summary?: React.ReactNode;
}

interface AccordionContentProps extends Omit<
  React.ComponentProps<typeof BaseAccordion.Panel>,
  'className'
> {
  className?: string;
}

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    aria-hidden='true'
    focusable='false'
  >
    <circle
      className='fill-none stroke-current group-hover:fill-govuk-black group-hover:stroke-govuk-black group-focus-visible:fill-govuk-black group-focus-visible:stroke-govuk-black'
      cx='10'
      cy='10'
      r='9'
      strokeWidth='1'
    />
    <polyline
      className='fill-none stroke-current group-hover:stroke-govuk-light-grey group-focus-visible:stroke-govuk-yellow'
      points='6.5 8.5 10 12 13.5 8.5'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Accordion = ({
  className,
  children,
  showAllSections,
  defaultValue,
  ...props
}: AccordionProps) => {
  const [openSections, setOpenSections] = useState(defaultValue ?? []);

  const allOpen =
    !!showAllSections?.length &&
    showAllSections.every((section) => openSections.includes(section));

  return (
    <BaseAccordion.Root
      multiple
      hiddenUntilFound
      value={openSections}
      onValueChange={setOpenSections}
      className={cn(
        'mb-govuk-r6 font-govuk text-govuk-body text-govuk-black',
        'border-b border-govuk-mid-grey',
        className,
      )}
      {...props}
    >
      {showAllSections && (
        <div className='pb-govuk-1'>
          <button
            type='button'
            onClick={() => setOpenSections(allOpen ? [] : showAllSections)}
            aria-expanded={allOpen}
            className={cn(
              'group inline-flex items-center',
              'py-govuk-1 border-0 bg-transparent cursor-pointer',
              'font-govuk text-govuk-body text-govuk-link',
              'hover:text-govuk-black hover:bg-govuk-light-grey',
              'focus-visible:govuk-link-focus focus-visible:outline-none',
            )}
          >
            <ChevronIcon
              className={cn('transition-transform', allOpen && 'rotate-180')}
            />
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

const AccordionSection = (props: AccordionSectionProps) => (
  <BaseAccordion.Item {...props} />
);

const AccordionHeading = ({
  className,
  children,
  summary,
  ...props
}: AccordionHeadingProps) => (
  <BaseAccordion.Header render={<h2 />} className='m-0 p-0'>
    <BaseAccordion.Trigger
      className={cn(
        'group w-full',
        'pt-govuk-2 pb-govuk-2 sm:pb-govuk-4 max-sm:data-panel-open:pb-govuk-3',
        'govuk-accordion-button-border',
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
      <span className='sr-only'>, </span>
      {summary && (
        <>
          <span className='block mb-govuk-2'>
            <span className='text-govuk-body text-govuk-black group-focus-visible:govuk-link-focus'>
              {summary}
            </span>
          </span>
          <span className='sr-only'>, </span>
        </>
      )}
      <span className='block mb-govuk-2' data-nosnippet>
        <span className='group-focus-visible:govuk-link-focus inline-flex items-center text-govuk-body text-govuk-link group-hover:text-govuk-black'>
          <ChevronIcon className='align-middle transition-transform group-data-panel-open:rotate-180' />
          <span className='ml-govuk-1 group-data-panel-open:hidden'>
            Show<span className='sr-only'> this section</span>
          </span>
          <span className='ml-govuk-1 hidden group-data-panel-open:inline'>
            Hide<span className='sr-only'> this section</span>
          </span>
        </span>
      </span>
    </BaseAccordion.Trigger>
  </BaseAccordion.Header>
);

const AccordionContent = ({ className, ...props }: AccordionContentProps) => (
  <BaseAccordion.Panel
    className={cn(
      'pt-govuk-3 pb-govuk-6 sm:pb-govuk-8 [&[hidden]]:py-0 *:last:mb-0',
      className,
    )}
    {...props}
  />
);

export {
  Accordion,
  AccordionSection,
  AccordionHeading,
  AccordionContent,
  type AccordionProps,
  type AccordionSectionProps,
  type AccordionHeadingProps,
  type AccordionContentProps,
};
