import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Pagination,
  PaginationPrevious,
  PaginationNext,
  PaginationList,
  PaginationItem,
  PaginationEllipsis,
  PaginationLink,
  PaginationLinkTitle,
  PaginationLinkLabel,
  PrevArrow,
  NextArrow,
} from '@/ui/pagination';

const meta = {
  title: 'Whitehall-UI/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI pagination component. Based on the [GOV.UK Design System Pagination](https://design-system.service.gov.uk/components/pagination/). Helps users navigate collections of numbered pages.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationPrevious>
        <PaginationLink href='/page/1' rel='prev'>
          <PrevArrow />
          <PaginationLinkTitle>
            Previous<span className='sr-only'> page</span>
          </PaginationLinkTitle>
        </PaginationLink>
      </PaginationPrevious>
      <PaginationList>
        <PaginationItem>
          <PaginationLink href='/page/1' aria-label='Page 1'>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='/page/2' aria-label='Page 2'>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem current aria-current='page'>
          <PaginationLink href='/page/3' aria-label='Page 3'>
            3
          </PaginationLink>
        </PaginationItem>
      </PaginationList>
      <PaginationNext>
        <PaginationLink href='/page/4' rel='next'>
          <PaginationLinkTitle>
            Next<span className='sr-only'> page</span>
          </PaginationLinkTitle>
          <NextArrow />
        </PaginationLink>
      </PaginationNext>
    </Pagination>
  ),
};

export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationPrevious>
        <PaginationLink href='/page/14' rel='prev'>
          <PrevArrow />
          <PaginationLinkTitle>
            Previous<span className='sr-only'> page</span>
          </PaginationLinkTitle>
        </PaginationLink>
      </PaginationPrevious>
      <PaginationList>
        <PaginationItem>
          <PaginationLink href='/page/1' aria-label='Page 1'>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='/page/2' aria-label='Page 2'>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationEllipsis />
        <PaginationItem>
          <PaginationLink href='/page/14' aria-label='Page 14'>
            14
          </PaginationLink>
        </PaginationItem>
        <PaginationItem current aria-current='page'>
          <PaginationLink href='/page/15' aria-label='Page 15'>
            15
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='/page/16' aria-label='Page 16'>
            16
          </PaginationLink>
        </PaginationItem>
        <PaginationEllipsis />
        <PaginationItem>
          <PaginationLink href='/page/41' aria-label='Page 41'>
            41
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='/page/42' aria-label='Page 42'>
            42
          </PaginationLink>
        </PaginationItem>
      </PaginationList>
      <PaginationNext>
        <PaginationLink href='/page/16' rel='next'>
          <PaginationLinkTitle>
            Next<span className='sr-only'> page</span>
          </PaginationLinkTitle>
          <NextArrow />
        </PaginationLink>
      </PaginationNext>
    </Pagination>
  ),
};

export const FirstPage: Story = {
  render: () => (
    <Pagination>
      <PaginationList>
        <PaginationItem current aria-current='page'>
          <PaginationLink href='/page/1' aria-label='Page 1'>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='/page/2' aria-label='Page 2'>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='/page/3' aria-label='Page 3'>
            3
          </PaginationLink>
        </PaginationItem>
      </PaginationList>
      <PaginationNext>
        <PaginationLink href='/page/2' rel='next'>
          <PaginationLinkTitle>
            Next<span className='sr-only'> page</span>
          </PaginationLinkTitle>
          <NextArrow />
        </PaginationLink>
      </PaginationNext>
    </Pagination>
  ),
};

export const LastPage: Story = {
  render: () => (
    <Pagination>
      <PaginationPrevious>
        <PaginationLink href='/page/2' rel='prev'>
          <PrevArrow />
          <PaginationLinkTitle>
            Previous<span className='sr-only'> page</span>
          </PaginationLinkTitle>
        </PaginationLink>
      </PaginationPrevious>
      <PaginationList>
        <PaginationItem>
          <PaginationLink href='/page/1' aria-label='Page 1'>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='/page/2' aria-label='Page 2'>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem current aria-current='page'>
          <PaginationLink href='/page/3' aria-label='Page 3'>
            3
          </PaginationLink>
        </PaginationItem>
      </PaginationList>
    </Pagination>
  ),
};

export const BlockLevel: Story = {
  render: () => (
    <Pagination block>
      <PaginationPrevious>
        <PaginationLink href='/previous-page' rel='prev'>
          <PrevArrow />
          <PaginationLinkTitle decorated>
            Previous<span className='sr-only'> page</span>
          </PaginationLinkTitle>
          <span className='sr-only'>:</span>
          <PaginationLinkLabel>
            Applying for a provisional lorry or bus licence
          </PaginationLinkLabel>
        </PaginationLink>
      </PaginationPrevious>
      <PaginationNext>
        <PaginationLink href='/next-page' rel='next'>
          <NextArrow />
          <PaginationLinkTitle decorated>
            Next<span className='sr-only'> page</span>
          </PaginationLinkTitle>
          <span className='sr-only'>:</span>
          <PaginationLinkLabel>
            Driver CPC part 1 test: theory
          </PaginationLinkLabel>
        </PaginationLink>
      </PaginationNext>
    </Pagination>
  ),
};
