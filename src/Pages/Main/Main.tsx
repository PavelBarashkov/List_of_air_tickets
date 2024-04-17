import { MainPage } from "../../layouts/MainPage";
import { Filters, TicketList } from "../../modules";

export const Main = () => {
  return <MainPage filter={<Filters />} ticketList={<TicketList />} />;
};
