import styled from "styled-components";

export const Wrapper = styled.div`
        display: flex;
        padding:50px 100px;

`;
export const Categories = styled.div`
    border-right: 1px solid #DEDCDC;
    width:30%;
    padding:0px 20px;
    .title{
        font-family: 'Cairo';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 45px;
        display: flex;
        align-items: center;
        color: #219653;
    }
    .list{
        
        img{
            cursor:pointer;
            
        }
    
    .item{display:flex;
        gap:10px;
        align-items:center;
        p{
            font-family: 'Work Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 40px;
            color: #3E445A;

        }
        img{
            width:20px;
        }
    }
}
`;
export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:10px;
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