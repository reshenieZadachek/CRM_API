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
  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRmZjI0ODNlYTRiYjU3OTNiZjY4MWJmYzRkYzY5OWQ4ZWVhMjY4MWU3NDJiYWI0YWViNjI3NGFmZDczNTAxNWU5MTgyYWJlYzgyNDVmMzFkIn0.eyJhdWQiOiJjNmRmZDAxZS02MzBkLTRiMGItYWMxNC0zYjg1ZTM4N2ExZjIiLCJqdGkiOiI0ZmYyNDgzZWE0YmI1NzkzYmY2ODFiZmM0ZGM2OTlkOGVlYTI2ODFlNzQyYmFiNGFlYjYyNzRhZmQ3MzUwMTVlOTE4MmFiZWM4MjQ1ZjMxZCIsImlhdCI6MTcyNzUzODgzMCwibmJmIjoxNzI3NTM4ODMwLCJleHAiOjE3Mjc2MjUyMzAsInN1YiI6IjExNTY5NjMwIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTcyOTMwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiM2E1M2M5MmEtNzQzMS00NmE1LTliZjMtNWRiNjZkYjJmYjBmIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.B6xcugF3_A33xeO0fNvSXC0MjZcVdFtqIrY0RRxgW1705cWUnN45kZfIWxRfzAy3NxNcip7HlLu5C8WdkE24r8_il5ldsT0ZTRqpjlf5wX6Vhq_xDsxGVLeGGEWqfbDcncQzwduMH7akKOQqx5JoSeHIJkK1b7TOuZrmLFnBF-mImPEkfanfAEpIB8MW9SNnQ5aZek8sP183rz78MqkeoGmxRRXtAeLgrHqR0VG4UReSTmbUFhaZ4vrgxf1M9aoZ0i5wtB4QyYvB2F_l91L2_kNuub-My-Pd_fMqk19x_nA6zpXPtwroK0ClUUAHV-JrblKcdvKRrzEwbR_8FuL73g'
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
