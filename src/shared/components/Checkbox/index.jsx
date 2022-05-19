import styled from "styled-components";
import active from "../../../assets/images/active.png";
import checkbox from "../../../assets/images/checkbox.png";
export const Checkbox = (props) =>{
    return (
        <img src={props.isActive ? active : checkbox} />

    )
}
