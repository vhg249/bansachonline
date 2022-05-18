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
      flex-basis: 75%;
    }
    &:last-child {
      flex-basis: 25%;
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
  
`;