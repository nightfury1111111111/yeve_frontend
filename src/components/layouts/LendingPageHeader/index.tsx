import logo from '@src/assets/images/png/logo.png';
import {
  Button,
  ButtonPrimary,
  ButtonPrimaryBurger,
  FlexContainer,
  HeaderContainer,
} from './Header.styled';
import SolanaIcon from '@src/assets/images/svg/solana';
import StarIcon from '@src/assets/images/svg/star';
import BurgerMenuIcon from '@src/assets/images/svg/burger-menu';
import Logo from '@src/assets/images/svg/logo';
export default function LandingPageHeader() {
  return (
    <HeaderContainer>
      <Logo />
      <FlexContainer>
        <Button>
          <SolanaIcon />
          SOLANA
        </Button>
        <StarIcon />
        <ButtonPrimary padding="12px 48px">Launch app</ButtonPrimary>
        <ButtonPrimaryBurger>
          <BurgerMenuIcon />
        </ButtonPrimaryBurger>
      </FlexContainer>
    </HeaderContainer>
  );
}
