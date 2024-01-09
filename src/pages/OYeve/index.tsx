import yeveImage from '@src/assets/images/png/token-1.png';
import DownIcon from '@src/assets/images/svg/menu/DownIcon';
import { useState } from 'react';
import {
  TokenIcon,
  TokenSelect,
} from '../SwapPage/Swap/SelectToken/SelectToken.styled';
import { SwapButton } from '../SwapPage/Swap/Swap.styled';
import {
  BalanceContainer,
  BalanceRow,
  BribeBox,
  BribeContainer,
  Flex,
  InputContainer,
  Label,
  SwapTab,
  SwapTabItem,
  Title,
} from './OYeve.styled';

export default function OYeve() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <BribeContainer>
      <BribeBox>
        <Title>Convert</Title>
        <div>Redeem into</div>
        <SwapTab>
          <SwapTabItem
            className={selectedTab === 0 ? 'active' : ''}
            onClick={() => setSelectedTab(0)}
          >
            xYEVE
          </SwapTabItem>
          <SwapTabItem
            className={selectedTab === 1 ? 'active' : ''}
            onClick={() => setSelectedTab(1)}
          >
            veYEVE
          </SwapTabItem>
        </SwapTab>

        <BalanceContainer>
          <BalanceRow>
            <div>oYEVE Balance:</div>
            <div>70.0 oYEVE</div>
          </BalanceRow>
        </BalanceContainer>
        <Label>Your redeem</Label>
        <InputContainer>
          <TokenSelect>
            <div>
              <TokenIcon src={yeveImage} />
              <span>YEVE</span>
            </div>
            <DownIcon />
          </TokenSelect>
          <Flex>
            <input placeholder="0.00" />
            <button>MAX</button>
          </Flex>
        </InputContainer>
        <BalanceContainer>
          <BalanceRow>
            <div>Voting power:</div>
            <div>70.0 oYEVE</div>
          </BalanceRow>
          <BalanceRow>
            <div>Unlocking at:</div>
            <div>07.09.2025</div>
          </BalanceRow>
        </BalanceContainer>
        <SwapButton>
          Redeem in to {selectedTab === 0 ? 'xYEVE' : 'veYEVE'}
        </SwapButton>
      </BribeBox>
    </BribeContainer>
  );
}
