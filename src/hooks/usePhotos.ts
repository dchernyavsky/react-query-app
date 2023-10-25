import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { useInView } from "react-intersection-observer";
import photoApi from "../api/PhotoApi";
import { queryConstants } from "../constants/queryConstants";
import { IPhoto } from "../interface/Photo";

export const usePhotos = () => {
  const initialPageParam = 1;

  const query = useInfiniteQuery<IPhoto[]>({
    queryKey: [queryConstants.photos],
    queryFn: ({ pageParam = initialPageParam }) =>
      photoApi.getPhotos(pageParam as number),
    getNextPageParam: (photos) => photos?.[0]?.albumId + 1 || undefined,
    initialPageParam,
  });

  const { ref: fetchNextRef, inView: fetchNextInView } = useInView();

  React.useEffect(() => {
    if (fetchNextInView && !query.isFetching) {
      query.fetchNextPage();
    }
  }, [fetchNextInView]);

  return { ...query, fetchNextRef };
};
