import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function DeadpoolvsCarnage(props) {
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
        <img src="/images/hulkerine/hulkerinecover.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinecover2.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg1.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg2.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg3.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg4.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg5.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg6.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg7.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg8.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg9.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg10.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg11.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg12.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg13.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg14.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg15.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg16.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg17.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg18.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg19.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg20.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg21.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg22.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg23.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg24.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg25.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg26.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg27.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg28.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg29.jpeg" alt="" />

        <img src="/images/hulkerine/hulkerinepg30.jpeg" alt="" />
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

export default DeadpoolvsCarnage;
