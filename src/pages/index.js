import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import Head from "next/head";
import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "../components/Button";
import Input from "../components/Input";
import Footer from "../components/Footer";

export default function App() {
  const [apiCarrousel, setapiCarrousel] = useState([]);
  const [apiHome, setApiHome] = useState([]);
  const [postEmail, setPostEmail] = useState([]);

  useEffect(() => {
    async function loadApi() {
      try {
        const responseCarrousel = await fetch(
          "http://www.desenvolvimento.pixelprime.com.br/cecon/api/v1/slide"
        );
        const responseHome = await fetch(
          "http://desenvolvimento.pixelprime.com.br/cecon/api/v1/home"
        );
        const responsePostCadastro = await fetch(
          "http://desenvolvimento.pixelprime.com.br/cecon/api/v1/contato"
        );

        const dataCarrousel = await responseCarrousel.json();
        setapiCarrousel(dataCarrousel);

        const dataHome = await responseHome.json();
        setApiHome(dataHome);

        const postCadastro = await responsePostCadastro.json();
        setPostEmail(postCadastro);
      } catch (error) {
        console.log("Não Encontrado");
      }
    }
    loadApi();
  }, []);

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Container>
        <Header />
        <Wrapper>
          <WrapperCarousel>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              interval={6000}
              transitionTime={500}
              infiniteLoop
              autoPlay
              emulateTouch
              dynamicHeight
              swipeable
            >
              {apiCarrousel.map((i) => (
                <div key={i.id}>
                  <img src={i.image} alt="Imagem Carrousel" />
                  <h1>{i.title}</h1>
                  <h3>{i.button}</h3>
                </div>
              ))}
            </Carousel>
          </WrapperCarousel>
          <WrapperStory>
            <h2>{apiHome.home_conheca_mais}</h2>
            <img src="./icons/predio.png" alt="Imagem Predio" />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud.
                <a href={apiHome.home_conheca_mais_url}>
                  {apiHome.titulo}
                  <img
                    src="./icons/arrow-right.png"
                    alt=""
                    className="arrow-right"
                  />
                </a>
              </p>
            </div>
          </WrapperStory>
          <WrapperCouses>
            <ItemCouses>
              <div>
                <div className="container-image">
                  <img src="./icons/open-book.svg" />
                </div>
                <span>educação</span>
              </div>
              <div>
                <div className="container-image">
                  <img src="./icons/assistencia-social.svg" />
                </div>
                <span>assistente social</span>
              </div>
              <div>
                <div className="container-image">
                  <img src="./icons/monitor.svg" />
                </div>
                <span>tecnologia</span>
              </div>
            </ItemCouses>
            <AboutCourses>
              <h3>Cursos</h3>
              <p>
                {apiHome.home_cursos}
                <a href="/">
                  <img src="" alt="" />
                </a>
              </p>
            </AboutCourses>
          </WrapperCouses>
          <EmailSection>
            <h4>Receba nossas novidades por e-mail</h4>
            <div className="wapper-content">
              <Input name="Email" placeholder="Email" />
              <Button />
            </div>
          </EmailSection>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  background: url("./icons/bg.png");
  > div {
    box-shadow: none;
  }
`;

const Wrapper = styled.div`
  width: 83%;
  margin: 0 auto;
`;

const WrapperCarousel = styled.div`
  position: relative;
  margin-right: -7%;

  img {
    width: 100%;
    object-fit: cover;
    max-height: 81vh !important;
  }

  h1 {
    width: 100%;
    position: absolute;
    top: 50%;
    text-align: center;
  }

  h3 {
    width: 100%;
    position: absolute;
    top: 65%;
    text-align: center;
  }

  .carousel.carousel-slider {
    display: flex;
    flex-direction: row-reverse;
  }

  .slider-wrapper axis-horizontal {
  }

  .carousel .control-dots {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: none;
  }

  .dot {
    padding: 5px;
  }

  .selected {
    background: #ffa747 !important;
    border: none;
  }

  .carousel .control-dots .dot {
    opacity: 1;
    margin: 13px 8px;
    background: #dcd9d9;
    box-shadow: 0px 3px 6px #00000029;
    border: none;
  }

  .control-dots {
    position: static;
    width: 60px;
    border: none;
  }
`;

const WrapperStory = styled.section`
  margin: 10% auto 0 auto;
  align-items: center;
  display: flex;

  > div {
    width: 32%;
  }

  @media (max-width: 1550px) {
    margin: 5% auto 0 auto;
  }

  h2 {
    font: bold min(72px, 4vw) / 108% Brandon Grotesque;
    text-align: right;
    color: #24282a;
    width: 37.2%;
    margin: -8% -6% 0 0;
    z-index: 1;
  }

  p {
    font: normal min(35px, 3vw) / 108% Brandon Grotesque;
    margin: 16% 0 0 2%;
    display: block;
    letter-spacing: 0px;
    color: #24282a;
  }

  img {
    width: 35%;
  }

  a {
    font: bold min(30px, 2.5vw) / 140% Brandon Grotesque;
    display: block;
    color: #0d5775;
    text-transform: uppercase;
    text-decoration: none;
  }

  div {
    align-items: center;
    display: flex;
    img {
      margin: -0.8% 0 0 4%;
      width: 10%;
    }
  }
`;

const WrapperCouses = styled.section`
  margin: 10% 0;
  display: flex;
  justify-content: space-between;
`;

const ItemCouses = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    margin: 15px 0;
  }

  span {
    font: bold min(30px, 3vw) / 108% Brandon Grotesque;
    color: #24282a;
    text-transform: uppercase;
    margin-left: 6%;
  }

  .container-image {
    background-color: #d54216;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8vw;
    height: 4.8vw;
  }

  img {
    width: 50%;
  }
`;

const AboutCourses = styled.section`
  padding: 0 0 0 5%;
  width: 156%;

  h3 {
    font: bold min(72px, 5vw) / 144% Brandon Grotesque;
    color: #24282a;
  }

  p {
    font: normal min(35px, 3vw) / 143% Brandon Grotesque;
    color: #24282a;
  }
`;

const EmailSection = styled.section`
  width: 100%;
  display: flex;
  margin: 0 0 5% 0;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  h4 {
    width: 38%;
    font: bold min(60px, 3.5vw) / 127% Brandon Grotesque;
    color: #24282a;
    @media (max-width: 900px) {
      width: 100%;
      font-size: min(60px, 3.5vw);
    }
  }

  .wapper-content {
    justify-content: space-between;
    width: 54%;
    display: flex;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
`;
