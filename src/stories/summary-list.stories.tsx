import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  SummaryList,
  SummaryListRow,
  SummaryListKey,
  SummaryListValue,
  SummaryListActions,
  SummaryListCard,
  SummaryListCardHeader,
  SummaryListCardTitle,
  SummaryListCardActions,
  SummaryListCardAction,
  SummaryListCardContent,
} from '@/ui/summary-list';
import { Link } from '@/ui/link';

const meta = {
  title: 'Whitehall-UI/SummaryList',
  component: SummaryList,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI summary list component. Based on the [GOV.UK Design System Summary list](https://design-system.service.gov.uk/components/summary-list/). Use to summarise information as key-value pairs.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SummaryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithActions: Story = {
  render: () => (
    <SummaryList>
      <SummaryListRow>
        <SummaryListKey>Name</SummaryListKey>
        <SummaryListValue>Sarah Philips</SummaryListValue>
        <SummaryListActions>
          <Link href='#'>
            Change<span className='sr-only'> name</span>
          </Link>
        </SummaryListActions>
      </SummaryListRow>
      <SummaryListRow>
        <SummaryListKey>Date of birth</SummaryListKey>
        <SummaryListValue>5 January 1978</SummaryListValue>
        <SummaryListActions>
          <Link href='#'>
            Change<span className='sr-only'> date of birth</span>
          </Link>
        </SummaryListActions>
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
        <SummaryListActions>
          <Link href='#'>
            Change<span className='sr-only'> address</span>
          </Link>
        </SummaryListActions>
      </SummaryListRow>
      <SummaryListRow>
        <SummaryListKey>Contact details</SummaryListKey>
        <SummaryListValue>
          <p className='mb-govuk-2'>07700 900457</p>
          <p>sarah.phillips@example.com</p>
        </SummaryListValue>
        <SummaryListActions>
          <Link href='#'>
            Change<span className='sr-only'> contact details</span>
          </Link>
        </SummaryListActions>
      </SummaryListRow>
    </SummaryList>
  ),
};

export const WithoutActions: Story = {
  render: () => (
    <SummaryList>
      <SummaryListRow noActions>
        <SummaryListKey>Name</SummaryListKey>
        <SummaryListValue>Sarah Philips</SummaryListValue>
      </SummaryListRow>
      <SummaryListRow noActions>
        <SummaryListKey>Date of birth</SummaryListKey>
        <SummaryListValue>5 January 1978</SummaryListValue>
      </SummaryListRow>
      <SummaryListRow noActions>
        <SummaryListKey>Address</SummaryListKey>
        <SummaryListValue>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryListValue>
      </SummaryListRow>
      <SummaryListRow noActions>
        <SummaryListKey>Contact details</SummaryListKey>
        <SummaryListValue>
          <p className='mb-govuk-2'>07700 900457</p>
          <p>sarah.phillips@example.com</p>
        </SummaryListValue>
      </SummaryListRow>
    </SummaryList>
  ),
};

export const WithoutBorders: Story = {
  render: () => (
    <SummaryList noBorder>
      <SummaryListRow noActions>
        <SummaryListKey>Name</SummaryListKey>
        <SummaryListValue>Sarah Philips</SummaryListValue>
      </SummaryListRow>
      <SummaryListRow noActions>
        <SummaryListKey>Date of birth</SummaryListKey>
        <SummaryListValue>5 January 1978</SummaryListValue>
      </SummaryListRow>
      <SummaryListRow noActions>
        <SummaryListKey>Address</SummaryListKey>
        <SummaryListValue>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryListValue>
      </SummaryListRow>
      <SummaryListRow noActions>
        <SummaryListKey>Contact details</SummaryListKey>
        <SummaryListValue>
          <p className='mb-govuk-2'>07700 900457</p>
          <p>sarah.phillips@example.com</p>
        </SummaryListValue>
      </SummaryListRow>
    </SummaryList>
  ),
};

export const CardWithTitle: Story = {
  render: () => (
    <SummaryListCard>
      <SummaryListCardHeader>
        <SummaryListCardTitle>Lead tenant</SummaryListCardTitle>
      </SummaryListCardHeader>
      <SummaryListCardContent>
        <SummaryList>
          <SummaryListRow noActions>
            <SummaryListKey>Age</SummaryListKey>
            <SummaryListValue>38</SummaryListValue>
          </SummaryListRow>
          <SummaryListRow noActions>
            <SummaryListKey>Nationality</SummaryListKey>
            <SummaryListValue>UK national resident in UK</SummaryListValue>
          </SummaryListRow>
          <SummaryListRow noActions>
            <SummaryListKey>Working situation</SummaryListKey>
            <SummaryListValue>Part time – Loss of hours</SummaryListValue>
          </SummaryListRow>
        </SummaryList>
      </SummaryListCardContent>
    </SummaryListCard>
  ),
};

export const CardWithActions: Story = {
  render: () => (
    <SummaryListCard>
      <SummaryListCardHeader>
        <SummaryListCardTitle>Lead tenant</SummaryListCardTitle>
        <SummaryListCardActions>
          <SummaryListCardAction>
            <Link href='#'>
              Remove<span className='sr-only'> lead tenant</span>
            </Link>
          </SummaryListCardAction>
          <SummaryListCardAction>
            <Link href='#'>
              Change<span className='sr-only'> lead tenant</span>
            </Link>
          </SummaryListCardAction>
        </SummaryListCardActions>
      </SummaryListCardHeader>
      <SummaryListCardContent>
        <SummaryList>
          <SummaryListRow>
            <SummaryListKey>Age</SummaryListKey>
            <SummaryListValue>38</SummaryListValue>
            <SummaryListActions>
              <Link href='#'>
                Change<span className='sr-only'> age</span>
              </Link>
            </SummaryListActions>
          </SummaryListRow>
          <SummaryListRow>
            <SummaryListKey>Nationality</SummaryListKey>
            <SummaryListValue>UK national resident in UK</SummaryListValue>
            <SummaryListActions>
              <Link href='#'>
                Change<span className='sr-only'> nationality</span>
              </Link>
            </SummaryListActions>
          </SummaryListRow>
          <SummaryListRow>
            <SummaryListKey>Working situation</SummaryListKey>
            <SummaryListValue>Part time - Loss of hours</SummaryListValue>
            <SummaryListActions>
              <Link href='#'>
                Change<span className='sr-only'> working situation</span>
              </Link>
            </SummaryListActions>
          </SummaryListRow>
        </SummaryList>
      </SummaryListCardContent>
    </SummaryListCard>
  ),
};
