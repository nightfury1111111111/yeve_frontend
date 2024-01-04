import { Link, useLocation } from 'react-router-dom';
import {
  ButtonController,
  Controller,
  SearchContainer,
  SearchInputContainer,
  TabContainer,
} from './Controller.styled';
import { PropsWithChildren } from 'react';
import FindIcon from '@src/assets/images/svg/find-icon';

type Search = {
  value: string;
  handle: Function;
};

type Button = {
  text: string;
  handle: Function;
};

type TableControllerProps = {
  tabs: Record<string, any>[];
  search: Search;
  button?: Button;
};

export function TableController({
  tabs,
  search,
  children,
  button,
}: PropsWithChildren<TableControllerProps>) {
  const { pathname } = useLocation();

  return (
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
      {children}
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
            {button.text}
          </ButtonController>
        )}
      </SearchContainer>
    </Controller>
  );
}
