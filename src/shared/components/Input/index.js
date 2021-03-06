import React from "react";
import { InputGroup } from "./style";

export const Input = (props) => {
  return (
    <InputGroup flexDirection="column">
      <label>
        {props.label}
          {props.required && <span>*</span>}
      </label>
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder && props.placeholder}
        required={props.required}
        disabled={props.disabled}
        onChange={(e) => {
            props.setValue && props.setValue(e.target.value)
        }}
      />
    </InputGroup>
  );
};
