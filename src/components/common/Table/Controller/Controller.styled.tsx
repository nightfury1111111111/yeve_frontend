import { styled } from 'styled-components';

export const FilterButton = styled.button`
  display: none;

  svg {
    path {
      stroke: ${({ theme }) => theme.colors.gray['50']} !important;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    outline: none;
    border: none;
    height: 48px;
    width: 48px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.gray['900']};
  }
`;

export const ButtonController = styled.button`
  background: ${({ theme }) => theme.colors.purple['500']};
  color: ${({ theme }) => theme.colors.gray['50']};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 10px 48px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-wrap: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  > span {
    color: ${({ theme }) => theme.colors.gray['50']};
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-wrap: nowrap;
  }

  border: 2px solid ${({ theme }) => theme.colors.purple['500']};

  &:hover {
    background: ${({ theme }) => theme.colors.purple['600']};
    border-color: ${({ theme }) => theme.colors.purple['300']};
  }

  @media (max-width: 768px) {
    text-wrap: unset;
    flex: 1;
    padding: unset;
  }
`;

export const SearchInputContainer = styled.div`
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
  flex: 1;
  gap: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: stretch;
  background: ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    border-radius: 4px;
    height: 48px;

    > span {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.gray['50']};
      text-wrap: nowrap;
    }

    &.active {
      background: ${({ theme }) => theme.colors.purple['500']};
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    > a {
      flex: 1;
      text-align: center;
    }
  }
`;

export const ControllerModalButton = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: flex-end;

  > button {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    padding: 8px 12px;
    border: 2px solid ${({ theme }) => theme.colors.purple['500']};
    background: ${({ theme }) => theme.colors.purple['500']};
    color: ${({ theme }) => theme.colors.gray['200']};
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.colors.purple['600']};
      border-color: ${({ theme }) => theme.colors.purple['300']};
    }
  }
`;

export const ControllerModalForm = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.gray['950']};
  border-radius: 8px;
  width: 30%;
  max-height: 60%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 60%;

  > div {
    display: block;
  }

  @media screen and (max-width: 530px) {
    width: 100%;
    margin: 0 16px;
  }
`;

export const ControllerModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background: ${({ theme }) => `${theme.colors.gray['1000']}80`};
  backdrop-filter: blur(4px);

  @media screen and (max-width: 960px) {
    align-items: unset;

    > div {
      margin-top: 112px;
    }
  }
`;

export const Controller = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    margin-top: 12px;
  }
`;
