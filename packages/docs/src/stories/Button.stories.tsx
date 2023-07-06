import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "phosphor-react";

import { Button, ButtonProps } from "@igniteCall-ui/react";

export default {
    title: "Form/Button",
    component: Button,
    tags: ["autodocs"],
    args: {
        children: "Send",
    },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: "secondary",

        children: "Create new",
    },
};
export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: "tertiary",

        children: "Cancel",
    },
};

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: "sm",

        children: "Send",
    },
};

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                New fase <ArrowRight weight="bold" />
            </>
        ),
    },
};

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    },
};