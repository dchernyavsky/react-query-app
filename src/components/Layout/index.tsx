import { Header } from "../Header";
import styles from "./style.module.css";

interface IProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
