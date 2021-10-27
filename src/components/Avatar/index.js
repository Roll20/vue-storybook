import { BAvatar } from 'bootstrap-vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'UI Token/Avatar',
  component: BAvatar,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BAvatar },
  template: '<b-avatar></b-avatar>',
});

export const Avatar = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Avatar.args = {

};