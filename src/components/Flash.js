import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Flash(props) {
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
        <img src="/images/flash/flashcover.jpeg" alt="" />

        <img src="/images/flash/flashcover2.jpeg" alt="" />

        <img src="/images/flash/flashpg1.jpeg" alt="" />

        <img src="/images/flash/flashpg2.jpeg" alt="" />

        <img src="/images/flash/flashpg3.jpeg" alt="" />

        <img src="/images/flash/flashpg4.jpeg" alt="" />

        <img src="/images/flash/flashpg5.jpeg" alt="" />

        <img src="/images/flash/flashpg6.jpeg" alt="" />

        <img src="/images/flash/flashpg7.jpeg" alt="" />

        <img src="/images/flash/flashpg8.jpeg" alt="" />

        <img src="/images/flash/flashpg9.jpeg" alt="" />

        <img src="/images/flash/flashpg10.jpeg" alt="" />

        <img src="/images/flash/flashpg11.jpeg" alt="" />

        <img src="/images/flash/flashpg12.jpeg" alt="" />

        <img src="/images/flash/flashpg13.jpeg" alt="" />

        <img src="/images/flash/flashpg14.jpeg" alt="" />

        <img src="/images/flash/flashpg15.jpeg" alt="" />

        <img src="/images/flash/flashpg16.jpeg" alt="" />

        <img src="/images/flash/flashpg17.jpeg" alt="" />

        <img src="/images/flash/flashpg18.jpeg" alt="" />

        <img src="/images/flash/flashpg19.jpeg" alt="" />

        <img src="/images/flash/flashpg20.jpeg" alt="" />
        <img src="/images/flash/flashpg21.jpeg" alt="" />
        <img src="/images/flash/flashpg22.jpeg" alt="" />
        <img src="/images/flash/flashpg23.jpeg" alt="" />
        <img src="/images/flash/flashpg24.jpeg" alt="" />
        <img src="/images/flash/flashpg25.jpeg" alt="" />
        <img src="/images/flash/flashpg26.jpeg" alt="" />
        <img src="/images/flash/flashpg27.jpeg" alt="" />
        <img src="/images/flash/flashpg28.jpeg" alt="" />
        <img src="/images/flash/flashpg29.jpeg" alt="" />
        <img src="/images/flash/flashpg30.jpeg" alt="" />
        <img src="/images/flash/flashpg31.jpeg" alt="" />
        <img src="/images/flash/flashpg32.jpeg" alt="" />
        <img src="/images/flash/flashpg33.jpeg" alt="" />
        <img src="/images/flash/flashpg34.jpeg" alt="" />
        <img src="/images/flash/flashpg35.jpeg" alt="" />
        <img src="/images/flash/flashpg36.jpeg" alt="" />
        <img src="/images/flash/flashpg37.jpeg" alt="" />
        <img src="/images/flash/flashpg38.jpeg" alt="" />
        <img src="/images/flash/flashpg39.jpeg" alt="" />
        <img src="/images/flash/flashpg40.jpeg" alt="" />
        <img src="/images/flash/flashpg41.jpeg" alt="" />
        <img src="/images/flash/flashpg42.jpeg" alt="" />
        <img src="/images/flash/flashpg43.jpeg" alt="" />
        <img src="/images/flash/flashpg44.jpeg" alt="" />
        <img src="/images/flash/flashpg45.jpeg" alt="" />
        <img src="/images/flash/flashpg46.jpeg" alt="" />
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

export default Flash;
