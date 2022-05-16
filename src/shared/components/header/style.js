import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  .flex{
    display: flex;
    justify-content: space-between;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #219653;
  border-radius: 50px;
  width: 565px;
  padding: 0 24px;

  & > input {
    border: none;
    width: 80%;
    &:focus{
      outline: none;
      border: none;
    }
  }
`;
