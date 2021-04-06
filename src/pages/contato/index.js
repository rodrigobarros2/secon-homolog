import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Contato = () => (
  <>
    <Head>
      <title>Contato</title>
    </Head>
    <Container>
      <Header />
      <Wrapper>
        <PhoneImage>
          <img src="./icons/phone-large.png" alt="" />
        </PhoneImage>
        <WrapperContato>
          <h1>Contate-Nos</h1>
          <Input placeholder="Nome" />
          <div>
            <Input placeholder="Celular" className="input--modifier" />
            <Input placeholder="E-mail" />
          </div>
          <Input placeholder="Mensagem" className="input" />
          <Button />
        </WrapperContato>
      </Wrapper>
    </Container>
    <Footer />
  </>
);

export default Contato;

const Container = styled.div`
  background: url('./icons/bg.png');
  height: 90%;
  z-index: -10;
`;

const Wrapper = styled.div`
  width: 85%;
  margin: 4% auto 0 auto;
  display: flex;
`;
const PhoneImage = styled.div`
  width: 46.9%;
  @media (max-width: 768px) {
    display: none;
  }
  img {
    width: 100%;
  }
`;

const WrapperContato = styled.div`
  padding-top: 6%;
  width: 53%;
  @media (max-width: 768px) {
    width: 100%;
  }

  > div {
    display: flex;
  }

  > h1 {
    font: bold min(70px, 4vw) / 145% Brandon Grotesque;
  }

  input {
    margin: 20px 0;
  }

  button {
    margin-top: 6%;
    max-width: 248px;
    max-height: 70px;
  }

  .input--modifier {
    width: 90%;
    margin-right: 10%;
  }
`;
