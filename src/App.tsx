import { ThemeContext } from '@src/context/useThemeContext';
import 'rc-slider/assets/index.css';
import { useContext, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Notification from './Notification';
import WalletContextProvider from './WalletContextProvider';
import { userRoutes } from './routes';
import { store } from './redux/store';
import { Provider } from 'react-redux';
export type SolanaNetworkType = 'mainnet-beta' | 'devnet';

const router = createBrowserRouter(userRoutes);

function App() {
  const { themeConfig } = useContext(ThemeContext);
  const [solanaNetwork] = useState<SolanaNetworkType>('devnet');

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
    <Provider store={store}>
      <ThemeProvider theme={themeConfig}>
        <WalletContextProvider solanaNetwork={solanaNetwork}>
          <Notification />
          <RouterProvider router={router} />
        </WalletContextProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
