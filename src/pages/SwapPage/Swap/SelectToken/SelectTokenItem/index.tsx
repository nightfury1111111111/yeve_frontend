import DownIcon from '@src/assets/images/svg/menu/DownIcon';
import {
  TokenButtonContainer,
  TokenContainer,
  TokenIcon,
  TokenItem,
  TokenSelect,
  TokenValue,
} from '../SelectToken.styled';
import { useState } from 'react';
import TokenModal from '../TokenModal';

type SelectTokenItemProps = {
  themeConfig: Record<string, any>;
  buttonMax?: boolean;
  token: Record<string, any>;
  setToken: (token: Record<string, any>) => void;
};

export default function SelectTokenItem({
  buttonMax,
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
        <TokenValue>48.38572</TokenValue>
      </TokenItem>
      <TokenItem>
        <label>Balance</label>
        <TokenButtonContainer>
          <label>18.7685</label>
          {buttonMax && (
            <button>
              <span>MAX</span>
            </button>
          )}
        </TokenButtonContainer>
      </TokenItem>
    </TokenContainer>
  );
}
