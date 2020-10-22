import React from "react";
import styled from "styled-components";
import BeemaLogo from "../../assets/logo/logo_croped.png";
import { theme } from "../../commonStyles";

const LogoContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;
`;

const LogoText = styled.div`
  margin-top: 5px;
  font-size: 41px;
  font-weight: 900;
  color: ${theme.primary};
`;

export function Logo(props) {
  return (
    <LogoContainer>
      <LogoImg src={BeemaLogo} alt="Beema Logo" />
      <LogoText>Beema</LogoText>
    </LogoContainer>
  );
}
