import type { Meta, StoryObj } from "@storybook/react";

import { Box, BoxProps, Text } from "@sergio-ignite-call-ui/react";

export default {
    title: "Surfaces/Box",
    component: Box,
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: { type: null },
        },
    },
    args: {
        children: <Text>Testando</Text>,
    },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
    args: {},
};
