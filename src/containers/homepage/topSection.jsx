import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

//Images
import BackgroundImage from "../../assets/pictures/company_team.jpg";
import { Button } from "../../components/button";
import { DownArrow } from "../../components/downArrow";
import { Logo } from "../../components/logo";
import { scroller, animateScroll as scroll } from "react-scroll";

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
  position: relative;
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

const BottomArrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("whatWeDoSection", { smooth: true, duration: 1500 });
  };

  return (
    <Element name="topContainerSection">
      <TopContainer>
        <BackgroundFilter>
          <Logo />
          <TextContainer>
            <MotivationalText>Software Development</MotivationalText>
            <MotivationalText>From the best in the Industry</MotivationalText>
          </TextContainer>
          <Button>Start your Project</Button>
          <BottomArrow onClick={scrollToNextSection}>
            <DownArrow />
          </BottomArrow>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
}
