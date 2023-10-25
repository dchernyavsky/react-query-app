import React from "react";
import { usePhotos } from "../../hooks/usePhotos";
import { PhotoThumbnail } from "../PhotoThumbnail";
import styles from "./style.module.css";

export const Photos: React.FC = () => {
  const { data, fetchNextRef } = usePhotos();

  return (
    <div className={styles.wrapper}>
      {data?.pages?.flat().map((photo) => (
        <PhotoThumbnail key={photo.id} photo={photo} />
      ))}
      <div ref={fetchNextRef} />
    </div>
  );
};
