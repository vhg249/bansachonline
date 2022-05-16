import styled from "styled-components";
import Flex from "../Flex";

export const InputGroup = styled(Flex)`
  width: 564px;
  gap: 5px;
  margin-bottom: 15px;
  & > label {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    color: #747c97;
    & > span {
      color: red;
    }
  }
  & > input {
    border: 2px solid #dedcdc;
    border-radius: 50px;
    padding: 16px 24px;
    &:focus {
      border: 2px solid #219653;
      outline: none;
    }
  }
`;
