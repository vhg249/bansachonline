import { Wrapper } from "./style"
import  btn_add from "../../../assets/images/button-add.png";
import book from "../../../assets/images/img-product.png";

export const Card = (props) =>{
    return (
        <Wrapper>

            <div className="img">
                <img src={props.data.productImage} alt="book" />
                <p className="title">{props.data.title}</p>
            </div>
            <div className="flex">
                <p className="price">{Number(props.data.price)} BNB</p>
                
                <img src={btn_add} alt="btn_add" />
            </div>

        </Wrapper>
    )
}