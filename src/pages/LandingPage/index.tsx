import conVideo from '@src/assets/webm/cone.webm';
import bgVideo from '@src/assets/webm/bg.webm';
import social1Img from '@src/assets/images/png/social1.png';
import social2Img from '@src/assets/images/png/social2.png';
import social3Img from '@src/assets/images/png/social3.png';

import ArrowPointHorizontalIcon from '@src/assets/images/svg/arround-point-horizontal';
import ArrowPointIcon from '@src/assets/images/svg/arrow-point';
import BigStarIcon from '@src/assets/images/svg/big-star';
import SolanaIconBig from '@src/assets/images/svg/solana-big';
import StarIcon from '@src/assets/images/svg/star';
import StarRoundIcon from '@src/assets/images/svg/star-round';
import Footer from '@src/components/layouts/Footer';
import LandingPageHeader from '@src/components/layouts/LendingPageHeader';
import { Button } from '@src/components/layouts/LendingPageHeader/Header.styled';
import {
  ButtonGroup,
  ButtonPrimary,
  ButtonPrimaryReadDoc,
  ButtonSecondary,
  LandingBottom,
  LandingBottomLeft,
  LandingBottomRight,
  LandingContainer,
  LandingInsideContainer,
  LandingLeft,
  LandingLeftCommunityText,
  LandingLeftDesc,
  LandingLeftDescMobile,
  LandingLeftMobile,
  LandingLeftMobileLeft,
  LandingLeftTitle,
  LandingLeftTitleMobile,
  LandingMain,
  LandingRight,
  LandingRightDesc,
  LandingRightMobile,
  LandingRightTitle,
  LogoGroup,
  LogoItem1,
  LogoItem2,
  LogoItem3,
  VideoBg,
} from './LandingPage.styled';
export default function LandingPage() {
  return (
    <LandingContainer>
      <LandingPageHeader />
      <VideoBg>
        <video muted autoPlay loop>
          <source src={bgVideo} type="video/webm" />
        </video>
      </VideoBg>
      <LandingInsideContainer>
        <LandingMain>
          <LandingLeft>
            <LandingLeftTitle>BE PART OF OUR COMMUNITY</LandingLeftTitle>
            <LandingLeftDesc>
              Join like-minded individuals on a crypto journey simplified to fit
              all experience levels
            </LandingLeftDesc>
            <LandingLeftCommunityText>Community</LandingLeftCommunityText>
            <LogoGroup>
              <LogoItem1>
                <img src={social1Img} alt="social1Img" />
              </LogoItem1>
              <LogoItem2>
                <img src={social2Img} alt="social2Img" />
              </LogoItem2>
              <LogoItem3>
                <img src={social3Img} alt="social3Img" />
              </LogoItem3>
              <ArrowPointIcon />
            </LogoGroup>
          </LandingLeft>
          {/* <img src={coneImg} alt="cone" /> */}
          <video muted autoPlay loop>
            <source src={conVideo} type="video/webm" />
          </video>
          <LandingRight>
            <LandingRightTitle>BUILT ON</LandingRightTitle>
            <LandingRightTitle>
              <SolanaIconBig /> SOLANA <StarIcon />
            </LandingRightTitle>
            <LandingRightDesc>
              At the forefront of innovation harnessing the power and
              scalability of Solana architecture. Providing a cutting-edge
              solution for efficient cryptocurrency transactions.
            </LandingRightDesc>
            <ButtonPrimaryReadDoc padding="12px 48px">
              READ DOCS
            </ButtonPrimaryReadDoc>
          </LandingRight>
        </LandingMain>
        <LandingBottom>
          <LandingBottomLeft>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <BigStarIcon active />
            The future of deep liquidity and ve3 simplicity on Solana{' '}
            <BigStarIcon />
          </LandingBottomLeft>
          <LandingRightMobile>
            <LandingRightTitle>
              BUILT ON
              <SolanaIconBig /> SOLANA <StarIcon />
            </LandingRightTitle>
            <LandingRightDesc>
              At the forefront of innovation harnessing the power and
              scalability of Solana architecture. Providing a cutting-edge
              solution for efficient cryptocurrency transactions.
            </LandingRightDesc>
          </LandingRightMobile>
          <ButtonGroup>
            <ButtonPrimaryReadDoc padding="12px 48px">
              READ DOCS
            </ButtonPrimaryReadDoc>
            <ButtonPrimary padding="12px 48px">COMING SOON</ButtonPrimary>
          </ButtonGroup>

          <LandingLeftMobile>
            <LandingLeftMobileLeft>
              <LandingLeftTitleMobile>
                BE PART OF OUR COMMUNITY
              </LandingLeftTitleMobile>
              <LandingLeftDescMobile>
                Join like-minded individuals on a crypto journey simplified to
                fit all experience levels
              </LandingLeftDescMobile>
            </LandingLeftMobileLeft>

            <div>
              <LandingLeftCommunityText>Community</LandingLeftCommunityText>
              <LogoGroup>
                <LogoItem1>
                  <img src={social1Img} alt="social1Img" />
                </LogoItem1>
                <LogoItem2>
                  <img src={social2Img} alt="social2Img" />
                </LogoItem2>
                <LogoItem3>
                  <img src={social3Img} alt="social3Img" />
                </LogoItem3>
                <ArrowPointIcon />
              </LogoGroup>
            </div>
          </LandingLeftMobile>

          <LandingBottomRight>
            <StarRoundIcon />
            <Button>SWAP</Button>
            <Button>EARN</Button>
            <ArrowPointHorizontalIcon />
            <Button>BRIBE</Button>
            <Button>VOTE</Button>
            <Button>REWARD</Button>
            <StarIcon />
          </LandingBottomRight>
        </LandingBottom>
      </LandingInsideContainer>
      <Footer />
    </LandingContainer>
  );
}
