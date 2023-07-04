import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextProps } from "@igniteCall-ui/react";

export default {
    title: "Typography/Text",
    component: Text,
    args: {
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat tempore earum dignissimos sed enim fuga explicabo, fugiat aliquam cumque commodi incidunt vel ad! Eligendi voluptate animi saepe aspernatur magnam?",
    },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
