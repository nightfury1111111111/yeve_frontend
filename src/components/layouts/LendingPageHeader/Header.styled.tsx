import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 8px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #060606;
  @media (max-width: 1024px) {
    .star-icon {
      display: none;
    }
    padding: 20px;
  }
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
  cursor: pointer;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ButtonPrimary = styled(Button)`
  background: #6134fe;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ButtonPrimaryBurger = styled(ButtonPrimary)`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;
