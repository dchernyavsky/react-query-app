import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_PATH } from "../../constants/routePathConstants";
import { usePhotos } from "../../hooks/usePhotos";
import { PhotoThumbnail } from "../PhotoThumbnail";
import styles from "./style.module.css";

export const Photos: React.FC = () => {
  const { data, fetchNextRef } = usePhotos();

  return (
    <div className={styles.wrapper}>
      {data?.pages?.flat().map((photo) => (
        <NavLink className={styles.link} to={`${ROUTE_PATH.PHOTO}/${photo.id}`}>
          <PhotoThumbnail key={photo.id} photo={photo} />
        </NavLink>
      ))}
      <div ref={fetchNextRef} />
    </div>
  );
};
