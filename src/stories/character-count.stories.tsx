import type { Meta, StoryObj } from '@storybook/react-vite';
import { CharacterCount } from '@/ui/character-count';
import { Label } from '@/ui/label';
import { Hint } from '@/ui/hint';
import { ErrorMessage } from '@/ui/error-message';

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
      <CharacterCount id='with-hint' maxCount={200} />
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
      <CharacterCount id='with-threshold' maxCount={200} threshold={75} />
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
    <div>
      <Label htmlFor='over-limit'>Provide a brief summary</Label>
      <CharacterCount
        id='over-limit'
        maxCount={10}
        defaultValue='This text is definitely over the character limit'
      />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div>
      <Label htmlFor='with-error'>Enter a job description</Label>
      <ErrorMessage>
        Job description must be 350 characters or less
      </ErrorMessage>
      <CharacterCount
        id='with-error'
        maxCount={350}
        error
        defaultValue='A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.'
      />
    </div>
  ),
};
