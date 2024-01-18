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
import {
  MathUtil,
  AddressUtil,
  DecimalUtil,
  Percentage,
} from '@orca-so/common-sdk';
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
  increaseLiquidityQuoteByInputTokenWithParams,
} from '@orca-so/whirlpools-sdk';
import { useNavigate } from 'react-router-dom';
import {
  CreatePositionButton,
  PriceAmountInput,
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
import { useEffect, useState, useRef } from 'react';
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
  const timer = useRef(null);

  const [type, setType] = useState(CREATE_POOL_TYPE.AUTOMATIC);
  const [freeTierType, setFreeTierType] = useState(32);
  const [priceRange, setPriceRange] = useState('Full Range');
  const [currentPrice, setCurrentPrice] = useState(0);
  const [lowerPrice, setLowerPrice] = useState('0');
  const [upperPrice, setUpperPrice] = useState('0');
  const [whirlpoolData, setWhirlpoolData] = useState<WhirlpoolData>(
    {} as WhirlpoolData
  );

  const { connection } = useConnection();
  const { publicKey, wallet, signTransaction, signAllTransactions } =
    useWallet();

  useEffect(() => {
    let lower_price, upper_price;
    switch (priceRange) {
      case 'Safe':
        lower_price = currentPrice / 2;
        upper_price = 2 * currentPrice;
        break;
      case 'Common':
        lower_price = currentPrice / 1.3;
        upper_price = 1.3 * currentPrice;
        break;
      case 'Expert':
        lower_price = currentPrice / 1.1;
        upper_price = 1.1 * currentPrice;
        break;
      default:
        lower_price = 0;
        upper_price = 0;
    }
    setLowerPrice((Math.floor(lower_price * 10000) / 10000).toString());
    setUpperPrice((Math.floor(upper_price * 10000) / 10000).toString());
  }, [priceRange, currentPrice]);

  useEffect(() => {
    if (tokenPair.tokenB.depositAmount > 0 && tokenPair.tokenB.fetchInfo)
      handleGetQuote('tokenB');
  }, [tokenPair.tokenB.depositAmount]);

  useEffect(() => {
    if (tokenPair.tokenA.depositAmount > 0 && tokenPair.tokenA.fetchInfo)
      handleGetQuote('tokenA');
  }, [tokenPair.tokenA.depositAmount]);

  useEffect(() => {
    temp();
  }, [
    tokenPair.tokenA.name,
    tokenPair.tokenB.name,
    freeTierType,
    wallet,
    publicKey,
    signTransaction,
  ]);

  const temp = async () => {
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
    const aToB =
      tokenPair.tokenA.address.toLowerCase() ==
      tokenMintAKey.toString().toLowerCase();

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

    if (!whirlpool_data) {
      setCurrentPrice(0);
      return;
    }

    const whirlpool = await client.getPool(
      whirlpoolPda.publicKey,
      IGNORE_CACHE
    );
    whirlpool_data = whirlpool.getData();
    setWhirlpoolData(whirlpool_data);
    const token_a = whirlpool.getTokenAInfo();
    const token_b = whirlpool.getTokenBInfo();
    let price = PriceMath.sqrtPriceX64ToPrice(
      whirlpool_data.sqrtPrice,
      token_a.decimals,
      token_b.decimals
    );
    if (!aToB) {
      price = new Decimal('1').div(price);
    }
    setCurrentPrice(Number(price.toFixed(token_b.decimals)));
    // setCurrentPrice(whirlpool_data.sqrtPrice)
  };

  const handleGetQuote = (tokenType: string) => {
    if (lowerPrice == '0' || upperPrice == '0') {
      errorToast('Price range value must be bigger than 0');
      return;
    }
    if (timer.current) {
      clearTimeout(timer.current);
    }

    //@ts-ignore
    timer.current = setTimeout(() => {
      let inputTokenMint = PublicKey.default;
      let inputTokenAmount = new BN('0');
      if (tokenType == 'tokenB') {
        inputTokenMint = new PublicKey(tokenPair.tokenB.address);
        inputTokenAmount = DecimalUtil.toBN(
          new Decimal(tokenPair.tokenB.depositAmount.toString()),
          tokenPair.tokenB.decimals
        );
      }

      if (tokenType == 'tokenA') {
        inputTokenMint = new PublicKey(tokenPair.tokenA.address);
        inputTokenAmount = DecimalUtil.toBN(
          new Decimal(tokenPair.tokenA.depositAmount.toString()),
          tokenPair.tokenA.decimals
        );
      }

      // inputTokenMint = whirlpoolData.tokenMintB;
      // inputTokenAmount = DecimalUtil.toBN(new Decimal('10'), 6);
      // console.log(whirlpoolData);
      const slippage = Percentage.fromFraction(10, 1000); // 1%
      const aToB =
        tokenPair.tokenA.address.toLowerCase() ==
        whirlpoolData.tokenMintA.toString().toLowerCase();
      let originalprice = PriceMath.sqrtPriceX64ToPrice(
        whirlpoolData.sqrtPrice,
        aToB ? tokenPair.tokenA.decimals : tokenPair.tokenB.decimals,
        aToB ? tokenPair.tokenB.decimals : tokenPair.tokenA.decimals
      );
      console.log(originalprice.toFixed(5));
      const lower_tick_index = PriceMath.priceToInitializableTickIndex(
        aToB
          ? new Decimal(lowerPrice)
          : new Decimal(lowerPrice).mul(originalprice).mul(originalprice),
        aToB ? tokenPair.tokenA.decimals : tokenPair.tokenB.decimals,
        aToB ? tokenPair.tokenB.decimals : tokenPair.tokenA.decimals,
        whirlpoolData.tickSpacing
      );
      const upper_tick_index = PriceMath.priceToInitializableTickIndex(
        aToB
          ? new Decimal(upperPrice)
          : new Decimal(upperPrice).mul(originalprice).mul(originalprice),
        aToB ? tokenPair.tokenA.decimals : tokenPair.tokenB.decimals,
        aToB ? tokenPair.tokenB.decimals : tokenPair.tokenA.decimals,
        whirlpoolData.tickSpacing
      );
      console.log(lower_tick_index, upper_tick_index);

      const quote = increaseLiquidityQuoteByInputTokenWithParams({
        // Pass the pool definition and state
        tokenMintA: whirlpoolData.tokenMintA,
        tokenMintB: whirlpoolData.tokenMintB,
        sqrtPrice: whirlpoolData.sqrtPrice,
        tickCurrentIndex: whirlpoolData.tickCurrentIndex,
        // Price range
        tickLowerIndex: lower_tick_index,
        tickUpperIndex: upper_tick_index,
        // Input token and amount
        inputTokenMint,
        inputTokenAmount,
        // Acceptable slippage
        slippageTolerance: slippage,
      });

      console.log(
        'devSAMO max input:',
        DecimalUtil.fromBN(quote.tokenMaxA, 9).toFixed(6)
      );
      console.log(
        'devUSDC max input:',
        DecimalUtil.fromBN(quote.tokenMaxB, 6).toFixed(6)
      );
    }, 500);
  };

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
    const aToB =
      tokenPair.tokenA.address.toLowerCase() ==
      tokenMintAKey.toString().toLowerCase();

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
    whirlpool_data = whirlpool.getData();
    const token_a = whirlpool.getTokenAInfo();
    const token_b = whirlpool.getTokenBInfo();
    const price = PriceMath.sqrtPriceX64ToPrice(
      whirlpool_data.sqrtPrice,
      token_a.decimals,
      token_b.decimals
    );

    let lower_price, lower_tick_index;
    let upper_price, upper_tick_index;

    // Set price range, amount of tokens to deposit, and acceptable slippage
    switch (priceRange) {
      case 'Safe':
        lower_price = price.div(new Decimal('2'));
        upper_price = new Decimal('2').mul(price);
        break;
      case 'Common':
        lower_price = price.div(new Decimal('1.3'));
        upper_price = new Decimal('1.3').mul(price);
        break;
      case 'Expert':
        lower_price = price.div(new Decimal('1.1'));
        upper_price = new Decimal('1.1').mul(price);
        break;
      default:
        lower_price = price.div(new Decimal('1.1'));
        upper_price = new Decimal('1.1').mul(price);
    }

    console.log('lower_price:', lower_price.toFixed(token_b.decimals));
    console.log('upper_price:', upper_price.toFixed(token_b.decimals));

    lower_tick_index = PriceMath.priceToInitializableTickIndex(
      lower_price,
      token_a.decimals,
      token_b.decimals,
      whirlpool_data.tickSpacing
    );
    upper_tick_index = PriceMath.priceToInitializableTickIndex(
      upper_price,
      token_a.decimals,
      token_b.decimals,
      whirlpool_data.tickSpacing
    );

    const dev_usdc_amount = DecimalUtil.toBN(
      new Decimal('1' /* devUSDC */),
      token_b.decimals
    );
    const slippage = Percentage.fromFraction(10, 1000); // 1%

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
                  onClick={() => {
                    setPriceRange(item.label);
                  }}
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
              <span className="font-16 gray-200">
                {`${currentPrice} ${tokenPair.tokenB.name} per ${tokenPair.tokenA.name}`}
              </span>
            </SectionLabel>
            <SelectRangeManual>
              <SelectRangeManualItem>
                <button
                  onClick={() => {
                    setLowerPrice((lowerPrice) =>
                      Number(lowerPrice) - 1 < 0
                        ? '0'
                        : (Number(lowerPrice) - 1).toString()
                    );
                  }}
                >
                  <SubtractIcon />
                </button>
                <div>
                  <label>Min</label>
                  <PriceAmountInput
                    type="number"
                    value={lowerPrice}
                    onChange={(e) => {
                      setLowerPrice(Number(e.target.value).toString());
                    }}
                  />
                  <label>
                    {tokenPair.tokenB.name} per {tokenPair.tokenA.name}
                  </label>
                </div>
                <button
                  onClick={() => {
                    setLowerPrice((lowerPrice) =>
                      (Number(lowerPrice) + 1).toString()
                    );
                  }}
                >
                  <PlusIcon />
                </button>
              </SelectRangeManualItem>
              <SelectRangeManualItem>
                <button
                  onClick={() => {
                    setUpperPrice((upperPrice) =>
                      Number(upperPrice) - 1 < 0
                        ? '0'
                        : (Number(upperPrice) - 1).toString()
                    );
                  }}
                >
                  <SubtractIcon />
                </button>
                <div>
                  <label>Max</label>
                  <PriceAmountInput
                    type="number"
                    value={upperPrice}
                    onChange={(e) => {
                      setUpperPrice(Number(e.target.value).toString());
                    }}
                  />
                  <label>
                    {tokenPair.tokenB.name} per {tokenPair.tokenA.name}
                  </label>
                </div>
                <button
                  onClick={() => {
                    setUpperPrice((upperPrice) =>
                      (Number(upperPrice) + 1).toString()
                    );
                  }}
                >
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
