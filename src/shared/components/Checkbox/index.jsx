import { useState } from "react";
import styled from "styled-components";
import active from "../../../assets/images/active.png";
import checkbox from "../../../assets/images/checkbox.png";
import {Flex} from "./styles"
import {Checkbox} from "@mui/material";

export const Checkboxs = (props) =>{
    
    const [isActive, setIsActive] = useState('');
    const onChoose = (event)=>{
        props.setIsActive(event.target.checked);
        props.setName(props.name);
    }
    return (
        <Flex>
        <Checkbox  color="success" onChange={onChoose} />
        <p>{props.name}</p>
        </Flex>


    )
}
