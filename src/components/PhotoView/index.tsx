import React from "react";
import { useParams } from "react-router-dom";
import { usePhoto } from "../../hooks/usePhoto";
import styles from "./style.module.css";

export const PhotoView: React.FC = () => {
  const { id } = useParams();
  const { data: photo } = usePhoto(Number(id));

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={photo?.url} alt={photo?.title} />
      <span>{photo?.title}</span>
    </div>
  );
};
