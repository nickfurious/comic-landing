import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Batman(props) {
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
        <img src="/images/batman/batmancover.jpeg" alt="" />

        <img src="/images/batman/batmancover2.jpeg" alt="" />

        <img src="/images/batman/batmanpg1.jpeg" alt="" />

        <img src="/images/batman/batmanpg2.jpeg" alt="" />

        <img src="/images/batman/batmanpg3.jpeg" alt="" />

        <img src="/images/batman/batmanpg4.jpeg" alt="" />

        <img src="/images/batman/batmanpg5.jpeg" alt="" />

        <img src="/images/batman/batmanpg6.jpeg" alt="" />

        <img src="/images/batman/batmanpg7.jpeg" alt="" />

        <img src="/images/batman/batmanpg8.jpeg" alt="" />

        <img src="/images/batman/batmanpg9.jpeg" alt="" />

        <img src="/images/batman/batmanpg10.jpeg" alt="" />

        <img src="/images/batman/batmanpg11.jpeg" alt="" />

        <img src="/images/batman/batmanpg12.jpeg" alt="" />

        <img src="/images/batman/batmanpg13.jpeg" alt="" />

        <img src="/images/batman/batmanpg14.jpeg" alt="" />

        <img src="/images/batman/batmanpg15.jpeg" alt="" />

        <img src="/images/batman/batmanpg16.jpeg" alt="" />

        <img src="/images/batman/batmanpg17.jpeg" alt="" />

        <img src="/images/batman/batmanpg18.jpeg" alt="" />

        <img src="/images/batman/batmanpg19.jpeg" alt="" />
        <img src="/images/batman/batmanpg20.jpeg" alt="" />
        <img src="/images/batman/batmanpg21.jpeg" alt="" />
        <img src="/images/batman/batmanpg22.jpeg" alt="" />
        <img src="/images/batman/batmanpg23.jpeg" alt="" />
        <img src="/images/batman/batmanpg24.jpeg" alt="" />
        <img src="/images/batman/batmanpg25.jpeg" alt="" />
        <img src="/images/batman/batmanpg26.jpeg" alt="" />
        <img src="/images/batman/batmanpg27.jpeg" alt="" />
        <img src="/images/batman/batmanpg28.jpeg" alt="" />
        <img src="/images/batman/batmanpg29.jpeg" alt="" />
        <img src="/images/batman/batmanpg30.jpeg" alt="" />
        <img src="/images/batman/batmanpg31.jpeg" alt="" />
        <img src="/images/batman/batmanpg32.jpeg" alt="" />
        <img src="/images/batman/batmanpg33.jpeg" alt="" />
        <img src="/images/batman/batmanpg34.jpeg" alt="" />
        <img src="/images/batman/batmanpg35.jpeg" alt="" />
        <img src="/images/batman/batmanpg36.jpeg" alt="" />
        <img src="/images/batman/batmanpg37.jpeg" alt="" />
        <img src="/images/batman/batmanpg38.jpeg" alt="" />
        <img src="/images/batman/batmanpg39.jpeg" alt="" />
        <img src="/images/batman/batmanpg40.jpeg" alt="" />
        <img src="/images/batman/batmanpg41.jpeg" alt="" />
        <img src="/images/batman/batmanpg42.jpeg" alt="" />
        <img src="/images/batman/batmanpg43.jpeg" alt="" />
        <img src="/images/batman/batmanpg44.jpeg" alt="" />
        <img src="/images/batman/batmanpg45.jpeg" alt="" />
        <img src="/images/batman/batmanpg46.jpeg" alt="" />
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

export default Batman;
