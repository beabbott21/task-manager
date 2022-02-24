import styled from '@emotion/styled';

export const Manager = styled.div`
  display: grid;
  width: 100%;
  height: 300px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  grid-template-areas: 'backlog inProgress completed';
`;
