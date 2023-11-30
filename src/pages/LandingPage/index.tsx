import coneImg from '@src/assets/images/png/cone.png';
import ArrowPointHorizontalIcon from '@src/assets/images/svg/arround-point-horizontal';
import ArrowPointIcon from '@src/assets/images/svg/arrow-point';
import BigStarIcon from '@src/assets/images/svg/big-star';
import StarIcon from '@src/assets/images/svg/star';
import StarRoundIcon from '@src/assets/images/svg/star-round';
import Footer from '@src/components/layouts/Footer';
import { } from '@src/components/layouts/Layout.styles';
import LandingPageHeader from '@src/components/layouts/LendingPageHeader';
import { Button } from '@src/components/layouts/LendingPageHeader/Header.styled';
import {
  LandingBottom,
  LandingBottomLeft,
  LandingBottomRight,
  LandingContainer,
  LandingInsideContainer,
  LandingLeft,
  LandingLeftCommunityText,
  LandingLeftDesc,
  LandingLeftTitle,
  LandingMain,
  LandingRight,
  LandingRightDesc,
  LandingRightTitle,
  LogoGroup,
  LogoItem1,
  LogoItem2,
  LogoItem3,
} from './LandingPage.styled';
export default function LandingPage() {
  return (
    <LandingContainer>
      <LandingInsideContainer>
        <LandingPageHeader />
        <LandingMain>
          <LandingLeft>
            <LandingLeftTitle>Our Wonderful Community</LandingLeftTitle>
            <LandingLeftDesc>
              Explore the vibrant tapestry of our amazing community, where
              connections thrive and stories unfold.
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
            <LandingRightTitle>
              ETH to TON: Swift Tech Solution
            </LandingRightTitle>
            <StarIcon />
            <LandingRightDesc>
              At the forefront of innovation, our technology seamlessly converts
              ETH to TON
            </LandingRightDesc>
            <LandingRightDesc>
              Providing a cutting-edge solution for efficient cryptocurrency
              transactions.
            </LandingRightDesc>
          </LandingRight>
        </LandingMain>
        <LandingBottom>
          <LandingBottomLeft>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <BigStarIcon active />
            The Future of Blockchain Ve3 DEX SOLANA <BigStarIcon />
          </LandingBottomLeft>
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
