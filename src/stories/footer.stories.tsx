import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Footer,
  FooterContainer,
  FooterNavigation,
  FooterSection,
  FooterHeading,
  FooterList,
  FooterListItem,
  FooterLink,
  FooterSectionBreak,
  FooterMeta,
  FooterMetaItem,
  FooterInlineList,
  FooterInlineListItem,
  FooterContentLicence,
} from '@/ui/footer';

const meta = {
  title: 'Whitehall-UI/Footer',
  component: Footer,
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
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Footer>
      <FooterContainer>
        <FooterMeta>
          <FooterMetaItem grow>
            <FooterContentLicence>
              All content is available under the
              <FooterLink
                href='https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'
                rel='license'
              >
                Open Government Licence v3.0
              </FooterLink>
              , except where otherwise stated
            </FooterContentLicence>
          </FooterMetaItem>
          <FooterMetaItem>
            <FooterLink href='#'>© Your Organisation 2026</FooterLink>
          </FooterMetaItem>
        </FooterMeta>
      </FooterContainer>
    </Footer>
  ),
};

export const WithLinks: Story = {
  render: () => (
    <Footer>
      <FooterContainer>
        <FooterMeta>
          <FooterMetaItem grow>
            <h2 className='sr-only'>Support links</h2>
            <FooterInlineList>
              <FooterInlineListItem>
                <FooterLink href='#'>Privacy</FooterLink>
              </FooterInlineListItem>
              <FooterInlineListItem>
                <FooterLink href='#'>Accessibility</FooterLink>
              </FooterInlineListItem>
              <FooterInlineListItem>
                <FooterLink href='#'>Cookies</FooterLink>
              </FooterInlineListItem>
              <FooterInlineListItem>
                <FooterLink href='#'>Terms and conditions</FooterLink>
              </FooterInlineListItem>
            </FooterInlineList>
            <FooterContentLicence>
              All content is available under the{' '}
              <FooterLink
                href='https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'
                rel='license'
              >
                Open Government Licence v3.0
              </FooterLink>
              , except where otherwise stated
            </FooterContentLicence>
          </FooterMetaItem>
          <FooterMetaItem>
            <FooterLink href='#'>© Your Organisation 2026</FooterLink>
          </FooterMetaItem>
        </FooterMeta>
      </FooterContainer>
    </Footer>
  ),
};

export const WithNavigation: Story = {
  render: () => (
    <Footer>
      <FooterContainer>
        <FooterNavigation>
          <FooterSection width='two-thirds'>
            <FooterHeading>Services and information</FooterHeading>
            <FooterList columns={2}>
              <FooterListItem>
                <FooterLink href='#'>Benefits</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='#'>Births, deaths, marriages</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='#'>Business and self-employed</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='#'>Education and learning</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='#'>Housing and local services</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='#'>Money and tax</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>
          <FooterSection width='one-third'>
            <FooterHeading>Departments</FooterHeading>
            <FooterList>
              <FooterListItem>
                <FooterLink href='#'>All departments</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='#'>All policy papers</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>
        </FooterNavigation>
        <FooterSectionBreak />
        <FooterMeta>
          <FooterMetaItem grow>
            <FooterContentLicence>
              All content is available under the
              <FooterLink
                href='https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'
                rel='license'
              >
                Open Government Licence v3.0
              </FooterLink>
              , except where otherwise stated
            </FooterContentLicence>
          </FooterMetaItem>
          <FooterMetaItem>
            <FooterLink href='#'>© Your Organisation 2026</FooterLink>
          </FooterMetaItem>
        </FooterMeta>
      </FooterContainer>
    </Footer>
  ),
};

export const Full: Story = {
  render: () => (
    <Footer>
      <FooterContainer>
        <FooterNavigation>
          <FooterSection width='two-thirds'>
            <FooterHeading>Services and information</FooterHeading>
            <FooterList columns={2}>
              <FooterListItem>
                <FooterLink href='#'>Benefits</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='#'>Births, deaths, marriages</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='#'>Business and self-employed</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='#'>Education and learning</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='#'>Housing and local services</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='#'>Money and tax</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>
          <FooterSection width='one-third'>
            <FooterHeading>Departments</FooterHeading>
            <FooterList>
              <FooterListItem>
                <FooterLink href='#'>All departments</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='#'>All policy papers</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>
        </FooterNavigation>
        <FooterSectionBreak />
        <FooterMeta>
          <FooterMetaItem grow>
            <h2 className='sr-only'>Support links</h2>
            <FooterInlineList>
              <FooterInlineListItem>
                <FooterLink href='#'>Help</FooterLink>
              </FooterInlineListItem>
              <FooterInlineListItem>
                <FooterLink href='#'>Privacy</FooterLink>
              </FooterInlineListItem>
              <FooterInlineListItem>
                <FooterLink href='#'>Cookies</FooterLink>
              </FooterInlineListItem>
              <FooterInlineListItem>
                <FooterLink href='#'>Accessibility</FooterLink>
              </FooterInlineListItem>
              <FooterInlineListItem>
                <FooterLink href='#'>Terms and conditions</FooterLink>
              </FooterInlineListItem>
            </FooterInlineList>
            <FooterContentLicence>
              Built by the Example Team. All content is available under the{' '}
              <FooterLink
                href='https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'
                rel='license'
              >
                Open Government Licence v3.0
              </FooterLink>
              , except where otherwise stated
            </FooterContentLicence>
          </FooterMetaItem>
          <FooterMetaItem>
            <FooterLink href='#'>© Your Organisation 2026</FooterLink>
          </FooterMetaItem>
        </FooterMeta>
      </FooterContainer>
    </Footer>
  ),
};
