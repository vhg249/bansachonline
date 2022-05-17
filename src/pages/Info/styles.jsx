import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
`;
export const FlexRight = styled.div`
  .title {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;

    color: #3e445a;
  }
  .review {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;

    color: #3e445a;
  }
  .price {
    font-family: "Cairo";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #e80e29;
    margin: 5px 0px;
  }
  .line {
    margin: 20px 10px;
    border: 1px solid #dedcdc;
  }
  .flex {
    display: flex;
    gap: 20px;
    input {
      border-radius: 10px;
      padding: 10px 20px;
      font-size: 18px;
    }
  }
`;
export const Content = styled.div`

  p {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #3e445a;
    margin:20px 0;
  }
  span {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #747c97;
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
  margin-bottom:20px;

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
    padding: 8px 14px;
    cursor: pointer;
  }
`;
export const Chat = styled.div`
    width:100%;
    
    justify-content: center;
`;
