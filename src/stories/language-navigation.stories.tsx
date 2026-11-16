import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  LanguageNavigation,
  LanguageNavigationItem,
  LanguageNavigationLink,
  LanguageNavigationCurrent,
} from '@/ui/language-navigation';

const meta = {
  title: 'Whitehall-UI/LanguageNavigation',
  component: LanguageNavigation,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI language navigation component. Lets users switch between the languages your service offers. Based on the [GOV.UK Design System Language navigation](https://design-system.service.gov.uk/components/language-navigation/) (trial status in GOV.UK Frontend 6.5). Write each language name in its own language and give every link `lang`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LanguageNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <LanguageNavigation>
      <LanguageNavigationItem>
        <LanguageNavigationCurrent lang='en'>English</LanguageNavigationCurrent>
      </LanguageNavigationItem>
      <LanguageNavigationItem>
        <LanguageNavigationLink
          href='#'
          lang='cy'
          description="Newid yr iaith i'r Cymraeg"
        >
          Cymraeg
        </LanguageNavigationLink>
      </LanguageNavigationItem>
    </LanguageNavigation>
  ),
};

export const Inverse: Story = {
  render: () => (
    <div className='bg-govuk-brand p-govuk-4'>
      <LanguageNavigation inverse className='mb-0'>
        <LanguageNavigationItem>
          <LanguageNavigationCurrent lang='en'>
            English
          </LanguageNavigationCurrent>
        </LanguageNavigationItem>
        <LanguageNavigationItem>
          <LanguageNavigationLink href='#' lang='cy'>
            Cymraeg
          </LanguageNavigationLink>
        </LanguageNavigationItem>
      </LanguageNavigation>
    </div>
  ),
};
