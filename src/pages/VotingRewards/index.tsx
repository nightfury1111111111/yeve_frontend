import {
  Table,
  TableContainer,
  TableController,
  TableTitle,
} from '@src/components/common/Table';
import TableControlSelect from '@src/components/common/Table/Controller/Select';
import {
  Info,
  PairElement,
  PairImageContainer,
  PairInfo
} from '@src/components/common/Table/Table/Table.styled';
import { VOTING_REWARDS_LOCK_IDS } from '@src/constants/select-options';
import { VOTING_REWARDS_COLUMN_NAMES } from '@src/constants/table';
import { REWARD_TABS } from '@src/constants/table-tabs';
import { VOTING_REWARDS_DATA } from '@src/example-data/pools';
import { convertToInternationalCurrencySystem } from '@src/utils/convert';
import { useState } from 'react';
import {
  PageContainer,
  SectionHighlight,
  SectionTitle,
  TableHeadingSection,
} from './Rewards.styled';

export default function VotingRewardsPage() {
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
            text: 'Claim All Voting Rewards',
            handle: handleClaimRewards,
          }}
        ></TableController>
        <TableHeadingSection>
          <SectionTitle>
            <span>Current Epoch</span>
            <SectionHighlight>My avg APR: 128.36%</SectionHighlight>
          </SectionTitle>
          <TableControlSelect options={VOTING_REWARDS_LOCK_IDS} />
        </TableHeadingSection>
        <Table columnNames={VOTING_REWARDS_COLUMN_NAMES}>
          {[...VOTING_REWARDS_DATA, ...VOTING_REWARDS_DATA].map(
            (item, index) => (
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
                  <Info>
                    <h4>
                      ${convertToInternationalCurrencySystem(item.bribes.usd)}
                    </h4>
                    {item.bribes.tokens.map((token, i) => (
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
                  <Info>
                    <h4>
                      ${convertToInternationalCurrencySystem(item.fees.usd)}
                    </h4>
                    {item.fees.tokens.map((token, i) => (
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
                  <Info>
                    <h4>
                      $
                      {convertToInternationalCurrencySystem(
                        item.totalRewards.usd
                      )}
                    </h4>
                    {item.totalRewards.tokens.map((token, i) => (
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
                  <div className="btn-wrap">
                    <button>Claim</button>
                  </div>
                </td>
              </tr>
            )
          )}
        </Table>
        <TableHeadingSection>
          <SectionTitle>
            <span>Next Epoch</span>
            <SectionHighlight>My avg APR: 128.36%</SectionHighlight>
          </SectionTitle>
        </TableHeadingSection>
        <Table columnNames={VOTING_REWARDS_COLUMN_NAMES}>
          {[...VOTING_REWARDS_DATA].map((item, index) => (
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
                <Info>
                  <h4>
                    ${convertToInternationalCurrencySystem(item.bribes.usd)}
                  </h4>
                  {item.bribes.tokens.map((token, i) => (
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
                <Info>
                  <h4>
                    ${convertToInternationalCurrencySystem(item.fees.usd)}
                  </h4>
                  {item.fees.tokens.map((token, i) => (
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
                <Info>
                  <h4>
                    $
                    {convertToInternationalCurrencySystem(
                      item.totalRewards.usd
                    )}
                  </h4>
                  {item.totalRewards.tokens.map((token, i) => (
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
                <div className="btn-wrap">
                  <button>Claim</button>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </TableContainer>
    </PageContainer>
  );
}
