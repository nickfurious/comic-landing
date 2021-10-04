import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Yoda(props) {
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
        <img src="/images/yoda/yodacover.jpeg" alt="" />
        <img src="/images/yoda/yodacover2.jpeg" alt="" />
        <img src="/images/yoda/yodapg1.jpeg" alt="" />
        <img src="/images/yoda/yodapg2.jpeg" alt="" />
        <img src="/images/yoda/yodapg3.jpeg" alt="" />

        <img src="/images/yoda/yodapg4.jpeg" alt="" />

        <img src="/images/yoda/yodapg5.jpeg" alt="" />

        <img src="/images/yoda/yodapg6.jpeg" alt="" />

        <img src="/images/yoda/yodapg7.jpeg" alt="" />

        <img src="/images/yoda/yodapg8.jpeg" alt="" />

        <img src="/images/yoda/yodapg9.jpeg" alt="" />

        <img src="/images/yoda/yodapg10.jpeg" alt="" />

        <img src="/images/yoda/yodapg11.jpeg" alt="" />

        <img src="/images/yoda/yodapg12.jpeg" alt="" />

        <img src="/images/yoda/yodapg13.jpeg" alt="" />

        <img src="/images/yoda/yodapg14.jpeg" alt="" />

        <img src="/images/yoda/yodapg15.jpeg" alt="" />

        <img src="/images/yoda/yodapg16.jpeg" alt="" />

        <img src="/images/yoda/yodapg17.jpeg" alt="" />

        <img src="/images/yoda/yodapg18.jpeg" alt="" />

        <img src="/images/yoda/yodapg19.jpeg" alt="" />

        <img src="/images/yoda/yodapg20.jpeg" alt="" />
        <img src="/images/yoda/yodapg21.jpeg" alt="" />
        <img src="/images/yoda/yodapg22.jpeg" alt="" />
        <img src="/images/yoda/yodapg23.jpeg" alt="" />
        <img src="/images/yoda/yodapg24.jpeg" alt="" />
        <img src="/images/yoda/yodapg25.jpeg" alt="" />
        <img src="/images/yoda/yodapg26.jpeg" alt="" />
        <img src="/images/yoda/yodapg27.jpeg" alt="" />
        <img src="/images/yoda/yodapg28.jpeg" alt="" />
        <img src="/images/yoda/yodapg29.jpeg" alt="" />
        <img src="/images/yoda/yodapg30.jpeg" alt="" />
        <img src="/images/yoda/yodapg31.jpeg" alt="" />
        <img src="/images/yoda/yodapg32.jpeg" alt="" />
        <img src="/images/yoda/yodapg33.jpeg" alt="" />
        <img src="/images/yoda/yodapg34.jpeg" alt="" />
        <img src="/images/yoda/yodapg35.jpeg" alt="" />
        <img src="/images/yoda/yodapg36.jpeg" alt="" />
        <img src="/images/yoda/yodapg37.jpeg" alt="" />
        <img src="/images/yoda/yodapg38.jpeg" alt="" />
        <img src="/images/yoda/yodapg39.jpeg" alt="" />
        <img src="/images/yoda/yodapg40.jpeg" alt="" />
        <img src="/images/yoda/yodapg41.jpeg" alt="" />
      </FlipPage>
    </Container>
  );
}

const Container = styled.main`
  margin: auto;
  position: relative;
  min-height: calc(100vh - 50px);
  overflow: hidden;
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

export default Yoda;
