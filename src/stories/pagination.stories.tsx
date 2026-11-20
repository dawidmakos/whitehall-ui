import type { Meta, StoryObj } from '@storybook/react-vite';
import * as Pagination from '@/ui/pagination';

const meta = {
  title: 'Whitehall-UI/Pagination',
  component: Pagination.Root,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI pagination component. Based on the [GOV.UK Design System Pagination](https://design-system.service.gov.uk/components/pagination/). Helps users navigate collections of numbered pages.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Pagination.Root>
      <Pagination.Previous>
        <Pagination.Link href='/page/1' rel='prev'>
          <Pagination.PrevArrow />
          <Pagination.LinkTitle>
            Previous<span className='sr-only'> page</span>
          </Pagination.LinkTitle>
        </Pagination.Link>
      </Pagination.Previous>
      <Pagination.List>
        <Pagination.Item>
          <Pagination.Link href='/page/1' aria-label='Page 1'>
            1
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href='/page/2' aria-label='Page 2'>
            2
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item current>
          <Pagination.Link aria-current='page' href='/page/3' aria-label='Page 3'>
            3
          </Pagination.Link>
        </Pagination.Item>
      </Pagination.List>
      <Pagination.Next>
        <Pagination.Link href='/page/4' rel='next'>
          <Pagination.LinkTitle>
            Next<span className='sr-only'> page</span>
          </Pagination.LinkTitle>
          <Pagination.NextArrow />
        </Pagination.Link>
      </Pagination.Next>
    </Pagination.Root>
  ),
};

export const WithEllipsis: Story = {
  render: () => (
    <Pagination.Root>
      <Pagination.Previous>
        <Pagination.Link href='/page/14' rel='prev'>
          <Pagination.PrevArrow />
          <Pagination.LinkTitle>
            Previous<span className='sr-only'> page</span>
          </Pagination.LinkTitle>
        </Pagination.Link>
      </Pagination.Previous>
      <Pagination.List>
        <Pagination.Item>
          <Pagination.Link href='/page/1' aria-label='Page 1'>
            1
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href='/page/2' aria-label='Page 2'>
            2
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>
          <Pagination.Link href='/page/14' aria-label='Page 14'>
            14
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item current>
          <Pagination.Link aria-current='page' href='/page/15' aria-label='Page 15'>
            15
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href='/page/16' aria-label='Page 16'>
            16
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>
          <Pagination.Link href='/page/41' aria-label='Page 41'>
            41
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href='/page/42' aria-label='Page 42'>
            42
          </Pagination.Link>
        </Pagination.Item>
      </Pagination.List>
      <Pagination.Next>
        <Pagination.Link href='/page/16' rel='next'>
          <Pagination.LinkTitle>
            Next<span className='sr-only'> page</span>
          </Pagination.LinkTitle>
          <Pagination.NextArrow />
        </Pagination.Link>
      </Pagination.Next>
    </Pagination.Root>
  ),
};

export const FirstPage: Story = {
  render: () => (
    <Pagination.Root>
      <Pagination.List>
        <Pagination.Item current>
          <Pagination.Link aria-current='page' href='/page/1' aria-label='Page 1'>
            1
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href='/page/2' aria-label='Page 2'>
            2
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href='/page/3' aria-label='Page 3'>
            3
          </Pagination.Link>
        </Pagination.Item>
      </Pagination.List>
      <Pagination.Next>
        <Pagination.Link href='/page/2' rel='next'>
          <Pagination.LinkTitle>
            Next<span className='sr-only'> page</span>
          </Pagination.LinkTitle>
          <Pagination.NextArrow />
        </Pagination.Link>
      </Pagination.Next>
    </Pagination.Root>
  ),
};

export const LastPage: Story = {
  render: () => (
    <Pagination.Root>
      <Pagination.Previous>
        <Pagination.Link href='/page/2' rel='prev'>
          <Pagination.PrevArrow />
          <Pagination.LinkTitle>
            Previous<span className='sr-only'> page</span>
          </Pagination.LinkTitle>
        </Pagination.Link>
      </Pagination.Previous>
      <Pagination.List>
        <Pagination.Item>
          <Pagination.Link href='/page/1' aria-label='Page 1'>
            1
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href='/page/2' aria-label='Page 2'>
            2
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item current>
          <Pagination.Link aria-current='page' href='/page/3' aria-label='Page 3'>
            3
          </Pagination.Link>
        </Pagination.Item>
      </Pagination.List>
    </Pagination.Root>
  ),
};

export const BlockLevel: Story = {
  render: () => (
    <Pagination.Root block>
      <Pagination.Previous>
        <Pagination.Link href='/previous-page' rel='prev'>
          <Pagination.PrevArrow />
          <Pagination.LinkTitle>
            Previous<span className='sr-only'> page</span>
          </Pagination.LinkTitle>
          <span className='sr-only'>:</span>
          <Pagination.LinkLabel>
            Applying for a provisional lorry or bus licence
          </Pagination.LinkLabel>
        </Pagination.Link>
      </Pagination.Previous>
      <Pagination.Next>
        <Pagination.Link href='/next-page' rel='next'>
          <Pagination.NextArrow />
          <Pagination.LinkTitle>
            Next<span className='sr-only'> page</span>
          </Pagination.LinkTitle>
          <span className='sr-only'>:</span>
          <Pagination.LinkLabel>
            Driver CPC part 1 test: theory
          </Pagination.LinkLabel>
        </Pagination.Link>
      </Pagination.Next>
    </Pagination.Root>
  ),
};

export const BlockWithoutLabels: Story = {
  render: () => (
    <Pagination.Root block>
      <Pagination.Previous>
        <Pagination.Link href='/previous-page' rel='prev'>
          <Pagination.PrevArrow />
          <Pagination.LinkTitle>
            Previous<span className='sr-only'> page</span>
          </Pagination.LinkTitle>
        </Pagination.Link>
      </Pagination.Previous>
      <Pagination.Next>
        <Pagination.Link href='/next-page' rel='next'>
          <Pagination.NextArrow />
          <Pagination.LinkTitle>
            Next<span className='sr-only'> page</span>
          </Pagination.LinkTitle>
        </Pagination.Link>
      </Pagination.Next>
    </Pagination.Root>
  ),
};

export const PreviousOnly: Story = {
  render: () => (
    <Pagination.Root block>
      <Pagination.Previous>
        <Pagination.Link href='/previous-page' rel='prev'>
          <Pagination.PrevArrow />
          <Pagination.LinkTitle>
            Previous<span className='sr-only'> page</span>
          </Pagination.LinkTitle>
          <span className='sr-only'>:</span>
          <Pagination.LinkLabel>Driver CPC part 1 test: theory</Pagination.LinkLabel>
        </Pagination.Link>
      </Pagination.Previous>
    </Pagination.Root>
  ),
};

export const NextOnly: Story = {
  render: () => (
    <Pagination.Root block>
      <Pagination.Next>
        <Pagination.Link href='/next-page' rel='next'>
          <Pagination.NextArrow />
          <Pagination.LinkTitle>
            Next<span className='sr-only'> page</span>
          </Pagination.LinkTitle>
          <span className='sr-only'>:</span>
          <Pagination.LinkLabel>
            Driver CPC part 2 test: case studies
          </Pagination.LinkLabel>
        </Pagination.Link>
      </Pagination.Next>
    </Pagination.Root>
  ),
};
