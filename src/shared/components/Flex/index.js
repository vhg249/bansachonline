import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};

  ${({ gap }) => gap && `gap: ${gap}`};
`;

const Flex = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
  ...rest
}) => {
  return (
    <StyledFlex
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      gap={gap}
      {...rest}
    >
      {children}
    </StyledFlex>
  );
};
export default Flex;
