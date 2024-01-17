import yeveImage from '@src/assets/images/png/token-1.png';

export const TOKEN_LIST = [
  {
    chainId: 103,
    address: 'BRjpCHtyQLNCo8gqRUr8jtdAj5AjPYQaoqbvcZiHok1k', // devnet token - tokenMintAKey
    symbol: 'devUSDC',
    name: 'devUSDC',
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
    address: 'H8UekPGwePSmQ3ttuYGPU1szyFfjZR4N53rymSFwpLPm', // devnet token - tokenMintBKey
    symbol: 'devUSDT',
    name: 'devUSDT',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg',
    tags: ['social-token'],
    extensions: {
      website: 'https://www.terra.money',
    },
  },
  {
    chainId: 103,
    address: 'Jd4M8bfJG3sAkd82RsGWyEXoaBXQP7njFzBwEaCTuDa',
    symbol: 'devSAMO',
    name: 'devSAMO',
    decimals: 9,
    logoURI:
      'https://api.phantom.app/image-proxy/?image=https%3A%2F%2Feverlastingsong.github.io%2Fnebula%2Fdevtoken_metadata%2FdevSAMO%2Fimage.png',
    tags: [],
    extensions: {
      website: 'https://solana.com/',
      background:
        'https://solana.com/static/8c151e179d2d7e80255bdae6563209f2/6833b/validators.webp',
    },
  },
  {
    chainId: 103,
    address: 'Afn8YB1p4NsoZeS5XJBZ18LTfEy5NFPwN46wapZcBQr6',
    symbol: 'devTMAC',
    name: 'devTMAC',
    decimals: 6,
    logoURI:
      'https://api.phantom.app/image-proxy/?image=https%3A%2F%2Feverlastingsong.github.io%2Fnebula%2Fdevtoken_metadata%2FdevTMAC%2Fimage.png',
    tags: ['utility-token'],
    extensions: {
      website: 'https://step.finance/',
      twitter: 'https://twitter.com/StepFinance_',
      coingeckoId: 'step-finance',
      waterfallbot: 'https://bit.ly/STEPwaterfall',
    },
  },
];
