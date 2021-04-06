import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardCourse from '../../components/CardCourse';

const Cursos = () => {
  const [modal, setModal] = useState(false);
  const [modalOnline, setModalOnline] = useState(false);
  const [modalOffline, setModalOffline] = useState(false);

  const handleModal = !modal ? () => setModal(true) : () => setModal(false);

  const handleModalOnline = !modalOnline
    ? () => setModalOnline(true)
    : () => setModalOnline(false);

  const handleModalOffline = !modalOffline
    ? () => setModalOffline(true)
    : () => setModalOffline(false);

  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    async function loadApi() {
      try {
        const response = await fetch(
          'http://desenvolvimento.pixelprime.com.br/cecon/api/v1/cursos'
        );

        const data = await response.json();
        setCursos(data);
      } catch (error) {
        console.log('Não Encontrado');
      }
    }
    loadApi();
  }, []);

  return (
    <>
      <Head>
        <title>{cursos.titulo}</title>
      </Head>
      <Container>
        <Header />
        <Wrapper>
          <div>
            <WrapperTitle>
              <h1>Conheça os cursos da Cecon</h1>
            </WrapperTitle>
            <img src="./icons/header-cursos.png" alt="" className="baner-cursos" />
          </div>

          <h2 className="como-funciona">Como funciona os cursos</h2>
          <ComoFunciona>
            <div>
              <p>{cursos.cursos_como_funciona}</p>
            </div>
            <div>
              <p>{cursos.cursos_como_funciona}</p>
            </div>
          </ComoFunciona>
          <WrapperCard>
            <CardCourse name="Programação" onClick={handleModal} />
            <CardCourse name="Culinaria" onClick={handleModal} />
            <CardCourse name="Programação" onClick={handleModal} />
            <CardCourse name="Culinaria" onClick={handleModal} />
            <CardCourse name="Programação" onClick={handleModal} />
            <CardCourse name="Culinaria" onClick={handleModal} />
            <CardCourse name="Programação" onClick={handleModal} />
            <CardCourse name="Culinaria" onClick={handleModal} />
          </WrapperCard>

          {!modal ? (
            ''
          ) : (
            <div>
              <WrapperImgCourse>
                <img src="./icons/cozinhando.png" alt="" className="img-cozinhando" />
              </WrapperImgCourse>
              <VantagensCulinaria>
                <Vantagens>
                  <div>
                    <h2>Vantagens</h2>
                    <ul>
                      <li>
                        <span>1</span>
                        <p>Lorem ipsum</p>
                      </li>
                      <li>
                        <span>1</span>
                        <p>Lorem ipsum</p>
                      </li>
                      <li>
                        <span>1</span>
                        <p>Lorem ipsum</p>
                      </li>
                    </ul>
                  </div>
                </Vantagens>
                <TextCulinaria>
                  <h3>Culinaria</h3>
                  <p>
                    Lorem ipsum eleifend phasellus scelerisque senectus dui lacu s pretium
                    leo, amet vivamus tristiqu per inceptos eros. varius lig ula vivamus
                    iaculis accumsan donec pharetra pellentesque euismod au ctor, justo
                    phasellus integer tincidunt ad at platea lacinia netus, v itae ipsum
                    lorem nam nibh donec fames scelerisque. tincidunt etiam fusce molestie
                    venenatis orci felis diam quis dictumst faucibus, tortor arcu mag na
                    fringilla phasellus viverra mattis ante augue rhoncus fames, donec
                    torqu ent molestie lacus etiam placerat fringilla sapien ac. Torquent
                    sagittis tu rpis elit nibh odio
                    <br />
                    <br />
                    <span />
                    {/* parágrafo */}
                    purus habitasse pharetra, interdum accumsan etiam fames fringilla
                    ultricies quam ligula, habitasse platea ipsum tempus class dictum sen
                    ectus. fames nunc convallis donec class feugiat platea massa vivamus
                    proin moll is, posuere amet consectetur vestibulum conubia scelerisque
                    conubia convallis. vi posuere iaculis etiam sodales phasellus.
                  </p>
                </TextCulinaria>
              </VantagensCulinaria>
              <WrapperVantagens>
                <img src="./icons/cozinhando-small.png" alt="" />
                <img src="./icons/cozinhando-small-two.png" alt="" />
                <img src="./icons/cozinhando-small-three.png" alt="" />
                <img src="./icons/cozinhando-small-four.png" alt="" />
              </WrapperVantagens>
              <HorarioCurso>
                <Online>
                  <section onClick={handleModalOnline}>
                    <span>Online</span>
                    {!modalOnline ? (
                      <ImgArrow>
                        <img src="./icons/arrow-down.svg" alt="" />
                      </ImgArrow>
                    ) : (
                      <ImgArrow>
                        <img src="./icons/arrow-up.svg" alt="" />
                      </ImgArrow>
                    )}
                  </section>
                  {!modalOnline ? (
                    ''
                  ) : (
                    <>
                      <div>
                        <p>
                          Lorem ipsum eleifend phasellus scelerisque senectus dui lacus
                          pretium leo, amet vivamus tristiqu per inceptos eros. varius
                          ligula vivamus iaculis accumsan donec pharetra pellentesque
                          euismod auctor, justo phasellus integer tincidunt ad at platea
                          lacinia netus, vitae ipsum lorem nam nibh donec fames
                          scelerisque. tincidunt etiam fusce molestie venenatis orci felis
                          diam quis dictumst faucibus, tortor arcu magna fringilla
                          phasellus viverra mattis andonec torquent molestie lacus etiam
                          placerat fringilla sapien ac. Torquent sagittis turpis elit nibh
                          <br />
                          <br />
                          <span className="paragrafo" /> odio purus habitasse pharetra,
                          interdum accumsan etiam fames fringilla ultricies quam ligula,
                          habitasse platea ipsum tempus class dictum senectus. fames nunc
                          convallis donec class feugiat platea massa vivamus proin mollis,
                          posuere amet consectetur vestibulum conubia scelerisque conubia
                          convallis. vivamus lacus ante libero eros nisi posuere
                          vestibulum mi etiam eu, inceptos tincidunt libero hendrerit
                          phasellus sociosqu vehicula duis sit curae, laoreet litora
                          egestas tortor auctor elementum iaculis suscipit dui. molestie
                          amet suscipit etiam in vehicula aliquam ornare ipsum proin velit
                          platea, magna eleifend nec maecenas lobortis semper enim est
                          pharetra habitasse pharetra, sed pulvinar eget nisi class
                          posuere iaculis etiam sodales phasellus.
                        </p>
                      </div>
                      <WrapperVantagemRodape>
                        <h2>Vantagens</h2>
                        <section>
                          <div className="container-number">
                            <span>1</span>
                          </div>
                          <div className="container-text-vantagens">
                            <span>lorem impsum</span>
                            <p>
                              Lorem ipsum eleifend phasellus scelerisque senectus dui
                              lacus pretium leo, amet vivamus tristiqu per inceptos eros.
                              varius ligula vivamus iaculis donec pharetra pellentesque
                              euism phasellus integer platea lacinia netus, vitae ipsum
                              loronec fames scelerisqu etiam sodales phasellus.
                            </p>
                          </div>
                        </section>
                        <section>
                          <div className="container-number">
                            <span>1</span>
                          </div>
                          <div className="container-text-vantagens">
                            <span>lorem impsum</span>
                            <p>
                              Lorem ipsum eleifend phasellus scelerisque senectus dui
                              lacus pretium leo, amet vivamus tristiqu per inceptos eros.
                              varius ligula vivamus iaculis donec pharetra pellentesque
                              euism phasellus integer platea lacinia netus, vitae ipsum
                              loronec fames scelerisqu etiam sodales phasellus.
                            </p>
                          </div>
                        </section>
                        <section>
                          <div className="container-number">
                            <span>1</span>
                          </div>
                          <div className="container-text-vantagens">
                            <span>lorem impsum</span>
                            <p>
                              Lorem ipsum eleifend phasellus scelerisque senectus dui
                              lacus pretium leo, amet vivamus tristiqu per inceptos eros.
                              varius ligula vivamus iaculis donec pharetra pellentesque
                              euism phasellus integer platea lacinia netus, vitae ipsum
                              loronec fames scelerisqu etiam sodales phasellus.
                            </p>
                          </div>
                        </section>
                      </WrapperVantagemRodape>
                    </>
                  )}
                </Online>

                <Presencial>
                  <section onClick={handleModalOffline}>
                    <span>Presencial</span>
                    {!modalOffline ? (
                      <ImgArrow>
                        <img src="./icons/arrow-down.svg" alt="" />
                      </ImgArrow>
                    ) : (
                      <ImgArrow>
                        <img src="./icons/arrow-up.svg" alt="" />
                      </ImgArrow>
                    )}
                  </section>

                  {!modalOffline ? (
                    ''
                  ) : (
                    <>
                      <div>
                        <p>
                          Lorem ipsum eleifend phasellus scelerisque senectus dui lacus
                          pretium leo, amet vivamus tristiqu per inceptos eros. varius
                          ligula vivamus iaculis accumsan donec pharetra pellentesque
                          euismod auctor, justo phasellus integer tincidunt ad at platea
                          lacinia netus, vitae ipsum lorem nam nibh donec fames
                          scelerisque. tincidunt etiam fusce molestie venenatis orci felis
                          diam quis dictumst faucibus, tortor arcu magna fringilla
                          phasellus viverra mattis ante augue rhoncus fames, donec
                          torquent molestie lacus etiam placerat fringilla sapien ac.
                          Torquent sagittis turpis elit
                          <br />
                          <br />
                          <span className="paragrafo" />
                          fringilla ultricies quam ligula, habitasse platea ipsum tempus
                          class dictum senectus. fames nunc convallis donec class feugiat
                          platea massa vivamus proin mollis, posuere amet consectetur
                          vestibulum conubia scelerisque conubia convallis. vivamus lacus
                          ante libero eros nisi posuere vestibulum mi etiam eu, inceptos
                          tincidunt libero hendrerit phasellus sociosqu vehicula duis sit
                          curae, laoreet litora egestas tortor auctor elementum iaculis
                          suscipit dui. molestie amet suscipit etiam in vehicula aliquam
                          ornare ipsum proin velit platea, magna eleifend nec maecenas
                          lobortis semper enim est pharetra habitasse pharetra, sed
                          pulvinar eget nisi class posuere iaculis etiam sodales
                          phasellus.
                        </p>
                      </div>
                      <WrapperVantagemRodape>
                        <h2>Vantagens</h2>
                        <section>
                          <div className="container-number">
                            <span>1</span>
                          </div>
                          <div className="container-text-vantagens">
                            <span>lorem impsum</span>
                            <p>
                              Lorem ipsum eleifend phasellus scelerisque senectus dui
                              lacus pretium leo, amet vivamus tristiqu per inceptos eros.
                              varius ligula vivamus iaculis donec pharetra pellentesque
                              euism phasellus integer platea lacinia netus, vitae ipsum
                              loronec fames scelerisqu etiam sodales phasellus.
                            </p>
                          </div>
                        </section>
                        <section>
                          <div className="container-number">
                            <span>1</span>
                          </div>
                          <div className="container-text-vantagens">
                            <span>lorem impsum</span>
                            <p>
                              Lorem ipsum eleifend phasellus scelerisque senectus dui
                              lacus pretium leo, amet vivamus tristiqu per inceptos eros.
                              varius ligula vivamus iaculis donec pharetra pellentesque
                              euism phasellus integer platea lacinia netus, vitae ipsum
                              loronec fames scelerisqu etiam sodales phasellus.
                            </p>
                          </div>
                        </section>
                        <section>
                          <div className="container-number">
                            <span>1</span>
                          </div>
                          <div className="container-text-vantagens">
                            <span>lorem impsum</span>
                            <p>
                              Lorem ipsum eleifend phasellus scelerisque senectus dui
                              lacus pretium leo, amet vivamus tristiqu per inceptos eros.
                              varius ligula vivamus iaculis donec pharetra pellentesque
                              euism phasellus integer platea lacinia netus, vitae ipsum
                              loronec fames scelerisqu etiam sodales phasellus.
                            </p>
                          </div>
                        </section>
                      </WrapperVantagemRodape>
                    </>
                  )}
                </Presencial>
              </HorarioCurso>
            </div>
          )}
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Cursos;

const Container = styled.div`
  background: url('./icons/bg.png');
`;

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;

  > div:first-child {
    position: relative;
  }

  .baner-cursos {
    width: 100%;
  }
  .como-funciona {
    font: bold min(72px, 4vw) / 110% Brandon Grotesque;
    letter-spacing: 0px;
    color: #24282a;
  }
`;

const WrapperTitle = styled.div`
  width: 67%;
  position: absolute;
  background-color: #ffff;
  bottom: 10px;

  h1 {
    padding: 1% 0 1% 4%;
    color: #24282a;
    font: bold min(72px, 4vw) / 110% Brandon Grotesque;
  }
`;

const WrapperCard = styled.div`
  margin: 2% 0 0 0;
  display: flex;
  gap: 2%;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    justify-content: space-around;
  }
`;

const ComoFunciona = styled.div`
  display: flex;
  margin: 2% 0 0 0;
  @media (max-width: 600px) {
    margin: 0 0 6% 0;
  }
  p {
    width: 85.1%;
    color: #24282a;
    font: normal min(35px, 2vw) / 120% Brandon Grotesque;
  }
`;

const WrapperImgCourse = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const VantagensCulinaria = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5% 0;
`;

const Vantagens = styled.div`
  width: 22.3%;

  h2 {
    font: bold min(40px, 3vw) / 120% Brandon Grotesque;
    letter-spacing: 0px;
    color: #24282a;
  }

  li {
    display: flex;
    list-style: none;
    align-items: baseline;
  }
  ul {
    flex-direction: column;
  }
  > div {
    padding: 6% 0 0 4%;
    background-color: #fafafa;
    height: 78%;
  }
  span {
    font: bold min(60px, 3vw) / 120% Brandon Grotesque;
    padding: 0 8% 0 0;
  }
  p {
    font: bold min(35px, 2vw) / 120% Brandon Grotesque;
  }
`;

const TextCulinaria = styled.div`
  width: 73.8%;
  h3 {
    font: bold min(72px, 3vw) / 120% Brandon Grotesque;
    color: #24282a;
  }

  P {
    font: normal min(35px, 3vw) / 120% Brandon Grotesque;
    color: #24282a;
  }
  span {
    padding: 0 0 0 8%;
  }
`;

const WrapperVantagens = styled.div`
  display: flex;

  img {
    width: 25%;
  }
`;

const HorarioCurso = styled.div`
  span {
    font: bold min(40px, 2vw) / 120% Brandon Grotesque;
    color: #f8f8f8;
  }
  p {
    font: normal min(35px, 2vw) / 120% Brandon Grotesque;
    color: #24282a;
  }
  section {
    cursor: pointer;
    padding: 1% 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .paragrafo {
    padding: 0 0 0 7%;
  }
`;

const Online = styled.div`
  > section {
    background: #d54216;
  }
  box-shadow: 0px 3px 6px #e8e8e8;

  div {
    background-color: #fff;
    padding: 2% 2%;
  }
`;

const Presencial = styled.div`
  > section {
    background: #0d5775;
  }

  box-shadow: 0px 3px 6px #e8e8e8;

  div {
    background-color: #fff;
    padding: 2% 2%;
  }
`;
const ImgArrow = styled.main`
  width: 3%;
  img {
    width: 100%;
  }
`;

const WrapperVantagemRodape = styled.div`
  flex-direction: column;
  margin: 4% 0;
  > section {
    display: flex;
    margin: 0 0 4% 0;
  }

  h2 {
    padding: 0 0 2% 2.1%;
    font: bold min(60px, 4vw) / 120% Brandon Grotesque;
    color: #24282a;
  }

  ul {
    list-style: none;
  }

  p {
    font: normal min(35px, 2 vw) / 120% Brandon Grotesque;
    color: #24282a;
  }

  .container-number {
    margin: 0 3% 0 0;
    span {
      font: bold min(100px, 4vw) / 120% Brandon Grotesque;
      color: #0d5775;
    }
  }

  .container-text-vantagens {
    span {
      font: bold min(40px, 3vw) / 120% Brandon Grotesque;
      color: #24282a;
      text-transform: uppercase;
    }
  }
`;
