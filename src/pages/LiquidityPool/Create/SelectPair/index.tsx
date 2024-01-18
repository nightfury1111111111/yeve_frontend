import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  Keypair,
  PublicKey,
  Connection,
  SystemProgram,
  Transaction,
  GetProgramAccountsFilter,
  Commitment,
  SYSVAR_RENT_PUBKEY,
} from '@solana/web3.js';
import { useDispatch } from 'react-redux';
import {
  setTokenA,
  setTokenB,
  swapToken,
  resetTokenDepositAmount,
} from '@src/redux/slices/tokenPair';
import yeveImage from '@src/assets/images/png/token-1.png';
import tetherImage from '@src/assets/images/png/token-2.png';
import DownIcon from '@src/assets/images/svg/menu/DownIcon';
import SwapIcon from '@src/assets/images/svg/pools/swap-icon';
import { useEffect, useState } from 'react';
import { SelectPair, SelectPairItem } from '../CreateLiquidityPool';
import TokenModal from './TokenModal';

export interface OwnedTokenInfo {
  address: string;
  amount: number;
}

export default function SelectPairElements() {
  const dispatch = useDispatch();
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const [ownedToken, setOwnedToken] = useState<Array<OwnedTokenInfo>>([]);

  const [fromToken, setFromToken] = useState<Record<string, any>>({
    address: 'BRjpCHtyQLNCo8gqRUr8jtdAj5AjPYQaoqbvcZiHok1k',
    symbol: 'devUSDC',
    name: 'devUSDC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    balance: 10.2,
    decimals: 6,
  });

  const [toToken, setToToken] = useState<Record<string, any>>({
    address: 'Jd4M8bfJG3sAkd82RsGWyEXoaBXQP7njFzBwEaCTuDa',
    symbol: 'devSAMO',
    name: 'devSAMO',
    logoURI:
      'https://api.phantom.app/image-proxy/?image=https%3A%2F%2Feverlastingsong.github.io%2Fnebula%2Fdevtoken_metadata%2FdevSAMO%2Fimage.png',
    balance: 10.2,
    decimals: 9,
  });

  const [tokenModalMode, setTokenModalMode] = useState<string>('');

  // useEffect(() => {
  //   // get token balance
  //   if (!publicKey) return;
  //   const rpcEndpoint =
  //     'https://virulent-wandering-reel.solana-devnet.quiknode.pro/c29fc55807faf8297c2fed73d3cd98150fd970ad/';
  //   const solanaConnection = new Connection(rpcEndpoint);

  //   const walletToQuery = publicKey.toString(); //example: vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg

  //   async function getTokenAccounts(
  //     wallet: string,
  //     solanaConnection: Connection
  //   ) {
  //     const filters: GetProgramAccountsFilter[] = [
  //       {
  //         dataSize: 165, //size of account (bytes)
  //       },
  //       {
  //         memcmp: {
  //           offset: 32, //location of our query in the account (bytes)
  //           bytes: wallet, //our search criteria, a base58 encoded string
  //         },
  //       },
  //     ];
  //     const accounts = await solanaConnection.getParsedProgramAccounts(
  //       TOKEN_PROGRAM_ID, //new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
  //       { filters: filters }
  //     );
  //     console.log(
  //       `Found ${accounts.length} token account(s) for wallet ${wallet}.`
  //     );
  //     const tmpTokenOwnedInfo: OwnedTokenInfo[] = [];
  //     accounts.forEach((account) => {
  //       //Parse the account data
  //       const parsedAccountInfo: any = account.account.data;
  //       if (
  //         parsedAccountInfo['parsed']['info']['tokenAmount']['uiAmount'] != 1 &&
  //         parsedAccountInfo['parsed']['info']['tokenAmount']['decimals'] != 0
  //       ) {
  //         const tokenOwnedByWallet: OwnedTokenInfo = {
  //           address: parsedAccountInfo['parsed']['info']['mint'],
  //           amount:
  //             Math.floor(
  //               parsedAccountInfo['parsed']['info']['tokenAmount']['uiAmount'] *
  //                 1000
  //             ) / 1000,
  //         };
  //         tmpTokenOwnedInfo.push(tokenOwnedByWallet);
  //       }
  //     });
  //     setOwnedToken(tmpTokenOwnedInfo);
  //   }
  //   getTokenAccounts(walletToQuery, solanaConnection);
  // }, [publicKey]);

  useEffect(() => {
    dispatch(
      setTokenA({
        name: fromToken.name,
        logoURI: fromToken.logoURI,
        address: fromToken.address,
        depositAmount: 0,
        decimals: fromToken.decimals,
        fetchInfo: false,
      })
    );
  }, [fromToken]);

  useEffect(() => {
    dispatch(
      setTokenB({
        name: toToken.name,
        logoURI: toToken.logoURI,
        address: toToken.address,
        depositAmount: 0,
        decimals: toToken.decimals,
        fetchInfo: false,
      })
    );
  }, [toToken]);

  const handleSwitchToken = () => {
    const from = JSON.parse(JSON.stringify(fromToken));
    setFromToken(toToken);
    setToToken(from);
    dispatch(swapToken());
    dispatch(resetTokenDepositAmount());
  };

  const handleTokenChange = (data: Record<string, any>) => {
    if (tokenModalMode === 'from') {
      setFromToken(data);
    } else if (tokenModalMode === 'to') {
      setToToken(data);
    }
    setTokenModalMode('');
  };

  return (
    <SelectPair>
      {tokenModalMode && (
        <TokenModal
          onClose={() => setTokenModalMode('')}
          handleSelect={handleTokenChange}
        />
      )}
      <SelectPairItem onClick={() => setTokenModalMode('from')}>
        <div>
          <img src={fromToken?.logoURI} />
          <span>{fromToken?.symbol}</span>
        </div>
        <DownIcon />
      </SelectPairItem>
      <div className="swap-icon" onClick={handleSwitchToken}>
        <SwapIcon />
      </div>
      <SelectPairItem onClick={() => setTokenModalMode('to')}>
        <div>
          <img src={toToken?.logoURI} />
          <span>{toToken?.symbol}</span>
        </div>
        <DownIcon />
      </SelectPairItem>
    </SelectPair>
  );
}
