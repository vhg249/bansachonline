import React from "react";
import { StyledButton } from "./style";

export const Button = (props) => {
  return (
    <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
  );
};
