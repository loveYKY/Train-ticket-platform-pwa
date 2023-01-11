import { Main } from "../views/main";
import { QueryPage } from "../views/query";
import { TicketPage } from "../views/tickets";
import { Order } from "@/views/order";
import { Navigate } from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/main"></Navigate>,
  },
  {
    path: "/main",
    element: <Main></Main>,
  },
  {
    path: "/query",
    element: <QueryPage></QueryPage>,
  },
  {
    path: "/tickets",
    element: <TicketPage></TicketPage>,
  },
  {
    path: "/order",
    element: <Order></Order>,
  },
];
