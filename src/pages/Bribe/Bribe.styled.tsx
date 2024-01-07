import { styled } from 'styled-components';

export const BribeContainer = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding: 16px;
  max-width: 1000px;
  margin: 80px auto 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BribeBox = styled.div`
  border-radius: 16px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.gray['800']};
  background: ${({ theme }) => theme.colors.gray['950']};
  padding: 24px;
  width: 55%;
  margin: auto;
  input {
    background: ${({ theme }) => theme.colors.gray['900']};
    color: ${({ theme }) => theme.colors.gray['500']};
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 120px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    padding: 14px 16px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
export const Label = styled.div`
  color: ${({ theme }) => theme.colors.gray['250']};
  margin: 20px 0 10px;
`;
