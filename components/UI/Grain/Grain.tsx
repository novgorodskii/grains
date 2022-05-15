import styles from './Grain.module.css';

interface GrainModel {
  title: string;
  img?: string;
  description?: string;
  id: number
}

const Grain = ({item} : {item: GrainModel}) => {
  return (
    <div className={styles.grain}>
      <div>{item.title}</div>
    </div>
  )
};

export default Grain;