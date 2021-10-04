import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Hulkpitt(props) {
  return (
    <Container>
      <FlipPage
        width={453}
        height={600}
        uncutPages={true}
        showSwipeHint
        style={{
          marginTop: "60px",
          marginLeft: "auto",
          marginRight: "auto",
          size: "stretch",
        }}
      >
        <img src="/images/hulkpitt/hulkpittcover.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittcover2.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg1.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg2.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg3.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg4.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg5.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg6.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg7.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg8.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg9.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg10.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg11.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg12.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg13.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg14.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg15.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg16.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg17.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg18.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg19.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg20.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg21.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg22.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg23.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg24.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg25.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg26.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg27.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg28.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg29.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg30.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg31.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg32.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg33.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg34.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg35.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg36.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg37.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg38.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg39.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg40.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg41.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg42.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg43.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg44.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg45.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg46.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg47.jpeg" alt="" />

        <img src="/images/hulkpitt/hulkpittpg48.jpeg" alt="" />
      </FlipPage>
    </Container>
  );
}

const Container = styled.main`
  margin: auto;
  position: relative;
  min-height: calc(100vh - 50px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/dark-blue-background.jpeg") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Hulkpitt;
