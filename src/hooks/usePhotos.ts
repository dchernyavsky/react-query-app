import photoApi from "../api/PhotoApi";
import { useQuery } from "@tanstack/react-query";
import { queryConstants } from "../constants/queryConstants";
import { IPhoto } from "../interface/Photo";

export const usePhotos = (page: number) => {
  return useQuery<IPhoto[]>({
    queryKey: [queryConstants.photos, page],
    queryFn: () => photoApi.getPhotos(page),
    enabled: Boolean(page),
  });
};
