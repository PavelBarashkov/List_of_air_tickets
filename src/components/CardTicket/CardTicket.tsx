import classes from "./cardTicket.module.css";
import { Button } from "../Button/Button";
import moment from "moment";
import "moment/dist/locale/ru";
import { PiAirplaneInFlightThin } from "react-icons/pi";
import { getTransfersEnding } from "../../helpers/getTransfersEnding";
import { ITicket } from "../../interface";

interface ICardTicketProps {
  ticket: ITicket
}

export const CardTicket = ({ ticket }: ICardTicketProps) => {
  return (
    <div className={classes.card}>
      <div className={classes.col_price}>
        <div className={classes.card_logo}></div>
        <Button>{new Intl.NumberFormat("Ru-ru").format(ticket.price)}</Button>
      </div>

      <div className={classes.col}>
        <div className={classes.card_time}> {ticket.departure_time}</div>
        <div>
          <div>
            <strong>
              {ticket.origin}, {ticket.origin_name}
            </strong>
          </div>
          <div className={classes.date}>
            {moment(ticket.departure_date).format("DD MMM YYYY, ddd")}
          </div>
        </div>
      </div>

      <div className={`${classes.col} ${classes.col_date}`}>
        <div>
          {Number(ticket.stops)} {getTransfersEnding(Number(ticket.stops))}
        </div>
        <div>
          <PiAirplaneInFlightThin fontSize={"2rem"} />
        </div>
      </div>

      <div className={classes.col}>
        <div className={classes.card_time}> {ticket.arrival_time}</div>
        <div>
          <div>
            <strong>
              {ticket.destination}, {ticket.destination_name}
            </strong>
          </div>
          <div className={classes.date}>
            {moment(ticket.arrival_date).format("DD MMM YYYY, ddd")}
          </div>
        </div>
      </div>
    </div>
  );
};
