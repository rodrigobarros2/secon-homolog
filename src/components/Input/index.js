/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Input = ({ style, ...rest }) => (
  <Container style={style}>
    <input type="text" {...rest} />
  </Container>
);

export default Input;

const Container = styled.div`
  width: 100%;
  align-self: flex-end;

  input {
    width: 100%;
    padding: 0 0 2px 0;
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;

    font: normal min(30px, 3vw) / 127% Open Sans;

    &:active {
      border: none;
    }

    &::placeholder {
      color: #24282a;
    }
  }
`;
