import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { Idl } from '@coral-xyz/anchor/dist/cjs/idl';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  Connection,
  Commitment,
  SYSVAR_RENT_PUBKEY,
} from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import Decimal from 'decimal.js/decimal.js';
import { useEffect } from 'react';
import idl from '../../idl.json';
import Chart from './Chart';
import Swap from './Swap';
import { SwapPageContainer } from './SwapPage.styled';
import { BN } from '@coral-xyz/anchor';
import { MathUtil } from '@orca-so/common-sdk';
import * as buffer from 'buffer';
window.Buffer = buffer.Buffer;
import { TickSpacing } from '@src/constants/enum';
import {
  PDA_FEE_TIER_SEED,
  PDA_YEVEPOOL_SEED,
  TICK_ARRAY_SIZE,
  configAccount,
  tokenMintAKey,
  tokenMintBKey,
  rewardMint,
  PDA_TICK_ARRAY_SEED,
} from '@src/constants/other';
const programID = new PublicKey(idl.metadata.address);

export default function SwapPage() {
  const { connection } = useConnection();
  const { publicKey, wallet, signTransaction, signAllTransactions } =
    useWallet();

  const getProvider = () => {
    if (!wallet || !publicKey || !signTransaction || !signAllTransactions) {
      return;
    }
    const signerWallet = {
      publicKey: publicKey,
      signTransaction: signTransaction,
      signAllTransactions: signAllTransactions,
    };

    const provider = new AnchorProvider(connection, signerWallet, {
      preflightCommitment: 'recent',
    });

    return provider;
  };

  useEffect(() => {}, [publicKey]);
  return (
    <SwapPageContainer>
      <Swap />
      <Chart />
    </SwapPageContainer>
  );
}
