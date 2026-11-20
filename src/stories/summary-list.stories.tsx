import type { Meta, StoryObj } from '@storybook/react-vite';
import * as SummaryList from '@/ui/summary-list';
import { Link } from '@/ui/link';

const meta = {
  title: 'Whitehall-UI/SummaryList',
  component: SummaryList.Root,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI summary list component. Based on the [GOV.UK Design System Summary list](https://design-system.service.gov.uk/components/summary-list/). Use to summarise information as key-value pairs.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SummaryList.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithActions: Story = {
  render: () => (
    <SummaryList.Root>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Sarah Philips</SummaryList.Value>
        <SummaryList.Actions>
          <Link href='#'>
            Change<span className='sr-only'> name</span>
          </Link>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>5 January 1978</SummaryList.Value>
        <SummaryList.Actions>
          <Link href='#'>
            Change<span className='sr-only'> date of birth</span>
          </Link>
        </SummaryList.Actions>
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
        <SummaryList.Actions>
          <Link href='#'>
            Change<span className='sr-only'> address</span>
          </Link>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <p className='mb-govuk-2'>07700 900457</p>
          <p>sarah.phillips@example.com</p>
        </SummaryList.Value>
        <SummaryList.Actions>
          <Link href='#'>
            Change<span className='sr-only'> contact details</span>
          </Link>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList.Root>
  ),
};

export const WithoutActions: Story = {
  render: () => (
    <SummaryList.Root>
      <SummaryList.Row noActions>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Sarah Philips</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row noActions>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>5 January 1978</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row noActions>
        <SummaryList.Key>Address</SummaryList.Key>
        <SummaryList.Value>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row noActions>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <p className='mb-govuk-2'>07700 900457</p>
          <p>sarah.phillips@example.com</p>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList.Root>
  ),
};

export const WithoutBorders: Story = {
  render: () => (
    <SummaryList.Root noBorder>
      <SummaryList.Row noActions>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Sarah Philips</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row noActions>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>5 January 1978</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row noActions>
        <SummaryList.Key>Address</SummaryList.Key>
        <SummaryList.Value>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row noActions>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <p className='mb-govuk-2'>07700 900457</p>
          <p>sarah.phillips@example.com</p>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList.Root>
  ),
};

export const CardWithTitle: Story = {
  render: () => (
    <SummaryList.Card>
      <SummaryList.CardHeader>
        <SummaryList.CardTitle>Lead tenant</SummaryList.CardTitle>
      </SummaryList.CardHeader>
      <SummaryList.CardContent>
        <SummaryList.Root>
          <SummaryList.Row noActions>
            <SummaryList.Key>Age</SummaryList.Key>
            <SummaryList.Value>38</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row noActions>
            <SummaryList.Key>Nationality</SummaryList.Key>
            <SummaryList.Value>UK national resident in UK</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row noActions>
            <SummaryList.Key>Working situation</SummaryList.Key>
            <SummaryList.Value>Part time – Loss of hours</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList.Root>
      </SummaryList.CardContent>
    </SummaryList.Card>
  ),
};

export const CardWithActions: Story = {
  render: () => (
    <SummaryList.Card>
      <SummaryList.CardHeader>
        <SummaryList.CardTitle>Lead tenant</SummaryList.CardTitle>
        <SummaryList.CardActions>
          <SummaryList.CardAction>
            <Link href='#'>
              Remove<span className='sr-only'> lead tenant</span>
            </Link>
          </SummaryList.CardAction>
          <SummaryList.CardAction>
            <Link href='#'>
              Change<span className='sr-only'> lead tenant</span>
            </Link>
          </SummaryList.CardAction>
        </SummaryList.CardActions>
      </SummaryList.CardHeader>
      <SummaryList.CardContent>
        <SummaryList.Root>
          <SummaryList.Row>
            <SummaryList.Key>Age</SummaryList.Key>
            <SummaryList.Value>38</SummaryList.Value>
            <SummaryList.Actions>
              <Link href='#'>
                Change<span className='sr-only'> age (Lead tenant)</span>
              </Link>
            </SummaryList.Actions>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Nationality</SummaryList.Key>
            <SummaryList.Value>UK national resident in UK</SummaryList.Value>
            <SummaryList.Actions>
              <Link href='#'>
                Change<span className='sr-only'> nationality (Lead tenant)</span>
              </Link>
            </SummaryList.Actions>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Working situation</SummaryList.Key>
            <SummaryList.Value>Part time - Loss of hours</SummaryList.Value>
            <SummaryList.Actions>
              <Link href='#'>
                Change<span className='sr-only'> working situation (Lead tenant)</span>
              </Link>
            </SummaryList.Actions>
          </SummaryList.Row>
        </SummaryList.Root>
      </SummaryList.CardContent>
    </SummaryList.Card>
  ),
};

export const NoBorderOnLastRow: Story = {
  render: () => (
    <SummaryList.Root>
      <SummaryList.Row noActions>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Sarah Philips</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row noActions>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>5 January 1978</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row noActions noBorder>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>sarah.phillips@example.com</SummaryList.Value>
      </SummaryList.Row>
    </SummaryList.Root>
  ),
};
