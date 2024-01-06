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
export const LOCKS_DATA = [
  {
    pair: {
      name: 'Lock ID 1234',
      type: 'Manage',
      token: {
        name: 'YEVE',
        image: token1Image,
      },
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
    voteUsed: false,
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
  {
    pair: {
      name: 'Lock ID 2345',
      type: 'Manage',
      token: {
        name: 'YEVE',
        image: token1Image,
      },
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
    voteUsed: true,
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

export const REWARDS_DATA = [
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
    manage: 'KAMINO',
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
    emissionAPR: '278.35',
  },
];

export const VOTING_REWARDS_DATA = [
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
    totalRewards: {
      usd: '17200',
      tokens: [
        {
          name: 'YEVE',
          value: '8.893',
        },
        {
          name: 'USDT',
          value: '8.275',
        },
      ],
    },
    bribes: {
      usd: '17200',
      tokens: [
        {
          name: 'YEVE',
          value: '8.893',
        },
        {
          name: 'USDT',
          value: '8.275',
        },
      ],
    },
    fees: {
      usd: '17200',
      tokens: [
        {
          name: 'YEVE',
          value: '8.893',
        },
        {
          name: 'USDT',
          value: '8.275',
        },
      ],
    },
  },
];
