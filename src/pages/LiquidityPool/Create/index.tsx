import ArrowLeftIcon from '@src/assets/images/svg/arrow-left';
import SettingIcon from '@src/assets/images/svg/swap/SettingIcon';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { AnchorProvider, Program } from '@coral-xyz/anchor';
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
import { BN } from '@coral-xyz/anchor';
import { MathUtil, AddressUtil } from '@orca-so/common-sdk';
import { PoolUtil } from '@orca-so/whirlpools-sdk';
import idl from '../../../idl.json';
import { Idl } from '@coral-xyz/anchor/dist/cjs/idl';
import { getOrCreateAssociatedTokenAccount } from '../../../utils/transferSpl/getOrCreateAssociatedTokenAccount';
import { getAssociatedTokenAddress } from '../../../utils/transferSpl/getAssociatedTokerAddress';
import { getAccountInfo } from '../../../utils/transferSpl/getAccountInfo';
import { createAssociatedTokenAccountInstruction } from '../../../utils/transferSpl/createAssociatedTokenAccountInstruction';
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
import {
  PDA_FEE_TIER_SEED,
  PDA_YEVEPOOL_SEED,
  PDA_POSITION_SEED,
  PDA_METADATA_SEED,
  METADATA_PROGRAM_ADDRESS,
  TICK_ARRAY_SIZE,
  WHIRLPOOL_NFT_UPDATE_AUTH,
  configAccount,
  rewardMint,
  PDA_TICK_ARRAY_SEED,
} from '@src/constants/other';
import { errorToast, infoToast } from '@src/Notification';

const programID = new PublicKey(idl.metadata.address);

export default function CreateLiquidityPoolPage() {
  const tokenPair = useSelector((state: RootState) => state.tokenPair);

  const navigate = useNavigate();

  const [type, setType] = useState(CREATE_POOL_TYPE.AUTOMATIC);
  const [freeTierType, setFreeTierType] = useState('0.3');
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
    const program = new Program(idl as Idl, programID, provider);

    let mintA, mintB;
    [mintA, mintB] = PoolUtil.orderMints(
      new PublicKey(tokenPair.tokenA.address),
      new PublicKey(tokenPair.tokenB.address)
    );

    let tokenMintAKey = AddressUtil.toPubKey(mintA);
    let tokenMintBKey = AddressUtil.toPubKey(mintB);

    console.log(tokenMintAKey.toString(), tokenMintBKey.toString());
    const price = MathUtil.toX64(new Decimal(5));
    const yevepoolPda = PublicKey.findProgramAddressSync(
      [
        Buffer.from(PDA_YEVEPOOL_SEED),
        configAccount.toBuffer(),
        tokenMintAKey.toBuffer(),
        tokenMintBKey.toBuffer(),
        new BN(TickSpacing.Stable).toArrayLike(Buffer, 'le', 2),
      ],
      programID
    );

    const feeTierPda = PublicKey.findProgramAddressSync(
      [
        Buffer.from(PDA_FEE_TIER_SEED),
        configAccount.toBuffer(),
        new BN(TickSpacing.Stable).toArrayLike(Buffer, 'le', 2),
      ],
      programID
    );

    const yevepoolBump = {
      yevepoolBump: yevepoolPda[1],
    };

    const tokenVaultAKeypair = Keypair.generate();
    const tokenVaultBKeypair = Keypair.generate();

    const transaction = new Transaction();

    const init_pool_tx = await program.methods
      .initializePool(yevepoolBump, TickSpacing.Stable, price)
      .accounts({
        yevepoolsConfig: configAccount,
        tokenMintA: tokenMintAKey,
        tokenMintB: tokenMintBKey,
        funder: publicKey,
        yevepool: yevepoolPda[0],
        tokenVaultA: tokenVaultAKeypair.publicKey,
        tokenVaultB: tokenVaultBKeypair.publicKey,
        feeTier: feeTierPda[0],
        tokenProgram: TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
        rent: SYSVAR_RENT_PUBKEY,
      })
      .transaction();

    transaction.add(init_pool_tx);

    const tickSpacing = TickSpacing.Standard;
    const startTick = TICK_ARRAY_SIZE * tickSpacing * 2;

    const tickArrayPda = PublicKey.findProgramAddressSync(
      [
        Buffer.from(PDA_TICK_ARRAY_SEED),
        yevepoolPda[0].toBuffer(),
        Buffer.from(startTick.toString()),
      ],
      programID
    );

    const init_tick_array_tx = await program.methods
      .initializeTickArray(startTick)
      .accounts({
        yevepool: yevepoolPda[0],
        tickArray: tickArrayPda[0],
        funder: publicKey,
        systemProgram: SystemProgram.programId,
      })
      .transaction();

    transaction.add(init_tick_array_tx);

    // const rewardVaultKeypair = Keypair.generate();

    // let initializerAssiciatedToken = await getAssociatedTokenAddress(
    //   rewardMint,
    //   publicKey,
    //   false,
    //   TOKEN_PROGRAM_ID,
    //   ASSOCIATED_TOKEN_PROGRAM_ID
    // );

    // let rewardVaultAssiciatedToken = await getAssociatedTokenAddress(
    //   rewardMint,
    //   rewardVaultKeypair.publicKey,
    //   false,
    //   TOKEN_PROGRAM_ID,
    //   ASSOCIATED_TOKEN_PROGRAM_ID
    // );

    // let account;
    // try {
    //   account = await getAccountInfo(
    //     connection,
    //     rewardVaultAssiciatedToken,
    //     undefined,
    //     TOKEN_PROGRAM_ID
    //   );
    // } catch (error: any) {
    //   if (
    //     error.message === 'TokenAccountNotFoundError' ||
    //     error.message === 'TokenInvalidAccountOwnerError'
    //   ) {
    //     transaction.add(
    //       createAssociatedTokenAccountInstruction(
    //         publicKey,
    //         rewardVaultAssiciatedToken,
    //         rewardVaultKeypair.publicKey,
    //         rewardMint,
    //         TOKEN_PROGRAM_ID,
    //         ASSOCIATED_TOKEN_PROGRAM_ID
    //       )
    //     );
    //   }
    // }

    // transaction.add(
    //   createTransferCheckedInstruction(
    //     initializerAssiciatedToken, // from
    //     rewardMint, // mint
    //     rewardVaultKeypair.publicKey, // to
    //     publicKey, // from's owner
    //     100 * 1e9, // amount
    //     9 // decimals
    //   )
    // );

    // const tx = await program.methods
    //   .initializeReward(0)
    //   .accounts({
    //     rewardAuthority: publicKey,
    //     yevepool: yevepoolPda[0],
    //     funder: publicKey,
    //     rewardMint,
    //     rewardVault: rewardVaultKeypair.publicKey,
    //     tokenProgram: TOKEN_PROGRAM_ID,
    //     systemProgram: SystemProgram.programId,
    //     rent: SYSVAR_RENT_PUBKEY,
    //   })
    //   .transaction();

    // transaction.add(tx);

    const tickLowerIndex = 0;
    const tickUpperIndex = 128;

    const positionMintKeypair = Keypair.generate();
    const positionPda = PublicKey.findProgramAddressSync(
      [
        Buffer.from(PDA_POSITION_SEED),
        positionMintKeypair.publicKey.toBuffer(),
      ],
      programID
    );

    const metadataPda = PublicKey.findProgramAddressSync(
      [
        Buffer.from(PDA_METADATA_SEED),
        METADATA_PROGRAM_ADDRESS.toBuffer(),
        positionMintKeypair.publicKey.toBuffer(),
      ],
      METADATA_PROGRAM_ADDRESS
    );

    const [positionTokenAccountAddress] = PublicKey.findProgramAddressSync(
      [
        publicKey.toBuffer(),
        TOKEN_PROGRAM_ID.toBuffer(),
        positionMintKeypair.publicKey.toBuffer(),
      ],
      ASSOCIATED_TOKEN_PROGRAM_ID
    );

    const bumps = {
      positionBump: positionPda[1],
      // metadataBump: metadataPda[1],
    };

    transaction.add(
      await program.methods
        .openPosition(bumps, tickLowerIndex, tickUpperIndex)
        .accounts({
          funder: publicKey,
          owner: publicKey,
          position: positionPda[0],
          positionMint: positionMintKeypair.publicKey,
          positionTokenAccount: positionTokenAccountAddress,
          yevepool: yevepoolPda[0],
          // positionMetadataAccount: metadataPda[0], // open position with metadata
          // metadataProgram: METADATA_PROGRAM_ADDRESS, // open position with metadata
          // metadataUpdateAuth: WHIRLPOOL_NFT_UPDATE_AUTH, // open position with metadata
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
          rent: SYSVAR_RENT_PUBKEY,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        })
        .transaction()
    );

    const currTick = 0;

    transaction.feePayer = provider.wallet.publicKey;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    transaction.partialSign(tokenVaultAKeypair);
    transaction.partialSign(tokenVaultBKeypair);
    transaction.partialSign(positionMintKeypair);
    // transaction.partialSign(rewardVaultKeypair);
    const signedTx = await provider.wallet.signTransaction(transaction);
    const txId = await connection.sendRawTransaction(signedTx.serialize());
    await connection.confirmTransaction(txId, 'confirmed');
    console.log(txId);
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
                  className={`${freeTierType === item.apr ? 'active' : ''}`}
                  onClick={() => setFreeTierType(item.apr)}
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
