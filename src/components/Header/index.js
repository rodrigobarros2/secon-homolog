import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Container>
        <header>
          <img src="./icons/logo-cecon.png" alt="Logo" />
          <nav>
            <ul>
              <li>
                <a href="./" className={router.pathname == "/" ? "active" : ""}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="./quem-somos.html"
                  className={
                    router.pathname == "/quem-somos" ? "active" : "erro"
                  }
                >
                  Quem Somos
                </a>
              </li>
              <li>
                <a
                  href="./area-de-atuacao.html"
                  className={
                    router.pathname == "/area-de-atuacao" ? "active" : ""
                  }
                >
                  Área de Atuação
                </a>
              </li>
              <li>
                <a
                  href="./cursos.html"
                  className={router.pathname == "/cursos" ? "active" : ""}
                >
                  Cursos
                </a>
              </li>
              <li>
                <a
                  href="./politicas-publicas.html"
                  className={
                    router.pathname == "/politicas-publicas" ? "active" : ""
                  }
                >
                  Politica de Publicas
                </a>
              </li>
              <li>
                <a
                  href="./programa-de-capacitacao.html"
                  className={
                    router.pathname == "/programa-de-capacitacao"
                      ? "active"
                      : ""
                  }
                >
                  Programa de capacitação
                </a>
              </li>
              <li>
                <a
                  href="./contato.html"
                  className={router.pathname == "/contato" ? "active" : ""}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 14px #00000029;
  .active {
    color: #d54216;
  }
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 1.5% 0;

  @media (max-width: 1220px) {
    padding: 1% 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
  }

  img {
    @media (max-width: 1350px) {
      width: 15%;
    }
    @media (max-width: 1120px) {
      display: none;
    }
  }

  header {
    display: flex;
    align-items: center;
  }

  nav {
    padding-left: 9%;
    @media (max-width: 1220px) {
      padding-left: 2%;
    }
    @media (max-width: 1100px) {
      padding-left: 0;
    }
  }

  ul {
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-between;
  }

  li {
    padding: 18px;
    text-align: center;
    @media (max-width: 600px) {
      padding: 7px 10px;
    }
  }

  a {
    color: #b4b4b4;
    text-decoration: none;

    font: normal min(20px, 2vw) / 150% Brandon Grotesque;

    &:hover {
      color: #d54216;
    }
  }

  .active.nav-link {
    color: #d54216;
  }
`;
