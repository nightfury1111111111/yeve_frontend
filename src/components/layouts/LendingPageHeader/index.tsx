import {
  Button,
  ButtonPrimary,
  ButtonPrimaryBurger,
  FlexContainer,
  HeaderContainer,
} from './Header.styled';

import SolanaIcon from '@src/assets/images/svg/solana';
import StarIcon from '@src/assets/images/svg/star';
import { useNavigate } from 'react-router-dom';

import BurgerMenuIcon from '@src/assets/images/svg/burger-menu';
import Logo from '@src/assets/images/svg/logo';
export default function LandingPageHeader() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo />
      <FlexContainer>
        <Button>
          <SolanaIcon />
          SOLANA
        </Button>
        <StarIcon />
        <ButtonPrimary padding="12px 48px" onClick={() => navigate('/swap')}>
          Launch app
        </ButtonPrimary>
        <ButtonPrimaryBurger>
          <BurgerMenuIcon />
        </ButtonPrimaryBurger>
      </FlexContainer>
    </HeaderContainer>
  );
}
