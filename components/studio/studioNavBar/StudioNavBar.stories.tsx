import { ComponentMeta, ComponentStory } from '@storybook/react';
import StudioNavBar, { IStudioNavBar } from './StudioNavBar';
import { mockStudioNavBarProps } from './StudioNavBar.mocks';

export default {
  title: 'studio/StudioNavBar',
  component: StudioNavBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StudioNavBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StudioNavBar> = (args) => (
  <StudioNavBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStudioNavBarProps.base,
} as IStudioNavBar;
