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
function DatePicker({ unitCost, item_id, afterSubmit }) {
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
    afterSubmit();
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
    return <DatePicker item_id={this.props.item_id} unitCost={10}/>;
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
}

export default Order;
