import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlogList, { IBlogList } from './BlogList';
import { mockBlogListProps } from './BlogList.mocks';

export default {
  title: 'blogList/BlogList',
  component: BlogList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BlogList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BlogList> = (args) => (
  <BlogList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBlogListProps.base,
} as IBlogList;
