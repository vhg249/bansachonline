import styled from "styled-components";

export const StyledButton = styled.button`
  width: 208px;
  background: ${(props) => props.disabled ? "gray" : "#219653"};
  border-radius: 50px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  padding: 14px 0;
  
`;