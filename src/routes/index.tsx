import Layout from '@src/components/layouts';
import LandingPage from '@src/pages/LandingPage';
import SwapPage from '@src/pages/SwapPage';
import LiquidityPoolPage from '@src/pages/LiquidityPool';
import RewardsPage from '@src/pages/Rewards';
import MyPoolPage from '@src/pages/MyPool';

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
            path: '/liquidity',
            element: <LiquidityPoolPage />,
          },
          {
            path: '/my-pool',
            element: <MyPoolPage />,
          },
          {
            path: '/rewards',
            element: <RewardsPage />,
          },
        ],
      },
    ],
  },
];
