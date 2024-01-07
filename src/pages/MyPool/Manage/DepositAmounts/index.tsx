import {
  DepositAmountContainer,
  DepositAmountItem,
  DepositAmountToken,
  DepositAmountValue,
} from '../ManageMyPool.styled';
import ethIconImg from '@src/assets/images/png/eth-icon.png';
import usdtIconImg from '@src/assets/images/png/token-2.png';

export default function DepositAmountsComponent() {
  return (
    <DepositAmountContainer>
      <DepositAmountItem>
        <DepositAmountToken>
          <span>1.65</span>
          <div>
            <img src={ethIconImg} />
            <span>ETH</span>
          </div>
        </DepositAmountToken>
        <DepositAmountValue>
          <span>$ 3,860</span>
          <div>
            <span>Balance: 2</span>
            <button>MAX</button>
          </div>
        </DepositAmountValue>
      </DepositAmountItem>
      <DepositAmountItem>
        <DepositAmountToken>
          <span>3859.48</span>
          <div>
            <img src={usdtIconImg} />
            <span>USDT</span>
          </div>
        </DepositAmountToken>
        <DepositAmountValue>
          <span>$ 3,860</span>
          <div>
            <span>Balance: 4000</span>
            <button>MAX</button>
          </div>
        </DepositAmountValue>
      </DepositAmountItem>
    </DepositAmountContainer>
  );
}
