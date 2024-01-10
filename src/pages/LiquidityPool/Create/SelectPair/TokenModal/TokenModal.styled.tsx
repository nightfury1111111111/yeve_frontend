import { styled } from 'styled-components';

export const TokenBalance = styled.div`
  color: ${({ theme }) => theme.colors.gray['0']};
  opacity: 0.48;
  margin-right: 12px;
  margin-left: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

export const TokenInfo = styled.div`
  flex: 1;
  margin-left: 12px;

  > div {
    color: ${({ theme }) => theme.colors.gray['0']};
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  > span {
    color: ${({ theme }) => theme.colors.gray['500']};
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }
`;

export const TokenItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;

  > img {
    width: 32px;
    height: 32px;
    border-radius: 999px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const TokenList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray['1000']};
    opacity: 0.64;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray['800']};
  }
`;

export const BookmarkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray['900']};

  > img {
    width: 24px;
    height: 24px;
    border-radius: 999px;
  }

  > span {
    color: ${({ theme }) => theme.colors.gray['0']};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
  }

  > div {
    padding: 2px;
    cursor: pointer;

    > svg {
      > path {
        stroke: ${({ theme }) => theme.colors.gray['500']} !important;
      }
    }
  }
`;

export const BookmarkList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: ${({ theme }) => theme.colors.gray['900']};
  border-radius: 4px;

  > svg > path {
    stroke: ${({ theme }) => theme.colors.gray['500']} !important;
  }

  > input {
    width: 100%;
    background-color: unset;
    border: unset;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.gray['0']};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray['500']};
      opacity: 1;
    }
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.gray['900']};
  padding: 8px 12px;
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;

  > svg > path {
    stroke: ${({ theme }) => theme.colors.gray['500']} !important;
  }

  > span {
    color: ${({ theme }) => theme.colors.gray['0']};
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }
`;

export const TokenModalForm = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.gray['950']};
  border-radius: 8px;
  width: 30%;
  max-height: 60%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TokenModalContainer = styled.div`
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
`;
