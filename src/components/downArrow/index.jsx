import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../commonStyles";

const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(113, 113, 113, 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: #fff;
  padding-top: 2px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;

  &:hover {
    border: 2px solid ${theme.primary};
  }
`;

export function DownArrow(props) {
  return (
    <ArrowContainer>
      <FontAwesomeIcon icon={faAngleDown} />
    </ArrowContainer>
  );
}
