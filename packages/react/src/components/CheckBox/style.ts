import * as Checkbox from "@radix-ui/react-checkbox";

import { keyframes, styled } from "../../styles";

export const CheckBoxContainer = styled(Checkbox.Root, {
    all: "unset",

    width: "$6",
    height: "$6",
    border: "2px solid $ignite900",
    borderRadius: "$xs",
    backgroundColor: "$gray900",
    overflow: "hidden",
    boxSizing: "border-box",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    lineHeight: 0,

    cursor: "pointer",

    "&[data-state='checked']": {
        backgroundColor: "$ignite300",
    },

    "&:focus, &[data-state='checked']": {
        border: "2px solid $ignite300",
    },
});

const slidIn = keyframes({
    from: {
        transform: "translateY(-100%)",
    },

    to: {
        transform: "translateY(0)",
    },
});

const slideOut = keyframes({
    from: {
        transform: "translateY(0)",
    },

    to: {
        transform: "translateY(-100%)",
    },
});

export const CheckBoxIndicator = styled(Checkbox.Indicator, {
    width: "$4",
    height: "$4",

    color: "$white",

    "&[data-state='checked']": {
        animation: `${slidIn} 200ms ease-out`,
    },

    "&[data-state='unchecked']": {
        animation: `${slideOut} 200ms ease-out`,
    },
});
