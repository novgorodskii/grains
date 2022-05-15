
import Image from 'next/image';
import styles from './Icon.module.css';

const Icon = ({img, bg} : {img: string, bg: string}) => {
  return (
    <div className={styles.icon} style={{background: bg}}>
      <Image src={img} layout='fixed' width={24} height={24} priority/>
    </div>
  )
};

export default Icon;