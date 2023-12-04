import { Link } from 'react-router-dom';
import { Container, HeaderContainer, Logo } from './Header.styled';
import Menu from './Menu';
import Account from './Account';
import { ThemeContext } from '@src/context/useThemeContext';
import { useContext } from 'react';

export default function Header() {
  const { themeConfig } = useContext(ThemeContext);

  return (
    <Container>
      <HeaderContainer>
        <Menu themeConfig={themeConfig} />

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
