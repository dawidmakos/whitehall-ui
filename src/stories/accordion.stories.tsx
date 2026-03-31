import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Accordion,
  AccordionSection,
  AccordionHeading,
  AccordionContent,
} from '@/ui/accordion';
import { InsetText } from '@/ui/inset-text';
import { Link } from '@/ui/link';
import { Tag } from '@/ui/tag';
import { WarningText } from '@/ui/warning-text';
import {
  SummaryList,
  SummaryListRow,
  SummaryListKey,
  SummaryListValue,
} from '@/ui/summary-list';

const meta = {
  title: 'Whitehall-UI/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI accordion component. Based on the [GOV.UK Design System Accordion](https://design-system.service.gov.uk/components/accordion/). Lets users show and hide sections of related content on a page.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionSection value='writing-well'>
        <AccordionHeading>Writing well for the web</AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Writing well for the web.
          </p>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            <Link href='#'>A link inside the accordion</Link>
          </p>
        </AccordionContent>
      </AccordionSection>
      <AccordionSection value='writing-specialists'>
        <AccordionHeading>Writing well for specialists</AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Writing well for specialists.
          </p>
        </AccordionContent>
      </AccordionSection>
      <AccordionSection value='know-audience'>
        <AccordionHeading>Know your audience</AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Know your audience.
          </p>
        </AccordionContent>
      </AccordionSection>
      <AccordionSection value='how-people-read'>
        <AccordionHeading>How people read</AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for How people read.
          </p>
        </AccordionContent>
      </AccordionSection>
    </Accordion>
  ),
};

export const WithSummary: Story = {
  render: () => (
    <Accordion>
      <AccordionSection value='understanding-agile'>
        <AccordionHeading summary='Agile approaches to building and running services'>
          Understanding agile
        </AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            Agile is a way of working that encourages teams to build quickly,
            test what they have built and iterate their work based on regular
            feedback.
          </p>
        </AccordionContent>
      </AccordionSection>
      <AccordionSection value='working-with-agile'>
        <AccordionHeading summary='How to apply agile methods in your team'>
          Working with agile methods
        </AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            You can apply agile methods to a wide range of projects. It works
            best when teams are empowered to make decisions and respond to
            change quickly.
          </p>
        </AccordionContent>
      </AccordionSection>
      <AccordionSection value='agile-tools'>
        <AccordionHeading summary='Practical tools you can use right now'>
          Agile tools and techniques
        </AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            There are many tools and techniques that come from agile practice,
            including standups, retrospectives, and user story mapping.
          </p>
        </AccordionContent>
      </AccordionSection>
    </Accordion>
  ),
};

export const WithSectionOpen: Story = {
  render: () => (
    <Accordion defaultValue={['eligibility']}>
      <AccordionSection value='eligibility'>
        <AccordionHeading>Eligibility</AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            You may be eligible if you meet the following criteria. Check the
            full guidance before applying.
          </p>
          <InsetText>
            You must have been a UK resident for at least 3 years to apply.
          </InsetText>
        </AccordionContent>
      </AccordionSection>
      <AccordionSection value='how-to-apply'>
        <AccordionHeading>How to apply</AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            You can <Link href='#'>apply online</Link> or by post. Online
            applications are usually processed faster.
          </p>
        </AccordionContent>
      </AccordionSection>
      <AccordionSection value='after-applying'>
        <AccordionHeading>After you apply</AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            You will receive a confirmation email within 24 hours. Processing
            typically takes 8 weeks.
          </p>
        </AccordionContent>
      </AccordionSection>
    </Accordion>
  ),
};

export const WithShowAll: Story = {
  render: () => (
    <Accordion
      showAllSections={[
        'writing-well',
        'writing-specialists',
        'know-audience',
        'how-people-read',
      ]}
    >
      <AccordionSection value='writing-well'>
        <AccordionHeading>Writing well for the web</AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Writing well for the web.
          </p>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            <Link href='#'>A link inside the accordion</Link>
          </p>
        </AccordionContent>
      </AccordionSection>
      <AccordionSection value='writing-specialists'>
        <AccordionHeading>Writing well for specialists</AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Writing well for specialists.
          </p>
        </AccordionContent>
      </AccordionSection>
      <AccordionSection value='know-audience'>
        <AccordionHeading>Know your audience</AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Know your audience.
          </p>
        </AccordionContent>
      </AccordionSection>
      <AccordionSection value='how-people-read'>
        <AccordionHeading>How people read</AccordionHeading>
        <AccordionContent>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for How people read.
          </p>
        </AccordionContent>
      </AccordionSection>
    </Accordion>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Accordion
      showAllSections={[
        'personal-details',
        'important-notices',
        'related-links',
      ]}
    >
      <AccordionSection value='personal-details'>
        <AccordionHeading summary='Your submitted personal information'>
          Personal details
        </AccordionHeading>
        <AccordionContent>
          <SummaryList>
            <SummaryListRow>
              <SummaryListKey>Name</SummaryListKey>
              <SummaryListValue>Sarah Phillips</SummaryListValue>
            </SummaryListRow>
            <SummaryListRow>
              <SummaryListKey>Date of birth</SummaryListKey>
              <SummaryListValue>5 January 1978</SummaryListValue>
            </SummaryListRow>
            <SummaryListRow>
              <SummaryListKey>Status</SummaryListKey>
              <SummaryListValue>
                <Tag colour='green'>Verified</Tag>
              </SummaryListValue>
            </SummaryListRow>
            <SummaryListRow>
              <SummaryListKey>National Insurance number</SummaryListKey>
              <SummaryListValue>QQ 12 34 56 C</SummaryListValue>
            </SummaryListRow>
          </SummaryList>
        </AccordionContent>
      </AccordionSection>
      <AccordionSection value='important-notices'>
        <AccordionHeading>Important notices</AccordionHeading>
        <AccordionContent>
          <WarningText>
            You must report changes to your circumstances within 5 working days.
          </WarningText>
          <InsetText>
            If you have already reported a change, allow up to 2 weeks for it to
            be processed before contacting us again.
          </InsetText>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            For urgent queries, call the helpline on 0800 123 4567. Lines are
            open Monday to Friday, 8am to 6pm.
          </p>
        </AccordionContent>
      </AccordionSection>
      <AccordionSection value='related-links'>
        <AccordionHeading>Related links and guidance</AccordionHeading>
        <AccordionContent>
          <ul className='font-govuk text-govuk-body text-govuk-black list-disc pl-govuk-4 mb-govuk-4'>
            <li className='mb-govuk-2'>
              <Link href='#'>Check your benefit entitlement</Link>
            </li>
            <li className='mb-govuk-2'>
              <Link href='#'>Report a change of address</Link>
            </li>
            <li className='mb-govuk-2'>
              <Link href='#'>Appeal a decision</Link>
            </li>
            <li className='mb-govuk-2'>
              <Link href='#'>Contact us</Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionSection>
    </Accordion>
  ),
};
