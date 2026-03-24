import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  PhaseBanner,
  PhaseBannerContent,
  PhaseBannerTag,
  PhaseBannerText,
} from '@/ui/phase-banner';
import { Tag } from '@/ui/tag';
import { Link } from '@/ui/link';

const meta = {
  title: 'Whitehall-UI/PhaseBanner',
  component: PhaseBanner,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI phase banner component. Based on the [GOV.UK Design System Phase banner](https://design-system.service.gov.uk/components/phase-banner/). Use to show users your service is still being worked on.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PhaseBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Alpha: Story = {
  render: () => (
    <PhaseBanner>
      <PhaseBannerContent>
        <PhaseBannerTag>
          <Tag>Alpha</Tag>
        </PhaseBannerTag>
        <PhaseBannerText>
          This is a new service. Help us improve it and{' '}
          <Link href='#'>give your feedback by email</Link>.
        </PhaseBannerText>
      </PhaseBannerContent>
    </PhaseBanner>
  ),
};

export const Beta: Story = {
  render: () => (
    <PhaseBanner>
      <PhaseBannerContent>
        <PhaseBannerTag>
          <Tag>Beta</Tag>
        </PhaseBannerTag>
        <PhaseBannerText>
          This is a new service. Help us improve it and{' '}
          <Link href='#'>give your feedback (opens in new tab)</Link>.
        </PhaseBannerText>
      </PhaseBannerContent>
    </PhaseBanner>
  ),
};
