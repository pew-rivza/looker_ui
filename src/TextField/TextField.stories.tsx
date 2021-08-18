import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LKRTextField from "./LKRTextField";

export default {
    title: 'Form',
    component: LKRTextField,
} as ComponentMeta<typeof LKRTextField>;

const Template: ComponentStory<typeof LKRTextField> = (args) => <LKRTextField {...args} />;

export const TextField = Template.bind({});
TextField.args = {
    label: 'Text Field Test',
    onChange: () => console.log("kek rivza")
};