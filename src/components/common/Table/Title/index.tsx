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
        <span>{info.time}</span>
        <div>{info.label}</div>
      </div>
    </Title>
  );
}
