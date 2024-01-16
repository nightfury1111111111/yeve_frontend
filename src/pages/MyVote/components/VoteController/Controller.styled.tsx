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

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
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
    width: 100%;

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

  @media (max-width: 768px) {
    width: 100% !important;
    height: 100%;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;

    > div,
    button {
      width: 100%;
    }
  }
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

  @media (max-width: 768px) {
    width: 100%;
    display: none;

    > a {
      width: 50%;
    }

    &.mobile {
      display: flex;
      width: 50%;
    }
  }
`;

export const MobileTabContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;

    ${TabContainer} {
      width: 100%;
    }
  }

  > div:last-child {
    background: ${({ theme }) => theme.colors.gray['900']};
    border: 2px solid ${({ theme }) => theme.colors.gray['900']};
    color: ${({ theme }) => theme.colors.gray['500']};
    padding: 12px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 8px;

    > svg > path {
      stroke: ${({ theme }) => theme.colors.purple['50']} !important;
    }

    > span {
      color: ${({ theme }) => theme.colors.purple['500']};
      font-weight: 600;
      line-height: 28px;
      font-size: 18px;
    }

    > div {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.purple['50']};
    }
  }
`;

export const Controller = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  gap: 12px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 8px;
    gap: 8px;
  }
`;

export const Status = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 5px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    margin-top: 8px;
  }
`;
export const StatusInfo = styled.div`
  background: ${({ theme }) => theme.colors.gray['900']};
  padding: 18px 36px;
  border-radius: 4px;
  font-size: 14px;
  display: flex;

  justify-content: space-between;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  div div:last-child {
    margin-top: 8px;
  }
  color: ${({ theme }) => theme.colors.gray['250']};

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    justify-content: center;

    > div {
      align-items: center;
    }

    > div:not(:first-child) {
      display: none;
    }
  }
`;
export const Reward = styled.div`
  background: ${({ theme }) => theme.colors.purple['900']};
  color: ${({ theme }) => theme.colors.purple['300']};
  border: 2px solid ${({ theme }) => theme.colors.purple['500']};
  padding-top: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;

  div:first-child {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray['0']};
    margin-bottom: 8px;
    text-wrap: nowrap;
  }
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
