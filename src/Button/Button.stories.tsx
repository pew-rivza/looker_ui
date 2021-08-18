import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InlineIcon } from '@iconify/react';
import iosArrowRight24Regular from '@iconify-icons/fluent/ios-arrow-right-24-regular';

import LKRButton from "./LKRButton";

export default {
    title: 'Elements',
    component: LKRButton,
} as ComponentMeta<typeof LKRButton>;

const Template: ComponentStory<typeof LKRButton> = (args) => <LKRButton {...args} />;

export const Button = Template.bind({});
Button.args = {
    value: <InlineIcon icon={iosArrowRight24Regular} height={22}  />,
    onCLick: () => console.log("kek rivza")
};