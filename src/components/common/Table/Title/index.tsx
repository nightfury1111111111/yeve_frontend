import ClockIcon from '@src/assets/images/svg/clock-icon';
import { Title } from './Title.styled';
import { ButtonController } from '../Controller/Controller.styled';
import LockIcon from '@src/assets/images/svg/lock-icon';
type Button = {
  text: string;
  handle: () => void;
  icon?: string;
};

type TableTitleProps = {
  title: string;
  info: Record<string, any>;
  button?: Button;
  hideClock?: boolean;
  isRewardPage?: boolean;
  controlButton?: Button;
};

export function TableTitle({
  title,
  info,
  button,
  controlButton,
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
                <label>
                  <span>{info.time}</span>
                </label>
                <div>{info.label}</div>
              </div>
            ) : (
              <>
                <label>
                  <ClockIcon />
                  <span>{info.time}</span>
                </label>
                <div>{info.label}</div>
              </>
            )}
          </div>
          {controlButton && (
            <ButtonController onClick={() => controlButton.handle()}>
              {controlButton.text}
            </ButtonController>
          )}
        </div>
      )}
      {button && (
        <ButtonController onClick={() => button.handle()}>
          {button.icon && button.icon === 'lock' && <LockIcon />}
          {button.icon ? <span>{button.text}</span> : button.text}
        </ButtonController>
      )}
    </Title>
  );
}
