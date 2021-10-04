import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Unteens(props) {
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
        <img src="/images/unteens/unteenscover.jpeg" alt="" />

        <img src="/images/unteens/unteenscover2.jpeg" alt="" />

        <img src="/images/unteens/unteenspg1.jpeg" alt="" />

        <img src="/images/unteens/unteenspg2.jpeg" alt="" />

        <img src="/images/unteens/unteenspg3.jpeg" alt="" />

        <img src="/images/unteens/unteenspg4.jpeg" alt="" />

        <img src="/images/unteens/unteenspg5.jpeg" alt="" />

        <img src="/images/unteens/unteenspg6.jpeg" alt="" />

        <img src="/images/unteens/unteenspg7.jpeg" alt="" />

        <img src="/images/unteens/unteenspg8.jpeg" alt="" />

        <img src="/images/unteens/unteenspg9.jpeg" alt="" />

        <img src="/images/unteens/unteenspg10.jpeg" alt="" />

        <img src="/images/unteens/unteenspg11.jpeg" alt="" />

        <img src="/images/unteens/unteenspg12.jpeg" alt="" />

        <img src="/images/unteens/unteenspg13.jpeg" alt="" />

        <img src="/images/unteens/unteenspg14.jpeg" alt="" />

        <img src="/images/unteens/unteenspg15.jpeg" alt="" />

        <img src="/images/unteens/unteenspg16.jpeg" alt="" />

        <img src="/images/unteens/unteenspg17.jpeg" alt="" />

        <img src="/images/unteens/unteenspg18.jpeg" alt="" />

        <img src="/images/unteens/unteenspg19.jpeg" alt="" />

        <img src="/images/unteens/unteenspg20.jpeg" alt="" />

        <img src="/images/unteens/unteenspg21.jpeg" alt="" />

        <img src="/images/unteens/unteenspg22.jpeg" alt="" />

        <img src="/images/unteens/unteenspg23.jpeg" alt="" />

        <img src="/images/unteens/unteenspg24.jpeg" alt="" />

        <img src="/images/unteens/unteenspg25.jpeg" alt="" />
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

export default Unteens;
