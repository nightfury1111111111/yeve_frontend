import Chart from './Chart';
import Swap from './Swap';
import { SwapPageContainer } from './SwapPage.styled';

export default function SwapPage() {
  return (
    <SwapPageContainer>
      <Swap />
      <Chart />
    </SwapPageContainer>
  );
}
