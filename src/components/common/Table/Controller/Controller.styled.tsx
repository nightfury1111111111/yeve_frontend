import { styled } from 'styled-components';

export const ButtonController = styled.button`
  background: ${({ theme }) => theme.colors.purple['500']};
  color: ${({ theme }) => theme.colors.gray['50']};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 12px 48px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background: ${({ theme }) => theme.colors.gray['900']};
  gap: 8px;
  border-radius: 4px;
  flex: 1;

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({ theme }) => theme.colors.gray['50']} !important;
    }
  }

  > input {
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.gray['50']} !important;
    font-size: 14px;
    flex: 1;
  }

  > span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    stroke: ${({ theme }) => theme.colors.gray['0']} !important;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 12px;
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: center;

  > a {
    background: ${({ theme }) => theme.colors.gray['900']};
    color: ${({ theme }) => theme.colors.gray['50']};
    display: block;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 14px 28px;
    border-radius: 4px;

    &.active {
      background: ${({ theme }) => theme.colors.purple['500']};
    }
  }
`;

export const Controller = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  gap: 12px;
`;
