import React from "react";
import styled from "styled-components/macro";

import { TopSection } from "./topSection";
import { WhatWeDoSection } from "./whatWeDoSection";

const HomepageContainer = styled.div`
  width: 100%;
`;

export function Homepage(props) {
  return (
    <HomepageContainer>
      <TopSection />
      <WhatWeDoSection />
    </HomepageContainer>
  );
}
