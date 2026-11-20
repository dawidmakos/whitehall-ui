import type { Meta, StoryObj } from '@storybook/react-vite';
import * as LanguageNavigation from '@/ui/language-navigation';

const meta = {
  title: 'Whitehall-UI/LanguageNavigation',
  component: LanguageNavigation.Root,
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
} satisfies Meta<typeof LanguageNavigation.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <LanguageNavigation.Root>
      <LanguageNavigation.Item>
        <LanguageNavigation.Current lang='en'>English</LanguageNavigation.Current>
      </LanguageNavigation.Item>
      <LanguageNavigation.Item>
        <LanguageNavigation.Link
          href='#'
          lang='cy'
          description="Newid yr iaith i'r Cymraeg"
        >
          Cymraeg
        </LanguageNavigation.Link>
      </LanguageNavigation.Item>
    </LanguageNavigation.Root>
  ),
};

export const Inverse: Story = {
  render: () => (
    <div className='bg-govuk-brand p-govuk-4'>
      <LanguageNavigation.Root inverse className='mb-0'>
        <LanguageNavigation.Item>
          <LanguageNavigation.Current lang='en'>
            English
          </LanguageNavigation.Current>
        </LanguageNavigation.Item>
        <LanguageNavigation.Item>
          <LanguageNavigation.Link href='#' lang='cy'>
            Cymraeg
          </LanguageNavigation.Link>
        </LanguageNavigation.Item>
      </LanguageNavigation.Root>
    </div>
  ),
};

export const MultipleLanguages: Story = {
  render: () => (
    <LanguageNavigation.Root>
      <LanguageNavigation.Item>
        <LanguageNavigation.Current lang='en'>English</LanguageNavigation.Current>
      </LanguageNavigation.Item>
      <LanguageNavigation.Item>
        <LanguageNavigation.Link href='#' lang='cy'>
          Cymraeg
        </LanguageNavigation.Link>
      </LanguageNavigation.Item>
      <LanguageNavigation.Item>
        <LanguageNavigation.Link href='#' lang='gd'>
          Gàidhlig
        </LanguageNavigation.Link>
      </LanguageNavigation.Item>
      <LanguageNavigation.Item>
        <LanguageNavigation.Link href='#' lang='ga'>
          Gaeilge
        </LanguageNavigation.Link>
      </LanguageNavigation.Item>
    </LanguageNavigation.Root>
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
    <LanguageNavigation.Root>
      <LanguageNavigation.Item>
        <LanguageNavigation.Current lang='en'>English</LanguageNavigation.Current>
      </LanguageNavigation.Item>
      {manyLanguages.map(({ lang, name }) => (
        <LanguageNavigation.Item key={lang}>
          <LanguageNavigation.Link href='#' lang={lang}>
            {name}
          </LanguageNavigation.Link>
        </LanguageNavigation.Item>
      ))}
    </LanguageNavigation.Root>
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
    <LanguageNavigation.Root>
      <LanguageNavigation.Item>
        <LanguageNavigation.Current lang='en'>English</LanguageNavigation.Current>
      </LanguageNavigation.Item>
      <LanguageNavigation.Item>
        <LanguageNavigation.Link href='#' lang='ar' dir='rtl'>
          العربية
        </LanguageNavigation.Link>
      </LanguageNavigation.Item>
      <LanguageNavigation.Item>
        <LanguageNavigation.Link href='#' lang='ur' dir='rtl'>
          اردو
        </LanguageNavigation.Link>
      </LanguageNavigation.Item>
    </LanguageNavigation.Root>
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
    <LanguageNavigation.Root aria-label='Iaith'>
      <LanguageNavigation.Item>
        <LanguageNavigation.Link href='#' lang='en'>
          English
        </LanguageNavigation.Link>
      </LanguageNavigation.Item>
      <LanguageNavigation.Item>
        <LanguageNavigation.Current lang='cy'>Cymraeg</LanguageNavigation.Current>
      </LanguageNavigation.Item>
    </LanguageNavigation.Root>
  ),
};
