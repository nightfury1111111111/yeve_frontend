import styled from 'styled-components';

export const LockContainer = styled.div`
  margin-top: 12px;
  background: ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;
  padding: 16px 16px 40px;
  gap: 16px;
  margin-bottom: 20px;
  & > div {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;
