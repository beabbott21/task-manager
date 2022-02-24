import styled from '@emotion/styled';

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #d8d8d8;
  border-radius: 6px;
  padding: 16px;
  max-height: 80vh;
`;

export const ColumnHeader = styled.div`
  font-size: 26px;
  font-weight: 600;
  text-align: left;
  width: 100%;
`;

export const List = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 16px 4px;
  overflow: scroll;
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 18px;
  font-weight: 600;
`;
