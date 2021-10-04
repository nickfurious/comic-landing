import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Cyberpunk(props) {
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
        <img src="/images/cyberpunk/cyberpunkcover.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkcover2.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg1.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg2.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg3.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg4.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg5.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg6.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg7.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg8.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg9.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg10.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg11.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg12.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg13.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg14.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg15.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg16.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg17.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg18.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg19.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg20.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg21.jpeg" alt="" />

        <img src="/images/cyberpunk/cyberpunkpg22.jpeg" alt="" />
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

export default Cyberpunk;
