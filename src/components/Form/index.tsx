import React, { FC, FormEvent } from 'react';
import classNames from 'classnames';

interface FormProps {
 onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
 className?: string;
}

const Form: FC<FormProps> = ({ onSubmit, className, children }) => {
 const formClasses = classNames('space-y-4', className);

 return (
    <form onSubmit={onSubmit} className={formClasses}>
      {children}
    </form>
 );
};

export default Form;
