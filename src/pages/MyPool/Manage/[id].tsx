import ArrowLeftIcon from '@src/assets/images/svg/arrow-left';
import ArrowUpRightIcon from '@src/assets/images/svg/pools/arrow-up-right-icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AddLiquidityButton,
  Heading,
  Info,
  PageContainer,
  PoolValue,
  PoolValueLeft,
  PoolValueRight,
  PositionLabel,
  RangePercent,
  Section,
  SectionItem,
  SectionLabel,
  SwitchType,
  TokenRange,
  TokenRangeInfo,
  Summary,
} from './ManageMyPool.styled';
import token1Image from '@src/assets/images/png/token-1.png';
import token2Image from '@src/assets/images/png/token-2.png';
import DepositAmountsComponent from './DepositAmounts';
import Slider from 'rc-slider';

export default function ManageMyPoolPage() {
  const navigate = useNavigate();

  const [modeManagement, setModeManagement] = useState('ADD');
  const [tokenRangeType, setTokenRangeType] = useState('USDT/YEVE');
  const [rangePercent, setRangePercent] = useState<any>(25);

  return (
    <PageContainer>
      <Section>
        <Heading>
          <span>Manage Position</span>
          <button onClick={() => navigate('/my-pool')}>
            <ArrowLeftIcon />
            <span>Back to All Pools</span>
          </button>
        </Heading>
        <PositionLabel>
          <span>V3 NFT ID: 13353</span>
          <ArrowUpRightIcon />
        </PositionLabel>
        <Info>
          <div>
            <label>
              <img src={token1Image} />
              <img src={token2Image} />
            </label>
            <span>YEVE/USDT</span>
          </div>
          <div>
            <div>Manual</div>
            <div>0.3%</div>
            <div className="status">In Range</div>
          </div>
        </Info>
        <TokenRange>
          <SwitchType>
            <button
              onClick={() => setTokenRangeType('USDT/YEVE')}
              className={`${tokenRangeType === 'USDT/YEVE' ? 'active' : ''}`}
            >
              USDT per YEVE
            </button>
            <button
              onClick={() => setTokenRangeType('YEVE/USDT')}
              className={`${tokenRangeType === 'YEVE/USDT' ? 'active' : ''}`}
            >
              YEVE per USDT
            </button>
          </SwitchType>
          <TokenRangeInfo>
            <div>
              <span>Min Price</span>
              <div>1807.04</div>
              <span>100% ETH</span>
            </div>
            <span>
              <ArrowLeftIcon />
            </span>
            <div>
              <span>Current Price</span>
              <div>1934.05</div>
              <span>48% ETH - 52% USDT</span>
            </div>
            <span className="rotate-180">
              <ArrowLeftIcon />
            </span>
            <div>
              <span>Max Price</span>
              <div>2087.34</div>
              <span>100% USDT</span>
            </div>
          </TokenRangeInfo>
          <input type="range" min="0" max="100" defaultValue={48} />
        </TokenRange>
        <PoolValue>
          <PoolValueLeft>
            <span>Position amount</span>
            <div>$ 9840.44</div>
          </PoolValueLeft>
          <PoolValueRight>
            <div>
              <span>Pooled USDT:</span>
              <div>
                <span>3840</span>
                <div>52%</div>
              </div>
            </div>
            <div>
              <span>Pooled YEVE:</span>
              <div>
                <span>2</span>
                <div>48%</div>
              </div>
            </div>
          </PoolValueRight>
        </PoolValue>
        <PoolValue>
          <PoolValueLeft>
            <span>Earned fees total</span>
            <div>$ 420.44</div>
          </PoolValueLeft>
          <PoolValueRight>
            <div>
              <span>USDT Fees Earned:</span>
              <div>
                <span>3840</span>
              </div>
            </div>
            <div>
              <span>YEVE Fees Earned:</span>
              <div>
                <span>2</span>
              </div>
            </div>
          </PoolValueRight>
        </PoolValue>
      </Section>
      <Section>
        <SwitchType>
          <button
            onClick={() => setModeManagement('ADD')}
            className={`${modeManagement === 'ADD' ? 'active' : ''}`}
          >
            Add
          </button>
          <button
            onClick={() => setModeManagement('REMOVE')}
            className={`${modeManagement === 'REMOVE' ? 'active' : ''}`}
          >
            Remove
          </button>
        </SwitchType>
        {modeManagement === 'ADD' ? (
          <>
            <SectionItem>
              <SectionLabel>
                <span>Add Liquidity</span>
              </SectionLabel>
              <DepositAmountsComponent />
            </SectionItem>
            <AddLiquidityButton>Add Liquidity</AddLiquidityButton>
          </>
        ) : (
          <>
            <SectionItem>
              <SectionLabel>
                <span>Remove Liquidity</span>
              </SectionLabel>
              <RangePercent>
                <div>
                  <span>{rangePercent}%</span>
                  <div>
                    <div
                      onClick={() => setRangePercent('25')}
                      className={`${rangePercent === '25' ? 'active' : ''}`}
                    >
                      25%
                    </div>
                    <div
                      onClick={() => setRangePercent('50')}
                      className={`${rangePercent === '50' ? 'active' : ''}`}
                    >
                      50%
                    </div>
                    <div
                      onClick={() => setRangePercent('75')}
                      className={`${rangePercent === '75' ? 'active' : ''}`}
                    >
                      75%
                    </div>
                    <div
                      onClick={() => setRangePercent('100')}
                      className={`${rangePercent === '100' ? 'active' : ''}`}
                    >
                      MAX
                    </div>
                  </div>
                </div>
                {/* <input
                  type="range"
                  min="0"
                  max="100"
                  value={rangePercent}
                  onChange={(e) => setRangePercent(e.target.value)}
                /> */}
                <Slider
                  min={0}
                  max={100}
                  included={false}
                  value={Number(rangePercent)}
                  onChange={(value) => setRangePercent(value)}
                  className="lockSlider"
                />
              </RangePercent>
            </SectionItem>
            <SectionItem>
              <Summary>
                <div>
                  <span>USDT Recieve:</span>
                  <div>840</div>
                </div>
                <div>
                  <span>ETH Recieve:</span>
                  <div>0.4684</div>
                </div>
              </Summary>
            </SectionItem>
            <AddLiquidityButton>Remove Liquidity</AddLiquidityButton>
          </>
        )}
      </Section>
    </PageContainer>
  );
}
