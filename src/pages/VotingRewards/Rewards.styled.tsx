import { styled } from 'styled-components';

export const SectionHighlight = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 4px 8px;
  color: ${({ theme }) => theme.colors.purple['50']};
  background: ${({ theme }) => theme.colors.purple['500']};
  border-radius: 4px;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  > span {
    color: ${({ theme }) => theme.colors.gray['0']};
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
  }
`;

export const TableHeadingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const PageContainer = styled.div`
  margin-top: 80px;
`;
