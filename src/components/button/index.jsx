import React from "react";
import styled from "styled-components";
import { theme } from "../../commonStyles";

const ButtonContainer = styled.button`
  padding: 7px 13px;
  border-radius: 5px;
  background-color: ${theme.primary};
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 230ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid ${theme.primary};
  }
`;

export function Button(props) {
  return (
    <ButtonContainer type={props.type}>
      {props.children || props.text}
    </ButtonContainer>
  );
}
