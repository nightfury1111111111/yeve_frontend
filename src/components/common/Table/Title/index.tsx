import ClockIcon from '@src/assets/images/svg/clock-icon';
import { Title } from './Title.styled';

type TableTitleProps = {
  title: string;
  info: Record<string, any>;
};

export function TableTitle({ title, info }: TableTitleProps) {
  return (
    <Title>
      <span>{title}</span>
      <div>
        <ClockIcon />
        <span>{info.time}</span>
        <div>{info.label}</div>
      </div>
    </Title>
  );
}
