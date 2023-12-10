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
        disabled: true,
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
        route: '/liquidity',
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
  },
  {
    title: 'Vote',
    icon: <VoteIcon />,
    children: [
      {
        title: 'Vote',
        route: '/vote',
        disabled: true,
        icon: <VoteIcon />,
      },
      {
        title: 'Lock',
        route: '/lock',
        disabled: false,
        icon: <LockIcon />,
      },
    ],
  },
  {
    title: 'Bribe',
    icon: <BribeIcon />,
    route: '/bribe',
  },
];

export default headerMenus;
