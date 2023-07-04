import type { Meta, StoryObj } from "@storybook/react";

import { Heading, HeadingProps } from "@igniteCall-ui/react";

export default {
    title: "Typography/Heading",
    component: Heading,
    tags: ["autodocs"],
    args: {
        children: "Custom title",
    },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {
    parameters: {
        docs: {
            description: {
                story: "Por padrão é 'h2', mas pode ser alterado com a prop 'as'",
            },
        },
    },
};
