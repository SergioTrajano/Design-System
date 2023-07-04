import type { Meta, StoryObj } from "@storybook/react";

import { Box, BoxProps } from "@igniteCall-ui/react";

export default {
    title: "Surfaces/Box",
    component: Box,
    args: {
        children: (
            <>
                <span>Testando</span>
            </>
        ),
    },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
    args: {},
};
