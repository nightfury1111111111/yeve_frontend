import { styled } from 'styled-components';

export const LockInfoContainer = styled.div`
  border-radius: 16px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.gray['800']};
  background: ${({ theme }) => theme.colors.gray['950']};
  padding: 24px;
  position: relative;
  width: 400px;
`;

export const LockInfoTitle = styled.div`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 12px;
`;
export const LockGuideItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  gap: 20px;
  z-index: 1;
`;
export const LockNumber = styled.div`
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.colors.purple['500']};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  z-index: 1;
  flex-shrink: 0;
`;

export const LockText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  z-index: 1;
`;
export const LockLine = styled.div<{ h?: string }>`
  position: absolute;
  background: ${({ theme }) => theme.colors.purple['500']};
  width: 1px;
  height: ${(p) => p.h || ' 188px'};
  top: 83px;
  left: 35px;
  z-index: 0;
`;
export const AllowContainer = styled.div`
  padding-left: 40px;
`;
