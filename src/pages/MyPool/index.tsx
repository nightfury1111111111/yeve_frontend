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
  PairInfo,
  Status,
  Type,
} from '@src/components/common/Table/Table/Table.styled';
import { LIQUIDITY_TYPES, POOL_VERSIONS } from '@src/constants/select-options';
import { MY_POOL_COLUMN_NAMES } from '@src/constants/table';
import { LIQUIDITY_TABS } from '@src/constants/table-tabs';
import { MY_POOLS_DATA } from '@src/example-data/pools';
import { convertToInternationalCurrencySystem } from '@src/utils/convert';
import { useState } from 'react';
import { PageContainer } from './MyPool.styled';
import InfoIcon from '@src/assets/images/svg/info-icon';
import PolygonIcon from '@src/assets/images/svg/polygon-icon';

export default function MyPoolPage() {
  const [search, setSearch] = useState('');

  const handleControlPool = () => {
    console.log('add/remove pools');
  };

  return (
    <PageContainer>
      <TableContainer>
        <TableTitle
          title="My Pools"
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
        <Table columnNames={MY_POOL_COLUMN_NAMES}>
          {[
            ...MY_POOLS_DATA,
            ...MY_POOLS_DATA,
            ...MY_POOLS_DATA,
            ...MY_POOLS_DATA,
            ...MY_POOLS_DATA,
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
                    <span>{item.type}</span>
                    <InfoIcon />
                  </div>
                </Type>
              </td>
              <td>
                <Status>
                  <div>
                    <span>{item.range}</span>
                  </div>
                </Status>
              </td>
              <td>
                <Info>
                  <h4>
                    ~ ${convertToInternationalCurrencySystem(item.poolSize.usd)}
                  </h4>
                  {item.poolSize.tokens.map((token, i) => (
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
                <Status>
                  <div>
                    <span>{item.status}</span>
                  </div>
                </Status>
              </td>
              <td>
                <div className="btn-wrap">
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
