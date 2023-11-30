import logo from '@src/assets/images/png/logo.png';
import {
  Button,
  ButtonPrimary,
  FlexContainer,
  HeaderContainer,
} from './Header.styled';

import SolanaIcon from '@src/assets/images/svg/solana';
import StarIcon from '@src/assets/images/svg/star';
import { useNavigate } from 'react-router-dom';

export default function LandingPageHeader() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <FlexContainer>
        <Button>
          <SolanaIcon />
          SOLANA
        </Button>
        <StarIcon />
        <ButtonPrimary padding="12px 48px" onClick={() => navigate('/swap')}>
          Launch app
        </ButtonPrimary>
      </FlexContainer>
    </HeaderContainer>
  );
}
