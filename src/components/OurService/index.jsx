import React from "react";
import styled from "styled-components";

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReverse }) => isReverse && "row-reverse"};
  margin-bottom: 5em;
  max-width: 60%;
`;

const ServiceImg = styled.img`
  width: 22em;
  height: 16em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: medium;
  color: #000;
  margin-bottom: 10px;
`;

const Details = styled.p`
  font-size: 20px;
  color: #7a7a7a;
  max-width: 80%;
  text-align: center;
`;

export function OurService(props) {
  const { title, description, imgUrl, isReverse } = props;

  return (
    <ServiceContainer isReverse={isReverse}>
      <ContentContainer>
        <Title>{title}</Title>
        <Details>{description}</Details>
      </ContentContainer>
      <ServiceImg src={imgUrl} />
    </ServiceContainer>
  );
}
