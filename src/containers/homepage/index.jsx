import React from "react";
import styled from "styled-components/macro";

import { TopSection } from "./topSection";

const HomepageContainer = styled.div`
  width: 100%;
`;

export function Homepage(props) {
  return (
    <HomepageContainer>
      <TopSection />
      <div>more content</div>
    </HomepageContainer>
  );
}
