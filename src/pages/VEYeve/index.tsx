import { SwapButton } from '../SwapPage/Swap/Swap.styled';
import {
  BribeBox,
  BribeContainer,
  Label,
  Title,
  SwapTab,
  BalanceContainer,
  BalanceRow,
  InputContainer,
  SwapTabItem,
} from './VEYeve.styled';
import { useState } from 'react';
import yeveImage from '@src/assets/images/png/token-1.png';
import { TokenIcon } from '../SwapPage/Swap/SelectToken/SelectToken.styled';

export default function VeYEVE() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <BribeContainer>
      <BribeBox>
        <Title>Options</Title>
        <div>Redeem into</div>
        <SwapTab>
          <SwapTabItem
            className={selectedTab === 0 ? 'active' : ''}
            onClick={() => setSelectedTab(0)}
          >
            veYEVE
          </SwapTabItem>
          <SwapTabItem
            className={selectedTab === 1 ? 'active' : ''}
            onClick={() => setSelectedTab(1)}
          >
            YEVE
          </SwapTabItem>
        </SwapTab>

        <BalanceContainer>
          <BalanceRow>
            <div>oYEVE Balance:</div>
            <div>70.0 oYEVE</div>
          </BalanceRow>
          <BalanceRow>
            <div>CASH Balance:</div>
            <div>239 CASH</div>
          </BalanceRow>
          <BalanceRow>
            <div>Discount:</div>
            <div>20%</div>
          </BalanceRow>
        </BalanceContainer>
        <Label>Your redeem YEVE</Label>
        <InputContainer>
          <TokenIcon src={yeveImage} />

          <button>MAX</button>
        </InputContainer>
        <Label>You pay CASH</Label>
        <InputContainer>
          <TokenIcon src={yeveImage} />

          <button>MAX</button>
        </InputContainer>
        <BalanceContainer>
          <BalanceRow>
            <div>You get:</div>
            <div>240 YEVE</div>
          </BalanceRow>
        </BalanceContainer>
        <SwapButton>
          Redeem in to {selectedTab === 1 ? 'veYEVE' : 'YEVE'}
        </SwapButton>
      </BribeBox>
    </BribeContainer>
  );
}
