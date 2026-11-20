import type { Meta, StoryObj } from '@storybook/react-vite';
import * as GenericHeader from '@/ui/generic-header';

const BrandLogo = () => (
  <svg
    width='28'
    height='30'
    viewBox='0 0 28 30'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    focusable='false'
  >
    <circle cx='13.5549' cy='4.21349' r='4.21349' />
    <circle cx='13.5549' cy='25.7865' r='4.21349' />
    <circle cx='22.8963' cy='9.6068' r='4.21349' />
    <circle cx='4.2135' cy='20.3932' r='4.21349' />
    <circle cx='22.8963' cy='20.3932' r='4.21349' />
    <circle cx='4.21351' cy='9.60674' r='4.21349' />
  </svg>
);

const meta = {
  title: 'Whitehall-UI/GenericHeader',
  component: GenericHeader.Root,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Whitehall-UI generic header component. Shows the logo and name of your own organisation instead of the Whitehall-UI logo. Based on the [GOV.UK Design System Generic header](https://design-system.service.gov.uk/components/generic-header/).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GenericHeader.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <GenericHeader.Root>
      <GenericHeader.Container>
        <GenericHeader.Logo>
          <GenericHeader.Link href='/'>
            <BrandLogo />
            Service name
          </GenericHeader.Link>
        </GenericHeader.Logo>
      </GenericHeader.Container>
    </GenericHeader.Root>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <GenericHeader.Root>
      <GenericHeader.Container fullWidth>
        <GenericHeader.Logo>
          <GenericHeader.Link href='/'>
            <BrandLogo />
            Service name
          </GenericHeader.Link>
        </GenericHeader.Logo>
      </GenericHeader.Container>
    </GenericHeader.Root>
  ),
};

export const TextOnly: Story = {
  render: () => (
    <GenericHeader.Root>
      <GenericHeader.Container>
        <GenericHeader.Logo>
          <GenericHeader.Link href='/'>Service name</GenericHeader.Link>
        </GenericHeader.Logo>
      </GenericHeader.Container>
    </GenericHeader.Root>
  ),
};

export const ImageOnly: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'When the logo is an image on its own, give the link an accessible name with `aria-label`.',
      },
    },
  },
  render: () => (
    <GenericHeader.Root>
      <GenericHeader.Container>
        <GenericHeader.Logo>
          <GenericHeader.Link href='/' aria-label='Service name homepage'>
            <BrandLogo />
          </GenericHeader.Link>
        </GenericHeader.Logo>
      </GenericHeader.Container>
    </GenericHeader.Root>
  ),
};
