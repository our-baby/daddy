import styled from 'styled-components';

interface SelectProps {
  options: OptionType[];
  defaultVal?: string | number;
  changeHandler: () => void;
  className?: string;
}

interface OptionType {
  value: string | number;
  name: string | number;
}

const Select = styled.select`
  border: none;
  transition: all 100ms ease 0s;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 8px top 50%;

  &:hover {
    filter: brightness(1.3);
  }
`;

export default function SelectBox({ options, defaultVal, changeHandler, className }: SelectProps) {
  return (
    <Select className={className} onChange={changeHandler} defaultValue={defaultVal}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
}
