import yeveImage from '@src/assets/images/png/token-1.png';
import { useNavigate } from 'react-router-dom';
import { TokenIcon } from '../SwapPage/Swap/SelectToken/SelectToken.styled';
import { SwapButton } from '../SwapPage/Swap/Swap.styled';
import {
  BalanceContainer,
  BalanceRow,
  BribeBox,
  BribeContainer,
  InputContainer,
  Label,
  SwapTab,
  SwapTabItem,
  Title,
} from './VEYeve.styled';

export default function VeYEVE() {
  const navigate = useNavigate();

  return (
    <BribeContainer>
      <BribeBox>
        <Title>Options</Title>
        <div>Redeem into</div>
        <SwapTab>
          <SwapTabItem onClick={() => navigate('/xYEVE')}>xYEVE</SwapTabItem>
          <SwapTabItem className={'active'}>veYEVE</SwapTabItem>
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
        <SwapButton>Redeem in to veYEVE</SwapButton>
      </BribeBox>
    </BribeContainer>
  );
}
