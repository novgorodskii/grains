import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/context";
import Grain from "../UI/Grain";
import Icon from "../UI/Icon";
import styles from './Set.module.css';
interface GrainModel {
  title: string;
  descriptions?: string;
  img?: string;
  id: number
}

interface ListItemModel {
  grains: GrainModel[],
  id: number,
  title: string
}

const Item = ({ item, itemList } : {item: GrainModel, itemList: ListItemModel}) => {
  const { deleteGrain, editSet } = useContext(ProductsContext);

  const deleteSet = (id: number) => {
    const newArr = itemList?.grains?.filter(item => item.id !== id);
    const newObj = {
      grains: newArr,
      id: itemList?.id,
      title: itemList?.title
    }
    editSet && editSet(id, newObj);
  };

  return (
    <div className={styles.item}>
      <Grain item={item} />
      <div onClick={() => deleteSet(item.id)}>
        <Icon bg={'#F4F4F4'} img={'/icons/atoms/minus.svg'}/>
      </div>
    </div>
  )
};

const ListItem = ({item} : {item :ListItemModel}) => {
  const { deleteSet } = useContext(ProductsContext);
  const {grains, title, id} = item;
  return (
    <div className={styles.list}>
      <div className={styles.title}>
        <h3>{title}</h3>
        <div onClick={() => deleteSet && deleteSet(id)}>
          <Icon bg={'#F4F4F4'} img={'/icons/atoms/minus.svg'}/>
        </div>
      </div>
      {grains?.map(grain => <Item itemList={item} item={grain} key={grain.id} />)}
    </div>
  )
};

const Set = () => {
  const { setList }  = useContext(ProductsContext);
  return (
    <div className={styles.set}>
      <h2 className='font-sans'>Наборы</h2>
      {setList?.map(item => <ListItem item={item} />)}
    </div>
  );
};
export default Set;