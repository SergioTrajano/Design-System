import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarProps } from "@sergio-ignite-call-ui/react";

export default {
    title: "Data display/Avatar",
    component: Avatar,
    tags: ["autodocs"],
    argTypes: {
        src: {
            control: { type: "text" },
        },
    },
    args: {
        src: "https://github.com/SergioTrajano.png",
        alt: "Sergio Trajano",
    },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};
export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
};
