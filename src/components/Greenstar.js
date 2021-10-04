import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Greenstar(props) {
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
        <img src="/images/greenstar/greenstarcover.jpeg" alt="" />

        <img src="/images/greenstar/greenstarcover2.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg1.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg2.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg3.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg4.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg5.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg6.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg7.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg8.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg9.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg10.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg11.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg12.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg13.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg14.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg15.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg16.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg17.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg18.jpeg" alt="" />

        <img src="/images/greenstar/greenstarpg19.jpeg" alt="" />
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

export default Greenstar;
