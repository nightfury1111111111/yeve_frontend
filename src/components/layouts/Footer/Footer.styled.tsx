import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #060606;
  padding: 50px 0 20px;
`;

export const ReservedText = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: #ababab;
`;
export const FooterMenu = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: #7e7e7e;
  display: flex;
  gap: 12px;
  & li:first-child {
    list-style: none;
  }
`;
