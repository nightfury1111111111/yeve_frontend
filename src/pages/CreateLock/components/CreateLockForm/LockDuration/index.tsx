import Slider from 'rc-slider';
import { LockContainer } from './LockDuration.styled';
export default function LockDuration() {
  const marks = {
    '-10': '7 days',
    25: '1 year',
    50: '2 years',
    75: '3 years',
    100: '4 years',
  };

  return (
    <LockContainer>
      <div>8 months</div>
      <Slider
        min={-10}
        marks={marks}
        included={false}
        defaultValue={0}
        className="lockSlider"
      />
    </LockContainer>
  );
}
