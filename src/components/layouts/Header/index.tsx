import { ThemeContext } from '@src/context/useThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Account from './Account';
import { Container, HeaderContainer, Logo } from './Header.styled';
import Menu from './Menu';

export default function Header() {
  const { themeConfig } = useContext(ThemeContext);

  return (
    <Container>
      <HeaderContainer>
        <Menu />

        <Logo>
          <Link to="/">
            <img src={themeConfig.images.header?.logo} />
          </Link>
        </Logo>
        <Account themeConfig={themeConfig} />
      </HeaderContainer>
    </Container>
  );
}
