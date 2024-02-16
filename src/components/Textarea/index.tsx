import React from 'react';
import classNames from 'classnames';

interface TextAreaProps {
 id?: string;
 name?: string;
 value?: string;
 placeholder?: string;
 onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
 className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ id, name, value, placeholder, onChange, className }) => {
 const textAreaClasses = classNames('border border-gray-300 rounded-md p-2', className);

 return (
    <textarea
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={textAreaClasses}
    />
 );
};

export default TextArea;
