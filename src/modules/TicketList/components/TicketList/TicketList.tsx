import { useEffect, useState } from "react";
import classes from "./ticketList.module.css";
import { tickets } from "../../../../data/tickets.json";
import { CardTicket } from "../../../../components/CardTicket/CardTicket";
import { useSearchParams } from "react-router-dom";
import { ITicket } from "../../../../interface";

export const TicketList = () => {
  const [searchParams] = useSearchParams();
  const [filteredTickets, setFilteredTickets] = useState<ITicket[]>(tickets);

  useEffect(() => {
    const sortedTickets = [...tickets].sort((a, b) => a.price - b.price);

    if (searchParams.toString() === "") {
      setFilteredTickets(sortedTickets);
      return;
    }

    const filteredByParams = sortedTickets.filter((ticket) => {
      if (searchParams.get("all")) return true;

      for (const [key] of searchParams.entries()) {
        if (key === "all") continue;
        if (ticket.stops === Number(key)) return true;
      }

      return false;
    });

    setFilteredTickets(filteredByParams);
  }, [searchParams]);

  return (
    <div className={classes.list}>
      {filteredTickets.map((ticket) => (
        <CardTicket ticket={ticket} key={ticket.arrival_time} />
      ))}
    </div>
  );
};
