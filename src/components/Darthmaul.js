import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Darthmaul(props) {
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
        <img src="/images/darthmaul/darthmaulcover.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulcover2.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg1.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg2.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg3.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg4.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg5.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg6.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg7.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg8.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg9.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg10.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg11.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg12.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg13.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg14.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg15.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg16.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg17.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg18.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg19.jpeg" alt="" />

        <img src="/images/darthmaul/darthmaulpg20.jpeg" alt="" />
        <img src="/images/darthmaul/darthmaulpg21.jpeg" alt="" />
        <img src="/images/darthmaul/darthmaulpg22.jpeg" alt="" />
        <img src="/images/darthmaul/darthmaulpg23.jpeg" alt="" />
        <img src="/images/darthmaul/darthmaulpg24.jpeg" alt="" />
        <img src="/images/darthmaul/darthmaulpg25.jpeg" alt="" />
        <img src="/images/darthmaul/darthmaulpg26.jpeg" alt="" />
        <img src="/images/darthmaul/darthmaulpg27.jpeg" alt="" />
        <img src="/images/darthmaul/darthmaulpg28.jpeg" alt="" />
        <img src="/images/darthmaul/darthmaulpg29.jpeg" alt="" />
        <img src="/images/darthmaul/darthmaulpg30.jpeg" alt="" />
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

export default Darthmaul;
