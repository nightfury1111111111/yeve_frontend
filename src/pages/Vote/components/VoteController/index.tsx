import FindIcon from '@src/assets/images/svg/find-icon';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ButtonController,
  Controller,
  MobileTabContainer,
  Reward,
  SearchContainer,
  SearchInputContainer,
  Status,
  StatusInfo,
  TabContainer,
} from './Controller.styled';

type Search = {
  value: string;
  handle: (e: any) => void;
};

type Button = {
  text: string;
  handle: () => void;
};

type TableControllerProps = {
  tabs: Record<string, any>[];
  search: Search;
  button?: Button;
  lock?: string | number;
};

export function VoteController({
  tabs,
  search,
  button,
  lock,
}: PropsWithChildren<TableControllerProps>) {
  const { pathname } = useLocation();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <>
      <MobileTabContainer>
        <TabContainer className="mobile">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.route}
              className={pathname === tab.route ? 'active' : ''}
            >
              {tab.name}
            </Link>
          ))}
        </TabContainer>
        <div>Lock ID {lock}</div>
      </MobileTabContainer>
      <Status>
        <StatusInfo>
          <div>
            <div>Your veYEVE</div>
            <div>123.92</div>
          </div>
          <div>
            <div>Emission/% of Vote</div>
            <div>$0.082</div>
          </div>
          <div>
            <div>AVG Voting APR</div>
            <div>777.47%</div>
          </div>
          <div>
            <div>Epoch 8 ends in</div>
            <div>0d 23h 40m</div>
          </div>
          <div>
            <div>Total Bribes</div>
            <div>$20,437</div>
          </div>
          <div>
            <div>Total Fees</div>
            <div>$15,748</div>
          </div>
        </StatusInfo>
        <Reward>
          <div>Total Rewards</div>
          <div>$ 44,123</div>
        </Reward>
      </Status>
      <Controller>
        <TabContainer>
          {tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.route}
              className={pathname === tab.route ? 'active' : ''}
            >
              {tab.name}
            </Link>
          ))}
        </TabContainer>
        <SearchContainer>
          <SearchInputContainer>
            <FindIcon />
            <input
              placeholder="Search"
              onChange={(e) => search.handle(e)}
              value={search.value}
            />
          </SearchInputContainer>
          {button && (
            <ButtonController onClick={() => button.handle()}>
              {screenWidth <= 891
                ? 'Voting Tool'
                : 'Generate Voting Tool'}
            </ButtonController>
          )}
        </SearchContainer>
      </Controller>
    </>
  );
}
