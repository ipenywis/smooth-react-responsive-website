import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";

import BackgroundImg from "../../assets/pictures/company_team.jpg";
import { Button } from "../../components/button";
import { DownArrow } from "../../components/downArrow";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.89);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
  text-align: center;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };

  return (
    <Element name="topSection">
      <TopContainer>
        <BackgroundFilter>
          <Navbar />
          <Marginer direction="vertical" margin="8em" />
          <Logo />
          <Marginer direction="vertical" margin="4em" />
          <MotivationalText>Software Development</MotivationalText>
          <MotivationalText>From the Best in the Industry</MotivationalText>
          <Marginer direction="vertical" margin="2em" />
          <Button>Start your Project</Button>
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
}
