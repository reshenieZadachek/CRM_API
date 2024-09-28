import React from 'react';
import styled from 'styled-components';
import DealsTable from './DealsTable';

const MainContainer = styled.main`
  margin-top: 70px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  background-color: #0f2231;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  margin-bottom: 1rem;
`;

const Main = () => {
  const accessToken = ''
  return (
    <MainContainer>
      <Row>
         <DealsTable accessToken = {accessToken}
         subdomain = {'mamyla27477'}
          />
      </Row>
    </MainContainer>
  );
};

export default Main;