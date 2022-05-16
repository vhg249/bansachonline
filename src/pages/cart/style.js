import styled from "styled-components";

export const CartWrapper = styled.div`
  margin-top: 30px;
  h1{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #219653;
  }
`;
export const Item = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  
  & > div{
    &:first-child{
      flex-basis: 5%;
    }
    &:nth-child(2){
      flex-basis: 50%;
    }
    &:nth-child(3){
      flex-basis: 10%;
      text-align: center;
    }
    &:nth-child(4){
      flex-basis: 20%;
      color: #C92127;
      font-weight: 600;
      text-align: center;
    }
  }
  .image{
    display: flex;
    gap: 20px;
    & > img{
      max-height: 120px;
      width: auto;
      object-fit: contain;
    }
    .name, .price{
      font-size: 16px;
    }
    .price{
      font-weight: 600;
    }
  }
`;