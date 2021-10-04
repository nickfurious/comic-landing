import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Kyloren(props) {
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
        <img src="/images/kyloren/kylorencover.jpeg" alt="" />

        <img src="/images/kyloren/kylorencover2.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg1.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg2.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg3.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg4.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg5.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg6.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg7.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg8.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg9.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg10.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg11.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg12.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg13.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg14.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg15.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg16.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg17.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg18.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg19.jpeg" alt="" />

        <img src="/images/kyloren/kylorenpg20.jpeg" alt="" />
        <img src="/images/kyloren/kylorenpg21.jpeg" alt="" />
        <img src="/images/kyloren/kylorenpg22.jpeg" alt="" />
        <img src="/images/kyloren/kylorenpg23.jpeg" alt="" />
        <img src="/images/kyloren/kylorenpg24.jpeg" alt="" />
        <img src="/images/kyloren/kylorenpg25.jpeg" alt="" />
        <img src="/images/kyloren/kylorenpg26.jpeg" alt="" />
        <img src="/images/kyloren/kylorenpg27.jpeg" alt="" />
        <img src="/images/kyloren/kylorenpg28.jpeg" alt="" />
        <img src="/images/kyloren/kylorenpg29.jpeg" alt="" />
        <img src="/images/kyloren/kylorenpg30.jpeg" alt="" />
        <img src="/images/kyloren/kylorenpg31.jpeg" alt="" />
        <img src="/images/kyloren/kylorenpg32.jpeg" alt="" />
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

export default Kyloren;
