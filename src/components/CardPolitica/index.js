import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardPolitica = ({ nome, foto, sobre, itens }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Wrapper>
        <div className="card-container">
          <div className="bg-card">
            {/* <img src={foto} alt="" className="logocard" /> */}
          </div>
        </div>
        <h4>{nome}</h4>

        {!showModal ? (
          <button type="button" onClick={() => setShowModal(true)}>
            <div className="container-arrow">
              <img className="img-arrow" src="./icons/arrow-down-red.svg" alt="" />
            </div>
          </button>
        ) : (
          <Modal>
            <h6>{sobre}</h6>
            <ul>
              <li>
                <img src="" alt="" />
                {itens}
              </li>
            </ul>
            <button type="button" onClick={() => setShowModal(false)}>
              <div className="container-arrow">
                <img className="img-arrow" src="./icons/arrow-up.svg" alt="" />
              </div>
            </button>
          </Modal>
        )}
      </Wrapper>
    </Container>
  );
};

CardPolitica.defaultProps = {
  foto: 'Logo não selecionada',
  sobre: '',
  itens: '',
};

CardPolitica.propTypes = {
  nome: PropTypes.string.isRequired,
  sobre: PropTypes.string,
  itens: PropTypes.string,
};

export default CardPolitica;

const Container = styled.div`
  margin: 5% 0;
  display: flex;
  width: 30%;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 1px 6px 28px #00000021;
  border-radius: 15px;
  width: 100%;

  h4 {
    padding: 0 4%;
    margin-top: 10%;
    text-align: center;
    font: bold min(50px, 2vw) / 120% Brandon Grotesque;
    color: #002833;
  }
  .card-container {
    margin-top: -15%;
    padding: 14.8%;
    transform: matrix(0.71, -0.71, 0.71, 0.71, 0, 0);
    background: #e8e8e8 0% 0% no-repeat padding-box;
  }
  .bg-card {
  }

  .logocard {
    width: 100%;
  }

  > button {
    margin: 10% 0 0 0;
    outline: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 4% 0;
    background: transparent;

    .container-arrow {
      margin: 0 auto;
      width: 10%;
    }
    .img-arrow {
      width: 100%;
    }
  }

  h6 {
    font: bold min(32px, 1.5vw) / 120% Brandon Grotesque;
    color: #24282a;
  }

  li {
    list-style: none;
    font: bold min(32px, 1.5vw) / 120% Brandon Grotesque;
    color: #24282a;
  }
`;

const Modal = styled.div`
  h6 {
    margin: 8% 0 0 8%;
  }

  ul {
    margin: 5% 0 0 8%;
  }

  button {
    background: #d54216;
    border-radius: 0px 0px 10px 10px;
    margin: 10% 0 0 0;
    outline: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 4% 0;
  }

  .container-arrow {
    margin: 0 auto;
    width: 10%;
  }
  .img-arrow {
    width: 100%;
  }
`;
