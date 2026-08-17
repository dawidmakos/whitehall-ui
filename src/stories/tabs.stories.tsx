import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabsList, TabsTab, TabsPanel } from '@/ui/tabs';
import { InsetText } from '@/ui/inset-text';
import { Link } from '@/ui/link';
import {
  SummaryList,
  SummaryListRow,
  SummaryListKey,
  SummaryListValue,
} from '@/ui/summary-list';
import { Tag } from '@/ui/tag';
import { WarningText } from '@/ui/warning-text';

const meta = {
  title: 'Whitehall-UI/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI tabs component. Based on the [GOV.UK Design System Tabs](https://design-system.service.gov.uk/components/tabs/). Lets users navigate between related sections of content, displaying one section at a time.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue='past-day'>
      <TabsList>
        <TabsTab value='past-day'>Past day</TabsTab>
        <TabsTab value='past-week'>Past week</TabsTab>
        <TabsTab value='past-month'>Past month</TabsTab>
      </TabsList>
      <TabsPanel value='past-day'>
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
      </TabsPanel>
      <TabsPanel value='past-week'>
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
      </TabsPanel>
      <TabsPanel value='past-month'>
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
      </TabsPanel>
    </Tabs>
  ),
};

export const WithSummaryLists: Story = {
  render: () => (
    <Tabs defaultValue='personal'>
      <TabsList>
        <TabsTab value='personal'>Personal details</TabsTab>
        <TabsTab value='contact'>Contact information</TabsTab>
      </TabsList>
      <TabsPanel value='personal'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Personal details
        </h2>
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
            <SummaryListKey>National Insurance number</SummaryListKey>
            <SummaryListValue>QQ 12 34 56 C</SummaryListValue>
          </SummaryListRow>
        </SummaryList>
      </TabsPanel>
      <TabsPanel value='contact'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Contact information
        </h2>
        <SummaryList>
          <SummaryListRow>
            <SummaryListKey>Email address</SummaryListKey>
            <SummaryListValue>sarah.phillips@example.com</SummaryListValue>
          </SummaryListRow>
          <SummaryListRow>
            <SummaryListKey>Phone number</SummaryListKey>
            <SummaryListValue>07700 900457</SummaryListValue>
          </SummaryListRow>
          <SummaryListRow>
            <SummaryListKey>Address</SummaryListKey>
            <SummaryListValue>
              72 Guild Street
              <br />
              London
              <br />
              SE23 6FH
            </SummaryListValue>
          </SummaryListRow>
        </SummaryList>
      </TabsPanel>
    </Tabs>
  ),
};

export const WithMixedContent: Story = {
  render: () => (
    <Tabs defaultValue='overview'>
      <TabsList>
        <TabsTab value='overview'>Overview</TabsTab>
        <TabsTab value='status'>Application status</TabsTab>
        <TabsTab value='important'>Important information</TabsTab>
      </TabsList>
      <TabsPanel value='overview'>
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
      </TabsPanel>
      <TabsPanel value='status'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Application status
        </h2>
        <SummaryList>
          <SummaryListRow>
            <SummaryListKey>Application reference</SummaryListKey>
            <SummaryListValue>HDJ2123F</SummaryListValue>
          </SummaryListRow>
          <SummaryListRow>
            <SummaryListKey>Status</SummaryListKey>
            <SummaryListValue>
              <Tag colour='blue'>In progress</Tag>
            </SummaryListValue>
          </SummaryListRow>
          <SummaryListRow>
            <SummaryListKey>Submitted</SummaryListKey>
            <SummaryListValue>14 March 2026</SummaryListValue>
          </SummaryListRow>
          <SummaryListRow>
            <SummaryListKey>Last updated</SummaryListKey>
            <SummaryListValue>28 March 2026</SummaryListValue>
          </SummaryListRow>
        </SummaryList>
      </TabsPanel>
      <TabsPanel value='important'>
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
      </TabsPanel>
    </Tabs>
  ),
};

export const TwoTabs: Story = {
  render: () => (
    <Tabs defaultValue='england'>
      <TabsList>
        <TabsTab value='england'>England</TabsTab>
        <TabsTab value='wales'>Wales</TabsTab>
      </TabsList>
      <TabsPanel value='england'>
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
      </TabsPanel>
      <TabsPanel value='wales'>
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
      </TabsPanel>
    </Tabs>
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
    <Tabs defaultValue='eligibility'>
      <TabsList>
        <TabsTab value='eligibility'>Eligibility</TabsTab>
        <TabsTab value='how-to-apply'>How to apply</TabsTab>
        <TabsTab value='what-you-need'>What you need</TabsTab>
      </TabsList>
      <TabsPanel value='eligibility'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          Eligibility
        </h2>
        <p className='mb-govuk-4'>
          You can apply if you are 17 or over and live in England or Wales.
        </p>
        <InsetText>
          You cannot apply if you already hold a licence for the same period.
        </InsetText>
      </TabsPanel>
      <TabsPanel value='how-to-apply'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          How to apply
        </h2>
        <p className='mb-govuk-4'>
          Apply online and pay the fee. Most applications are processed within 5
          working days.
        </p>
        <WarningText iconFallbackText='Warning'>
          You must not fish until your licence arrives.
        </WarningText>
      </TabsPanel>
      <TabsPanel value='what-you-need'>
        <h2 className='font-govuk text-govuk-heading-l font-bold text-govuk-black mt-0 mb-govuk-4'>
          What you need
        </h2>
        <p className='mb-govuk-4'>
          You will need proof of address and a debit or credit card. See the{' '}
          <Link href='#'>full list of accepted documents</Link>.
        </p>
      </TabsPanel>
    </Tabs>
  ),
};
