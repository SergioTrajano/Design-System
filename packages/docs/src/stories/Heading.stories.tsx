import type { Meta, StoryObj } from "@storybook/react";

import { Heading, HeadingProps } from "@sergio-ignite-call-ui/react";

export default {
    title: "Typography/Heading",
    component: Heading,
    tags: ["autodocs"],
    argTypes: {
        size: {
            options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
            control: "inline-radio",
        },
    },
    args: {
        children: "Custom title",
    },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: "H1 Heading",
        as: "h1",
    },
    parameters: {
        docs: {
            description: {
                story: "Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.",
            },
        },
    },
};
