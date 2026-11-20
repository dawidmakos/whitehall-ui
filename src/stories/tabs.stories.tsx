import type { Meta, StoryObj } from '@storybook/react-vite';
import * as Tabs from '@/ui/tabs';
import { InsetText } from '@/ui/inset-text';
import { Link } from '@/ui/link';
import * as SummaryList from '@/ui/summary-list';
import { Tag } from '@/ui/tag';
import { WarningText } from '@/ui/warning-text';

const meta = {
  title: 'Whitehall-UI/Tabs',
  component: Tabs.Root,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI tabs component. Based on the [GOV.UK Design System Tabs](https://design-system.service.gov.uk/components/tabs/). Lets users navigate between related sections of content, displaying one section at a time.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs.Root defaultValue='past-day'>
      <Tabs.List>
        <Tabs.Tab value='past-day'>Past day</Tabs.Tab>
        <Tabs.Tab value='past-week'>Past week</Tabs.Tab>
        <Tabs.Tab value='past-month'>Past month</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='past-day'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Past day
        </h2>
        <table className='w-full font-govuk text-govuk-body text-govuk-black border-collapse'>
          <thead>
            <tr>
              <th className='text-left font-bold pb-govuk-2 border-b border-govuk-mid-grey'>
                Case manager
              </th>
              <th className='text-left font-bold pb-govuk-2 border-b border-govuk-mid-grey'>
                Cases opened
              </th>
              <th className='text-left font-bold pb-govuk-2 border-b border-govuk-mid-grey'>
                Cases closed
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                David Francis
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>3</td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>0</td>
            </tr>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                Paul Farmer
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>1</td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>0</td>
            </tr>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                Rita Patel
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>2</td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>0</td>
            </tr>
          </tbody>
        </table>
      </Tabs.Panel>
      <Tabs.Panel value='past-week'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Past week
        </h2>
        <table className='w-full font-govuk text-govuk-body text-govuk-black border-collapse'>
          <thead>
            <tr>
              <th className='text-left font-bold pb-govuk-2 border-b border-govuk-mid-grey'>
                Case manager
              </th>
              <th className='text-left font-bold pb-govuk-2 border-b border-govuk-mid-grey'>
                Cases opened
              </th>
              <th className='text-left font-bold pb-govuk-2 border-b border-govuk-mid-grey'>
                Cases closed
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                David Francis
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>24</td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>18</td>
            </tr>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                Paul Farmer
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>16</td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>20</td>
            </tr>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                Rita Patel
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>24</td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>27</td>
            </tr>
          </tbody>
        </table>
      </Tabs.Panel>
      <Tabs.Panel value='past-month'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Past month
        </h2>
        <table className='w-full font-govuk text-govuk-body text-govuk-black border-collapse'>
          <thead>
            <tr>
              <th className='text-left font-bold pb-govuk-2 border-b border-govuk-mid-grey'>
                Case manager
              </th>
              <th className='text-left font-bold pb-govuk-2 border-b border-govuk-mid-grey'>
                Cases opened
              </th>
              <th className='text-left font-bold pb-govuk-2 border-b border-govuk-mid-grey'>
                Cases closed
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                David Francis
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>98</td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>95</td>
            </tr>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                Paul Farmer
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>122</td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>131</td>
            </tr>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                Rita Patel
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>126</td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>142</td>
            </tr>
          </tbody>
        </table>
      </Tabs.Panel>
    </Tabs.Root>
  ),
};

export const WithSummaryLists: Story = {
  render: () => (
    <Tabs.Root defaultValue='personal'>
      <Tabs.List>
        <Tabs.Tab value='personal'>Personal details</Tabs.Tab>
        <Tabs.Tab value='contact'>Contact information</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='personal'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Personal details
        </h2>
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
            <SummaryList.Key>National Insurance number</SummaryList.Key>
            <SummaryList.Value>QQ 12 34 56 C</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList.Root>
      </Tabs.Panel>
      <Tabs.Panel value='contact'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Contact information
        </h2>
        <SummaryList.Root>
          <SummaryList.Row>
            <SummaryList.Key>Email address</SummaryList.Key>
            <SummaryList.Value>sarah.phillips@example.com</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Phone number</SummaryList.Key>
            <SummaryList.Value>07700 900457</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Address</SummaryList.Key>
            <SummaryList.Value>
              72 Guild Street
              <br />
              London
              <br />
              SE23 6FH
            </SummaryList.Value>
          </SummaryList.Row>
        </SummaryList.Root>
      </Tabs.Panel>
    </Tabs.Root>
  ),
};

export const WithMixedContent: Story = {
  render: () => (
    <Tabs.Root defaultValue='overview'>
      <Tabs.List>
        <Tabs.Tab value='overview'>Overview</Tabs.Tab>
        <Tabs.Tab value='status'>Application status</Tabs.Tab>
        <Tabs.Tab value='important'>Important information</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='overview'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Overview
        </h2>
        <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
          This section contains a summary of your application. Review the
          details below and contact us if anything is incorrect.
        </p>
        <InsetText>
          You submitted your application on 14 March 2026. You should receive a
          response within 8 weeks.
        </InsetText>
        <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
          For more information, visit the <Link href='#'>guidance page</Link>.
        </p>
      </Tabs.Panel>
      <Tabs.Panel value='status'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Application status
        </h2>
        <SummaryList.Root>
          <SummaryList.Row>
            <SummaryList.Key>Application reference</SummaryList.Key>
            <SummaryList.Value>HDJ2123F</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Status</SummaryList.Key>
            <SummaryList.Value>
              <Tag colour='blue'>In progress</Tag>
            </SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Submitted</SummaryList.Key>
            <SummaryList.Value>14 March 2026</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Last updated</SummaryList.Key>
            <SummaryList.Value>28 March 2026</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList.Root>
      </Tabs.Panel>
      <Tabs.Panel value='important'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Important information
        </h2>
        <WarningText>
          You must report any changes to your circumstances within 5 working
          days.
        </WarningText>
        <p className='font-govuk text-govuk-body text-govuk-black mb-govuk-4'>
          Failure to do so may result in penalties or delays to your
          application. See the{' '}
          <Link href='#'>full list of reportable changes</Link>.
        </p>
      </Tabs.Panel>
    </Tabs.Root>
  ),
};

export const TwoTabs: Story = {
  render: () => (
    <Tabs.Root defaultValue='england'>
      <Tabs.List>
        <Tabs.Tab value='england'>England</Tabs.Tab>
        <Tabs.Tab value='wales'>Wales</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='england'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          England
        </h2>
        <table className='w-full font-govuk text-govuk-body text-govuk-black border-collapse'>
          <thead>
            <tr>
              <th className='text-left font-bold pb-govuk-2 border-b border-govuk-mid-grey'>
                Date
              </th>
              <th className='text-left font-bold pb-govuk-2 border-b border-govuk-mid-grey'>
                Holiday
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                1 January
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                New Year's Day
              </td>
            </tr>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                18 April
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                Good Friday
              </td>
            </tr>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                21 April
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                Easter Monday
              </td>
            </tr>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                25 December
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                Christmas Day
              </td>
            </tr>
          </tbody>
        </table>
      </Tabs.Panel>
      <Tabs.Panel value='wales'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Wales
        </h2>
        <table className='w-full font-govuk text-govuk-body text-govuk-black border-collapse'>
          <thead>
            <tr>
              <th className='text-left font-bold pb-govuk-2 border-b border-govuk-mid-grey'>
                Date
              </th>
              <th className='text-left font-bold pb-govuk-2 border-b border-govuk-mid-grey'>
                Holiday
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                1 January
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                New Year's Day
              </td>
            </tr>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                1 March
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                St David's Day
              </td>
            </tr>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                18 April
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                Good Friday
              </td>
            </tr>
            <tr>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                25 December
              </td>
              <td className='py-govuk-2 border-b border-govuk-mid-grey'>
                Christmas Day
              </td>
            </tr>
          </tbody>
        </table>
      </Tabs.Panel>
    </Tabs.Root>
  ),
};

export const StackedOnMobile: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Below the 640px breakpoint the tab strip is replaced by a contents list and every panel is shown stacked, matching how GOV.UK presents tabbed content on small screens. Resize past 640px to get the tab strip back.',
      },
    },
  },
  globals: {
    viewport: { value: 'govukMobileSmall' },
  },
  render: () => (
    <Tabs.Root defaultValue='eligibility'>
      <Tabs.List>
        <Tabs.Tab value='eligibility'>Eligibility</Tabs.Tab>
        <Tabs.Tab value='how-to-apply'>How to apply</Tabs.Tab>
        <Tabs.Tab value='what-you-need'>What you need</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='eligibility'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Eligibility
        </h2>
        <p className='mb-govuk-4'>
          You can apply if you are 17 or over and live in England or Wales.
        </p>
        <InsetText>
          You cannot apply if you already hold a licence for the same period.
        </InsetText>
      </Tabs.Panel>
      <Tabs.Panel value='how-to-apply'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          How to apply
        </h2>
        <p className='mb-govuk-4'>
          Apply online and pay the fee. Most applications are processed within 5
          working days.
        </p>
        <WarningText assistiveText='Warning'>
          You must not fish until your licence arrives.
        </WarningText>
      </Tabs.Panel>
      <Tabs.Panel value='what-you-need'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          What you need
        </h2>
        <p className='mb-govuk-4'>
          You will need proof of address and a debit or credit card. See the{' '}
          <Link href='#'>full list of accepted documents</Link>.
        </p>
      </Tabs.Panel>
    </Tabs.Root>
  ),
};
