
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/context';
import Button from '../UI/Button';
import Icon from '../UI/Icon';
import Input from '../UI/Input';
import styles from './Modal.module.css';

const Modal = ({close} : {close: () => void}) => {
  const [ value, setValue ] = useState('');
  const { addSet,basket,setList } = useContext(ProductsContext);
  useEffect(() => {
    console.log(setList, 'setList');
  }, [setList]);
  return (
    <div className={styles.modal}>
      <div className={styles.window}>
        <h3>Название набора</h3>
        <Input type="text" changeInput={setValue} />
        <div className={styles.close} onClick={() => close()}><Icon bg='#F4F4F4' img='/icons/atoms/delete.svg'/></div>
        <Button title='Создать набор' click={() => {
          basket && addSet && 
          addSet({
            title: value,
            grains: basket,
            id: Math.floor(Math.random() * 999)
          })
          close();
          }} />
      </div>
    </div>
  )
}

export default Modal;