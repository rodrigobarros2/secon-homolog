import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Teachers = ({ nome, cargo, children }) => (
  <>
    <Container>
      <div>{children}</div>
      <h6>{nome}</h6>
      <span>{cargo}</span>
    </Container>
  </>
);

Teachers.defaultProps = {
  cargo: 'Não definido',
  foto: 'Foto não selecionada',
};

Teachers.propTypes = {
  nome: PropTypes.string.isRequired,
  cargo: PropTypes.string,
};

export default Teachers;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  div {
    width: 100%;
  }

  h6 {
    font: bold min(30px, 2vw) / 150% Brandon Grotesque;
    color: #24282a;
  }

  span {
    font: normal min(25px, 2vw) / 150% Brandon Grotesque;
    color: #24282a;
  }
`;
