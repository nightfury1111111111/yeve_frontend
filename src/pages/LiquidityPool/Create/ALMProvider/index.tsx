import { ALMProvider, SelectedProvider, SelectedProviderAPR } from '../CreateLiquidityPool';
import avatarImg from '@src/assets/images/png/account-avatar.png';
import providerImg from '@src/assets/images/png/provider-logo-1.png';
import LinkIcon from '@src/assets/images/svg/pools/link-icon';
import yeveImage from '@src/assets/images/png/token-1.png';

export default function ALMProviderComponent() {
  return (
    <ALMProvider>
      <SelectedProvider>
        <div>
          <img src={avatarImg} />
          <img src={providerImg} />
        </div>
        <LinkIcon />
      </SelectedProvider>
      <SelectedProviderAPR>
        <div>
          <img src={yeveImage} />
          <span>APR:</span>
        </div>
        <span>41.44%</span>
      </SelectedProviderAPR>
    </ALMProvider>
  );
}
