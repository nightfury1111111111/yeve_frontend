import { FooterContainer, FooterMenu, ReservedText } from './Footer.styled';

export default function Footer() {
  return (
    <FooterContainer>
      <ReservedText>© 2023 YEVE. All rights reserved.</ReservedText>
      <FooterMenu>
        <li>Documentation </li>
        <li>Privacy Policy</li>
        <li>Terms of use</li>
      </FooterMenu>
    </FooterContainer>
  );
}
