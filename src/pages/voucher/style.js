import styled from "styled-components";

export const VoucherWrapper = styled.div`
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    text-align: center;
    color: #219653;
  }
`;
export const VoucherList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
export const VoucherItem = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0;
  font-size: 16px;
  .save_btn{
    & > button{
      width: 100px;
    }
  }
  .name{
    font-size: 18px;
    font-weight: bold;
  }
  
`;