import React from 'react';
import styled from 'styled-components';

const CardCourses = (props, onClick) => {
  return (
    <Container {...onClick} {...props}>
      <Wrapper>
        <WrapperLogo>
          <img src="" alt="" />
        </WrapperLogo>
        <span>{props.name}</span>
      </Wrapper>
    </Container>
  );
};

export default CardCourses;

const Container = styled.button`
  cursor: pointer;
  margin: 10% 0 4% 0;
  outline: none;
  width: 18%;
  padding-bottom: 10.4%;
  border: none;
  background: #ffffff;
  box-shadow: 1px 6px 28px #00000021;
  border-radius: 15px;
  min-width: 133px;
  @media (max-width: 600px) {
    margin: 10% 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    margin: 15% 0 0 0;
    font: bold min(50px, 2.5vw) / 120% Brandon Grotesque;
    color: #24282a;
    display: block;
  }
`;

const WrapperLogo = styled.div`
  background: #d54216 0% 0% no-repeat padding-box;
  margin-top: -21%;
  width: 1px;
  height: 1px;
  padding: 21%;
  transform: rotate(45deg);
`;
