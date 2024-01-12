/* eslint-disable @typescript-eslint/no-explicit-any */
import accountAvatar from '@src/assets/images/png/account-avatar.png';
import solanaLogo from '@src/assets/images/png/solana-logo.png';
import backgroundDark from '@src/assets/images/png/main-bg.png';
import logoWhite from '@src/assets/images/svg/logo-white.svg';
import settingIconWhite from '@src/assets/images/svg/setting-white.svg';
import unlockedIconWhite from '@src/assets/images/svg/unlocked-white.svg';
import logoDark from '@src/assets/images/svg/logo-dark.svg';

const themeConfig: Record<string, any> = {
  light: {
    mode: 'light',
    colors: {
      gray: {
        1000: '#FFFFFF',
        950: '#F2F2F2',
        900: '#E6E6E6',
        850: '#D9D9D9',
        800: '#CCCCCC',
        750: '#BFBFBF',
        700: '#B3B3B3',
        650: '#A6A6A6',
        600: '#999999',
        550: '#8C8C8C',
        500: '#808080',
        450: '#737373',
        400: '#666666',
        350: '#595959',
        300: '#4D4D4D',
        250: '#404040',
        200: '#333333',
        150: '#262626',
        100: '#1A1A1A',
        50: '#0D0D0D',
        0: '#000000',
      },
      purple: {
        950: '#ECE8FF',
        900: '#D6CFFC',
        850: '#C3B8F9',
        800: '#B1A3F5',
        750: '#9F8FEF',
        700: '#8F7DE8',
        650: '#7F6CE0',
        600: '#705CD6',
        550: '#624DCB',
        500: '#5540BF',
        450: '#4934B2',
        400: '#3D29A3',
        350: '#321F93',
        300: '#291782',
        250: '#201070',
        200: '#180A5C',
        150: '#110647',
        100: '#0A0330',
        0: '#040116',
      },
      success: {
        700: '#99F6EE',
        500: '#14B8A9',
        200: '#0F766D',
      },
      alert: {
        700: '#F6ABAB',
        500: '#E44F4F',
        200: '#AF2626',
      },
    },
    images: {
      header: {
        logo: logoDark,
      },
      body: backgroundDark,
      solanaLogo: solanaLogo,
      accountAvatar: accountAvatar,
      swap: {
        unlockedIcon: unlockedIconWhite,
        settingIcon: settingIconWhite,
      },
    },
  },
  dark: {
    mode: 'dark',
    colors: {
      gray: {
        0: '#FFFFFF',
        50: '#F2F2F2',
        100: '#E6E6E6',
        150: '#D9D9D9',
        200: '#CCCCCC',
        250: '#BFBFBF',
        300: '#B3B3B3',
        350: '#A6A6A6',
        400: '#999999',
        450: '#8C8C8C',
        500: '#808080',
        550: '#737373',
        600: '#666666',
        650: '#595959',
        700: '#4D4D4D',
        750: '#404040',
        800: '#333333',
        850: '#262626',
        900: '#1A1A1A',
        950: '#0D0D0D',
        1000: '#000000',
      },
      purple: {
        50: '#ECE8FF',
        100: '#D6CFFC',
        150: '#C3B8F9',
        200: '#B1A3F5',
        250: '#9F8FEF',
        300: '#8F7DE8',
        350: '#7F6CE0',
        400: '#705CD6',
        450: '#624DCB',
        500: '#5540BF',
        550: '#4934B2',
        600: '#3D29A3',
        650: '#321F93',
        700: '#291782',
        750: '#201070',
        800: '#180A5C',
        850: '#110647',
        900: '#0A0330',
        950: '#040116',
      },
      success: {
        200: '#99F6EE',
        500: '#14B8A9',
        700: '#0F766D',
      },
      alert: {
        200: '#F6ABAB',
        500: '#E44F4F',
        700: '#AF2626',
      },
    },
    images: {
      header: {
        logo: logoWhite,
      },
      body: backgroundDark,
      solanaLogo: solanaLogo,
      accountAvatar: accountAvatar,
      swap: {
        unlockedIcon: unlockedIconWhite,
        settingIcon: settingIconWhite,
      },
    },
  },
};

export default themeConfig;
