import styled from 'styled-components';
import wadeBg from '@src/assets/images/png/wade-bg.png';
import { Button } from '@src/components/layouts/LendingPageHeader/Header.styled';

export const LandingContainer = styled.div`
  background: #060606;
  width: 100%;
  min-height: 100vh;
`;

export const LandingInsideContainer = styled.div`
  background-image: url(${wadeBg});
  background-size: cover;
  height: 100%;
  min-height: 100vh;
  background-position: center;
  max-width: 1920px;
  margin: auto;
  position: relative;
`;

export const LandingMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1024px) {
    display: block;
    text-align: center;
  }
  img {
    max-width: 672px;
    @media (max-width: 1280px) {
      max-width: 600px;
    }
    @media (max-width: 1160px) {
      max-width: 450px;
    }
    @media (max-width: 1024px) {
      max-width: 80vw;
    }
    width: auto;
  }
  padding: 0 160px;
  @media (max-width: 1440px) {
    padding: 0 120px;
  }
  @media (max-width: 1280px) {
    padding: 0 100px 30px;
  }
  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export const LandingLeft = styled.div`
  width: 318px;
  padding-top: 96px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LandingLeftMobile = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    margin-bottom: 20px;
    max-width: 700px;
  }
`;

export const LandingLeftDescMobile = styled.div`
  font-size: 14px;
  line-height: 24px;
`;
export const LandingLeftTitleMobile = styled.div`
  font-size: 22px;
  line-height: 32px;
  margin: 10px 0;
`;
export const LandingLeftTitle = styled.div`
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px; /* 111.111% */
  text-transform: uppercase;
`;
export const LandingLeftDesc = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 111.111% */
  margin-top: 10px;
  margin-bottom: 30px;
`;
export const LandingLeftCommunityText = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 111.111% */
`;
export const LogoGroup = styled.div`
  position: relative;
  margin-top: 8px;
  padding-left: 160px;
  svg {
    position: absolute;
    left: 160px;
    top: 10px;
  }
`;

export const LogoItem = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
export const LogoItem1 = styled(LogoItem)`
  background: #f6f6f6;
  left: 0;
`;
export const LogoItem2 = styled(LogoItem)`
  background: #c9c9c9;
  left: 45px;
`;
export const LogoItem3 = styled(LogoItem)`
  background: #ababab;
  left: 90px;
`;
export const LandingRight = styled.div`
  padding-top: 70px;
  padding-left: 36px;
  max-width: 320px;
  .star-icon {
    display: block;
    margin-top: 7px;
    margin-bottom: 32px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const LandingRightTitle = styled.div`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 52px; /* 111.111% */
  width: 175px;
  display: flex;
  align-items: center;
  gap: 8px;
  &:first-child {
    margin-top: 60px;
  }
`;
export const LandingRightDesc = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 20px;
`;

export const LandingBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 0 160px 30px;
  @media (max-width: 1440px) {
    padding: 0 120px 30px;
  }
  @media (max-width: 1280px) {
    padding: 0 100px 30px;
  }
  @media (max-width: 1024px) {
    padding: 0 20px 30px;
    max-width: 700px;
    margin: auto;
    margin-top: -70px;
  }
`;

export const LandingBottomLeft = styled.div`
  font-family: 'Inter';
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px;
  max-width: 700px;
  svg {
    display: inline-block;
    margin-right: 10px;
  }
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 36px;
    svg {
      width: 25px;
      height: 25px;
    }
    span {
      display: none;
    }
    margin: 0 auto;
  }
`;
export const LandingBottomRight = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const ButtonPrimary = styled(Button)`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
  background: #6134fe;
  width: 100%;
  justify-content: center;
  margin: 5px 0 5px;
  font-size: 14px;
  height: 50px;
`;
export const ButtonSecondary = styled(Button)`
  height: 50px;

  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
  border: 1px solid#6134fe;
  color: white;
  width: 100%;
  justify-content: center;
  margin: 5px 0 5px;
  font-weight: 400;
  font-size: 14px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  @media (max-width: 420px) {
    display: block;
  }
`;
