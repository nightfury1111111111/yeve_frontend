import { useState } from 'react';
import { CreateLockButton, DefaultButton } from '../CreateLockForm.styled';
import {
  AllowContainer,
  LockGuideItem,
  LockInfoContainer,
  LockInfoTitle,
  LockLine,
  LockNumber,
  LockText,
} from './LockInfo.styled';

export default function LockInfo() {
  const [step, setStep] = useState(0);
  return (
    <LockInfoContainer>
      <LockInfoTitle>New Lock</LockInfoTitle>
      {step === 0 && (
        <>
          {' '}
          <LockLine />
          <LockGuideItem>
            <LockNumber>1</LockNumber>
            <LockText>Select the amount of YEVE you want to lock</LockText>
          </LockGuideItem>
          <LockGuideItem>
            <LockNumber>2</LockNumber>
            <LockText>
              Select the number of weeks. The minimum lock time is one week, and
              the maximum lock time is 4 years.
            </LockText>
          </LockGuideItem>
          <LockGuideItem>
            <LockNumber>3</LockNumber>
            <LockText>Confirm the locking!</LockText>
          </LockGuideItem>
          <LockGuideItem>
            <LockNumber>4</LockNumber>
            <LockText>Your lock will be available in the dashboard.</LockText>
          </LockGuideItem>
        </>
      )}
      {step === 1 && (
        <>
          {' '}
          <LockLine h="120px" />
          <LockGuideItem>
            <LockNumber>1</LockNumber>
            <LockText>Allowance not granted for YEVE</LockText>
          </LockGuideItem>
          <AllowContainer>
            <DefaultButton w="100%">Allow YEVE</DefaultButton>
          </AllowContainer>
          <LockGuideItem>
            <LockNumber>2</LockNumber>
            <LockText>Waiting for next action...</LockText>
          </LockGuideItem>
        </>
      )}
      <CreateLockButton onClick={() => setStep(step + 1)}>
        Create Lock
      </CreateLockButton>
    </LockInfoContainer>
  );
}
