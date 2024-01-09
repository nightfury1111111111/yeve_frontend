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
  width: 300px;
  display: flex;
  align-items: center;
  padding: 12px;
  background: ${({ theme }) => theme.colors.gray['900']};
  gap: 8px;
  border-radius: 4px;
  flex: 1;
  height: 48px;

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({ theme }) => theme.colors.purple['500']} !important;
    }
  }

  > input {
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.gray['50']} !important;
    font-size: 14px;
    flex: 1;

    &::-webkit-input-placeholder {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.gray['400']};
    }
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
  gap: 12px;
  justify-content: flex-end;
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;

  > a {
    background: ${({ theme }) => theme.colors.gray['900']};
    color: ${({ theme }) => theme.colors.gray['50']};
    display: block;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 14px 0;
    text-align: center;
    border-radius: 4px;
    width: 90px;
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
  justify-content: space-between;
`;

export const Status = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 5px;
  justify-content: space-between;
`;
export const StatusInfo = styled.div`
  background: ${({ theme }) => theme.colors.gray['900']};
  padding: 18px 20px;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  gap: 45px;
  div div:last-child {
    margin-top: 8px;
  }
  color: ${({ theme }) => theme.colors.gray['250']};
`;
export const Reward = styled.div`
  background: ${({ theme }) => theme.colors.purple['900']};
  color: ${({ theme }) => theme.colors.purple['300']};
  border: 2px solid ${({ theme }) => theme.colors.purple['500']};
  padding-top: 10px;
  text-align: center;
  padding: 18px 20px 0;
  div:first-child {
    font-size: 12px;
    color: white;
    margin-bottom: 8px;
  }
  border-radius: 4px;
`;
