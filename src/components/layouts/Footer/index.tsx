import { FooterContainer, FooterMenu, ReservedText } from './Footer.styled';

type FooterProps = {
  style?: Record<string, any>;
};

export default function Footer({ style = {} }: FooterProps) {
  return (
    <FooterContainer style={style}>
      <ReservedText>© 2024 YEVE. All rights reserved.</ReservedText>
      <FooterMenu>
        <li>Documentation </li>
        <li>Privacy Policy</li>
        <li>Terms of use</li>
      </FooterMenu>
    </FooterContainer>
  );
}
