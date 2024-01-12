import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 8px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #060606;
  @media (max-width: 1024px) {
    button:last-child {
      display: none;
    }
    padding: 20px 120px;
  }
  @media (max-width: 900px) {
    padding: 20px;
  }
`;

export const Button = styled.button<{ padding?: string }>`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray['900']};
  border: 2px solid ${({ theme }) => theme.colors.gray['900']};
  padding: ${(props) => props.padding || '12px'};
  color: ${({ theme }) => theme.colors.gray['100']};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  &.dark {
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray['850']};
      border-color: ${({ theme }) => theme.colors.gray['700']};
    }
  }
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
