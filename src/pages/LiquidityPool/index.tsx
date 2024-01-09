import InfoIcon from '@src/assets/images/svg/info-icon';
import {
  Table,
  TableContainer,
  TableController,
  TableTitle,
} from '@src/components/common/Table';
import TableControlSelect from '@src/components/common/Table/Controller/Select';
import {
  AvgApr,
  Info,
  PairElement,
  PairImageContainer,
  PairInfo,
  PairInfoLabel,
} from '@src/components/common/Table/Table/Table.styled';
import { LIQUIDITY_TYPES, POOL_VERSIONS } from '@src/constants/select-options';
import { LIQUIDITY_POOL_COLUMN_NAMES } from '@src/constants/table';
import { LIQUIDITY_TABS } from '@src/constants/table-tabs';
import { LIQUIDITY_POOLS_DATA } from '@src/example-data/pools';
import { convertToInternationalCurrencySystem } from '@src/utils/convert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from './LiquidityPool.styled';

export default function LiquidityPoolPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleControlPool = () => {
    navigate('/liquidity-pool/create');
  };

  return (
    <PageContainer>
      <TableContainer>
        <TableTitle
          title="Liquidity Pools"
          info={{ time: '00h 47m', label: 'Since last oYEVE distribution' }}
          controlButton={{
            text: 'Add/Remove Pool',
            handle: handleControlPool,
          }}
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
                  <PairInfoLabel>Info</PairInfoLabel>
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
