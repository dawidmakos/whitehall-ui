import type { Meta, StoryObj } from '@storybook/react-vite';
import * as Footer from '@/ui/footer';

const meta = {
  title: 'Whitehall-UI/Footer',
  component: Footer.Root,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Whitehall-UI footer component. Provides copyright, licensing and navigation links at the bottom of every page. Based on the [GOV.UK Design System Footer](https://design-system.service.gov.uk/components/footer/). Supply your own copyright and licence information via the composable sub-components.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Footer.Root>
      <Footer.Container>
        <Footer.Meta>
          <Footer.MetaItem grow>
            <Footer.ContentLicence>
              All content is available under{' '}
              <Footer.Link href='#' rel='license'>
                your content licence
              </Footer.Link>
              , except where otherwise stated
            </Footer.ContentLicence>
          </Footer.MetaItem>
          <Footer.MetaItem>
            <Footer.Link href='#'>© Your Organisation 2026</Footer.Link>
          </Footer.MetaItem>
        </Footer.Meta>
      </Footer.Container>
    </Footer.Root>
  ),
};

export const WithLinks: Story = {
  render: () => (
    <Footer.Root>
      <Footer.Container>
        <Footer.Meta>
          <Footer.MetaItem grow>
            <h2 className='sr-only'>Support links</h2>
            <Footer.InlineList>
              <Footer.InlineListItem>
                <Footer.Link href='#'>Privacy</Footer.Link>
              </Footer.InlineListItem>
              <Footer.InlineListItem>
                <Footer.Link href='#'>Accessibility</Footer.Link>
              </Footer.InlineListItem>
              <Footer.InlineListItem>
                <Footer.Link href='#'>Cookies</Footer.Link>
              </Footer.InlineListItem>
              <Footer.InlineListItem>
                <Footer.Link href='#'>Terms and conditions</Footer.Link>
              </Footer.InlineListItem>
            </Footer.InlineList>
            <Footer.ContentLicence>
              All content is available under{' '}
              <Footer.Link href='#' rel='license'>
                your content licence
              </Footer.Link>
              , except where otherwise stated
            </Footer.ContentLicence>
          </Footer.MetaItem>
          <Footer.MetaItem>
            <Footer.Link href='#'>© Your Organisation 2026</Footer.Link>
          </Footer.MetaItem>
        </Footer.Meta>
      </Footer.Container>
    </Footer.Root>
  ),
};

export const WithNavigation: Story = {
  render: () => (
    <Footer.Root>
      <Footer.Container>
        <Footer.Navigation>
          <Footer.Section width='two-thirds'>
            <Footer.Heading>Services</Footer.Heading>
            <Footer.List columns={2}>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 1</Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 2</Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 3</Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 4</Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 5</Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 6</Footer.Link>
              </Footer.ListItem>
            </Footer.List>
          </Footer.Section>
          <Footer.Section width='one-third'>
            <Footer.Heading>About</Footer.Heading>
            <Footer.List>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 1</Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 2</Footer.Link>
              </Footer.ListItem>
            </Footer.List>
          </Footer.Section>
        </Footer.Navigation>
        <Footer.SectionBreak />
        <Footer.Meta>
          <Footer.MetaItem grow>
            <Footer.ContentLicence>
              All content is available under{' '}
              <Footer.Link href='#' rel='license'>
                your content licence
              </Footer.Link>
              , except where otherwise stated
            </Footer.ContentLicence>
          </Footer.MetaItem>
          <Footer.MetaItem>
            <Footer.Link href='#'>© Your Organisation 2026</Footer.Link>
          </Footer.MetaItem>
        </Footer.Meta>
      </Footer.Container>
    </Footer.Root>
  ),
};

export const Full: Story = {
  render: () => (
    <Footer.Root>
      <Footer.Container>
        <Footer.Navigation>
          <Footer.Section width='two-thirds'>
            <Footer.Heading>Services</Footer.Heading>
            <Footer.List columns={2}>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 1</Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 2</Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 3</Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 4</Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 5</Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 6</Footer.Link>
              </Footer.ListItem>
            </Footer.List>
          </Footer.Section>
          <Footer.Section width='one-third'>
            <Footer.Heading>About</Footer.Heading>
            <Footer.List>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 1</Footer.Link>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Link href='#'>Navigation item 2</Footer.Link>
              </Footer.ListItem>
            </Footer.List>
          </Footer.Section>
        </Footer.Navigation>
        <Footer.SectionBreak />
        <Footer.Meta>
          <Footer.MetaItem grow>
            <h2 className='sr-only'>Support links</h2>
            <Footer.InlineList>
              <Footer.InlineListItem>
                <Footer.Link href='#'>Help</Footer.Link>
              </Footer.InlineListItem>
              <Footer.InlineListItem>
                <Footer.Link href='#'>Privacy</Footer.Link>
              </Footer.InlineListItem>
              <Footer.InlineListItem>
                <Footer.Link href='#'>Cookies</Footer.Link>
              </Footer.InlineListItem>
              <Footer.InlineListItem>
                <Footer.Link href='#'>Accessibility</Footer.Link>
              </Footer.InlineListItem>
              <Footer.InlineListItem>
                <Footer.Link href='#'>Terms and conditions</Footer.Link>
              </Footer.InlineListItem>
            </Footer.InlineList>
            <Footer.ContentLicence>
              Built by the Example Team. All content is available under{' '}
              <Footer.Link href='#' rel='license'>
                your content licence
              </Footer.Link>
              , except where otherwise stated
            </Footer.ContentLicence>
          </Footer.MetaItem>
          <Footer.MetaItem>
            <Footer.Link href='#'>© Your Organisation 2026</Footer.Link>
          </Footer.MetaItem>
        </Footer.Meta>
      </Footer.Container>
    </Footer.Root>
  ),
};

export const WithoutContentLicence: Story = {
  render: () => (
    <Footer.Root>
      <Footer.Container>
        <Footer.Meta>
          <Footer.MetaItem grow />
          <Footer.MetaItem>
            <Footer.Link href='#'>© Your Organisation 2026</Footer.Link>
          </Footer.MetaItem>
        </Footer.Meta>
      </Footer.Container>
    </Footer.Root>
  ),
};

export const WithCustomMeta: Story = {
  render: () => (
    <Footer.Root>
      <Footer.Container>
        <Footer.Meta>
          <Footer.MetaItem grow>
            <h2 className='sr-only'>Support links</h2>
            <Footer.InlineList>
              <Footer.InlineListItem>
                <Footer.Link href='#'>Help</Footer.Link>
              </Footer.InlineListItem>
              <Footer.InlineListItem>
                <Footer.Link href='#'>Contact us</Footer.Link>
              </Footer.InlineListItem>
            </Footer.InlineList>
            <p className='m-0'>
              Built by the{' '}
              <Footer.Link href='#'>Example Team</Footer.Link>
            </p>
          </Footer.MetaItem>
          <Footer.MetaItem>
            <Footer.Link href='#'>© Your Organisation 2026</Footer.Link>
          </Footer.MetaItem>
        </Footer.Meta>
      </Footer.Container>
    </Footer.Root>
  ),
};

const FooterColumn = ({ heading }: { heading: string }) => (
  <Footer.Section width='one-third'>
    <Footer.Heading>{heading}</Footer.Heading>
    <Footer.List>
      <Footer.ListItem>
        <Footer.Link href='#'>Navigation item 1</Footer.Link>
      </Footer.ListItem>
      <Footer.ListItem>
        <Footer.Link href='#'>Navigation item 2</Footer.Link>
      </Footer.ListItem>
      <Footer.ListItem>
        <Footer.Link href='#'>Navigation item 3</Footer.Link>
      </Footer.ListItem>
    </Footer.List>
  </Footer.Section>
);

export const ThreeEqualColumns: Story = {
  render: () => (
    <Footer.Root>
      <Footer.Container>
        <Footer.Navigation>
          <FooterColumn heading='Two column list' />
          <FooterColumn heading='Single column list 1' />
          <FooterColumn heading='Single column list 2' />
        </Footer.Navigation>
        <Footer.SectionBreak />
        <Footer.Meta>
          <Footer.MetaItem grow>
            <Footer.ContentLicence>
              All content is available under{' '}
              <Footer.Link href='#' rel='license'>
                your content licence
              </Footer.Link>
              , except where otherwise stated
            </Footer.ContentLicence>
          </Footer.MetaItem>
          <Footer.MetaItem>
            <Footer.Link href='#'>© Your Organisation 2026</Footer.Link>
          </Footer.MetaItem>
        </Footer.Meta>
      </Footer.Container>
    </Footer.Root>
  ),
};
