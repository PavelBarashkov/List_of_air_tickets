import { getTransfersEnding } from "../../helpers/getTransfersEnding";
import { IFilter } from "../../interface";
import classes from "./filterItem.module.css";

interface IFilterItemProps {
  filter: IFilter;
  onClick: (filter: IFilter) => void;
}

export const FilterItem = ({ filter, onClick }: IFilterItemProps) => {
  return (
    <div className={classes.filter_item}>
      <input
        type="checkbox"
        id={filter.id}
        defaultChecked={filter.isChecked}
        onChange={() => onClick(filter)}
      />
      <label htmlFor={filter.id}>
        {typeof filter.label === "string"
          ? filter.label
          : `${filter.label} ${getTransfersEnding(filter.label)}`}
      </label>
    </div>
  );
};
