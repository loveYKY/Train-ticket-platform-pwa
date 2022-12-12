import { Main } from "../views/main";
import { Navigate } from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/main"></Navigate>,
  },
  {
    path: "/main",
    element: <Main></Main>
  },
];
