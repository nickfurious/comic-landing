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
        <img src="/images/walkingdead/walkingdeadcover.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg1.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg2.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg3.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg4.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg5.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg6.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg7.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg8.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg9.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg10.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg11.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg12.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg13.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg14.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg15.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg16.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg17.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg18.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg19.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg20.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg21.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg22.jpeg" alt="" />

        <img src="/images/walkingdead/walkingdeadpg23.jpeg" alt="" />
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
