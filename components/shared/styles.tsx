import styled from '@emotion/styled';

export const Container = styled.div`
  background: #dcdcdc;
  border-radius: 6px;
  padding: 16px;
  box-shadow: -1px 1px 4px #a0a3a0;
`;
export const Column = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 80vh;
`;

export const ColumnHeader = styled.div`
  font-size: 26px;
  font-weight: 600;
  text-align: left;
  width: 100%;
  padding-bottom: 16px;
`;

export const List = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 0 4px;
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
