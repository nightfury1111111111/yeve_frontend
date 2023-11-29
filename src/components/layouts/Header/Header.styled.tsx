import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #060606;
  font-family: 'BeVietNamPro';
`;

export const Button = styled.button<{ padding?: string }>`
  border-radius: 4px;
  background-color: #151515;
  padding: ${(props) => props.padding || '12px'};
  border: none;
  color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: 'BeVietNamPro';
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ButtonPrimary = styled(Button)`
  background: #6134fe;
`;
