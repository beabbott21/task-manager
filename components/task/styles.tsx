import styled from '@emotion/styled';

export const Card = styled.div`
  background: #fcfcfc;
  border-radius: 6px;
  padding: 6px;
  margin-bottom: 16px;
  height: 120px;
  box-shadow: -1px 1px 5px #8b8b8b;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'title . id'
    'details details details'
    'person . priority';
  cursor: pointer;
`;

export const Title = styled.div`
  grid-area: title;
  width: 100%;
  max-height: 42px;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
`;

export const Id = styled.div`
  grid-area: id;
  text-align: center;
  justify-self: flex-end;
  font-size: 12px;
  font-weight: 600;
  width: 40px;
  max-height: 20px;
  padding: 4px 0;
  background: #e8e8e8;
  border-radius: 4px;
`;

export const Details = styled.div`
  grid-area: details;
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  overflow: auto;
`;

export const Person = styled.div`
  grid-area: person;
  align-self: flex-end;
  height: 28px;
  width: 28px;
  font-size: 15px;
  padding: 6px 0;
  border-radius: 50%;
  text-align: center;
  background: #becad6;
`;

export const Priority = styled.div<{ color: string }>`
  grid-area: priority;
  padding: 4px 0;
  width: 80px;
  font-weight: 500;
  border-radius: 8px;
  text-align: center;
  background: ${({ color }) => color};
`;
