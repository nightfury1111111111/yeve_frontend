import {
  Table,
  TableContainer,
  TableTitle,
} from '@src/components/common/Table';
import { PageContainer } from './LockPool.styled';

import InfoIcon from '@src/assets/images/svg/info-icon';
import {
  AvgApr,
  Info,
  PairElement,
  PairImageContainer,
  PairInfo,
  PairInfoLabel,
  Status,
  StatusError,
} from '@src/components/common/Table/Table/Table.styled';
import { LOCKS_COLUMNS_NAME } from '@src/constants/table';
import { LOCKS_DATA } from '@src/example-data/pools';
import { convertToInternationalCurrencySystem } from '@src/utils/convert';
import { useNavigate } from 'react-router-dom';

export default function LocksPage() {
  const navigate = useNavigate();
  const handleClickCreateLock = () => {
    navigate('/create-lock');
  };

  return (
    <PageContainer>
      <TableContainer>
        <TableTitle
          title="Locks"
          info={{ time: '00h 47m', label: 'Since last oYEVE distribution' }}
          button={{
            text: 'Create Lock',
            handle: handleClickCreateLock,
          }}
          hideClock
        />
        <Table columnNames={LOCKS_COLUMNS_NAME}>
          {[...LOCKS_DATA, ...LOCKS_DATA, ...LOCKS_DATA].map((item, index) => (
            <tr key={index}>
              <td>
                <PairElement>
                  <PairImageContainer>
                    <img src={item.pair.token.image} />
                  </PairImageContainer>
                  <PairInfo>
                    <div>{item.pair.name}</div>
                    <PairInfoLabel mt="5px">{item.pair.type}</PairInfoLabel>
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
                {item.voteUsed ? (
                  <Status>
                    <div>
                      <span>Yes</span>
                    </div>
                  </Status>
                ) : (
                  <StatusError>
                    <div>
                      <span>No</span>
                    </div>
                  </StatusError>
                )}
              </td>
              <td>
                <div className="btn-wrap">
                  <button>Vote</button>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </TableContainer>
    </PageContainer>
  );
}
