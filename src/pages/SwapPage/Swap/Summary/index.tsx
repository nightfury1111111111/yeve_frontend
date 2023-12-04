import {
  SummaryContainer,
  SummaryItem,
  SummaryItemList,
  SummaryItemPrice,
} from './Summary.styled';
import ResetIcon from '@src/assets/images/svg/swap/reset';

export default function Summary() {
  return (
    <SummaryContainer>
      <SummaryItemList>
        <SummaryItem>
          <label>Price</label>
          <SummaryItemPrice>
            <span>1 YEVE = 2 USDT</span>
            <ResetIcon />
          </SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <label>Minimum Received</label>
          <span>18.7685</span>
        </SummaryItem>
        <SummaryItem>
          <label>Swap Fee</label>
          <span>-</span>
        </SummaryItem>
        <SummaryItem>
          <label>Slippage</label>
          <span>1.0%</span>
        </SummaryItem>
        <SummaryItem>
          <label>Price Impact</label>
          <div>-0.38%</div>
        </SummaryItem>
      </SummaryItemList>
    </SummaryContainer>
  );
}
