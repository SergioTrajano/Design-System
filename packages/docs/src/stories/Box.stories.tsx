import type { Meta, StoryObj } from "@storybook/react";

import { Box, BoxProps, Text } from "@igniteCall-ui/react";

export default {
    title: "Surfaces/Box",
    component: Box,
    tags: ["autodocs"],
    args: {
        children: <Text>Testando</Text>,
    },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
    args: {},
};
