import { ComponentProps } from "react";

import { styled } from "../styles";

export const TextArea = styled("textarea", {
    minHeight: 88,
    padding: "$3 $4",
    border: "2px solid $gray900",
    borderRadius: "$sm",
    backgroundColor: "$gray900",
    boxSizing: "border-box",
    resize: "vertical",

    fontFamily: "$default",
    fontSize: "$sm",
    fontWeight: "$bold",
    color: "$white",

    "&:focus": {
        outline: 0,
        borderColor: "$ignite300",
    },

    "&:disabled": {
        opacity: 0.5,

        cursor: "not-allowed",
    },

    "&:placeholder": {
        color: "$gray400",
    },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
