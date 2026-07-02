import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  GenericHeader,
  GenericHeaderContainer,
  GenericHeaderLogo,
  GenericHeaderLink,
} from '@/ui/generic-header';

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
  component: GenericHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Whitehall-UI generic header component. Use for a public-facing government service that is not on the GOV.UK website, so it does not use the crown, GOV.UK logotype or brand colours. Based on the [GOV.UK Design System Generic header](https://design-system.service.gov.uk/components/generic-header/).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GenericHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <GenericHeader>
      <GenericHeaderContainer>
        <GenericHeaderLogo>
          <GenericHeaderLink href='/'>
            <BrandLogo />
            Service name
          </GenericHeaderLink>
        </GenericHeaderLogo>
      </GenericHeaderContainer>
    </GenericHeader>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <GenericHeader>
      <GenericHeaderContainer fullWidth>
        <GenericHeaderLogo>
          <GenericHeaderLink href='/'>
            <BrandLogo />
            Service name
          </GenericHeaderLink>
        </GenericHeaderLogo>
      </GenericHeaderContainer>
    </GenericHeader>
  ),
};
