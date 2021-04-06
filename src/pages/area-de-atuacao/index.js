import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Cursos = ({ areaatuacao }) => {
  return (
    <>
      <Head>
        <title>{areaatuacao.titulo}</title>
      </Head>
      <Container>
        <Header />
        <Wrapper>
          <WrapperText>
            <h1>Descubra onde a Cecon atua</h1>
            <p>{areaatuacao.area_atuacao_descubra}</p>
            <h2>sao paulo</h2>
            <p>{areaatuacao.area_atuacao_sao_paulo}</p>
          </WrapperText>

          <WrapperImage>
            <img src="./icons/mapa-localizacao.svg" alt="" />
          </WrapperImage>
        </Wrapper>

        <Footer />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const resAreaAtuacao = await fetch(
    "http://desenvolvimento.pixelprime.com.br/cecon/api/v1/area-atuacao"
  );

  const areaatuacao = await resAreaAtuacao.json();

  return {
    props: { areaatuacao },
  };
}

export default Cursos;

const Container = styled.div`
  background: url("./icons/bg.png");
  height: 100%;
`;

const Wrapper = styled.div`
  height: 75%;
  margin: 5% auto 8% auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
`;

const WrapperText = styled.div`
  width: 38.9%;

  @media (max-width: 1450px) {
    min-width: 326px;
  }
  @media (max-width: 768px) {
    min-width: 100%;
  }

  h1 {
    font: bold min(72px, 4vw) / 109% Brandon Grotesque;
    margin: 0 0 2% 0;
    color: #24282a;
  }

  p {
    font: normal min(30px, 4vw) / 140% Brandon Grotesque;
    margin: 0 0 2% 0;
    color: #24282a;
  }

  h2 {
    font: bold min(35px, 4vw) / 150% Brandon Grotesque;
    margin: 9% 0 0 0;
    color: #0d5775;
    text-transform: uppercase;
  }
`;

const WrapperImage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5% 0 0 5%;
  width: 59.2%;
  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 100%;
  }
`;
