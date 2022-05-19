import styled from "styled-components";

export const BillWrapper = styled.div`
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    text-align: center;
    color: #219653;
  }
`;
export const BillItem = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  padding: 24px 30px;
  display: flex;
  //align-items: center;
  flex-direction: column;
  margin: 20px 0;
  cursor: pointer;
`;
export const BillList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #f0f0f0;
  padding: 24px 0;

  & > div{
    &:first-child{
      flex-basis: 60%;
      color: black;
    }
    &:nth-child(2){
      flex-basis: 20%;
      color: black;
    }
    &:nth-child(3){
      flex-basis: 20%;
      text-align: right;
      color: #C92127;
      font-weight: 600;
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
export const Total = styled.div`
  background: #FFFFFF;
  border-radius: 15px;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #C92127;
  font-weight: 600;
`;