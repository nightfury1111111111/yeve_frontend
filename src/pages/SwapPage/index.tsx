import { AnchorProvider, Program } from '@project-serum/anchor';
import { Idl } from '@project-serum/anchor/dist/cjs/idl';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { useEffect } from 'react';
import idl from '../../idl.json';
import Chart from './Chart';
import Swap from './Swap';
import { SwapPageContainer } from './SwapPage.styled';

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

    console.log(signerWallet);

    const provider = new AnchorProvider(connection, signerWallet, {
      preflightCommitment: 'recent',
    });

    return provider;
  };

  const testContract = async () => {
    const provider = getProvider();
    if (!provider || !publicKey || !signTransaction) return;
    const program = new Program(idl as Idl, programID, provider);
    console.log(program);
    const balance: any = await connection.getBalance(provider.wallet.publicKey);
    console.log(
      `${provider.wallet.publicKey.toString()} has ${balance / 1000000000} SOL`
    );
  };

  useEffect(() => {
    testContract();
  }, [publicKey]);

  return (
    <SwapPageContainer>
      <Swap />
      <Chart />
    </SwapPageContainer>
  );
}
