import {
  SummaryContainer,
  SummaryItem,
  SummaryItemList,
} from './Summary.styled';

export default function Summary() {
  return (
    <SummaryContainer>
      <SummaryItemList>
        <SummaryItem>
          <label>Locks until:</label>
          <span>Apr 10,2025</span>
        </SummaryItem>
        <SummaryItem>
          <label>Locking for:</label>
          <span>8 months</span>
        </SummaryItem>
        <SummaryItem>
          <label>Voting power:</label>
          <span>0.985 veYEVE</span>
        </SummaryItem>
      </SummaryItemList>
    </SummaryContainer>
  );
}
