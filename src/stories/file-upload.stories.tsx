import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileUpload } from '@/ui/file-upload';
import { Label } from '@/ui/label';
import { Hint } from '@/ui/hint';
import { ErrorMessage } from '@/ui/error-message';

const meta = {
  title: 'Whitehall-UI/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI file upload component. Lets users select and upload a file. Based on the [GOV.UK Design System File upload](https://design-system.service.gov.uk/components/file-upload/).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the file upload is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the file upload is in an error state',
    },
    multiple: {
      control: 'boolean',
      description: 'Whether the user can select more than one file',
    },
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <>
      <Label htmlFor='file-upload'>Upload a file</Label>
      <FileUpload id='file-upload' name='fileUpload' {...args} />
    </>
  ),
};

export const WithHint: Story = {
  args: {},
  render: (args) => (
    <>
      <Label htmlFor='file-upload-hint'>Upload a file</Label>
      <Hint id='file-upload-hint-hint'>
        The file must be a PDF and smaller than 2MB.
      </Hint>
      <FileUpload
        id='file-upload-hint'
        name='fileUpload'
        aria-describedby='file-upload-hint-hint'
        {...args}
      />
    </>
  ),
};

export const WithError: Story = {
  args: { error: true },
  render: (args) => (
    <div className='border-l-govuk-standard border-l-govuk-error pl-govuk-4'>
      <Label htmlFor='file-upload-error'>Upload a file</Label>
      <ErrorMessage id='file-upload-error-error'>Select a file</ErrorMessage>
      <FileUpload
        id='file-upload-error'
        name='fileUpload'
        aria-describedby='file-upload-error-error'
        {...args}
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <>
      <Label htmlFor='file-upload-disabled'>Upload a file</Label>
      <FileUpload id='file-upload-disabled' name='fileUpload' {...args} />
    </>
  ),
};

export const Multiple: Story = {
  args: { multiple: true },
  render: (args) => (
    <>
      <Label htmlFor='file-upload-multiple'>Upload files</Label>
      <Hint id='file-upload-multiple-hint'>
        You can select more than one file.
      </Hint>
      <FileUpload
        id='file-upload-multiple'
        name='fileUpload'
        aria-describedby='file-upload-multiple-hint'
        chooseFileButtonText='Choose files'
        dropInstructionText='or drop files'
        noFileChosenText='No files chosen'
        {...args}
      />
    </>
  ),
};
