import { styled } from 'styled-components';

export const CreateLockPageContainer = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding: 16px;
  max-width: 1000px;
  margin: 80px auto 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 24px;
    display: block;
  }
`;
