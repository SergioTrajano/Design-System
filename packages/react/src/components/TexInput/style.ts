import { styled } from "../../styles";

export const TextInputContainer = styled("div", {
    border: "2px solid $gray900",
    borderRadius: "$sm",
    backgroundColor: "$gray900",
    boxSizing: "border-box",

    display: "flex",
    alignItems: "center",

    "&:has(input:focus)": {
        borderColor: "$ignite300",
    },

    "&:has(input:disabled)": {
        opacity: 0.5,

        cursor: "not-allowed",
    },

    variants: {
        size: {
            sm: {
                padding: "$2 $3",
            },
            md: {
                padding: "$3 $4",
            },
        },
    },

    defaultVariants: {
        size: "md",
    },
});

export const Prefix = styled("span", {
    fontFamily: "$default",
    fontSize: "$sm",
    fontWeight: "$regular",
    color: "$gray400",
});

export const Input = styled("input", {
    width: "100%",
    border: 0,
    backgroundColor: "transparent",

    fontFamily: "$default",
    fontSize: "$sm",
    fontWeight: "$regular",
    color: "$white",

    "&:focus": {
        outline: 0,
    },

    "&:disabled": {
        cursor: "not-allowed",
    },

    "&::placeholder": {
        color: "$gray400",
    },
});
