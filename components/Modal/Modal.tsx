
import { useState } from 'react';
import Icon from '../UI/Icon';
import Input from '../UI/Input';
import styles from './Modal.module.css';

const Modal = ({close} : {close: () => void}) => {
  const [ value, setValue ] = useState('');
  return (
    <div className={styles.modal}>
      <div className={styles.window}>
        <h3>Название набора</h3>
        <Input type="text" changeInput={setValue} />
        <div className={styles.close} onClick={() => close()}><Icon bg='#F4F4F4' img='/icons/atoms/delete.svg' /></div>
      </div>
    </div>
  )
}

export default Modal;