import presaleImg from '@src/assets/images/png/presale.png';
import {
  BribeContainer,
  Description,
  DetailBox,
  Flex,
  ImgContainer,
  Title,
} from './Presale.styled';
import { ThemeContext } from '@src/context/useThemeContext';
import { useContext } from 'react';

export default function Presale() {
  const { themeConfig } = useContext(ThemeContext);

  return (
    <BribeContainer>
      <ImgContainer>
        <img src={presaleImg} alt="presale" />
      </ImgContainer>
      <Description>
        <Title>YEVE Protocol veNFT</Title>
        <Flex>
          <img src={themeConfig.images.solanaLogo} /> <span>YEVE Protocol</span>
        </Flex>
        <DetailBox></DetailBox>
        <div>
          veYEVE lockers wield the power to vote, direct emissions and collect
          the bribes, bveTokens and trading fees of those selected pairs. As the
          liquidity layer on SOLANA, veYEVE is instrumental to any protocol
          building liquidity or user providing liquidity on SOLANA.
        </div>
      </Description>
    </BribeContainer>
  );
}
