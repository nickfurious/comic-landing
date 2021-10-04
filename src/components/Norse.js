import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function Norse(props) {
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
        <img src="/images/norse/norsecover.jpeg" alt="" />

        <img src="/images/norse/norsecover2.jpeg" alt="" />

        <img src="/images/norse/norsepg1.jpeg" alt="" />

        <img src="/images/norse/norsepg2.jpeg" alt="" />

        <img src="/images/norse/norsepg3.jpeg" alt="" />

        <img src="/images/norse/norsepg4.jpeg" alt="" />

        <img src="/images/norse/norsepg5.jpeg" alt="" />

        <img src="/images/norse/norsepg6.jpeg" alt="" />

        <img src="/images/norse/norsepg7.jpeg" alt="" />

        <img src="/images/norse/norsepg8.jpeg" alt="" />

        <img src="/images/norse/norsepg9.jpeg" alt="" />

        <img src="/images/norse/norsepg10.jpeg" alt="" />

        <img src="/images/norse/norsepg11.jpeg" alt="" />

        <img src="/images/norse/norsepg12.jpeg" alt="" />

        <img src="/images/norse/norsepg13.jpeg" alt="" />

        <img src="/images/norse/norsepg14.jpeg" alt="" />

        <img src="/images/norse/norsepg15.jpeg" alt="" />

        <img src="/images/norse/norsepg16.jpeg" alt="" />

        <img src="/images/norse/norsepg17.jpeg" alt="" />

        <img src="/images/norse/norsepg18.jpeg" alt="" />

        <img src="/images/norse/norsepg19.jpeg" alt="" />

        <img src="/images/norse/norsepg20.jpeg" alt="" />

        <img src="/images/norse/norsepg21.jpeg" alt="" />

        <img src="/images/norse/norsepg22.jpeg" alt="" />

        <img src="/images/norse/norsepg23.jpeg" alt="" />

        <img src="/images/norse/norsepg24.jpeg" alt="" />
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

export default Norse;
