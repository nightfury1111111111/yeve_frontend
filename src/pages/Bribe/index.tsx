import TableControlSelect from '@src/components/common/Table/Controller/Select';
import { SwapButton } from '../SwapPage/Swap/Swap.styled';
import { BribeBox, BribeContainer, Label, Title } from './Bribe.styled';

export default function Bribe() {
  return (
    <BribeContainer>
      <BribeBox>
        <Title>Add Bribe</Title>
        <Label>Choose Pool</Label>
        <TableControlSelect
          options={[
            {
              key: 'v',
              value: 'Pool Yeve',
            },
            {
              key: 'b',
              value: 'Pool USDT',
            },
          ]}
        />
        <Label>Choose Reward Token</Label>

        <TableControlSelect
          options={[
            {
              key: 'v',
              value: ' Yeve',
            },
            {
              key: 'b',
              value: 'USDT',
            },
          ]}
        />
        <Label>Enter Amount</Label>
        <input />
        <SwapButton>Add Bribe</SwapButton>
      </BribeBox>
    </BribeContainer>
  );
}
