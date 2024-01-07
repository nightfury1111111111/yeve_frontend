import { ThemeContext } from '@src/context/useThemeContext';
import { useContext } from 'react';
import { Container, HeaderContainer } from './Header.styled';
import Menu from './Menu';
import Logo from './Logo';

export default function Header() {
  const { themeConfig } = useContext(ThemeContext);

  return (
    <Container>
      <HeaderContainer>
        <Logo themeConfig={themeConfig} />
        <Menu />
      </HeaderContainer>
    </Container>
  );
}
