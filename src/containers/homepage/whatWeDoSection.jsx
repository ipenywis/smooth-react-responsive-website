import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { OurService } from "../../components/OurService";
import { SectionTitle } from "../../components/sectionTitle";

//Images
import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";
import { Marginer } from "../../components/marginer";

const WhatWeDoContainer = styled(Element)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function WhatWeDoSection(props) {
  return (
    <WhatWeDoContainer name="whatWeDoSection">
      <SectionTitle>Best Quality Software</SectionTitle>
      <Marginer direction="vertical" margin="5em" />
      <OurService
        title="Fully integrated services"
        description="We build and deliver fully integrated webapps
                    with customized control panels that fit your 
                    compnay needs"
        imgUrl={Service1Img}
      />
      <OurService
        title="Mobile optimized"
        description="We ensure your users gets the best experience
        on their mobile phones. native apps for different
        platforms"
        imgUrl={Service2Img}
        isReverse
      />
      <OurService
        title="Mobile optimized"
        description="We ensure your users gets the best experience
        on their mobile phones. native apps for different
        platforms"
        imgUrl={Service2Img}
      />
    </WhatWeDoContainer>
  );
}
