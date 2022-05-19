import styled from "styled-components";
import {VoucherList} from "../payment/style";

export const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
`;
export const InfoList = styled(VoucherList)`
  & > div{
    & > p:last-child{
      text-align: right;
    }
  }
  .status{
    width: 200px;
    input{
      text-align: right;
    }
  }
`;
