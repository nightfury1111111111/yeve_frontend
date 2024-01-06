import { ThemeContext } from '@src/context/useThemeContext';
import { useContext } from 'react';
import LockDuration from './LockDuration';
import SelectToken from './SelectToken';
import Summary from './Summary';
import {
  DefaultButton,
  SwapContainer,
  SwapHeader,
  Title,
} from './CreateLockForm.styled';

export default function CreateLockForm() {
  const { themeConfig } = useContext(ThemeContext);

  return (
    <SwapContainer>
      <SwapHeader>
        <Title>Create Lock</Title>
        <DefaultButton>&lt; &nbsp; Back to Locks</DefaultButton>
      </SwapHeader>

      <SelectToken themeConfig={themeConfig} />
      <LockDuration />
      <Summary />
    </SwapContainer>
  );
}
