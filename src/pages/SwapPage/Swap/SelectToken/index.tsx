import SwitchIcon from '@src/assets/images/svg/swap/SwitchIcon';
import { SwitchIconContainer } from './SelectToken.styled';
import SelectTokenItem from './SelectTokenItem';

type SelectTokenProps = {
  themeConfig: Record<string, any>;
};

export default function SelectToken({ themeConfig }: SelectTokenProps) {
  return (
    <>
      <SelectTokenItem themeConfig={themeConfig} />
      <SwitchIconContainer>
        <SwitchIcon />
      </SwitchIconContainer>
      <SelectTokenItem themeConfig={themeConfig} />
    </>
  );
}
