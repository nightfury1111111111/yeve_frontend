import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/redux/store';
import { useState, useEffect } from 'react';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
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
import {
  DepositAmountContainer,
  DepositAmountItem,
  DepositAmountToken,
  DepositAmountInput,
  DepositAmountValue,
} from '../CreateLiquidityPool';
import { errorToast } from '@src/Notification';
import { OwnedTokenInfo } from '../SelectPair';
import {
  updateTokenADepositAmount,
  updateTokenBDepositAmount,
} from '@src/redux/slices/tokenPair';

export default function DepositAmountsComponent() {
  const dispatch = useDispatch();
  const tokenPair = useSelector((state: RootState) => state.tokenPair);
  const [ownedToken, setOwnedToken] = useState<Array<OwnedTokenInfo>>([]);
  const [tokenADepositAmount, setTokenADepositAmount] = useState(0);
  const [tokenBDepositAmount, setTokenBDepositAmount] = useState(0);
  const { publicKey } = useWallet();

  useEffect(() => {
    // get token balance
    if (!publicKey) return;
    const rpcEndpoint =
      'https://virulent-wandering-reel.solana-devnet.quiknode.pro/c29fc55807faf8297c2fed73d3cd98150fd970ad/';
    const solanaConnection = new Connection(rpcEndpoint);

    const walletToQuery = publicKey.toString(); //example: vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg

    async function getTokenAccounts(
      wallet: string,
      solanaConnection: Connection
    ) {
      const filters: GetProgramAccountsFilter[] = [
        {
          dataSize: 165, //size of account (bytes)
        },
        {
          memcmp: {
            offset: 32, //location of our query in the account (bytes)
            bytes: wallet, //our search criteria, a base58 encoded string
          },
        },
      ];
      const accounts = await solanaConnection.getParsedProgramAccounts(
        TOKEN_PROGRAM_ID, //new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
        { filters: filters }
      );

      const tmpTokenOwnedInfo: OwnedTokenInfo[] = [];
      accounts.forEach((account) => {
        //Parse the account data
        const parsedAccountInfo: any = account.account.data;
        if (
          parsedAccountInfo['parsed']['info']['tokenAmount']['uiAmount'] != 1 &&
          parsedAccountInfo['parsed']['info']['tokenAmount']['decimals'] != 0
        ) {
          const tokenOwnedByWallet: OwnedTokenInfo = {
            address: parsedAccountInfo['parsed']['info']['mint'],
            amount:
              Math.floor(
                parsedAccountInfo['parsed']['info']['tokenAmount']['uiAmount'] *
                  1000
              ) / 1000,
          };
          tmpTokenOwnedInfo.push(tokenOwnedByWallet);
        }
      });
      setOwnedToken(tmpTokenOwnedInfo);
    }
    getTokenAccounts(walletToQuery, solanaConnection);
  }, [publicKey]);

  useEffect(() => {
    setTokenADepositAmount(tokenPair.tokenA.depositAmount);
  }, [tokenPair.tokenA.depositAmount]);

  useEffect(() => {
    setTokenBDepositAmount(tokenPair.tokenB.depositAmount);
  }, [tokenPair.tokenB.depositAmount]);

  const calculateBalance = (address: string) => {
    let balance: number = 0;
    for (let i = 0; i < ownedToken.length; i++) {
      if (ownedToken[i].address == address) {
        balance = ownedToken[i].amount;
        break;
      }
    }
    return balance;
  };

  useEffect(() => {
    dispatch(updateTokenADepositAmount(Number(tokenADepositAmount)));
  }, [tokenADepositAmount]);

  useEffect(() => {
    dispatch(updateTokenBDepositAmount(Number(tokenBDepositAmount)));
  }, [tokenBDepositAmount]);

  return (
    <DepositAmountContainer>
      <DepositAmountItem>
        <DepositAmountToken>
          <DepositAmountInput
            type="number"
            value={tokenADepositAmount}
            onChange={(e) => {
              if (
                calculateBalance(tokenPair.tokenA.address) <
                Number(e.target.value)
              ) {
                errorToast('Insufficient balance');
                return;
              }
              setTokenADepositAmount(Number(e.target.value));
            }}
          />
          <div>
            <img src={tokenPair.tokenA.logoURI} />
            <span>{tokenPair.tokenA.name}</span>
          </div>
        </DepositAmountToken>
        <DepositAmountValue>
          <span>$ 3,860</span>
          <div>
            <span>Balance: {calculateBalance(tokenPair.tokenA.address)}</span>
            <button
              onClick={() => {
                setTokenADepositAmount(
                  Number(calculateBalance(tokenPair.tokenA.address))
                );
              }}
            >
              MAX
            </button>
          </div>
        </DepositAmountValue>
      </DepositAmountItem>
      <DepositAmountItem>
        <DepositAmountToken>
          <DepositAmountInput
            type="number"
            value={tokenBDepositAmount}
            onChange={(e) => {
              if (
                calculateBalance(tokenPair.tokenB.address) <
                Number(e.target.value)
              ) {
                errorToast('Insufficient Balance');
                return;
              }
              setTokenBDepositAmount(Number(e.target.value));
            }}
          />
          <div>
            <img src={tokenPair.tokenB.logoURI} />
            <span>{tokenPair.tokenB.name}</span>
          </div>
        </DepositAmountToken>
        <DepositAmountValue>
          <span>$ 3,860</span>
          <div>
            <span>Balance: {calculateBalance(tokenPair.tokenB.address)}</span>
            <button
              onClick={() => {
                setTokenBDepositAmount(
                  Number(calculateBalance(tokenPair.tokenB.address))
                );
              }}
            >
              MAX
            </button>
          </div>
        </DepositAmountValue>
      </DepositAmountItem>
    </DepositAmountContainer>
  );
}
