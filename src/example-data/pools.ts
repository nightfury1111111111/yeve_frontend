import zeroTokenImage from '@src/assets/images/png/account-avatar.png';
import token1Image from '@src/assets/images/png/token-1.png';
import token2Image from '@src/assets/images/png/token-2.png';

export const LIQUIDITY_POOLS_DATA = [
  {
    pair: {
      name: 'YEVE/USDT',
      type: 'Stable',
      value: 0.3,
      tokens: [
        {
          name: 'YEVE',
          image: token1Image,
        },
        {
          name: 'USDT',
          image: token2Image,
        },
      ],
    },
    avgApr: 278.35,
    tvl: {
      usd: '46520000',
      tokens: [
        {
          name: 'USDC',
          value: '23890000',
        },
        {
          name: 'wUSDR',
          value: '23270000',
        },
      ],
    },
    volume24h: {
      usd: '363536.52',
      tokens: [
        {
          name: 'USDC',
          value: '190102.26',
        },
        {
          name: 'wUSDR',
          value: '161144.69',
        },
      ],
    },
    fees24h: {
      usd: '1090.61',
      tokens: [
        {
          name: 'USDC',
          value: '570.31',
        },
        {
          name: 'wUSDR',
          value: '484.43',
        },
      ],
    },
  },
];

export const MY_POOLS_DATA = [
  {
    pair: {
      name: 'ZERO/USDT',
      type: 'Stable',
      value: 0.3,
      tokens: [
        {
          name: 'YEVE',
          image: zeroTokenImage,
        },
        {
          name: 'USDT',
          image: token2Image,
        },
      ],
    },
    type: 'GAMMA',
    range: 'In Range',
    poolSize: {
      usd: '18220',
      tokens: [
        {
          name: 'USDC',
          value: '23890000',
        },
        {
          name: 'wUSDR',
          value: '23270000',
        },
      ],
    },
    rewards: {
      usd: '363',
      tokens: [
        {
          name: 'USDC',
          value: '190102.26',
        },
        {
          name: 'wUSDR',
          value: '161144.69',
        },
      ],
    },
    status: 'Receiving rewards',
  },
];