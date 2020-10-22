import React from "react";
import styled from "styled-components";

//Images
import BackgroundImage from "../../assets/pictures/company_team.jpg";
import { Button } from "../../components/button";
import { Logo } from "../../components/logo";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImage});
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  padding-top: 10%;
`;

const TextContainer = styled.div`
  margin-top: 3em;
  margin-bottom: 2em;
  text-align: center;
`;

const MotivationalText = styled.h1`
  font-weight: medium;
  color: #fff;
  line-height: 1.5;
  margin: 0;
  font-size: 36px;
`;

export function TopSection(props) {
  return (
    <TopContainer>
      <BackgroundFilter>
        <Logo />
        <TextContainer>
          <MotivationalText>Software Development</MotivationalText>
          <MotivationalText>From the best in the Industry</MotivationalText>
        </TextContainer>
        <Button>Start your Project</Button>
      </BackgroundFilter>
    </TopContainer>
  );
}
