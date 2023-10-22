import photoApi from "../api/PhotoApi";
import { useQuery } from "@tanstack/react-query";
import { queryConstants } from "../constants/queryConstants";
import { IPhoto } from "../interface/Photo";

export const usePhoto = (id: number) => {
  return useQuery<IPhoto>({
    queryKey: [queryConstants.photo, id],
    queryFn: () => photoApi.getPhoto(id),
    enabled: Boolean(id),
  });
};
