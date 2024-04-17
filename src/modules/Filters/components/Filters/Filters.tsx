import { useSearchParams } from "react-router-dom";
import { FilterItem } from "../../../../components";
import { IFilter } from "../../../../interface";
import classes from "./filters.module.css";
import { useState } from "react";

export const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isParam = (id: string) => (searchParams.has(id) ? true : false);

  const [filterList] = useState<IFilter[]>([
    {
      id: "all",
      label: "Все",
      isChecked: isParam("all"),
    },
    {
      id: "0",
      label: "Без пересадок",
      isChecked: isParam("0"),
    },
    {
      id: "1",
      label: 1,
      isChecked: isParam("1"),
    },
    {
      id: "2",
      label: 2,
      isChecked: isParam("2"),
    },
    {
      id: "3",
      label: 3,
      isChecked: isParam("3"),
    },
  ]);

  const handleBtnFiler = (filter: IFilter) => {
    const param = searchParams.get(filter.id);
    if (param) {
      searchParams.delete(filter.id);
    } else {
      searchParams.set(filter.id, 'true');
    }
    setSearchParams(searchParams);
  };

  

  return (
    <div className={classes.filter_container}>
      <div className={classes.filter_title}>КОЛИЧЕСТВО ПЕРЕСАОДОК</div>
      <div className={classes.filter_list}>
        {filterList.map((filter: IFilter) => (
          <FilterItem
            filter={filter}
            onClick={handleBtnFiler}
            key={filter.id}
          />
        ))}
      </div>
    </div>
  );
};
