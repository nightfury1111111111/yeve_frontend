import Layout from "@src/components/layouts";
import LandingPage from "@src/pages/LandingPage";
import SwapPage from "@src/pages/SwapPage";
import LiquidityPoolPage from "@src/pages/LiquidityPool";

export const userRoutes: Record<string, unknown>[] = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/swap",
            element: <SwapPage />,
          },
          {
            path: "/liquidity-pool",
            element: <LiquidityPoolPage />,
          },
        ],
      },
    ],
  },
];
