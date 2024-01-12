import { AnchorProvider, Program } from '@project-serum/anchor';
import { Idl } from '@project-serum/anchor/dist/cjs/idl';
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
import Decimal from 'decimal.js';
import { useEffect } from 'react';
import idl from '../../idl.json';
import Chart from './Chart';
import Swap from './Swap';
import { SwapPageContainer } from './SwapPage.styled';
import { BN } from '@project-serum/anchor';
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

  const initializeConfig = async () => {
    const provider = getProvider();
    if (!provider || !publicKey || !signTransaction) return;
    const program = new Program(idl as Idl, programID, provider);

    // const balance: any = await connection.getBalance(provider.wallet.publicKey);
    // console.log(
    //   `${provider.wallet.publicKey.toString()} has ${balance / 1000000000} SOL`
    // );

    // // test fetching data from config account
    // const fetchData = await program.account.yevepoolsConfig.fetch(
    //   configAccount
    // );
    // console.log(fetchData);

    const yevepoolConfigKeypair = Keypair.generate();
    console.log(yevepoolConfigKeypair.publicKey.toString());

    const transaction = new Transaction();

    const tx = await program.methods
      .initializeConfig(
        publicKey, // feeAuthority
        publicKey, // collectProtocolFeesAuthority
        publicKey, // rewardEmissionsSuperAuthority
        300 // defaultProtocolFeeRate
      )
      .accounts({
        config: yevepoolConfigKeypair.publicKey,
        funder: publicKey,
        systemProgram: SystemProgram.programId,
      })
      .transaction();

    transaction.add(tx);

    transaction.feePayer = provider.wallet.publicKey;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    transaction.sign(yevepoolConfigKeypair);
    const signedTx = await provider.wallet.signTransaction(transaction);
    const txId = await connection.sendRawTransaction(signedTx.serialize());
    await connection.confirmTransaction(txId, 'confirmed');
    console.log(txId);
  };

  const initfeeTier = async () => {
    const provider = getProvider();
    if (!provider || !publicKey || !signTransaction) return;
    const program = new Program(idl as Idl, programID, provider);

    const feeTierPda = PublicKey.findProgramAddressSync(
      [
        Buffer.from(PDA_FEE_TIER_SEED),
        configAccount.toBuffer(),
        new BN(TickSpacing.Stable).toArrayLike(Buffer, 'le', 2),
      ],
      programID
    );

    const transaction = new Transaction();

    const tx = await program.methods
      .initializeFeeTier(TickSpacing.Stable, 800)
      .accounts({
        config: configAccount,
        feeTier: feeTierPda[0],
        feeAuthority: publicKey,
        funder: publicKey,
        systemProgram: SystemProgram.programId,
      })
      .transaction();

    transaction.add(tx);

    transaction.feePayer = provider.wallet.publicKey;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    const signedTx = await provider.wallet.signTransaction(transaction);
    const txId = await connection.sendRawTransaction(signedTx.serialize());
    await connection.confirmTransaction(txId, 'confirmed');
    console.log(txId);
  };

  // const initalizePool = async () => {
  //   const provider = getProvider();
  //   if (!provider || !publicKey || !signTransaction) return;
  //   const program = new Program(idl as Idl, programID, provider);

  //   const price = MathUtil.toX64(new Decimal(5));
  //   const yevepoolPda = PublicKey.findProgramAddressSync(
  //     [
  //       Buffer.from(PDA_YEVEPOOL_SEED),
  //       configAccount.toBuffer(),
  //       tokenMintAKey.toBuffer(),
  //       tokenMintBKey.toBuffer(),
  //       new BN(TickSpacing.Stable).toArrayLike(Buffer, 'le', 2),
  //     ],
  //     programID
  //   );

  //   const feeTierPda = PublicKey.findProgramAddressSync(
  //     [
  //       Buffer.from(PDA_FEE_TIER_SEED),
  //       configAccount.toBuffer(),
  //       new BN(TickSpacing.Stable).toArrayLike(Buffer, 'le', 2),
  //     ],
  //     programID
  //   );

  //   const yevepoolBump = {
  //     yevepoolBump: yevepoolPda[1],
  //   };

  //   const tokenVaultAKeypair = Keypair.generate();
  //   const tokenVaultBKeypair = Keypair.generate();

  //   console.log({
  //     tokenVaultA: tokenVaultAKeypair.publicKey.toString(),
  //     tokenVaultB: tokenVaultBKeypair.publicKey.toString(),
  //   });

  //   const transaction = new Transaction();

  //   const tx = await program.methods
  //     .initializePool(yevepoolBump, TickSpacing.Stable, price)
  //     .accounts({
  //       yevepoolsConfig: configAccount,
  //       tokenMintA: tokenMintAKey,
  //       tokenMintB: tokenMintBKey,
  //       funder: publicKey,
  //       yevepool: yevepoolPda[0],
  //       tokenVaultA: tokenVaultAKeypair.publicKey,
  //       tokenVaultB: tokenVaultBKeypair.publicKey,
  //       feeTier: feeTierPda[0],
  //       tokenProgram: TOKEN_PROGRAM_ID,
  //       systemProgram: SystemProgram.programId,
  //       rent: SYSVAR_RENT_PUBKEY,
  //     })
  //     .transaction();

  //   transaction.add(tx);

  //   transaction.feePayer = provider.wallet.publicKey;
  //   transaction.recentBlockhash = (
  //     await connection.getLatestBlockhash()
  //   ).blockhash;
  //   transaction.partialSign(tokenVaultAKeypair);
  //   transaction.partialSign(tokenVaultBKeypair);
  //   const signedTx = await provider.wallet.signTransaction(transaction);
  //   const txId = await connection.sendRawTransaction(signedTx.serialize());
  //   await connection.confirmTransaction(txId, 'confirmed');
  //   console.log(txId);
  // };

  // const initTickArray = async () => {
  //   const provider = getProvider();
  //   if (!provider || !publicKey || !signTransaction) return;
  //   const program = new Program(idl as Idl, programID, provider);

  //   const tickSpacing = TickSpacing.Standard;
  //   const startTick = TICK_ARRAY_SIZE * tickSpacing * 2;

  //   const yevepoolPda = PublicKey.findProgramAddressSync(
  //     [
  //       Buffer.from(PDA_YEVEPOOL_SEED),
  //       configAccount.toBuffer(),
  //       tokenMintAKey.toBuffer(),
  //       tokenMintBKey.toBuffer(),
  //       new BN(TickSpacing.Stable).toArrayLike(Buffer, 'le', 2),
  //     ],
  //     programID
  //   );

  //   const tickArrayPda = PublicKey.findProgramAddressSync(
  //     [
  //       Buffer.from(PDA_TICK_ARRAY_SEED),
  //       yevepoolPda[0].toBuffer(),
  //       Buffer.from(startTick.toString()),
  //     ],
  //     programID
  //   );

  //   const transaction = new Transaction();

  //   const tx = await program.methods
  //     .initializeTickArray(startTick)
  //     .accounts({
  //       yevepool: yevepoolPda[0],
  //       tickArray: tickArrayPda[0],
  //       funder: publicKey,
  //       systemProgram: SystemProgram.programId,
  //     })
  //     .transaction();

  //   transaction.add(tx);

  //   transaction.feePayer = provider.wallet.publicKey;
  //   transaction.recentBlockhash = (
  //     await connection.getLatestBlockhash()
  //   ).blockhash;
  //   const signedTx = await provider.wallet.signTransaction(transaction);
  //   const txId = await connection.sendRawTransaction(signedTx.serialize());
  //   await connection.confirmTransaction(txId, 'confirmed');
  //   console.log(txId);
  // };

  // const initializeReward = async () => {
  //   const provider = getProvider();
  //   if (!provider || !publicKey || !signTransaction) return;
  //   const program = new Program(idl as Idl, programID, provider);

  //   const yevepoolPda = PublicKey.findProgramAddressSync(
  //     [
  //       Buffer.from(PDA_YEVEPOOL_SEED),
  //       configAccount.toBuffer(),
  //       tokenMintAKey.toBuffer(),
  //       tokenMintBKey.toBuffer(),
  //       new BN(TickSpacing.Stable).toArrayLike(Buffer, 'le', 2),
  //     ],
  //     programID
  //   );
  //   const rewardVaultKeypair = Keypair.generate();

  //   const transaction = new Transaction();

  //   const tx = await program.methods
  //     .initializeReward(0)
  //     .accounts({
  //       rewardAuthority: publicKey,
  //       yevepool: yevepoolPda[0],
  //       funder: publicKey,
  //       rewardMint,
  //       rewardVault: rewardVaultKeypair.publicKey,
  //       tokenProgram: TOKEN_PROGRAM_ID,
  //       systemProgram: SystemProgram.programId,
  //       rent: SYSVAR_RENT_PUBKEY,
  //     })
  //     .transaction();

  //   transaction.add(tx);

  //   transaction.feePayer = provider.wallet.publicKey;
  //   transaction.recentBlockhash = (
  //     await connection.getLatestBlockhash()
  //   ).blockhash;
  //   transaction.partialSign(rewardVaultKeypair);
  //   const signedTx = await provider.wallet.signTransaction(transaction);
  //   const txId = await connection.sendRawTransaction(signedTx.serialize());
  //   await connection.confirmTransaction(txId, 'confirmed');
  //   console.log(txId);
  // };

  // const setRewardEmissions = async () => {
  //   const provider = getProvider();
  //   if (!provider || !publicKey || !signTransaction) return;
  //   const program = new Program(idl as Idl, programID, provider);

  //   const emissionsPerSecondX64 = new BN(10_000)
  //     .shln(64)
  //     .div(new BN(60 * 60 * 24));
  //   console.log(emissionsPerSecondX64);
  //   const rewardIndex = 0;

  //   const yevepoolPda = PublicKey.findProgramAddressSync(
  //     [
  //       Buffer.from(PDA_YEVEPOOL_SEED),
  //       configAccount.toBuffer(),
  //       tokenMintAKey.toBuffer(),
  //       tokenMintBKey.toBuffer(),
  //       new BN(TickSpacing.Stable).toArrayLike(Buffer, 'le', 2),
  //     ],
  //     programID
  //   );

  //   const fetchData = await program.account.yevepool.fetch(yevepoolPda[0]);
  //   console.log(fetchData.rewardInfos[0].vault.toString());

  //   const transaction = new Transaction();

  //   const tx = await program.methods
  //     .setRewardEmissions(rewardIndex, emissionsPerSecondX64)
  //     .accounts({
  //       rewardAuthority: publicKey,
  //       yevepool: yevepoolPda[0],
  //       rewardVault: fetchData.rewardInfos[0].vault,
  //     })
  //     .transaction();

  //   transaction.add(tx);

  //   transaction.feePayer = provider.wallet.publicKey;
  //   transaction.recentBlockhash = (
  //     await connection.getLatestBlockhash()
  //   ).blockhash;
  //   const signedTx = await provider.wallet.signTransaction(transaction);
  //   const txId = await connection.sendRawTransaction(signedTx.serialize());
  //   await connection.confirmTransaction(txId, 'confirmed');
  //   console.log(txId);
  // };

  useEffect(() => {
    // initializeConfig();
    // initfeeTier();
    // initalizePool();
    // initTickArray();
    // initializeReward();
    // setRewardEmissions();
  }, [publicKey]);
  return (
    <SwapPageContainer>
      <Swap />
      <Chart />
    </SwapPageContainer>
  );
}
