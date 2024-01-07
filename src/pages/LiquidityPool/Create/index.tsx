import ArrowLeftIcon from '@src/assets/images/svg/arrow-left';
import SettingIcon from '@src/assets/images/svg/swap/SettingIcon';
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
import { useState } from 'react';
import ALMProviderComponent from './ALMProvider';
import DepositAmountsComponent from './DepositAmounts';
import {
  CREATE_POOL_FREE_TIER_LIST,
  CREATE_POOL_PRICE_RANGE,
} from '@src/example-data/pools';
import CheckIcon from '@src/assets/images/svg/pools/check-icon';
import SubtractIcon from '@src/assets/images/svg/pools/subtract-icon';
import PlusIcon from '@src/assets/images/svg/pools/plus-icon';

export default function CreateLiquidityPoolPage() {
  const navigate = useNavigate();

  const [type, setType] = useState(CREATE_POOL_TYPE.AUTOMATIC);
  const [freeTierType, setFreeTierType] = useState('0.3');
  const [priceRange, setPriceRange] = useState('Full Range');

  return (
    <PageContainer>
      <Section>
        <Heading>
          <span>New Pools</span>
          <button onClick={() => navigate('/liquidity-pool')}>
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
            <CreatePositionButton>Create Position</CreatePositionButton>
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
          <CreatePositionButton>Create Position</CreatePositionButton>
        </Section>
      )}
    </PageContainer>
  );
}
