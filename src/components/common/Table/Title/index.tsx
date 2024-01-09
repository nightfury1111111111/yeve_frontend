import ClockIcon from '@src/assets/images/svg/clock-icon';
import { Title } from './Title.styled';
import { ButtonController } from '../Controller/Controller.styled';
type Button = {
  text: string;
  handle: () => void;
};

type TableTitleProps = {
  title: string;
  info: Record<string, any>;
  button?: Button;
  hideClock?: boolean;
  isRewardPage?: boolean;
};

export function TableTitle({
  title,
  info,
  button,
  hideClock,
  isRewardPage = false,
}: TableTitleProps) {
  return (
    <Title>
      <span>{title}</span>
      {!hideClock && (
        <div>
          <div>
            {isRewardPage ? (
              <div className="reward-title">
                <span>{info.time}</span>
                <div>{info.label}</div>
              </div>
            ) : (
              <>
                <ClockIcon />
                <span>{info.time}</span>
                <div>{info.label}</div>
              </>
            )}
          </div>
          {button && (
            <ButtonController onClick={() => button.handle()}>
              {button.text}
            </ButtonController>
          )}
        </div>
      )}
      {button && (
        <ButtonController onClick={() => button.handle()}>
          {button.text}
        </ButtonController>
      )}
    </Title>
  );
}
