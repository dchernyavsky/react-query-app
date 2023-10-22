import { createBrowserRouter } from "react-router-dom";
import { PhotoView } from "../components/PhotoView";
import { Photos } from "../components/Photos";
import { ROUTE_PATH } from "../constants/routePathConstants";

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <Photos />,
  },
  {
    path: `${ROUTE_PATH.PHOTO}/:id`,
    element: <PhotoView />,
  },
]);
