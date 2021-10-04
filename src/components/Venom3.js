import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Venom3(props) {
  return (
    <Container>
      <FlipPage
        width={453}
        height={600}
        uncutPages={true}
        showSwipeHint
        style={{
          marginTop: "30px",
          marginLeft: "auto",
          marginRight: "auto",
          size: "stretch",
        }}
      >
        <img src="/images/venom3/venom3cover.jpeg" alt="" />

        <img src="/images/venom3/venom3cover2.jpeg" alt="" />

        <img src="/images/venom3/venom3pg1.jpeg" alt="" />

        <img src="/images/venom3/venom3pg2.jpeg" alt="" />

        <img src="/images/venom3/venom3pg3.jpeg" alt="" />

        <img src="/images/venom3/venom3pg4.jpeg" alt="" />

        <img src="/images/venom3/venom3pg5.jpeg" alt="" />

        <img src="/images/venom3/venom3pg6.jpeg" alt="" />

        <img src="/images/venom3/venom3pg7.jpeg" alt="" />

        <img src="/images/venom3/venom3pg8.jpeg" alt="" />

        <img src="/images/venom3/venom3pg9.jpeg" alt="" />

        <img src="/images/venom3/venom3pg10.jpeg" alt="" />

        <img src="/images/venom3/venom3pg11.jpeg" alt="" />

        <img src="/images/venom3/venom3pg12.jpeg" alt="" />

        <img src="/images/venom3/venom3pg13.jpeg" alt="" />

        <img src="/images/venom3/venom3pg14.jpeg" alt="" />

        <img src="/images/venom3/venom3pg15.jpeg" alt="" />

        <img src="/images/venom3/venom3pg16.jpeg" alt="" />

        <img src="/images/venom3/venom3pg17.jpeg" alt="" />

        <img src="/images/venom3/venom3pg18.jpeg" alt="" />

        <img src="/images/venom3/venom3pg19.jpeg" alt="" />

        <img src="/images/venom3/venom3pg20.jpeg" alt="" />
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

export default Venom3;
