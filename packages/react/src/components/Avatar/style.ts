import * as Avatar from "@radix-ui/react-avatar";

import { styled } from "../../styles";

export const AvatarContainer = styled(Avatar.Root, {
    width: "$16",
    height: "$16",
    borderRadius: "$full",

    display: "inline-block",
    overflow: "hidden",
});

export const AvatarImage = styled(Avatar.Image, {
    width: "100%",
    height: "100%",
    borderRadius: "inherit",

    objectFit: "cover",
});

export const AvatarFallback = styled(Avatar.Fallback, {
    width: "100%",
    height: "100%",
    backgroundColor: "$gray600",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "$gray800",

    svg: {
        width: "$6",
        height: "$6",
    },
});
