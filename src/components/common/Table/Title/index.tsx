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
          {button.text}
        </ButtonController>
      )}
    </Title>
  );
}
