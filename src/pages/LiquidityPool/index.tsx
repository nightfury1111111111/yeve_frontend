import { LIQUIDITY_TABS } from '@src/constants/table-tabs';
import { PageContainer } from './LiquidityPool.styled';
import {
  TableContainer,
  TableController,
  TableTitle,
  Table,
} from '@src/components/common/Table';
import TableControlSelect from '@src/components/common/Table/Controller/Select';
import { LIQUIDITY_TYPES, POOL_VERSIONS } from '@src/constants/select-options';
import { useState } from 'react';
import { LIQUIDITY_POOL_COLUMN_NAMES } from '@src/constants/table';
import { LIQUIDITY_POOLS_DATA } from '@src/example-data/pools';
import {
  AvgApr,
  Info,
  PairElement,
  PairImageContainer,
  PairInfo,
} from '@src/components/common/Table/Table/Table.styled';
import InfoIcon from '@src/assets/images/svg/info-icon';
import { convertToInternationalCurrencySystem } from '@src/utils/convert';

export default function LiquidityPoolPage() {
  const [search, setSearch] = useState('');

  const handleControlPool = () => {
    console.log('add/remove pools');
  };

  return (
    <PageContainer>
      <TableContainer>
        <TableTitle
          title="Liquidity Pools"
          info={{ time: '00h 47m', label: 'Since last oYEVE distribution' }}
        />
        <TableController
          tabs={LIQUIDITY_TABS}
          search={{
            value: search,
            handle: (e: any) => setSearch(e.target.value),
          }}
          button={{
            text: 'Add/Remove Pool',
            handle: handleControlPool,
          }}
        >
          <TableControlSelect options={POOL_VERSIONS} />
          <TableControlSelect options={LIQUIDITY_TYPES} />
        </TableController>
        <Table columnNames={LIQUIDITY_POOL_COLUMN_NAMES}>
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
                  <span>{item.avgApr}%</span>
                  <InfoIcon />
                </AvgApr>
              </td>
              <td>
                <Info>
                  <h4>
                    ~ ${convertToInternationalCurrencySystem(item.tvl.usd)}
                  </h4>
                  {item.tvl.tokens.map((token, i) => (
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
                    ~ $
                    {convertToInternationalCurrencySystem(item.volume24h.usd)}
                  </h4>
                  {item.volume24h.tokens.map((token, i) => (
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
                    ~ ${convertToInternationalCurrencySystem(item.fees24h.usd)}
                  </h4>
                  {item.fees24h.tokens.map((token, i) => (
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
                  <button>Deposit</button>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </TableContainer>
    </PageContainer>
  );
}
