
import { ReactNode } from 'react';
import styles from './DefaultLayout.module.css';

interface PropsExtends {
  children: ReactNode
}

const DefaultLayout = ({children} : PropsExtends) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
};

export default DefaultLayout;