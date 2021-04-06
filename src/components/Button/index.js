import React from 'react';
import styled from 'styled-components';

const Button = () => (
  <Container>
    <h1>Enviar</h1>
  </Container>
);

export default Button;

const Container = styled.button`
  cursor: pointer;
  outline: none;
  background: #d54216;
  box-shadow: 11px 18px 29px #ffb3603b;
  border: none;
  border-radius: 50px;
  width: 41.6%;
  color: #ffffff;
  padding: 1% 0;

  h1 {
    font: normal min(20px, 2vw) / 250% Brandon Grotesque;
  }

  @media (max-width: 900px) {
    min-width: 100px;
  }
`;
