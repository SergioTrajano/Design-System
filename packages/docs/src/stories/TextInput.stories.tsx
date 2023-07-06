import type { Meta, StoryObj } from "@storybook/react";

import { Box, Text, TextInput, TextInputProps } from "@igniteCall-ui/react";

export default {
    title: "Form/Text input",
    component: TextInput,
    tags: ["autodocs"],
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{ display: "flex", flexDirection: "column", gap: "$2" }}
                >
                    <Text size="sm">Email address</Text>
                    {Story()}
                </Box>
            );
        },
    ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: "Type your name",
    },
};

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: "call.com/",
    },
};

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    },
};