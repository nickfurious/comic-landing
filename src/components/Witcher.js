import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Witcher(props) {
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
        <img src="/images/witcher/witchercover.jpeg" alt="" />

        <img src="/images/witcher/witchercover2.jpeg" alt="" />

        <img src="/images/witcher/witcherpg1.jpeg" alt="" />

        <img src="/images/witcher/witcherpg2.jpeg" alt="" />

        <img src="/images/witcher/witcherpg3.jpeg" alt="" />

        <img src="/images/witcher/witcherpg4.jpeg" alt="" />

        <img src="/images/witcher/witcherpg5.jpeg" alt="" />

        <img src="/images/witcher/witcherpg6.jpeg" alt="" />

        <img src="/images/witcher/witcherpg7.jpeg" alt="" />

        <img src="/images/witcher/witcherpg8.jpeg" alt="" />

        <img src="/images/witcher/witcherpg9.jpeg" alt="" />

        <img src="/images/witcher/witcherpg10.jpeg" alt="" />

        <img src="/images/witcher/witcherpg11.jpeg" alt="" />

        <img src="/images/witcher/witcherpg12.jpeg" alt="" />

        <img src="/images/witcher/witcherpg13.jpeg" alt="" />

        <img src="/images/witcher/witcherpg14.jpeg" alt="" />

        <img src="/images/witcher/witcherpg15.jpeg" alt="" />

        <img src="/images/witcher/witcherpg16.jpeg" alt="" />

        <img src="/images/witcher/witcherpg17.jpeg" alt="" />

        <img src="/images/witcher/witcherpg18.jpeg" alt="" />

        <img src="/images/witcher/witcherpg19.jpeg" alt="" />

        <img src="/images/witcher/witcherpg20.jpeg" alt="" />

        <img src="/images/witcher/witcherpg21.jpeg" alt="" />

        <img src="/images/witcher/witcherpg22.jpeg" alt="" />
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

export default Witcher;
