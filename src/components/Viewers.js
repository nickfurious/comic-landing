import styled from "styled-components";

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <a className="smoothscroll" href="#marvel">
          <img src="/images/viewers-marvel.png" alt="" className="marvel" />
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            className="videos"
            muted={true}
          >
            <source src="/videos/marvel-video.mp4" type="video/mp4" />
          </video>
        </a>
      </Wrap>
      <Wrap>
        <a className="smoothscroll" href="#darkhorse">
          <img
            src="/images/viewers-darkhorse.png"
            alt=""
            className="darkhorse"
          />
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            className="videos"
            muted={true}
          >
            <source src="/videos/darkhorse-video.mp4" type="video/mp4" />
          </video>
        </a>
      </Wrap>
      <Wrap>
        <a className="smoothscroll" href="#image">
          <img src="/images/viewers-image.png" alt="" className="image" />
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            className="videos"
            muted={true}
          >
            <source src="/videos/image-video.mp4" type="video/mp4" />
          </video>
        </a>
      </Wrap>
      <Wrap>
        <a className="smoothscroll" href="#starwars">
          <img src="/images/viewers-starwars.png" alt="" className="starwars" />
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted={true}
            muted={true}
          >
            <source src="/videos/star-wars-video.mp4" type="video/mp4" />
          </video>
        </a>
      </Wrap>
      <Wrap>
        <a className="smoothscroll" href="#dc">
          <img src="/images/viewers-dc.png" alt="" className="dc" />
          <video
            autoPlay={true}
            loop={true}
            playsInline={true}
            className="videos"
            muted={true}
          >
            <source src="/videos/dc-video.mp4" type="video/mp4" />
          </video>
        </a>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) opx 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  .dc {
    height: 100px;
    width: 100px;
    margin: auto;
  }

  .darkhorse,
  .image {
    height: 116px;
    width: 71px;
    margin: auto;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }

    .videos {
      object-fit: cover;
    }
  }
`;

export default Viewers;
