import styled from "styled-components";

export const PaymentWrapper = styled.div`
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    color: #219653;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
`;
export const OrderList = styled.div`
  //  max-height: 80vh;
  //overflow-y: scroll;
`;
export const VoucherWrapper = styled.div``;
export const VoucherList = styled.div`
  border: 1px solid #219653;
  border-radius: 10px;
  padding: 20px 24px;
`;
export const VoucherItem = styled.div`
  border-bottom: 1px solid #f2efef;
  padding: 10px 0;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  & > div {
    &:first-child {
      width: 75%;
    }
    &:last-child {
      width: 25%;
      & > button{
        width: 100%;
      }
    }
  }
  .code {
    font-size: 18px;
    line-break: 22px;
    font-weight: 600;
  }
  .describe {
    font-size: 14px;
    line-height: 18px;
  }
`;
export const FormWrapper = styled.div`
  margin-bottom: 50px;
  &>div{
    width: 100%;
  }
  .submit_btn{
    text-align: center;
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
      flex-basis: 60%;
    }
    &:nth-child(2){
      flex-basis: 20%;
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
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #C92127;
  font-weight: 600;
`;