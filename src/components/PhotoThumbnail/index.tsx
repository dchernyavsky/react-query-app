import { IPhoto } from "../../interface/Photo";
import styles from "./style.module.css";

interface IProps {
  photo: IPhoto;
}

export const PhotoThumbnail: React.FC<IProps> = ({ photo }) => {
  return (
    <div className={styles.wrapper}>
      <img src={photo.thumbnailUrl} className={styles.img} alt={photo.title} />
      <div className={styles.title}>{photo.title}</div>
    </div>
  );
};
