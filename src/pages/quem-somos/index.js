import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Teachers from '../../components/Teachers';

const QuemSomos = () => {
  const [quemSomos, setQuemSomos] = useState([]);

  useEffect(() => {
    async function loadApi() {
      try {
        const response = await fetch(
          'http://desenvolvimento.pixelprime.com.br/cecon/api/v1/quem-somos'
        );

        const dataQuemSomos = await response.json();
        setQuemSomos(dataQuemSomos);
      } catch (error) {
        console.log('Não Encontrado');
      }
    }
    loadApi();
  }, []);

  return (
    <>
      <Head>
        <title>Quem Somos</title>
      </Head>
      <Container>
        <Header />
        <Wrapper>
          <Founders>
            <section>
              <h1>{quemSomos.titulo}</h1>
              <p>
                Lorem ipsum eleifend phasellus scelerisque senectus dui lacus pretium leo,
                amet vivamus tristique platea a aptent magna donec, condimentum facilisis
                ipsum laoreet aliquet mattis quisque tellus. enim nisl habitant porttitor
                conubia tortor quis lacus
              </p>
            </section>
            <div>
              <img src="./icons/quemsomos-pessoa-um.png" alt="" />
              <h6>Alexia Catharina</h6>
              <span>Fundadora</span>
            </div>
            <div>
              <img src="./icons/quemsomos-pessoa-dois.png" alt="" />
              <h6>Ethan Bemerguy</h6>
              <span>Co-Fundadora</span>
            </div>
          </Founders>
          <Abboutemployees>
            <h1>{quemSomos.quem_somos_equipe_professor}</h1>
            <p>
              Lorem ipsum eleifend phasellus scelerisque senectus dui lacus pretium leo,
              amet vivamus tristique platea a aptent magna done facilisis ipsum laoreet
              aliquet mattis quisque tellus.
            </p>
          </Abboutemployees>
          <Employees>
            <Teachers nome="Luna Elizabeth" cargo="Assistente Social">
              <img src="./icons/professor.png" alt="" />
            </Teachers>
            <Teachers nome="Luna Elizabeth" cargo="Assistente Social">
              <img src="./icons/professor.png" alt="" />
            </Teachers>
            <Teachers nome="Luna Elizabeth" cargo="Assistente Social">
              <img src="./icons/professor.png" alt="" />
            </Teachers>
            <Teachers nome="Luna Elizabeth" cargo="Assistente Social">
              <img src="./icons/professor.png" alt="" />
            </Teachers>
          </Employees>

          <AboutSecon>
            <h1>Conheça a Cecon</h1>
            <div>
              <div>
                <p>{quemSomos.quem_somos_conheca_mais}</p>
              </div>
              <div>
                <p>{quemSomos.quem_somos_conheca_mais}</p>
                <a href={quemSomos.quem_somos_conheca_mais_url}>
                  <div className="link">
                    <a>conhaça nossos cursos</a>
                    <img src="./icons/arrow-right.png" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </AboutSecon>

          <ContentPredio>
            <img src="./icons/predio-quem-somos.png" alt="" />
          </ContentPredio>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};
export default QuemSomos;

const Container = styled.div`
  background: url('./icons/bg.png');
`;

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Founders = styled.div`
  display: flex;
  margin-top: 5%;

  > div {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    h6 {
      padding: 2% 0 0 10%;
      font: bold min(30px, 3vw) / 108% Brandon Grotesque;
      color: #24282a;
    }

    span {
      padding-left: 10%;
      font: normal min(25px, 2vw) / 108% Brandon Grotesque;
      color: #24282a;
    }
  }

  section {
    width: 35%;
    @media (max-width: 800px) {
      width: 100%;
    }

    h1 {
      margin: 0 0 2% 0;
      color: #24282a;
      font: bold min(72px, 3vw) / 108% Brandon Grotesque;
    }

    p {
      font: normal min(35px, 1.8vw) / 125% Brandon Grotesque;
      color: #707070;
      @media (max-width: 800px) {
        font: normal min(35px, 2.2vw) / 125% Brandon Grotesque;
      }
    }
  }

  img {
    padding-left: 12%;
    width: 100%;
  }
`;

const ContentPredio = styled.div`
  img {
    width: 100%;
    margin-top: -33%;
    position: relative;
    z-index: -10;
  }
`;

const Abboutemployees = styled.div`
  margin: 8% 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    width: 43.6%;
    color: #24282a;
    font: bold min(72px, 4vw) / 130% Brandon Grotesque;
  }

  p {
    padding: 0px 0 0 5%;
    width: 63.2%;
    color: #707070;
    font: normal min(35px, 2vw) / 120% Brandon Grotesque;
  }
`;

const Employees = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 6%;

  img {
    width: 100%;
  }
`;

const AboutSecon = styled.div`
  margin-top: 4%;

  > div {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    width: 100%;
    font: bold min(72px, 5.5vw) / 108% Brandon Grotesque;
    color: #24282a;
  }

  p {
    width: 89.9%;
    color: #24282a;
    font: normal min(35px, 2vw) / 120% Brandon Grotesque;
  }

  a {
    font: bold min(35px, 2vw) / 150% Brandon Grotesque;
    text-decoration: none;
    color: #0d5775;
    text-transform: uppercase;
  }

  img {
    margin: -4px 0 0 12px;
    width: 7%;
  }

  .link {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
