import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    helperText: 'We will never share your email with anyone else.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    value: 'invalid-email',
    errorMessage: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit this field',
    disabled: true,
  },
};