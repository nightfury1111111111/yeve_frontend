import DownIcon from '@src/assets/images/svg/menu/DownIcon';
import { useState } from 'react';
import {
  TokenContainer,
  TokenIcon,
  TokenItem,
  TokenSelect,
} from '../SelectToken.styled';
import TokenModal from '../TokenModal';

type SelectTokenItemProps = {
  themeConfig: Record<string, any>;
  token: Record<string, any>;
  setToken: (token: Record<string, any>) => void;
};

export default function SelectTokenItem({
  token,
  setToken,
}: SelectTokenItemProps) {
  const [openTokenModal, setOpenTokenModal] = useState(false);

  return (
    <TokenContainer>
      {openTokenModal && (
        <TokenModal
          onClose={() => setOpenTokenModal(false)}
          handleSelect={setToken}
        />
      )}
      <TokenItem className="select">
        <span>FROM</span>
        <TokenSelect onClick={() => setOpenTokenModal(true)}>
          <div>
            <TokenIcon src={token.image || token.logoURI} />
            <span>{token.symbol}</span>
          </div>
          <DownIcon />
        </TokenSelect>
      </TokenItem>
      <TokenItem>
        <label>Amount</label>
        <input placeholder="0.00" />
      </TokenItem>
    </TokenContainer>
  );
}
