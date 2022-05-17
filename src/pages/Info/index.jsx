import { FlexRight, Wrapper } from "./styles";
import product from "../../assets/images/product-big.png";
export const Info = () => {
  return (
    <div className="container">
    <Wrapper>
      <div>
        <img className="img" src={product} />
      </div>
      <FlexRight>
        <p className="title">
          Truvia Original Calorie-Free Sweetener from the Stevia Leaf, 17 oz.
          Spoonable Refill Bag, Stevia Leaf Extract blended with Erythritol
          Sweetener
        </p>
        <p className="review">113 reviews</p>
        <p className="price">$15.12  - $30.00</p>
        <div className="line"></div>
      </FlexRight>
    </Wrapper>
    </div>
  );
};
