import { Header } from "../Header";
import styles from "./style.module.css";

interface IProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div>{children}</div>
    </div>
  );
};
