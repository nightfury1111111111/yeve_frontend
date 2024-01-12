import styled from 'styled-components';
import wadeBg from '@src/assets/images/png/main-bg.png';
import { Button } from '@src/components/layouts/LandingPageHeader/Header.styled';

export const LandingContainer = styled.div`
  background: #060606;
  width: 100%;
  height: 100vh;
  /* background-image: url(${wadeBg}); */
  /* background-size: cover; */
  /* background-position: center; */
  overflow: hidden;
  position: relative;
`;

export const VideoBg = styled.div`
  position: absolute;
  width: 100vw;
  height: 90vh;
  video {
    height: 90vh;
    object-fit: fill;
    width: 100%;
  }
`;

export const LandingInsideContainer = styled.div`
  height: 100%;
  min-height: 100vh;
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

  video {
    width: 500px;
    max-width: 500px;
    height: auto;
    margin-top: -50px;
    @media (max-width: 1280px) {
      max-width: 380px;
    }
    @media (max-width: 1160px) {
      max-width: 380px;
    }
    @media (max-width: 1024px) {
      max-width: 320px;
    }
    @media (max-width: 430px) {
      max-width: 370px;
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
  padding-top: 20px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LandingLeftMobileLeft = styled.div`
  max-width: 417px;
`;

export const LandingLeftDescMobile = styled.div`
  font-size: 14px;
  line-height: 24px;
`;
export const LandingLeftTitleMobile = styled.div`
  font-size: 22px;
  line-height: 32px;
  margin: 0 0 10px;
`;
export const LandingLeftTitle = styled.div`
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px; /* 111.111% */
  text-transform: uppercase;
  margin-top: 60px;
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
  box-shadow: 0px 4px 4.5px 0px rgba(0, 0, 0, 0.25);
  img {
    width: 32px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogoItem1 = styled(LogoItem)`
  background: #fff;
  left: 0;
`;
export const LogoItem2 = styled(LogoItem)`
  background: #fff;
  left: 45px;
`;
export const LogoItem3 = styled(LogoItem)`
  background: #fff;
  left: 90px;
`;
export const LandingRight = styled.div`
  padding-top: 40px;
  padding-left: 36px;
  max-width: 320px;
  .star-icon {
    display: block;
    /* margin-top: 7px; */
    /* margin-bottom: 32px; */
    margin-left: 5px;
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
  width: 237px;
  display: flex;
  align-items: center;
  gap: 8px;
  &:first-child {
    margin-top: 20px;
  }
`;
export const LandingRightDesc = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 20px;
`;

export const LandingRightMobile = styled.div`
  display: none;
  @media (max-width: 1024px) {
    dipslay: block;
  }
  ${LandingRightTitle} {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    justify-content: center;
    font-size: 30px;
    @media (max-width: 400px) {
      font-size: 20px;
    }
  }
  ${LandingRightDesc} {
    text-align: center;
  }
`;

export const LandingBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 0 160px 10px;
  margin-top: -50px;
  @media (max-width: 1500px) {
    margin-top: 0;
  }
  @media (max-width: 1440px) {
    padding: 0 120px 10px;
  }
  @media (max-width: 1280px) {
    padding: 0 100px 10px;
    margin-top: 0;
  }
  @media (max-width: 1250px) {
    padding: 0 100px 10px;
    margin-top: 20px;
  }
  @media (max-width: 1190px) {
    padding: 0 100px 10px;
    margin-top: 30px;
  }
  @media (max-width: 1150px) {
    padding: 0 100px 10px;
    margin-top: 40px;
  }
  @media (max-width: 1024px) {
    padding: 0 20px 10px;
    max-width: 700px;
    margin: auto;
    margin-top: -20px;
  }
  @media (max-width: 430px) {
    margin-top: -40px;
  }
`;

export const LandingBottomLeft = styled.div`
  font-family: 'Inter';
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 66px;
  max-width: 700px;
  svg {
    display: inline-block;
    margin-right: 10px;
    width: 45px;
    height: 45px;
  }
  @media (max-width: 1280px) {
    font-size: 48px;
    max-width: 600px;
  }
  @media (max-width: 1150px) {
    max-width: 550px;
  }
  @media (max-width: 1060px) {
    max-width: 500px;
    font-size: 45px;
  }
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 36px;
    text-align: center;
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
export const ButtonPrimaryReadDoc = styled(ButtonPrimary)`
  display: flex;
  width: auto;
  margin-top: 16px;
  background: #ece8ff;
  color: #291782;
  border-color: #ede8ff;
  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    margin-top: 5px;
  }
`;
export const ButtonPrimaryReadDocMobile = styled(ButtonPrimary)`
  display: flex;
  width: auto;
  margin-top: 16px;
  background: #ece8ff;
  color: #291782;
  border-color: #ede8ff;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    margin-top: 5px;
  }
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
  align-items: center;
  width: 100%;
  gap: 10px;
  display: none;
  margin-top: 20px;
  @media (max-width: 1280px) {
    display: flex;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 0;
  }
`;
export const ButtonGroupMobile = styled.div`
  align-items: center;
  width: 100%;
  gap: 10px;
  display: none;
  margin-top: 20px;
  @media (max-width: 1280px) {
    display: none;
  }
  @media (max-width: 1024px) {
    display: flex;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const LandingLeftMobile = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 20px;
    text-align: center;
    margin: auto;
    ${LandingLeftCommunityText} {
      margin-top: 20px;
    }
    ${LogoItem} {
      position: relative;
      left: 0;
    }
    ${LogoItem2} {
      margin-left: -10px;
    }
    ${LogoItem3} {
      margin-left: -10px;
    }
    ${LogoGroup} {
      display: flex;
      padding-left: 0;
      margin: auto;
      margin-top: 20px;
      justify-content: center;
      svg {
        display: none;
      }
    }
  }
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  gap: 30px;
`;
