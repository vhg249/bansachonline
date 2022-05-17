import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  .flex{
    display: flex;
    justify-content: space-between;
  }
  .logo{
    height: 40px;
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
  img{
    width: 40px;
  }
  .bold{
    font-weight: 600;
  }
`;