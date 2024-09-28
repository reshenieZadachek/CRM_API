import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const Title = styled.h1`
  margin: 10px 0;
  font-size: 24px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Тестовое задание</Title>
    </HeaderContainer>
  );
};

export default Header;
