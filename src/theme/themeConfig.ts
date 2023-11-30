/* eslint-disable @typescript-eslint/no-explicit-any */
import logoWhite from '@src/assets/images/svg/logo-white.svg';
import downIconWhite from '@src/assets/images/svg/down-icon-white.svg';
import backgroundDark from '@src/assets/images/png/wade-bg.png';
import solanaLogo from '@src/assets/images/png/solana-logo.png';
import accountAvatar from '@src/assets/images/png/account-avatar.png';

const themeConfig: Record<string, any> = {
  light: {
    mode: 'light',
    colors: {
      body: '#FFFFFF',
      text: '#000000',
      content: '',
      header: {},
    },
    images: {
      header: {
        logo: logoWhite,
        downIcon: downIconWhite,
      },
      body: backgroundDark,
    },
  },
  dark: {
    mode: 'dark',
    colors: {
      body: '#0F0F0F',
      text: '#F6F6F6',
      content: '#060606',
      header: {
        menu: {
          active: '#151515',
          sub: '#060606',
        },
        account: {
          text: '#ECF0FF',
          background: '#1B1B1B',
        },
      },
    },
    images: {
      header: {
        logo: logoWhite,
      },
      downIcon: downIconWhite,
      body: backgroundDark,
      solanaLogo: solanaLogo,
      accountAvatar: accountAvatar,
    },
  },
};

export default themeConfig;
