import { useRef, useState } from 'react';
import DownIcon from '@src/assets/images/svg/menu/DownIcon';
import { ListOptions, SelectContainer, SelectedOption } from './Select.styled';
import { useOnClickOutside } from 'usehooks-ts';

type Option = {
  key: string;
  value: string;
};

type TableControlSelectProps = {
  options: Option[];
};

export default function TableControlSelect({
  options,
}: TableControlSelectProps) {
  const ref = useRef(null);

  const [openOptions, setOpenOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const handleSetSelectOption = (option: Option) => {
    setSelectedOption(option);
    setOpenOptions(false);
  };

  useOnClickOutside(ref, () => {
    setOpenOptions(false);
  });

  return (
    <SelectContainer ref={ref}>
      <SelectedOption onClick={() => setOpenOptions(!openOptions)}>
        <span>{selectedOption.value}</span>
        <DownIcon />
      </SelectedOption>
      {openOptions && (
        <ListOptions>
          {options.map((option) => (
            <span
              key={option.key}
              onClick={() => handleSetSelectOption(option)}
              className={selectedOption.key === option.key ? 'active' : ''}
            >
              {option.value}
            </span>
          ))}
        </ListOptions>
      )}
    </SelectContainer>
  );
}
