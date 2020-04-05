import "date-fns";
import {startOfToday, addDays, differenceInDays} from "date-fns";
import React, { useState } from "react";
import {Grid, Button} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {addTransaction} from "../../actions/transaction"

// reference:https://material-ui.com/components/pickers/
function Order({ unitCost, item_id }) {
  const [error, setError] = useState();
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState(
    new Date(today)
  );
  const [selectedDate2, setSelectedDate2] = useState(
    addDays(new Date(today), 7)
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const getDateDiff = () => {
    return differenceInDays(selectedDate2, selectedDate);
  };

  const getCost = () => {
    return getDateDiff() * unitCost;
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const transaction = {
      startAt: selectedDate,
      endAt: selectedDate2,
      item: item_id
    };
    const res = await addTransaction(transaction).catch(error =>
      setError(error.response.data)
    );
  };
  if (error) throw error;
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Start at"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline2"
            label="Return at"
            value={selectedDate2}
            onChange={handleDateChange2}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
        <div>Days: {getDateDiff()}</div>
        <div>Daily cost: ${unitCost}</div>
        <div>Cost: ${getCost()}</div>
        <Button onClick={handleSubmit}>Confirm Order</Button>
    </>
  );
}

export default Order;
