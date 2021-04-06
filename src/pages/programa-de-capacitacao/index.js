import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ProgramaDeCapacitacao = ({ programacapacitacao }) => {
  return (
    <>
      <Head>
        <title>{programacapacitacao.titulo}</title>
      </Head>
      <Container>
        <Header />
        <Wrapper>
          <WrapperCapacitacao>
            <Capacitacao>
              <h1>Programa de capacitação continuada</h1>
              <p>{programacapacitacao.programa_capacitacao_continuada}</p>
            </Capacitacao>

            <div>
              <img src="./icons/pessoaprogramando.png" alt="" />
            </div>
          </WrapperCapacitacao>

          <WrapperImgComputador>
            <img src="./icons/computador-capacitacao.png" alt="" />
          </WrapperImgComputador>

          <ContainerLogos>
            <ul>
              <li>
                <div className="img-assistencia">
                  <img src="./icons/assistencia-social-black.svg" alt="" />
                </div>
                <h4>AssistenteSocial</h4>
                <p>
                  {programacapacitacao.programa_capacitacao_assistencia_social}
                </p>
              </li>
              <li>
                <div className="img-graduation">
                  <img src="./icons/graduation-cap.svg" alt="" />
                </div>
                <h4>Educação</h4>
                <p>{programacapacitacao.programa_capacitacao_educacao}</p>
              </li>
              <li>
                <div className="img-coracao">
                  <img src="./icons/coracao.svg" alt="" />
                </div>
                <h4>Saúde</h4>
                <p>{programacapacitacao.programa_capacitacao_saude}</p>
              </li>
              <li>
                <div className="img-bola">
                  <img src="./icons/bola-de-basquete.svg" alt="" />
                </div>
                <h4>Esporte</h4>
                <p>{programacapacitacao.programa_capacitacao_esporte}</p>
              </li>
            </ul>
          </ContainerLogos>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const resProgramaCapacitacao = await fetch(
    "http://desenvolvimento.pixelprime.com.br/cecon/api/v1/programa-capacitacao"
  );

  const programacapacitacao = await resProgramaCapacitacao.json();

  return {
    props: { programacapacitacao },
  };
}

export default ProgramaDeCapacitacao;

const Container = styled.div`
  height: 100%;
  background: url("./icons/bg.png");
`;

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const WrapperCapacitacao = styled.div`
  display: flex;
  margin: 5% 0 0 0;

  img {
    width: 100%;
  }

  > div {
    width: 48.5%;
  }
`;

const Capacitacao = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3.1% 0 0;

  img {
    width: 758px;
    height: 1231px;
  }

  h1 {
    font: bold min(72px, 3.5vw) / 120% Brandon Grotesque;
    color: #24282a;
  }

  p {
    font: normal min(35px, 2.2vw) / 120% Brandon Grotesque;
    color: #24282a;
  }
`;

const WrapperImgComputador = styled.div`
  width: 73%;
  img {
    width: 100%;
    position: relative;
    margin: -43% 0 0 0;
  }
`;

const ContainerLogos = styled.div`
  width: 100%;
  margin: 5% 0;

  img {
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  h4 {
    margin: 6% 0 0 0;
    font: bold min(35px, 2vw) / 120% Brandon Grotesque;
    color: #0d5775;
  }

  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    list-style: none;
  }

  p {
    margin: 3% 0 0 0;
    width: 85.7%;
    font: normal min(30px, 2vw) / 100% Brandon Grotesque;
    text-align: center;
    color: #24282a;
  }

  .img-assistencia {
    img {
      height: 100%;
    }

    height: 31%;
    width: 35.2%;
  }
  .img-coracao {
    width: 39.1%;
  }
  .img-bola {
    width: 30%;
  }
  .img-graduation {
    width: 39.1%;
  }
`;
