import Layout from '@src/components/layouts';
import LandingPage from '@src/pages/LandingPage';
import SwapPage from '@src/pages/SwapPage';
import LiquidityPoolPage from '@src/pages/LiquidityPool';
import RewardsPage from '@src/pages/Rewards';
import MyPoolPage from '@src/pages/MyPool';
import LocksPage from '@src/pages/Locks';
import CreateLockPage from '@src/pages/CreateLock';
import VotingRewardsPage from '@src/pages/VotingRewards';
import CreateLiquidityPoolPage from '@src/pages/LiquidityPool/Create';
import ManageMyPoolPage from '@src/pages/MyPool/Manage/[id]';

export const userRoutes: Record<string, unknown>[] = [
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/swap',
            element: <SwapPage />,
          },
          {
            path: '/liquidity-pool',
            children: [
              {
                path: '/liquidity-pool',
                element: <LiquidityPoolPage />,
              },
              {
                path: '/liquidity-pool/create',
                element: <CreateLiquidityPoolPage />,
              },
            ],
          },
          {
            path: '/my-pool',
            children: [
              {
                path: '/my-pool',
                element: <MyPoolPage />,
              },
              {
                path: '/my-pool/:id',
                element: <ManageMyPoolPage />,
              },
            ],
          },
          {
            path: '/rewards',
            element: <RewardsPage />,
          },
          {
            path: '/locks',
            element: <LocksPage />,
          },
          {
            path: '/create-lock',
            element: <CreateLockPage />,
          },
          {
            path: '/voting-rewards',
            element: <VotingRewardsPage />,
          },
        ],
      },
    ],
  },
];
