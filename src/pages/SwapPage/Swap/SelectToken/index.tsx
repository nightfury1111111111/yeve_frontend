import ArrowDownIcon from '@src/assets/images/svg/arrow-down';
import {
  ArrowDownIconContainer,
  TokenButtonContainer,
  TokenContainer,
  TokenDownIcon,
  TokenIcon,
  TokenItem,
  TokenSelect,
  TokenValue,
} from './SelectToken.styled';
import SelectTokenItem from './SelectTokenItem';

type SelectTokenProps = {
  themeConfig: Record<string, any>;
};

export default function SelectToken({ themeConfig }: SelectTokenProps) {
  return (
    <>
      <SelectTokenItem themeConfig={themeConfig} />
      <ArrowDownIconContainer>
        <ArrowDownIcon />
      </ArrowDownIconContainer>
      <SelectTokenItem themeConfig={themeConfig}/>
    </>
  );
}
