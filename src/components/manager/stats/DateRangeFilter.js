import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRangeFilter = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const removeTime = (date = new Date()) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  const handleSelect = (date) => {
    let filtered = props.data?.filter((product) => {
      let productDate = removeTime(new Date(product?.date));
      console.log(props.data[2]);

      return (
        productDate >= date.selection.startDate &&
        productDate <= date.selection.endDate
      );
    });

    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    props.setFilteredData(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <div className=" overflow-auto ">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </div>
  );
};

export default DateRangeFilter;
