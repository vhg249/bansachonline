import { Wrapper } from "./style"
import  btn_add from "../../../assets/images/button-add.png";
import book from "../../../assets/images/img-product.png";

export const Card = () =>{
    return (
        <Wrapper>

            <div className="img">
                <img src={book} alt="book" />
                <p className="title">Oscar Mayer Deli Fresh Smoked Turkey Breast Lunch Meat</p>
            </div>
            <div className="flex">
                <p className="price">$9.24</p>
                <img src={btn_add} alt="btn_add" />
            </div>

        </Wrapper>
    )
}