import { Meta } from '@storybook/angular';
import { GbButtonComponent } from './gb-button.component';

export default {
  title: 'GbButtonComponent',
  component: GbButtonComponent,
} as Meta<GbButtonComponent>;

export const Primary = {
  render: (args: GbButtonComponent) => ({
    props: args,
  }),
  args: {
    text: 'Button',
  },
};
