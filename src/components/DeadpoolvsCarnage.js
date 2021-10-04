import React from "react";
import styled from "styled-components";
import FlipPage from "react-pageflip";

function DeadpoolvsCarnage(props) {
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
        <img src="/images/dpvscarnagecover.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnagecover2.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg1.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg2.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg3.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg4.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg5.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg6.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg7.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg8.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg9.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg10.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg11.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg12.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg13.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg14.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg15.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg16.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg17.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg18.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/dpvscarnpg19.jpeg" alt="" />

        <img src="/images/deadpoolvscarn/end.jpeg" alt="" />
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

export default DeadpoolvsCarnage;
