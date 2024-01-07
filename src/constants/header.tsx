import SwapIcon from '@src/assets/images/svg/menu/SwapIcon';
import EarnIcon from '@src/assets/images/svg/menu/EarnIcon';
import VoteIcon from '@src/assets/images/svg/menu/VoteIcon';
import BribeIcon from '@src/assets/images/svg/menu/BribeIcon';
import LimitIcon from '@src/assets/images/svg/menu/LimitIcon';
import OYeveIcon from '@src/assets/images/svg/menu/OYeveIcon';
import LiquidityIcon from '@src/assets/images/svg/menu/LiquidityIcon';
import MyPoolIcon from '@src/assets/images/svg/menu/MyPoolIcon';
import RewardsIcon from '@src/assets/images/svg/menu/RewardsIcon';
import LockIcon from '@src/assets/images/svg/menu/LockIcon';
import MoreIcon from '@src/assets/images/svg/menu/MoreIcon';

const headerMenus = [
  {
    title: 'Swap',
    icon: <SwapIcon />,
    children: [
      {
        title: 'Swap',
        route: '/swap',
        disabled: false,
        icon: <SwapIcon />,
      },
      {
        title: 'Limit',
        route: '/limit',
        disabled: false,
        icon: <LimitIcon />,
      },
      {
        title: 'oYEVE',
        route: '/oYEVE',
        disabled: false,
        icon: <OYeveIcon />,
      },
    ],
  },
  {
    title: 'Earn',
    icon: <EarnIcon />,
    children: [
      {
        title: 'Liquidity',
        route: '/liquidity-pool',
        disabled: false,
        icon: <LiquidityIcon />,
      },
      {
        title: 'My Pool',
        route: '/my-pool',
        disabled: false,
        icon: <MyPoolIcon />,
      },
      {
        title: 'Rewards',
        route: '/rewards',
        disabled: false,
        icon: <RewardsIcon />,
      },
    ],
    external_routes: [
      {
        title: 'Rewards',
        route: '/voting-rewards',
      },
      {
        title: 'Liquidity',
        route: '/liquidity-pool/create',
      },
    ],
  },
  {
    title: 'Vote',
    icon: <VoteIcon />,
    children: [
      {
        title: 'Vote',
        route: '/vote',
        disabled: false,
        icon: <VoteIcon />,
      },
      {
        title: 'Lock',
        route: '/locks',
        disabled: false,
        icon: <LockIcon />,
      },
    ],
  },
  {
    title: 'More',
    icon: <MoreIcon />,
    children: [
      {
        title: 'Bribe',
        route: '/bribe',
        disabled: false,
        icon: <BribeIcon />,
      },
      {
        title: 'oYEVE',
        route: '/oyeve',
        disabled: false,
        icon: <BribeIcon />,
      },
      {
        title: 'Presale',
        route: '/presale',
        disabled: false,
        icon: <BribeIcon />,
      },
    ],
  },
];

export default headerMenus;
