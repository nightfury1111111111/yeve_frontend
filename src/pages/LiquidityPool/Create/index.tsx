import ArrowLeftIcon from '@src/assets/images/svg/arrow-left';
import SettingIcon from '@src/assets/images/svg/swap/SettingIcon';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { AnchorProvider, Program, BN } from '@coral-xyz/anchor';
import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  Connection,
  Commitment,
  SYSVAR_RENT_PUBKEY,
} from '@solana/web3.js';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import Decimal from 'decimal.js/decimal.js';
import { MathUtil, AddressUtil } from '@orca-so/common-sdk';
import {
  WhirlpoolContext,
  buildWhirlpoolClient,
  WhirlpoolIx,
  toTx,
  ORCA_WHIRLPOOL_PROGRAM_ID,
  WhirlpoolsConfigData,
  FeeTierData,
  WhirlpoolData,
  PoolUtil,
  PDAUtil,
  PriceMath,
  IGNORE_CACHE,
} from '@orca-so/whirlpools-sdk';
import { useNavigate } from 'react-router-dom';
import {
  CreatePositionButton,
  FreeTierElement,
  FreeTierList,
  Heading,
  PageContainer,
  PriceRangeElement,
  PriceRangeList,
  PriceRangeRating,
  Section,
  SectionItem,
  SectionLabel,
  SelectRangeManual,
  SelectRangeManualItem,
  SwitchType,
} from './CreateLiquidityPool';
import SelectPairElements from './SelectPair';
import CurrentPoolStats from './PoolStats';
import { CREATE_POOL_TYPE } from '@src/constants/enum';
import { useEffect, useState } from 'react';
import type { RootState } from '@src/redux/store';
import { useSelector } from 'react-redux';
import ALMProviderComponent from './ALMProvider';
import DepositAmountsComponent from './DepositAmounts';
import {
  CREATE_POOL_FREE_TIER_LIST,
  CREATE_POOL_PRICE_RANGE,
} from '@src/example-data/pools';
import CheckIcon from '@src/assets/images/svg/pools/check-icon';
import SubtractIcon from '@src/assets/images/svg/pools/subtract-icon';
import PlusIcon from '@src/assets/images/svg/pools/plus-icon';
import ReturnIcon from '@src/assets/images/svg/return-svg';

import { TickSpacing } from '@src/constants/enum';
import { configAccount } from '@src/constants/other';
import { wait } from '@src/utils/misc';
import { errorToast, infoToast } from '@src/Notification';

export default function CreateLiquidityPoolPage() {
  const tokenPair = useSelector((state: RootState) => state.tokenPair);

  const navigate = useNavigate();

  const [type, setType] = useState(CREATE_POOL_TYPE.AUTOMATIC);
  const [freeTierType, setFreeTierType] = useState(32);
  const [priceRange, setPriceRange] = useState('Full Range');

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

  const createNewPool = async () => {
    if (
      tokenPair.tokenA.depositAmount == 0 ||
      tokenPair.tokenB.depositAmount == 0
    ) {
      errorToast('Insufficient balance');
      return;
    }
    const provider = getProvider();
    if (!provider || !publicKey || !signTransaction) return;

    const ctx = WhirlpoolContext.from(
      connection,
      provider.wallet,
      ORCA_WHIRLPOOL_PROGRAM_ID
    );

    const client = buildWhirlpoolClient(ctx);
    const fetcher = ctx.fetcher;

    let mintA, mintB;
    [mintA, mintB] = PoolUtil.orderMints(
      new PublicKey(tokenPair.tokenA.address),
      new PublicKey(tokenPair.tokenB.address)
    );

    let tokenMintAKey = AddressUtil.toPubKey(mintA);
    let tokenMintBKey = AddressUtil.toPubKey(mintB);
    const aToB = tokenPair.tokenA.address == tokenMintAKey.toString();

    const initSqrtPrice = PriceMath.priceToSqrtPriceX64(
      new Decimal(1).div(new Decimal(10)),
      aToB ? tokenPair.tokenA.decimals : tokenPair.tokenB.decimals,
      aToB ? tokenPair.tokenB.decimals : tokenPair.tokenA.decimals
    );

    const whirlpoolPda = PDAUtil.getWhirlpool(
      ctx.program.programId,
      configAccount,
      tokenMintAKey,
      tokenMintBKey,
      freeTierType // tickSpacing
    );

    let whirlpool_data = (await fetcher.getPool(
      whirlpoolPda.publicKey
    )) as WhirlpoolData;

    console.log(whirlpool_data);

    const tokenVaultAKeypair = Keypair.generate();
    const tokenVaultBKeypair = Keypair.generate();

    let feeTierPda = PDAUtil.getFeeTier(
      ctx.program.programId,
      configAccount,
      freeTierType // tickSpacing
    );

    let latest_blockhash, signature;

    if (!whirlpool_data) {
      signature = await toTx(
        ctx,
        WhirlpoolIx.initializePoolIx(ctx.program, {
          initSqrtPrice,
          tickSpacing: freeTierType, // tickSpacing
          tokenMintA: tokenMintAKey,
          tokenMintB: tokenMintBKey,
          tokenVaultAKeypair,
          tokenVaultBKeypair,
          whirlpoolPda,
          whirlpoolsConfig: configAccount,
          feeTierKey: feeTierPda.publicKey,
          funder: ctx.wallet.publicKey,
        })
      ).buildAndExecute();

      // Wait for the transaction to complete
      latest_blockhash = await ctx.connection.getLatestBlockhash();
      await ctx.connection.confirmTransaction(
        { signature, ...latest_blockhash },
        'confirmed'
      );
    }

    const whirlpool = await client.getPool(
      whirlpoolPda.publicKey,
      IGNORE_CACHE
    );
    const price = PriceMath.sqrtPriceX64ToPrice(
      whirlpool.getData().sqrtPrice,
      aToB ? tokenPair.tokenA.decimals : tokenPair.tokenB.decimals,
      aToB ? tokenPair.tokenB.decimals : tokenPair.tokenA.decimals
    );
    console.log(
      'price:',
      price.toFixed(
        aToB ? tokenPair.tokenB.decimals : tokenPair.tokenA.decimals
      )
    );

    // transaction.feePayer = provider.wallet.publicKey;
    // transaction.recentBlockhash = (
    //   await connection.getLatestBlockhash()
    // ).blockhash;
    // transaction.partialSign(tokenVaultAKeypair);
    // transaction.partialSign(tokenVaultBKeypair);
    // transaction.partialSign(positionMintKeypair);
    // // transaction.partialSign(rewardVaultKeypair);
    // const signedTx = await provider.wallet.signTransaction(transaction);
    // const txId = await connection.sendRawTransaction(signedTx.serialize());
    // await connection.confirmTransaction(txId, 'confirmed');
    // console.log(txId);
  };

  return (
    <PageContainer>
      <Section>
        <Heading>
          <span>New Pools</span>
          <button onClick={() => navigate('/liquidity-pool')}>
            <div>
              <ReturnIcon />
            </div>
            <ArrowLeftIcon />
            <span>Back to All Pools</span>
          </button>
        </Heading>
        <SectionItem>
          <SectionLabel>
            <span>Select Pair</span>
            {type === CREATE_POOL_TYPE.MANUAL && (
              <button>
                <SettingIcon />
                <span>Settings</span>
              </button>
            )}
          </SectionLabel>
          <SelectPairElements />
          <CurrentPoolStats />
        </SectionItem>
        <SectionItem>
          <SectionLabel>
            <span>Select Type</span>
          </SectionLabel>
          <SwitchType>
            <button
              onClick={() => setType(CREATE_POOL_TYPE.AUTOMATIC)}
              className={`${
                type === CREATE_POOL_TYPE.AUTOMATIC ? 'active' : ''
              }`}
            >
              Automatic
            </button>
            <button
              onClick={() => setType(CREATE_POOL_TYPE.MANUAL)}
              className={`${type === CREATE_POOL_TYPE.MANUAL ? 'active' : ''}`}
            >
              Manual
            </button>
          </SwitchType>
        </SectionItem>
        {type === CREATE_POOL_TYPE.AUTOMATIC ? (
          <>
            <SectionItem>
              <SectionLabel>
                <span>Select ALM Provider</span>
              </SectionLabel>
              <ALMProviderComponent />
            </SectionItem>
            <SectionItem>
              <SectionLabel>
                <span>Deposit Amounts</span>
              </SectionLabel>
              <DepositAmountsComponent />
            </SectionItem>
            <CreatePositionButton onClick={createNewPool}>
              Create Position
            </CreatePositionButton>
          </>
        ) : (
          <SectionItem>
            <SectionLabel>
              <span className="gray-50">Select Free Tier</span>
            </SectionLabel>
            <FreeTierList>
              {CREATE_POOL_FREE_TIER_LIST.map((item, index) => (
                <FreeTierElement
                  key={index}
                  className={`${
                    freeTierType === item.tickSpacing ? 'active' : ''
                  }`}
                  onClick={() => setFreeTierType(item.tickSpacing)}
                >
                  <label>{item.apr}%</label>
                  <span>{item.desc}</span>
                  <div>{item.selectPercent}% select</div>
                </FreeTierElement>
              ))}
            </FreeTierList>
          </SectionItem>
        )}
      </Section>
      {type === CREATE_POOL_TYPE.MANUAL && (
        <Section>
          <SectionItem>
            <SectionLabel>
              <span className="font-16">Select Price Range</span>
              <button>
                <span>Reset</span>
              </button>
            </SectionLabel>
            <PriceRangeList>
              {CREATE_POOL_PRICE_RANGE.map((item, index) => (
                <PriceRangeElement
                  key={index}
                  className={`${priceRange === item.label ? 'active' : ''}`}
                  onClick={() => setPriceRange(item.label)}
                >
                  <label>
                    <div>
                      <CheckIcon />
                    </div>
                    <span>{item.label}</span>
                  </label>
                  <div>
                    <PriceRangeRating>
                      <span>Risk:</span>
                      <div>
                        {new Array(item.risk).fill(0).map((_, i) => (
                          <div key={i} className="risk"></div>
                        ))}
                        {new Array(5 - item.risk).fill(0).map((_, i) => (
                          <div key={i}></div>
                        ))}
                      </div>
                    </PriceRangeRating>
                    <PriceRangeRating>
                      <span>Profit:</span>
                      <div>
                        {new Array(item.profit).fill(0).map((_, i) => (
                          <div key={i} className="profit"></div>
                        ))}
                        {new Array(5 - item.profit).fill(0).map((_, i) => (
                          <div key={i}></div>
                        ))}
                      </div>
                    </PriceRangeRating>
                  </div>
                </PriceRangeElement>
              ))}
            </PriceRangeList>
          </SectionItem>
          <SectionItem>
            <SectionLabel>
              <span className="font-16">Current price:</span>
              <span className="font-16 gray-200">1870 USDT per ETH</span>
            </SectionLabel>
            <SelectRangeManual>
              <SelectRangeManualItem>
                <button>
                  <SubtractIcon />
                </button>
                <div>
                  <label>Min</label>
                  <span>914.21</span>
                  <label>USDT per ETH</label>
                </div>
                <button>
                  <PlusIcon />
                </button>
              </SelectRangeManualItem>
              <SelectRangeManualItem>
                <button>
                  <SubtractIcon />
                </button>
                <div>
                  <label>Max</label>
                  <span>3655.5</span>
                  <label>USDT per ETH</label>
                </div>
                <button>
                  <PlusIcon />
                </button>
              </SelectRangeManualItem>
            </SelectRangeManual>
          </SectionItem>
          <SectionItem>
            <SectionLabel>
              <span>Deposit Amounts</span>
            </SectionLabel>
            <DepositAmountsComponent />
          </SectionItem>
          <CreatePositionButton onClick={createNewPool}>
            Create Position
          </CreatePositionButton>
        </Section>
      )}
    </PageContainer>
  );
}
