import "date-fns";
import {startOfToday, addDays, differenceInDays} from "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

// reference:https://material-ui.com/components/pickers/
function DatePicker({ unitCost }) {
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
    </>
  );
}

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: 5,
      days: 0,
    };
    this.purchase = this.purchase.bind(this);
  }
  componentDidMount() {
    // let form = document.getElementById("date-form");
    // function handle_submit(e) {
    //   e.preventDefault();
    // }
    // form.addEventListener("submit", handle_submit);
  }
  render() {
    return <DatePicker></DatePicker>;
    return (
      <div className={"order-container"}>
        <p>
          Order
          <br />
          Daily cost: ${this.state.cost}
        </p>
        <form id={"date-form"}>
          <label htmlFor="time">Start: </label>
          <input id="start" name="time" type="date" min={this.get_today()} />
          <br />
          <label htmlFor="time">End: </label>
          <input id="end" name="time" type="date" min={this.get_today()} />
          <br />
          <input
            type="submit"
            value={"Calculate cost"}
            onClick={() => this.setState({ days: this.find_days() })}
          />
          <input type="reset" />
        </form>
        <div>
          {this.state.days > 0
            ? "Negative days"
            : "$" + this.state.days * this.state.cost}
        </div>
        <button onClick={this.purchase}>Confirm Order</button>
      </div>
    );
  }
  find_days() {
    const end = Date.parse(document.getElementById("end").value);
    const start = Date.parse(document.getElementById("start").value);
    const milli_in_day = 1000 * 60 * 60 * 24;
    return (end - start) / milli_in_day;
  }
  purchase() {
    console.log("Transaction made");
    console.log(this.state.cost * this.state.days);
  }

  // from stack overflow
  get_today() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  }
}

export default Order;
