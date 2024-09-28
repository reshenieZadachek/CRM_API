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
  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI4OGI2MzA4ZDkzOGM0NzY4YWUxODUyOWM1OGQ5NjM1YjBhYjQ2YzM3ZWRhNjU0YzM2ZWNmNTc0MzBmMGU5NGI2ZmNiOTAyZjM4MjgxZGFiIn0.eyJhdWQiOiJjNmRmZDAxZS02MzBkLTRiMGItYWMxNC0zYjg1ZTM4N2ExZjIiLCJqdGkiOiIyODhiNjMwOGQ5MzhjNDc2OGFlMTg1MjljNThkOTYzNWIwYWI0NmMzN2VkYTY1NGMzNmVjZjU3NDMwZjBlOTRiNmZjYjkwMmYzODI4MWRhYiIsImlhdCI6MTcyNzQ1MDQxMCwibmJmIjoxNzI3NDUwNDEwLCJleHAiOjE3Mjc1MzY4MTAsInN1YiI6IjExNTY5NjMwIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTcyOTMwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiYjE3YjA1YTgtNGFlNS00YWE4LTllMWItY2NmY2Q1MzgxNDBjIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.S9TTYv0j2ltxLorXo2tgr6Hialev1MnK0Szc63fazOdzVgR4IuAs3miVeAN2qMaaAYIIvf0pTCYF5y2dsb_WDi1cf5L2PhfE6QN328I2DbfF0K7bdk6-xPI9LOWenkL-gPOfvi7-tlVUmhVnK_oPWsMjXlyj4c0nTi3-MFwDLSZANtRkaMtYQV_WNLfAx9CZpWPjcuU8dGlWjsishPw27rZhJwClbjHBBht8-HmBSEw5nFyMzDRJhEvOe2JvPHAbUCTj8tBVBIgH-3xYY3whp9t2sXO7dwxmKD4VyylY3cSCsqO9B11RqIyGPsSEuWy6EkzHz5uSrJO2yOcTGQmKdQ'
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
