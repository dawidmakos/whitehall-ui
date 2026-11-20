import type { Meta, StoryObj } from '@storybook/react-vite';
import * as Accordion from '@/ui/accordion';
import { InsetText } from '@/ui/inset-text';
import { Link } from '@/ui/link';
import { Tag } from '@/ui/tag';
import { WarningText } from '@/ui/warning-text';
import * as SummaryList from '@/ui/summary-list';

const meta = {
  title: 'Whitehall-UI/Accordion',
  component: Accordion.Root,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI accordion component. Based on the [GOV.UK Design System Accordion](https://design-system.service.gov.uk/components/accordion/). Lets users show and hide sections of related content on a page.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion.Root>
      <Accordion.Section value='writing-well'>
        <Accordion.Heading>Writing well for the web</Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Writing well for the web.
          </p>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            <Link href='#'>A link inside the accordion</Link>
          </p>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section value='writing-specialists'>
        <Accordion.Heading>Writing well for specialists</Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Writing well for specialists.
          </p>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section value='know-audience'>
        <Accordion.Heading>Know your audience</Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Know your audience.
          </p>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section value='how-people-read'>
        <Accordion.Heading>How people read</Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for How people read.
          </p>
        </Accordion.Content>
      </Accordion.Section>
    </Accordion.Root>
  ),
};

export const WithSummary: Story = {
  render: () => (
    <Accordion.Root>
      <Accordion.Section value='understanding-agile'>
        <Accordion.Heading summary='Agile approaches to building and running services'>
          Understanding agile
        </Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            Agile is a way of working that encourages teams to build quickly,
            test what they have built and iterate their work based on regular
            feedback.
          </p>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section value='working-with-agile'>
        <Accordion.Heading summary='How to apply agile methods in your team'>
          Working with agile methods
        </Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            You can apply agile methods to a wide range of projects. It works
            best when teams are empowered to make decisions and respond to
            change quickly.
          </p>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section value='agile-tools'>
        <Accordion.Heading summary='Practical tools you can use right now'>
          Agile tools and techniques
        </Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            There are many tools and techniques that come from agile practice,
            including standups, retrospectives, and user story mapping.
          </p>
        </Accordion.Content>
      </Accordion.Section>
    </Accordion.Root>
  ),
};

export const WithSectionOpen: Story = {
  render: () => (
    <Accordion.Root defaultValue={['eligibility']}>
      <Accordion.Section value='eligibility'>
        <Accordion.Heading>Eligibility</Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            You may be eligible if you meet the following criteria. Check the
            full guidance before applying.
          </p>
          <InsetText>
            You must have been a UK resident for at least 3 years to apply.
          </InsetText>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section value='how-to-apply'>
        <Accordion.Heading>How to apply</Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            You can <Link href='#'>apply online</Link> or by post. Online
            applications are usually processed faster.
          </p>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section value='after-applying'>
        <Accordion.Heading>After you apply</Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            You will receive a confirmation email within 24 hours. Processing
            typically takes 8 weeks.
          </p>
        </Accordion.Content>
      </Accordion.Section>
    </Accordion.Root>
  ),
};

export const AllSectionsOpen: Story = {
  render: () => (
    <Accordion.Root defaultValue={['writing', 'dates']}>
      <Accordion.Section value='writing'>
        <Accordion.Heading>Writing well for the web</Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Writing well for the web.
          </p>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section value='dates'>
        <Accordion.Heading>Dates, times and numbers</Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Dates, times and numbers.
          </p>
        </Accordion.Content>
      </Accordion.Section>
    </Accordion.Root>
  ),
};

export const WithShowAll: Story = {
  render: () => (
    <Accordion.Root
      showAllSections={[
        'writing-well',
        'writing-specialists',
        'know-audience',
        'how-people-read',
      ]}
    >
      <Accordion.Section value='writing-well'>
        <Accordion.Heading>Writing well for the web</Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Writing well for the web.
          </p>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            <Link href='#'>A link inside the accordion</Link>
          </p>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section value='writing-specialists'>
        <Accordion.Heading>Writing well for specialists</Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Writing well for specialists.
          </p>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section value='know-audience'>
        <Accordion.Heading>Know your audience</Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for Know your audience.
          </p>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section value='how-people-read'>
        <Accordion.Heading>How people read</Accordion.Heading>
        <Accordion.Content>
          <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
            This is the content for How people read.
          </p>
        </Accordion.Content>
      </Accordion.Section>
    </Accordion.Root>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Accordion.Root
      showAllSections={[
        'personal-details',
        'important-notices',
        'related-links',
      ]}
    >
      <Accordion.Section value='personal-details'>
        <Accordion.Heading summary='Your submitted personal information'>
          Personal details
        </Accordion.Heading>
        <Accordion.Content>
          <SummaryList.Root>
            <SummaryList.Row>
              <SummaryList.Key>Name</SummaryList.Key>
              <SummaryList.Value>Sarah Phillips</SummaryList.Value>
            </SummaryList.Row>
            <SummaryList.Row>
              <SummaryList.Key>Date of birth</SummaryList.Key>
              <SummaryList.Value>5 January 1978</SummaryList.Value>
            </SummaryList.Row>
            <SummaryList.Row>
              <SummaryList.Key>Status</SummaryList.Key>
              <SummaryList.Value>
                <Tag colour='green'>Verified</Tag>
              </SummaryList.Value>
            </SummaryList.Row>
            <SummaryList.Row>
              <SummaryList.Key>National Insurance number</SummaryList.Key>
              <SummaryList.Value>QQ 12 34 56 C</SummaryList.Value>
            </SummaryList.Row>
          </SummaryList.Root>
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section value='important-notices'>
        <Accordion.Heading>Important notices</Accordion.Heading>
        <Accordion.Content>
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
        </Accordion.Content>
      </Accordion.Section>
      <Accordion.Section value='related-links'>
        <Accordion.Heading>Related links and guidance</Accordion.Heading>
        <Accordion.Content>
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
        </Accordion.Content>
      </Accordion.Section>
    </Accordion.Root>
  ),
};
