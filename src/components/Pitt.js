import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Walkingdead(props) {
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
        <img src="/images/pitt/pittcover.jpeg" alt="" />

        <img src="/images/pitt/pittpg1.jpeg" alt="" />

        <img src="/images/pitt/pittpg2.jpeg" alt="" />

        <img src="/images/pitt/pittpg3.jpeg" alt="" />

        <img src="/images/pitt/pittpg4.jpeg" alt="" />

        <img src="/images/pitt/pittpg5.jpeg" alt="" />

        <img src="/images/pitt/pittpg6.jpeg" alt="" />

        <img src="/images/pitt/pittpg7.jpeg" alt="" />

        <img src="/images/pitt/pittpg8.jpeg" alt="" />

        <img src="/images/pitt/pittpg9.jpeg" alt="" />

        <img src="/images/pitt/pittpg10.jpeg" alt="" />

        <img src="/images/pitt/pittpg11.jpeg" alt="" />

        <img src="/images/pitt/pittpg12.jpeg" alt="" />

        <img src="/images/pitt/pittpg13.jpeg" alt="" />

        <img src="/images/pitt/pittpg14.jpeg" alt="" />

        <img src="/images/pitt/pittpg15.jpeg" alt="" />

        <img src="/images/pitt/pittpg16.jpeg" alt="" />

        <img src="/images/pitt/pittpg17.jpeg" alt="" />

        <img src="/images/pitt/pittpg18.jpeg" alt="" />

        <img src="/images/pitt/pittpg19.jpeg" alt="" />

        <img src="/images/pitt/pittpg20.jpeg" alt="" />
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

export default Walkingdead;
