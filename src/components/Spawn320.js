import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Spawn320(props) {
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
        <img src="/images/spawn320/spawn320cover.jpeg" alt="" />

        <img src="/images/spawn320/spawn320cover2.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg1.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg2.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg3.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg4.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg5.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg6.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg7.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg8.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg9.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg10.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg11.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg12.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg13.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg14.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg15.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg16.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg17.jpeg" alt="" />

        <img src="/images/spawn320/spawn320pg18.jpeg" alt="" />
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

export default Spawn320;
