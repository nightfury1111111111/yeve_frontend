import InfoIcon from '@src/assets/images/svg/info-icon';
import {
  Table,
  TableContainer,
  TableController,
  TableTitle,
} from '@src/components/common/Table';
import {
  Info,
  PairElement,
  PairImageContainer,
  PairInfo,
  Type
} from '@src/components/common/Table/Table/Table.styled';
import {
  REWARDS_COLUMN_NAMES
} from '@src/constants/table';
import { REWARD_TABS } from '@src/constants/table-tabs';
import { REWARDS_DATA } from '@src/example-data/pools';
import { convertToInternationalCurrencySystem } from '@src/utils/convert';
import { useState } from 'react';
import { PageContainer } from './Rewards.styled';

export default function RewardsPage() {
  const [search, setSearch] = useState('');

  const handleClaimRewards = () => {
    console.log('add/remove pools');
  };

  return (
    <PageContainer>
      <TableContainer>
        <TableTitle
          title="Rewards"
          info={{
            time: 'Total Claimable Rewards',
            label: '$329.29 (4.530 oYEVE)',
          }}
          isRewardPage={true}
        />
        <TableController
          tabs={REWARD_TABS}
          search={{
            value: search,
            handle: (e: any) => setSearch(e.target.value),
          }}
          button={{
            text: 'Claim All Liquidity Rewards',
            handle: handleClaimRewards,
          }}
        ></TableController>
        <Table columnNames={REWARDS_COLUMN_NAMES}>
          {[
            ...REWARDS_DATA,
            ...REWARDS_DATA,
            ...REWARDS_DATA,
            ...REWARDS_DATA,
            ...REWARDS_DATA,
          ].map((item, index) => (
            <tr key={index}>
              <td>
                <PairElement>
                  <PairImageContainer>
                    {item.pair.tokens.map((token, i) => (
                      <img key={i} src={token.image} />
                    ))}
                  </PairImageContainer>
                  <PairInfo>
                    <div>{item.pair.name}</div>
                    <span>
                      {item.pair.type} {item.pair.value}%
                    </span>
                  </PairInfo>
                </PairElement>
              </td>
              <td>
                <Type>
                  <div>
                    <span>{item.manage}</span>
                    <InfoIcon />
                  </div>
                </Type>
              </td>
              {/* <td>
                <Info>
                  <h4>
                    ~ ${convertToInternationalCurrencySystem(item.rewards.usd)}
                  </h4>
                  {item.rewards.tokens.map((token, i) => (
                    <div key={i}>
                      <span>
                        {convertToInternationalCurrencySystem(token.value)}
                      </span>
                      <label>{token.name}</label>
                    </div>
                  ))}
                </Info>
              </td>
              <td>
                <Type>
                  <div>
                    <span>{item.emissionAPR}</span>
                    <InfoIcon />
                  </div>
                </Type>
              </td> */}
              <td>
                <div className="btn-wrap">
                  <button className="disable">Claim Fees</button>
                  <button>Manage</button>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </TableContainer>
    </PageContainer>
  );
}
