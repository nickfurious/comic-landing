import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Cyborg(props) {
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
        <img src="/images/cyborg/cyborgcover.jpeg" alt="" />

        <img src="/images/cyborg/cyborgcover2.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg1.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg2.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg3.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg4.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg5.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg6.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg7.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg8.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg9.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg10.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg11.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg12.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg13.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg14.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg15.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg16.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg17.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg18.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg19.jpeg" alt="" />

        <img src="/images/cyborg/cyborgpg20.jpeg" alt="" />
        <img src="/images/cyborg/cyborgpg21.jpeg" alt="" />
        <img src="/images/cyborg/cyborgpg22.jpeg" alt="" />
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

export default Cyborg;
