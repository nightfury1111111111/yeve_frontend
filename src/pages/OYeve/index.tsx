import yeveImage from '@src/assets/images/png/token-1.png';
import DownIcon from '@src/assets/images/svg/menu/DownIcon';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  return (
    <BribeContainer>
      <BribeBox>
        <Title>Convert</Title>
        <div>Redeem into</div>
        <SwapTab>
          <SwapTabItem className={'active'}>xYEVE</SwapTabItem>
          <SwapTabItem onClick={() => navigate('/veYEVE')}>veYEVE</SwapTabItem>
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
        <SwapButton>Redeem in to YEVE</SwapButton>
      </BribeBox>
    </BribeContainer>
  );
}
