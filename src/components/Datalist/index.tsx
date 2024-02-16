import React from 'react';
import classNames from 'classnames';

interface DataListOption {
 value: string;
 label: string;
}

interface DataListProps {
 options: DataListOption[];
 selectedValue?: string;
 onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 className?: string;
}

const DataList: React.FC<DataListProps> = ({ options, selectedValue, onChange, className }) => {
 const dataListClasses = classNames('border border-gray-300 rounded-md p-2', className);

 return (
    <div className={dataListClasses}>
      <input
        list="datalistOptions"
        value={selectedValue}
        onChange={onChange}
        className="w-full"
      />
      <datalist id="datalistOptions">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </datalist>
    </div>
 );
};

export default DataList;
