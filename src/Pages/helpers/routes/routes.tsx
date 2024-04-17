import { MAIN_ROUTE } from "../component/const";
import { Main } from "../../";

interface Path {
  path: string;
  element: React.ReactNode;
}

export const publicRoutes: Path[] = [
  {
    path: MAIN_ROUTE,
    element: <Main />,
  },
  {
    path: "/*",
    element: <Main />,
  },
];
