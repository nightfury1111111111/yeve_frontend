import { LIQUIDITY_TABS } from '@src/constants/table-tabs';
import { PageContainer } from './MyPool.styled';
import {
  TableContainer,
  TableController,
  TableTitle,
} from '@src/components/common/Table';
import TableControlSelect from '@src/components/common/Table/Controller/Select';
import { LIQUIDITY_TYPES, POOL_VERSIONS } from '@src/constants/select-options';
import { useState } from 'react';

export default function MyPoolPage() {
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
      </TableContainer>
    </PageContainer>
  );
}
