import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { CharacterCount } from '@/ui/character-count';
import { Label } from '@/ui/label';
import { Hint } from '@/ui/hint';
import { ErrorMessage } from '@/ui/error-message';
import { FormGroup } from '@/ui/form-group';
import { LabelWrapper } from '@/ui/label';

const meta = {
  title: 'Whitehall-UI/CharacterCount',
  component: CharacterCount,
  args: {
    id: 'character-count',
    maxCount: 200,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI character count component. Based on the [GOV.UK Design System Character Count](https://design-system.service.gov.uk/components/character-count/). Tells users how many characters or words they have remaining as they type.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CharacterCount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <Label htmlFor='with-hint'>Can you provide more detail?</Label>
      <Hint id='with-hint-hint'>
        Do not include personal or financial information, like your National
        Insurance number or credit card details.
      </Hint>
      <CharacterCount
        id='with-hint'
        maxCount={200}
        aria-describedby='with-hint-hint'
      />
    </div>
  ),
};

export const WordCount: Story = {
  render: () => (
    <div>
      <Label htmlFor='word-count'>Enter a job description</Label>
      <CharacterCount id='word-count' maxCount={150} mode='words' />
    </div>
  ),
};

export const WithThreshold: Story = {
  render: () => (
    <div>
      <Label htmlFor='with-threshold'>Can you provide more detail?</Label>
      <Hint id='with-threshold-hint'>
        Do not include personal or financial information, like your National
        Insurance number or credit card details.
      </Hint>
      <CharacterCount
        id='with-threshold'
        maxCount={200}
        threshold={75}
        aria-describedby='with-threshold-hint'
      />
    </div>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <div>
      <Label htmlFor='with-default'>Enter a description</Label>
      <CharacterCount
        id='with-default'
        maxCount={100}
        defaultValue='This is some pre-filled text to show the character count updating.'
      />
    </div>
  ),
};

export const OverLimit: Story = {
  render: () => (
    <FormGroup error>
      <Label htmlFor='over-limit'>Provide a brief summary</Label>
      <CharacterCount
        id='over-limit'
        maxCount={10}
        defaultValue='This text is definitely over the character limit'
      />
    </FormGroup>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText('You have 38 characters too many'),
    ).toBeVisible();
  },
};

export const WithError: Story = {
  render: () => (
    <FormGroup error>
      <Label htmlFor='with-error'>Enter a job description</Label>
      <ErrorMessage id='with-error-error'>
        Job description must be 350 characters or less
      </ErrorMessage>
      <CharacterCount
        id='with-error'
        maxCount={350}
        error
        aria-describedby='with-error-error'
        defaultValue='A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.'
      />
    </FormGroup>
  ),
};

export const WithHintAndError: Story = {
  render: () => (
    <FormGroup error>
      <Label htmlFor='count-hint-error'>Can you provide more detail?</Label>
      <Hint id='count-hint-error-hint'>
        Do not include personal or financial information, like your National
        Insurance number or credit card details.
      </Hint>
      <ErrorMessage id='count-hint-error-error'>
        Enter more detail about why you are applying
      </ErrorMessage>
      <CharacterCount
        id='count-hint-error'
        maxCount={200}
        error
        aria-describedby='count-hint-error-hint count-hint-error-error'
      />
    </FormGroup>
  ),
};

export const CustomRows: Story = {
  render: () => (
    <div>
      <Label htmlFor='count-rows'>Full address</Label>
      <CharacterCount id='count-rows' maxCount={500} rows={8} />
    </div>
  ),
};

export const LabelAsPageHeading: Story = {
  render: () => (
    <div>
      <LabelWrapper>
        <Label htmlFor='count-heading' size='l'>
          Can you provide more detail?
        </Label>
      </LabelWrapper>
      <CharacterCount id='count-heading' maxCount={200} />
    </div>
  ),
};
