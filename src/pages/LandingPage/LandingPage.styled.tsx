import styled from 'styled-components';
import wadeBg from '@src/assets/images/png/wade-bg.png';

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
  max-width: 1200px;
  margin: auto;
`;

export const LandingMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  img {
    max-width: 600px;
    width: auto;
  }
  padding: 0 40px;
`;

export const LandingLeft = styled.div`
  width: 318px;
  padding-top: 96px;
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
  width: 318px;
  svg {
    display: block;
    margin-right: 0;
    margin-left: auto;
    margin-top: 8px;
    margin-bottom: 32px;
  }
`;
export const LandingRightTitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 111.111% */
  margin-top: 60px;
  margin-bottom: 20px;
  width: 175px;
  margin-right: 10px;
  margin-left: auto;
`;
export const LandingRightDesc = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  margin-top: 20px;
  width: 155px;
  margin-right: 0;
  margin-left: auto;
`;

export const LandingBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 0 40px;
`;

export const LandingBottomLeft = styled.div`
  font-family: 'Inter';
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px;
  max-width: 650px;
  svg {
    display: inline-block;
    margin-right: 10px;
  }
`;
export const LandingBottomRight = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;
