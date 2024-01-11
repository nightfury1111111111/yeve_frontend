import yeveImage from '@src/assets/images/png/token-1.png';

export const TOKEN_LIST = [
  {
    chainId: 101,
    address: '7vEpiNkomzeF2uDw8uuDFqEcQfaWbpPgmFf41G5Y7W4o', // devnet token - tokenMintAKey
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    tags: ['stablecoin'],
    extensions: {
      coingeckoId: 'usd-coin',
      serumV3Usdt: '77quYg4MGneUdjgXCunt9GgM1usmrxKY31twEy3WHwcS',
      website: 'https://www.centre.io/',
    },
  },
  {
    chainId: 102,
    address: '5j2dS5kLdJowd6NpQ1pVykyyKDvRPZrHZGHgtyVG4PbD',
    symbol: 'USDT',
    name: 'USDT Coin',
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2n4pLBdDtciUsEyR2WoS2cTgDiyTHysVQF4caHttV44v/logo.png',
    tags: ['social-token'],
    extensions: {
      website: 'https://twitter.com/Tether_to',
    },
  },
  {
    chainId: 101,
    address: 'JC7EAyPpZKjt5bAQj7a3zpMRwsac5AxMoY5DHnPMffJr',
    name: 'YEVE',
    symbol: 'YEVE',
    decimals: 9,
    logoURI: yeveImage,
    tags: ['community-token'],
  },
  {
    chainId: 102,
    address: 'CU1f67B7n3XzwbHkFvciuH6Yqe8kiaEFfSZHzLNRvtYi', // devnet token - tokenMintBKey
    symbol: 'LUNA',
    name: 'LUNA Coin',
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5j2dS5kLdJowd6NpQ1pVykyyKDvRPZrHZGHgtyVG4PbD/logo.png',
    tags: ['social-token'],
    extensions: {
      website: 'https://www.terra.money',
    },
  },
  {
    chainId: 102,
    address: '5oCd9mvp5zMy3bFHmyJrL6CMpcKCJt3peSRLrcEz5BW4',
    symbol: 'LINK',
    name: 'Link Coin',
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5oCd9mvp5zMy3bFHmyJrL6CMpcKCJt3peSRLrcEz5BW4/logo.png',
    tags: ['social-token'],
    extensions: {
      website: 'https://chain.link',
    },
  },
  {
    chainId: 101,
    address: 'GamixUFH75ezjhPLH33QDFLezqTTsaXJDpyptABNHgpF',
    symbol: 'Shinigami',
    name: 'Shinigami Whitelist Token',
    decimals: 0,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GamixUFH75ezjhPLH33QDFLezqTTsaXJDpyptABNHgpF/logo.png',
    tags: ['Whitelist-Token'],
    extensions: {
      twitter: 'https://twitter.com/Shinigami_SOL',
    },
  },
  {
    chainId: 101,
    address: '8BPiyiiC1NrmMWpyfrCmkFUkHmProC7dUBkn5twdZVMu',
    symbol: 'SNOWB',
    name: 'SnowBunie Coin',
    decimals: 0,
    logoURI:
      'https://raw.githubusercontent.com/Dakender/Snowbunie-Coin/main/logo-snowbunie.png',
    tags: ['social-token'],
  },
  {
    chainId: 101,
    address: 'ELPHvy7GG3Z2niLAqtftVmQS3BvqqnsbfTngstWxYQu1',
    symbol: 'PATEL',
    name: 'Patelsakti',
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ELPHvy7GG3Z2niLAqtftVmQS3BvqqnsbfTngstWxYQu1/logo.png',
    tags: ['community-token'],
  },
  // {
  //   address: '0x54..5542',
  //   name: 'Tether',
  //   symbol: 'USDT',
  //   image: tetherImage,
  //   balance: 1.38,
  // },
  // {
  // {
  //   address: '0x54..5544',
  //   name: 'Tether',
  //   symbol: 'USDT',
  //   image: tetherImage,
  //   balance: 1.38,
  // },
  // {
  //   address: '0x54..5545',
  //   name: 'YEVE',
  //   symbol: 'YEVE',
  //   image: yeveImage,
  //   balance: 10.2,
  // },
  // {
  //   address: '0x54..5546',
  //   name: 'Tether',
  //   symbol: 'USDT',
  //   image: tetherImage,
  //   balance: 1.38,
  // },
];
