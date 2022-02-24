import styled from '@emotion/styled';

export const Main = styled.div`
  height: 100vh;
  padding: 2rem;
  background: #f4f7f4;
  display: grid;
  grid-gap: 16px;
  grid-template-rows: 88px 1fr;
  grid-template-areas:
    'controls'
    'manager';
`;
