import yeveImage from '@src/assets/images/png/token-1.png';
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
  InputContainer,
  Label,
  SwapTab,
  SwapTabItem,
  Title,
} from './VEYeve.styled';
import DownIcon from '@src/assets/images/svg/menu/DownIcon';
import { Flex } from '../OYeve/OYeve.styled';
import SolIcon from '@src/assets/images/svg/sol-icon';

export default function VeYEVE() {
  const navigate = useNavigate();

  return (
    <BribeContainer>
      <BribeBox>
        <Title>Options</Title>
        <h3>Convert xYEVE to YEVE. Conversion is one-way and non-refund</h3>
        <SwapTab>
          <SwapTabItem className={'active'}>YEVE</SwapTabItem>
          <SwapTabItem onClick={() => navigate('/veYEVE')}>veYEVE</SwapTabItem>
        </SwapTab>

        <BalanceContainer>
          <BalanceRow>
            <div>xYEVE Balance:</div>
            <div>70.0 xYEVE</div>
          </BalanceRow>
          <BalanceRow>
            <div>SOL Balance:</div>
            <div>239 SOL</div>
          </BalanceRow>
          <BalanceRow>
            <div>% Fee:</div>
            <div>20%</div>
          </BalanceRow>
        </BalanceContainer>
        <Label>Amount of xYEVE to Convert</Label>
        <InputContainer>
          <TokenSelect>
            <div>
              <TokenIcon src={yeveImage} />
              <span>xYEVE</span>
            </div>
            <DownIcon />
          </TokenSelect>
          <Flex>
            <input placeholder="0.00" />
            <button>MAX</button>
          </Flex>
        </InputContainer>
        <Label>SOL required</Label>
        <InputContainer>
          <div className="sol-icon">
            <SolIcon />
            <input placeholder='0.00' />
          </div>
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
