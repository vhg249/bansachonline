import { FlexRight, Wrapper,Content,SearchInput,Chat } from "./styles";
import product from "../../assets/images/product-big.png";
import add from "../../assets/images/Add-to-card.png";
import chatIcon from "../../assets/images/Chat-icon.png";

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
        <div className="flex">
          <input type="number" placeholder="quantity"/>
          <img src={add} />
        </div>
        <Content>
        

          <p>Color:<span> ELN001 </span></p>
          <p>Categories:<span> Baking Ingredients, Sugars & Sweeteners </span></p>
          <p>Tags:<span> Sweet, Vegetables, Food </span></p>

        </Content>
        
      </FlexRight>
      
    </Wrapper>
    <Chat>
    <SearchInput>
                    <input type="text" placeholder="Thêm bình luận" />
                    <div className="icon">
                        <img src={chatIcon} alt={"search"} />
                    </div>
                </SearchInput>
                </Chat>
    </div>
  );
};

