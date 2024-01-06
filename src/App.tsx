import { ThemeContext } from '@src/context/useThemeContext';
import { useContext, useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import WalletContextProvider from './WalletContextProvider';
import Notification, { infoToast } from './Notification';
import { userRoutes } from './routes';
import 'rc-slider/assets/index.css';

export type SolanaNetworkType = 'mainnet-beta' | 'devnet';

const router = createBrowserRouter(userRoutes);

function App() {
  const { themeConfig } = useContext(ThemeContext);
  const [solanaNetwork, setSolanaNetwork] =
    useState<SolanaNetworkType>('devnet');

  // useEffect(() => {
  //   if (solanaNetwork) {
  //     infoToast(
  //       `App is using Solana ${
  //         solanaNetwork === 'mainnet-beta' ? 'Mainnet' : 'Devnet'
  //       }`
  //     );
  //   }
  // }, [solanaNetwork]);

  return (
    <ThemeProvider theme={themeConfig}>
      <WalletContextProvider solanaNetwork={solanaNetwork}>
        <Notification />
        <RouterProvider router={router} />
      </WalletContextProvider>
    </ThemeProvider>
  );
}

export default App;
