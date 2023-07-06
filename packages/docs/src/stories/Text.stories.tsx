import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextProps } from "@igniteCall-ui/react";

export default {
    title: "Typography/Text",
    component: Text,
    tags: ["autodocs"],
    argTypes: {
        size: {
            options: [
                "xxs",
                "xs",
                "sm",
                "md",
                "lg",
                "xl",
                "2xl",
                "4xl",
                "5xl",
                "6xl",
                "7xl",
                "8xl",
                "9xl",
            ],
            control: "inline-radio",
        },
    },
    args: {
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat tempore earum dignissimos sed enim fuga explicabo, fugiat aliquam cumque commodi incidunt vel ad! Eligendi voluptate animi saepe aspernatur magnam?",
        size: "md",
    },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: "Strong text",
        as: "strong",
    },
};
