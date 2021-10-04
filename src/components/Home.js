import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Marvel from "./Marvel";
import DarkHorse from "./DarkHorse";
import Image from "./Image";
import StarWars from "./StarWars";
import DC from "./DC";

const Home = (props) => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Marvel />
      <DarkHorse />
      <Image />
      <StarWars />
      <DC />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
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

export default Home;
