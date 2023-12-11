import {
  SummaryContainer,
  SummaryItem,
  SummaryItemList,
} from './Summary.styled';

type SummaryProps = {
  summary: Record<string, any>;
};

export default function Summary({ summary }: SummaryProps) {
  return (
    <SummaryContainer>
      <SummaryItemList>
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
          <span>{summary.slippage}%</span>
        </SummaryItem>
        <SummaryItem>
          <label>Price Impact</label>
          <div>-0.38%</div>
        </SummaryItem>
      </SummaryItemList>
    </SummaryContainer>
  );
}
