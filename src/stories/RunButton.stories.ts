import type { Meta, StoryObj } from '@storybook/react';

import RunButton from './RunButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'RunButton',
    component: RunButton,
} satisfies Meta<typeof RunButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
};
