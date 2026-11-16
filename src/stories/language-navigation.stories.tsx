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

export const MultipleLanguages: Story = {
  render: () => (
    <LanguageNavigation>
      <LanguageNavigationItem>
        <LanguageNavigationCurrent lang='en'>English</LanguageNavigationCurrent>
      </LanguageNavigationItem>
      <LanguageNavigationItem>
        <LanguageNavigationLink href='#' lang='cy'>
          Cymraeg
        </LanguageNavigationLink>
      </LanguageNavigationItem>
      <LanguageNavigationItem>
        <LanguageNavigationLink href='#' lang='gd'>
          Gàidhlig
        </LanguageNavigationLink>
      </LanguageNavigationItem>
      <LanguageNavigationItem>
        <LanguageNavigationLink href='#' lang='ga'>
          Gaeilge
        </LanguageNavigationLink>
      </LanguageNavigationItem>
    </LanguageNavigation>
  ),
};

const manyLanguages = [
  { lang: 'cy', name: 'Cymraeg' },
  { lang: 'de', name: 'Deutsch' },
  { lang: 'es', name: 'Español' },
  { lang: 'fr', name: 'Français' },
  { lang: 'it', name: 'Italiano' },
  { lang: 'pl', name: 'Polski' },
  { lang: 'pt', name: 'Português' },
  { lang: 'ro', name: 'Română' },
  { lang: 'uk', name: 'Українська' },
  { lang: 'zh', name: '中文' },
];

export const ManyLanguages: Story = {
  render: () => (
    <LanguageNavigation>
      <LanguageNavigationItem>
        <LanguageNavigationCurrent lang='en'>English</LanguageNavigationCurrent>
      </LanguageNavigationItem>
      {manyLanguages.map(({ lang, name }) => (
        <LanguageNavigationItem key={lang}>
          <LanguageNavigationLink href='#' lang={lang}>
            {name}
          </LanguageNavigationLink>
        </LanguageNavigationItem>
      ))}
    </LanguageNavigation>
  ),
};

export const MixedTextDirections: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Give right-to-left languages `dir="rtl"` so the name renders in the right direction.',
      },
    },
  },
  render: () => (
    <LanguageNavigation>
      <LanguageNavigationItem>
        <LanguageNavigationCurrent lang='en'>English</LanguageNavigationCurrent>
      </LanguageNavigationItem>
      <LanguageNavigationItem>
        <LanguageNavigationLink href='#' lang='ar' dir='rtl'>
          العربية
        </LanguageNavigationLink>
      </LanguageNavigationItem>
      <LanguageNavigationItem>
        <LanguageNavigationLink href='#' lang='ur' dir='rtl'>
          اردو
        </LanguageNavigationLink>
      </LanguageNavigationItem>
    </LanguageNavigation>
  ),
};

export const TranslatedLabel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Override `aria-label` to translate the navigation label into the current page language.',
      },
    },
  },
  render: () => (
    <LanguageNavigation aria-label='Iaith'>
      <LanguageNavigationItem>
        <LanguageNavigationLink href='#' lang='en'>
          English
        </LanguageNavigationLink>
      </LanguageNavigationItem>
      <LanguageNavigationItem>
        <LanguageNavigationCurrent lang='cy'>Cymraeg</LanguageNavigationCurrent>
      </LanguageNavigationItem>
    </LanguageNavigation>
  ),
};
