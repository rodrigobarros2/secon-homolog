import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardPolitica from '../../components/CardPolitica';

const PoliticasPublica = () => (
  <>
    <Head>
      <title>PoliticasPublica</title>
    </Head>
    <Container>
      <Header />
      <Wrapper>
        <WrapperImg>
          <img src="./icons/politicas-publicas.png" alt="" />
        </WrapperImg>
        <WrapperMain>
          <div>
            <h1>Políticas Públicas</h1>
          </div>
          <p>
            As ações de implementação do SUAS – Sistema Único de Assistência Social
            objetivam apoiar o município na estruturação e aprimoramento da oferta e
            atendimento da Política de Assistência Social. Este apoio operacional vem
            fortalecer a Gestão do SUAS no município,ampliando o atendimento da população
            e qualificando a atenção ofertada, por meio de ações planejadas e organizadas
            de acordo com as diretrizes do SUAS.
          </p>
        </WrapperMain>
        <WrapperCard>
          <CardPolitica
            foto="/icons/politicas-publicas.png"
            nome="Vigilância Socioassistencial"
            sobre="Planejamento, organização e acompanhamento das diversas conferências que são realizadas nos municípios ao longo do ano:"
            itens="Elaboração do projeto"
          />
          <CardPolitica
            foto="/icons/politicas-publicas.png"
            nome="Instrumentos Estratégicos Planos para a Gestão e Conselhos Municipais"
            sobre="Planejamento, organização e acompanhamento das diversas conferências que são realizadas nos municípios ao longo do ano:"
            itens="Elaboração do projeto"
          />
          <CardPolitica
            foto="/icons/politicas-publicas.png"
            nome="Instrumentos Estratégicos Planos para a Gestão e Conselhos Municipais"
            sobre="Planejamento, organização e acompanhamento das diversas conferências que são realizadas nos municípios ao longo do ano:"
            itens="Elaboração do projeto"
          />
          <CardPolitica
            foto="/icons/politicas-publicas.png"
            nome="Instrumentos Estratégicos Planos para a Gestão e Conselhos Municipais"
            sobre="Planejamento, organização e acompanhamento das diversas conferências que são realizadas nos municípios ao longo do ano:"
            itens="Elaboração do projeto"
          />
          <CardPolitica
            foto="/icons/politicas-publicas.png"
            nome="Instrumentos Estratégicos Planos para a Gestão e Conselhos Municipais"
            sobre="Planejamento, organização e acompanhamento das diversas conferências que são realizadas nos municípios ao longo do ano:"
            itens="Elaboração do projeto"
          />
          <CardPolitica
            foto="/icons/politicas-publicas.png"
            nome="Instrumentos Estratégicos Planos para a Gestão e Conselhos Municipais"
            sobre="Planejamento, organização e acompanhamento das diversas conferências que são realizadas nos municípios ao longo do ano:"
            itens="Elaboração do projeto"
          />
        </WrapperCard>
      </Wrapper>
      <Footer />
    </Container>
  </>
);

export default PoliticasPublica;

const Container = styled.div`
  background: url('./icons/bg.png');
`;

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const WrapperMain = styled.div`
  div {
    width: 67%;
    position: relative;
    background-color: #ffff;
    margin: -8% 0 6% 0;
  }
  h1 {
    padding: 1% 0 1% 4%;
    font: bold min(72px, 4vw) / 120% Brandon Grotesque;
    color: #24282a;
  }
  p {
    font: normal min(35px, 2.8vw) / 120% Brandon Grotesque;
    color: #24282a;
  }
`;

const WrapperCard = styled.div`
  margin: 8% 0 0 0;
  flex-wrap: wrap;
  display: flex;
  gap: 4%;
  justify-content: center;
`;

const WrapperImg = styled.div`
  img {
    width: 100%;
  }
`;
