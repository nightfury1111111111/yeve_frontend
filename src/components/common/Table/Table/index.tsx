import SortIcon from '@src/assets/images/svg/sort-icon';
import { TableContainer, TableWrapper } from './Table.styled';
import { PropsWithChildren } from 'react';

type Column = {
  value: string;
  sort: boolean;
};

type TableHeadingProps = {
  columnNames: Column[];
};

export function Table({
  columnNames,
  children,
}: PropsWithChildren<TableHeadingProps>) {
  return (
    <TableWrapper>
      <TableContainer>
        <thead>
          <tr>
            {columnNames.map((column, index) => (
              <th key={index}>
                <div>
                  {column.value}
                  {column.sort && <SortIcon />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </TableContainer>
    </TableWrapper>
  );
}
