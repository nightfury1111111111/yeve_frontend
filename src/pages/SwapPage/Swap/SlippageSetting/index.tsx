import FilterIcon from '@src/assets/images/svg/filter-icon';
import InfoIcon from '@src/assets/images/svg/info-icon';
import { SLIPPAGE_OPTIONS } from '@src/example-data/slippage';
import { useEffect, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import {
  DeadlineInput,
  Heading,
  SlippageItem,
  SlippageList,
  SlippageTolerance,
  TokenModalContainer,
  TokenModalForm,
} from './SlippageSetting.styled';
import CloseIcon from '@src/assets/images/svg/close-icon';

type SlippageSettingProps = {
  summary: Record<string, any>;
  onClose: () => void;
  handleSelect: (token: Record<string, any>) => void;
};

export default function SlippageSetting({
  summary,
  onClose,
  handleSelect,
}: SlippageSettingProps) {
  const ref = useRef(null);

  const handleClose = () => {
    document.body.style.overflow = 'unset';
    onClose();
  };

  const handleSelectSlippage = (slippage: string) => {
    handleSelect({ ...summary, slippage });
    handleClose();
  };

  useOnClickOutside(ref, () => {
    handleClose();
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <TokenModalContainer>
      <TokenModalForm ref={ref}>
        <Heading>
          <button>Reset</button>
          <div onClick={handleClose}>
            <CloseIcon />
          </div>
        </Heading>
        <div>
          <SlippageTolerance>
            <span>Slippage tolerance</span>
            <InfoIcon />
          </SlippageTolerance>
          <SlippageList>
            {SLIPPAGE_OPTIONS.map((item) => (
              <SlippageItem
                key={item}
                className={summary.slippage == item ? 'active' : ''}
                onClick={() => handleSelectSlippage(item)}
              >
                {item}
              </SlippageItem>
            ))}
          </SlippageList>
        </div>
        <div>
          <SlippageTolerance>
            <span>Transaction deadline</span>
            <InfoIcon />
          </SlippageTolerance>
          <DeadlineInput>
            <input />
            <span>minutes</span>
          </DeadlineInput>
        </div>
      </TokenModalForm>
    </TokenModalContainer>
  );
}
