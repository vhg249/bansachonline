import { Wrapper } from "./style"
import  btn_add from "../../../assets/images/button-add.png";
import book from "../../../assets/images/img-product.png";

export const Card = (props) =>{
    return (
        <Wrapper>

            <div className="img">
                <img src={props.data.image} alt="book" />
                <p className="title">{props.data.name}</p>
            </div>
            <div className="flex">
                <p className="price">${props.data.price}</p>
                
                <img src={btn_add} alt="btn_add" />
            </div>

        </Wrapper>
    )
}