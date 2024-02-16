import React from 'react';
import classNames from 'classnames';

interface SelectOption {
 value: string;
 label: string;
}

interface SelectProps {
 options: SelectOption[];
 selectedValue?: string;
 onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
 className?: string;
}

const Select: React.FC<SelectProps> = ({ options, selectedValue, onChange, className }) => {
 const selectClasses = classNames('border border-gray-300 rounded-md p-2', className);

 return (
    <select
      value={selectedValue}
      onChange={onChange}
      className={selectClasses}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
 );
};

export default Select;
