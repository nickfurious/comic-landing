import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Venomcarnage(props) {
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
        <img src="/images/venomcarnage/venomcarnagecover.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnagecover2.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg1.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg2.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg3.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg4.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg5.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg6.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg7.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg8.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg9.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg10.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg11.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg12.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg13.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg14.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg15.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg16.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg17.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg18.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg19.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg20.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg21.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg22.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg23.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg24.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg25.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg26.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg27.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg28.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg29.jpeg" alt="" />

        <img src="/images/venomcarnage/venomcarnpg30.jpeg" alt="" />
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

export default Venomcarnage;
