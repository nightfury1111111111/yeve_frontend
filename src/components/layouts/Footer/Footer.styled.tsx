import styled from 'styled-components';

export const FooterContainer = styled.div`
  @media (min-width: 2560px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px 0 20px;
  }
  @media screen and (max-width: 960px) {
    /* margin-bottom: 105px; */
  }
  @media (min-height: 755px) {
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
    padding: 20px 0 20px;
  }
  @media (max-width: 900px) {
    display: block;
    text-align: center;
    padding: 16px 0;
  }
`;

export const ReservedText = styled.div`
  @media (min-width: 2560px) {
    padding-left: 40px;
  }
  @media (min-height: 755px) {
  }
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: #ababab;
  padding-left: 40px;
  @media (max-width: 1024px) {
    margin-bottom: 20px;
    padding-left: 120px;
  }
  @media (max-width: 900px) {
    padding-left: 0;
  }

  @media (max-width: 700px) {
    margin-bottom: 12px;
  }
`;
export const FooterMenu = styled.div`
  @media (min-width: 2560px) {
    padding-right: 40px;
  }
  @media (min-height: 755px) {
    padding-right: 40px;
  }
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
    padding-right: 120px;
  }
  @media (max-width: 900px) {
    padding-right: 0;
  }
`;
