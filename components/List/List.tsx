import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/context';
import Grain from '../UI/Grain';
import Icon from '../UI/Icon';
import styles from './List.module.css';

interface GrainModel {
  title: string;
  descriptions?: string;
  img?: string;
  id: number
}

interface PropsModel {
  arr: GrainModel[]
}

const Item = ({item} : {item: GrainModel}) => {
  const { addBasket, deleteGrain } = useContext(ProductsContext);
  const [ active, setActive ] = useState(false);
  useEffect(() => {
    if (active) {
      const timer = window.setInterval(() => {
        setActive(false);
      }, 500);
      return () => { 
        window.clearInterval(timer);
      }
    }
  }, [active]);
  return (
    <div className={styles.item}>
      <Grain item={item} />
      <div onClick={() => {
        setActive(!active);
        if (deleteGrain && addBasket) {
          active ? deleteGrain(item.id) : addBasket(item);
        }
      }}>
        <Icon bg={active ? '#42BE65' : '#F4F4F4' } img={active ? '/icons/atoms/checkmark.svg' : '/icons/atoms/add.svg'}/>
      </div>
    </div>
  )
};

const List = ({arr} : PropsModel) => {
  const list = arr.map(item => <Item item={item} key={item.id}/>)
  return (
    <div className={styles.list}>
      <h2 className='font-sans'>Песок</h2>
      {list}
    </div>
  )
};

export default List;