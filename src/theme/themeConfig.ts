/* eslint-disable @typescript-eslint/no-explicit-any */
import logoWhite from '@src/assets/images/svg/logo-white.svg';
import upIconWhite from '@src/assets/images/svg/up-icon-white.svg';
import backgroundDark from '@src/assets/images/png/wade-bg.png';
import solanaLogo from '@src/assets/images/png/solana-logo.png';
import accountAvatar from '@src/assets/images/png/account-avatar.png';
import resetIconWhite from '@src/assets/images/svg/reset-white.svg';
import unlockedIconWhite from '@src/assets/images/svg/unlocked-white.svg';
import settingIconWhite from '@src/assets/images/svg/setting-white.svg';

const themeConfig: Record<string, any> = {
  light: {
    mode: 'light',
    colors: {
      gray: {
        0: '#FFFFFF',
        50: '#F6F6F6',
        100: '#E7E7E7',
        150: '#D8D8D8',
        200: '#C9C9C9',
        250: '#BABABA',
        300: '#ABABAB',
        350: '#9C9C9C',
        400: '#8D8D8D',
        450: '#7E7E7E',
      },
      purple: {
        50: '#F6F5FF',
        100: '#E1DCFC',
        150: '#CCC3FA',
        200: '#B7ABF7',
        250: '#A393F5',
        300: '#8F7CF2',
        350: '#7C65F0',
        400: '#694EED',
        450: '#5638EB',
      },
      body: '#FFFFFF',
      text: '#000000',
      content: '',
      header: {},
    },
    images: {
      header: {
        logo: logoWhite,
        upIcon: upIconWhite,
      },
      body: backgroundDark,
    },
  },
  dark: {
    mode: 'dark',
    colors: {
      gray: {
        0: '#000000',
        50: '#060606',
        100: '#151515',
        150: '#242424',
        200: '#333333',
        250: '#424242',
        300: '#515151',
        350: '#606060',
        400: '#6F6F6F',
        450: '#7E7E7E',
      },
      purple: {
        50: '#0F0C1F',
        100: '#1B1538',
        150: '#261D52',
        200: '#30246B',
        250: '#392A85',
        300: '#422F9E',
        350: '#4933B8',
        400: '#5036D1',
        450: '#5638EB',
      },
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
      swap: {
        text: '#ECF0FF',
        border: '#242424',
        background: '#060606',
        active: '#151515',
        icon: '#EDF0FF',
        label: '#C9C9C9',
        button: '#6134FE',
      },
    },
    images: {
      header: {
        logo: logoWhite,
      },
      upIcon: upIconWhite,
      body: backgroundDark,
      solanaLogo: solanaLogo,
      accountAvatar: accountAvatar,
      swap: {
        resetIcon: resetIconWhite,
        unlockedIcon: unlockedIconWhite,
        settingIcon: settingIconWhite,
      },
    },
  },
};

export default themeConfig;
