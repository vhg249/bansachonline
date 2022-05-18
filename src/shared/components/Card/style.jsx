import styled from "styled-components";

export const Wrapper = styled.div`
    width: 250px;
    padding:32px;
    display: flex;
    flex-direction:column;
    align-items:center;
    border-radius: 10px;
    border:1px solid  #E5E5E5;
    justify-content: space-between;
    .img{
        display:flex;
    flex-direction:column;
    img{
        height:215px;
        width:200px;
        object-fit:contain;
    }

    }
    
    .name{
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
    }
    .flex{
        display:flex;
        justify-content:space-between;
        width: 100%;
       .price{
        font-family: 'Cairo';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #E80E29;

        } 
        img{
            width:48px;
            cursor:pointer;
        }
    }
    
`;