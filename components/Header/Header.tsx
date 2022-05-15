
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image priority layout='fill' src="/Princeps.svg" />
      </div>
    </div>
  )
}
export default Header;