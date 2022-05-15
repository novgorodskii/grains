import React, { useState } from 'react';
import style from './Input.module.css';

interface InputProps {
  type: string,
  changeInput(text: string): void
};

const Input: React.FC<InputProps> = ({type, changeInput}) => {
  const [value, setValue] = useState<string>('');
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    changeInput(event.target.value);
  };
 
  return (
    <div className={style.input}>
      <input
        onChange={changeValue}
        value={value}
        type={type} />
    </div>
  )
};

export default Input;