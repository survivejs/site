import React from "react";
import styled from "react-emotion";
import theme from "../styles/theme";

const Container = styled.div`
  position: relative;
  height: calc(22vh + 6vw);
  min-height: 260px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: ${theme.color.brandDark};
  background-size: cover;
  background-position: 50% 50%;
  //filter: brightness(0.4);
`;

const Heading = styled.h1`
  height: inherit;
  min-height: inherit;
  margin: 0;
  padding: ${theme.space.m};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.color.background};
  line-height: 1.2;
  font-size: calc(1rem + 1vh + 2vw);
`;

const Extra = styled.small`
  position: absolute;
  right: ${theme.space.s};
  bottom: ${theme.space.s};
  line-height: 1;
  font-size: ${theme.fontSize.zeta};
  font-family: ${theme.font.small};
  opacity: 0.6;

  & a {
    color: ${theme.color.background};
  }
`;

const PageHeading = ({ image, extra, children }) => (
  <Container>
    {image && (
      <Image
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    )}
    <Heading>{children}</Heading>
    {extra && (
      <Extra
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: extra }}
      />
    )}
  </Container>
);

export default PageHeading;
