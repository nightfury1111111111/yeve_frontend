import { Link, useLocation } from 'react-router-dom';
import {
  ButtonController,
  Controller,
  FilterButton,
  SearchContainer,
  SearchInputContainer,
  TabContainer,
} from './Controller.styled';
import { PropsWithChildren, useState } from 'react';
import FindIcon from '@src/assets/images/svg/find-icon';
import FilterIcon from '@src/assets/images/svg/filter-icon';
import ControllerModal from './ControllerModal';

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

  const [isShowControllerModal, setIsShowControllerModal] = useState(false);

  return (
    <Controller>
      {isShowControllerModal && (
        <ControllerModal onClose={() => setIsShowControllerModal(false)}>
          {children}
        </ControllerModal>
      )}

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
      <FilterButton onClick={() => setIsShowControllerModal(true)}>
        <FilterIcon />
      </FilterButton>
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
