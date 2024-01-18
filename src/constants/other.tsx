import { PublicKey } from '@solana/web3.js';

export const PDA_YEVEPOOL_SEED = 'yevepool';
export const PDA_POSITION_SEED = 'position';
export const PDA_METADATA_SEED = 'metadata';
export const PDA_TICK_ARRAY_SEED = 'tick_array';
export const PDA_FEE_TIER_SEED = 'fee_tier';
export const PDA_ORACLE_SEED = 'oracle';
export const PDA_POSITION_BUNDLE_SEED = 'position_bundle';
export const PDA_BUNDLED_POSITION_SEED = 'bundled_position';

export const TICK_ARRAY_SIZE = 88;

export const configAccount = new PublicKey(
  '7MM5NCEmwPfbXj4pPkopQitdrqxiSMRJmD4Wjw5d5R7S'
);

export const METADATA_PROGRAM_ADDRESS = new PublicKey(
  'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
);

// need to change this address
export const WHIRLPOOL_NFT_UPDATE_AUTH = new PublicKey(
  '3axbTs2z5GBy6usVbNVoqEgZMng3vZvMnAoX29BFfwhr'
);

export const tokenMintAKey = new PublicKey(
  '7vEpiNkomzeF2uDw8uuDFqEcQfaWbpPgmFf41G5Y7W4o'
);
export const tokenMintBKey = new PublicKey(
  'CU1f67B7n3XzwbHkFvciuH6Yqe8kiaEFfSZHzLNRvtYi'
);
export const rewardMint = new PublicKey(
  'JC7EAyPpZKjt5bAQj7a3zpMRwsac5AxMoY5DHnPMffJr'
);
// admin wallet's account for rewardMint
export const adminRewardMintAccount = new PublicKey(
  'FxBmrwYsMG9YjqsdZrKRZvqr4wNXHj8pA2WarsAM5dUC'
);
