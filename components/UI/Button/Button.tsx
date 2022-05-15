
import styles from './Button.module.css';

interface ButtonInterface {
  title: string;
  click: () => void
}

const Button = ({title, click} : ButtonInterface) => {
  return (
    <div className={styles.btn} onClick={() => click()}>
      {title}
    </div>
  )
}
export default Button;