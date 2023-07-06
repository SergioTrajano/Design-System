import type { Meta, StoryObj } from "@storybook/react";

import { Box, CheckBox, CheckBoxProps, Text } from "@igniteCall-ui/react";

export default {
    title: "Form/CheckBox",
    component: CheckBox,
    tags: ["autodocs"],
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{ display: "flex", gap: "$2" }}
                >
                    {Story()}

                    <Text size="sm">Accept terms of use</Text>
                </Box>
            );
        },
    ],
} as Meta<CheckBoxProps>;

export const Primary: StoryObj<CheckBoxProps> = {
    args: {
        placeholder: "Add any observations",
    },
};
