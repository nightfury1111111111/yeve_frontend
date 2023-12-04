import coneImg from '@src/assets/images/png/cone.png';
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
  LandingLeftTitle,
  LandingLeftTitleMobile,
  LandingMain,
  LandingRight,
  LandingRightDesc,
  LandingRightTitle,
  LogoGroup,
  LogoItem1,
  LogoItem2,
  LogoItem3
} from './LandingPage.styled';
export default function LandingPage() {
  return (
    <LandingContainer>
      <LandingInsideContainer>
        <LandingPageHeader />
        <LandingMain>
          <LandingLeft>
            <LandingLeftTitle>BE PART OF OUR COMMUNITY</LandingLeftTitle>
            <LandingLeftDesc>
              Join like-minded individuals on a crypto journey simplified to fit
              all experience levels
            </LandingLeftDesc>
            <LandingLeftCommunityText>Community</LandingLeftCommunityText>
            <LogoGroup>
              <LogoItem1 />
              <LogoItem2 />
              <LogoItem3 />
              <ArrowPointIcon />
            </LogoGroup>
          </LandingLeft>
          <img src={coneImg} alt="cone" />
          <LandingRight>
            <LandingRightTitle>BUILT ON</LandingRightTitle>
            <LandingRightTitle>
              <SolanaIconBig /> SOLANA
            </LandingRightTitle>
            <StarIcon />
            <LandingRightDesc>
              At the forefront of innovation harnessing the power and
              scalability of Solana architecture. Providing a cutting-edge
              solution for efficient cryptocurrency transactions.
            </LandingRightDesc>
          </LandingRight>
        </LandingMain>
        <LandingBottom>
          <LandingBottomLeft>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <BigStarIcon active />
            The future of deep liquidity and ve3 simplicity on Solana{' '}
            <BigStarIcon />
          </LandingBottomLeft>
          <LandingLeftMobile>
            <LandingLeftTitleMobile>
              BE PART OF OUR COMMUNITY
            </LandingLeftTitleMobile>
            <LandingLeftDescMobile>
              Join like-minded individuals on a crypto journey simplified to fit
              all experience levels
            </LandingLeftDescMobile>
          </LandingLeftMobile>
          <ButtonGroup>
            <ButtonSecondary padding="12px 48px">See more</ButtonSecondary>
            <ButtonPrimary padding="12px 48px">Launch app</ButtonPrimary>
          </ButtonGroup>

          <LandingBottomRight>
            <StarRoundIcon />
            <Button>TRADE</Button>
            <Button>EARN</Button>
            <ArrowPointHorizontalIcon />
            <Button>BRIBE</Button>
            <Button>VOTE</Button>
            <Button>REWARD</Button>
            <StarIcon />
          </LandingBottomRight>
        </LandingBottom>
        <Footer />
      </LandingInsideContainer>
    </LandingContainer>
  );
}
