import { ButtonController } from '@src/components/common/Table/Controller/Controller.styled';
import { Title } from './Title.styled';
type Button = {
  text: string;
  handle: () => void;
};

type TableTitleProps = {
  title: string;
  info: Record<string, any>;
  button?: Button;
  hideClock?: boolean;
};

export function VoteTableTitle({ title, button, hideClock }: TableTitleProps) {
  return (
    <Title>
      <span>{title}</span>
      {!hideClock && <div>Lock ID 112843</div>}
      {button && (
        <ButtonController onClick={() => button.handle()}>
          Lock ID 112843
        </ButtonController>
      )}
    </Title>
  );
}
