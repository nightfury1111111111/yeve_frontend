import InfoIcon from '@src/assets/images/svg/info-icon';
import { Table, TableContainer } from '@src/components/common/Table';
import TableControlSelect from '@src/components/common/Table/Controller/Select';
import {
  AvgApr,
  Info,
  PairElement,
  PairImageContainer,
  PairInfo,
} from '@src/components/common/Table/Table/Table.styled';
import { LIQUIDITY_TYPES, POOL_VERSIONS } from '@src/constants/select-options';
import { VOTE_COLUMN_NAMES } from '@src/constants/table';
import { VOTE_TABS } from '@src/constants/table-tabs';
import { LIQUIDITY_POOLS_DATA } from '@src/example-data/pools';
import { useState } from 'react';
import {
  EnterVote,
  EnterVoteWrap,
  NormalText,
  PageContainer,
  SmallText,
  VotingInfo,
  DefaultButton,
  VotingPower,
  Status,
} from './Vote.styled';
import { VoteController } from './components/VoteController';
import { VoteTableTitle } from './components/VoteTableTitle';
import { SwapButton } from '../SwapPage/Swap/Swap.styled';

export default function VotePage() {
  const [search, setSearch] = useState('');

  const handleControlPool = () => {
    console.log('add/remove pools');
  };

  return (
    <PageContainer>
      <VotingInfo>
        <div>
          <span>Voting Power:</span>
          <VotingPower>100%</VotingPower>
        </div>
        <div>
          <span>Voting Power Used:</span>
          <Status>No</Status>
        </div>
        <div>
          <DefaultButton w="100px">Reset</DefaultButton>
          <SwapButton>Cast vote</SwapButton>
        </div>
      </VotingInfo>
      <TableContainer>
        <VoteTableTitle
          title="Vote"
          info={{ time: '00h 47m', label: 'Since last oYEVE distribution' }}
        />
        <VoteController
          tabs={VOTE_TABS}
          search={{
            value: search,
            handle: (e: any) => setSearch(e.target.value),
          }}
          button={{
            text: 'Add/Remove Pool',
            handle: handleControlPool,
          }}
          lock={112843}
        >
          <TableControlSelect options={POOL_VERSIONS} />
          <TableControlSelect options={LIQUIDITY_TYPES} />
        </VoteController>
        <Table columnNames={VOTE_COLUMN_NAMES}>
          {[
            ...LIQUIDITY_POOLS_DATA,
            ...LIQUIDITY_POOLS_DATA,
            ...LIQUIDITY_POOLS_DATA,
            ...LIQUIDITY_POOLS_DATA,
            ...LIQUIDITY_POOLS_DATA,
            ...LIQUIDITY_POOLS_DATA,
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
                <AvgApr>
                  <div>
                    <span>{item.avgApr}%</span>
                    <InfoIcon />
                  </div>
                </AvgApr>
              </td>
              <td>
                <Info>
                  <div>
                    <NormalText>846,32</NormalText>
                  </div>
                  <div>
                    <SmallText>20,38 %</SmallText>
                  </div>
                </Info>
              </td>
              <td>
                <Info>
                  {' '}
                  <NormalText>$4693.32</NormalText>
                </Info>
              </td>
              <td>
                <Info>
                  <NormalText>$4693.32</NormalText>
                  <SmallText>per 1000 votes</SmallText>
                </Info>
              </td>

              <td>
                <Info>
                  <NormalText>$25.00</NormalText>
                  <SmallText>0.7%</SmallText>
                </Info>
              </td>

              <td>
                <EnterVoteWrap>
                  <EnterVote>
                    <input placeholder="0" />{' '}
                    <div>
                      % <button>MAX</button>
                    </div>
                  </EnterVote>
                </EnterVoteWrap>
              </td>
            </tr>
          ))}
        </Table>
      </TableContainer>
    </PageContainer>
  );
}
