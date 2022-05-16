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
  padding: 0 0 0 24px;

  & > input {
    border: none;
    width: 80%;
    &:focus{
      outline: none;
      border: none;
    }
  }
  .icon{
    background: #219653;
    border-radius: 0px 50px 50px 0px;
    padding: 7px 14px;
    cursor: pointer;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Work Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: #3E445A;
  gap: 12px;
  cursor: pointer;
  &>img{
    width: 40px;
  }
  .bold{
    font-weight: 600;
  }
`;