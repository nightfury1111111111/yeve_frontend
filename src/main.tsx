/* eslint-disable @typescript-eslint/ban-ts-comment */
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './common.css';
import { CustomThemeProvider } from './context/useThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    {/* @ts-expect-error */}
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </>
);
