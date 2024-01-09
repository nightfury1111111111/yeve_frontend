import { styled } from 'styled-components';

export const ImgContainer = styled.div`
  width: 640px;
  img {
    width: 100%;
  }
  flex-shrink: 0;
`;
export const Description = styled.div`
  margin-top: 10px;
`;
export const BribeContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding: 16px;
  max-width: 1150px;
  margin: 80px auto 0;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 10px;
  }
`;

export const BribeBox = styled.div`
  border-radius: 8px;
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

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 10px;
`;

export const DetailBox = styled.div`
  background: ${({ theme }) => theme.colors.gray['900']};
`;
