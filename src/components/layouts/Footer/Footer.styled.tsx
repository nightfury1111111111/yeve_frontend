import styled from 'styled-components';

export const FooterContainer = styled.div`
  @media (min-height: 1028px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px 0 20px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #060606;
  padding: 20px 40px 20px;
  @media (max-width: 1024px) {
    display: block;
    text-align: center;
    padding: 20px 20px 20px;
  }
`;

export const ReservedText = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: #ababab;
  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
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
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;
