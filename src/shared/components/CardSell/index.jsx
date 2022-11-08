import { Wrapper } from "./style"
import  btn_add from "../../../assets/images/button-add.png";
import book from "../../../assets/images/img-product.png";
import { Button } from "../Button";

export const CardSell = (props) =>{
    return (
        <Wrapper>

            <div className="img">
                <img src={props.data.image} alt="book" />
                <p className="title">{props.data.title}</p>
            </div>
            <div className="flex">
                <p className="price">{props.data.price} BNB</p>
                
                <Button>Sell</Button>
            </div>

        </Wrapper>
    )
}