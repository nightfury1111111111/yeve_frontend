import { styled } from 'styled-components';

export const ListOptions = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray['900']};
  min-width: 100%;

  > span {
    width: 100%;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    padding: 14px 16px;
    cursor: pointer;

    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &.active,
    &:hover {
      background: ${({ theme }) => theme.colors.gray['850']};
    }
  }
`;

export const SelectedOption = styled.div`
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

  svg {
    path {
      stroke: ${({ theme }) => theme.colors.gray['500']} !important;
    }
  }
`;

export const SelectContainer = styled.div`
  position: relative;
`;
