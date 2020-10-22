import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 34px;
  font-weight: black;
  color: #000;
  margin-top: 1em;
`;

export function SectionTitle(props) {
  return <Title>{props.children}</Title>;
}
