import styled from "styled-components";

export const AdminWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  width: 100%;
  table{
    th{
      font-weight: bold;
    }
  }
`;
export const Content = styled.div`
  padding: 20px;
`;
export const Wrapper = styled.div`
  h3{
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    text-align: center;
    color: #219653;
  }
`;
export const WrapTable = styled.div`
overflow-x: scroll;
width: 70vw;
  *{
    text-align: center;
  }
  td, th{
    white-space: nowrap;
  }
`;