import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modals } from '../components/modal';





// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Modals',
    component: Modals,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Modals>;
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof Modals> = (args) => <Modals {...args} />;
  
  export const Modal = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Modal.args = {
    primary: true,
    label: 'modal',
  };
  
  // export const Complicado = Template.bind({});
  // Complicado.args = {
  //   label: 'Advanced',
  // };
  