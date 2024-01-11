import yeveImage from '@src/assets/images/png/token-1.png';

export const TOKEN_LIST = [
  {
    chainId: 103,
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
    chainId: 103,
    address: 'JC7EAyPpZKjt5bAQj7a3zpMRwsac5AxMoY5DHnPMffJr',
    name: 'YEVE',
    symbol: 'YEVE',
    decimals: 9,
    logoURI: yeveImage,
    tags: ['community-token'],
  },
  {
    chainId: 103,
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
    chainId: 103,
    address: '2rg5syU3DSwwWs778FQ6yczDKhS14NM3vP4hqnkJ2jsM',
    symbol: 'pSOL',
    name: 'SOL stake pool',
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2rg5syU3DSwwWs778FQ6yczDKhS14NM3vP4hqnkJ2jsM/logo.png',
    tags: [],
    extensions: {
      website: 'https://solana.com/',
      background:
        'https://solana.com/static/8c151e179d2d7e80255bdae6563209f2/6833b/validators.webp',
    },
  },
  {
    chainId: 103,
    address: 'StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT',
    symbol: 'STEP',
    name: 'Step',
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT/logo.png',
    tags: ['utility-token'],
    extensions: {
      website: 'https://step.finance/',
      twitter: 'https://twitter.com/StepFinance_',
      coingeckoId: 'step-finance',
      waterfallbot: 'https://bit.ly/STEPwaterfall',
    },
  },
  {
    chainId: 103,
    address: '7STJWT74tAZzhbNNPRH8WuGDy9GZg27968EwALWuezrH',
    symbol: 'wSUSHI',
    name: 'SushiSwap (Wormhole)',
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7STJWT74tAZzhbNNPRH8WuGDy9GZg27968EwALWuezrH/logo.png',
    tags: ['wrapped', 'wormhole'],
    extensions: {
      website: 'https://sushi.com',
      background: 'https://sushi.com/static/media/Background-sm.fd449814.jpg/',
      address: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
      bridgeContract:
        'https://etherscan.io/address/0xf92cD566Ea4864356C5491c177A430C222d7e678',
      assetContract:
        'https://etherscan.io/address/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
      coingeckoId: 'sushi',
    },
  },
  {
    chainId: 103,
    address: '3aMbgP7aGsP1sVcFKc6j65zu7UiziP57SMFzf6ptiCSX',
    symbol: 'sHOG',
    name: 'Devnet StableHog',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3aMbgP7aGsP1sVcFKc6j65zu7UiziP57SMFzf6ptiCSX/logo.png',
    tags: ['stablecoin'],
  },
];
