import { useContext, useState } from 'react';
import styles from './SandBox.module.css';
import { ProductsContext } from '../../context/context';
import Grain from '../UI/Grain';
import Icon from '../UI/Icon';
import Button from '../UI/Button';
import Modal from '../Modal';

interface GrainModel {
  title: string;
  descriptions?: string;
  img?: string;
  id: number
}

const Item = ({item} : {item: GrainModel}) => {
  const { deleteGrain } = useContext(ProductsContext);
  return (
    <div className={styles.item}>
      <Grain item={item} />
      <div onClick={() => {
        deleteGrain && deleteGrain(item.id)
      }}>
        <Icon bg={'#F4F4F4'} img={'/icons/atoms/minus.svg'}/>
      </div>
    </div>
  )
};

const SandBox = () => {
  const { basket } = useContext(ProductsContext);
  const [ activeModal, setActiveModal ] = useState(false);
  const list = basket ? basket.map(item => <Item item={item} key={item.id}/>) : [];
  return (
    <div className={styles.sandbox}>
      {activeModal ? <Modal close={() => setActiveModal(false)} /> : null}
      <h2 className='font-sans'>Песочница</h2>
      {
        list.length ? 
        <>
          {list}
          {list.length > 1 && <Button title='Собрать в набор' click={() => setActiveModal(true)}/>}
        </> : <div>Добавить песок</div>
      }
    </div>
  )
};
export default SandBox;