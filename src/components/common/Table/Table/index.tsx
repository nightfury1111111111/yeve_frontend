import SortIcon from '@src/assets/images/svg/sort-icon';
import { TableContainer } from './Table.styled';

type Column = {
  value: string;
  sort: boolean;
};

type TableHeadingProps = {
  columnNames: Column[];
  data: Record<string, any>[];
};

export function Table({ columnNames }: TableHeadingProps) {
  return (
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
    </TableContainer>
  );
}
