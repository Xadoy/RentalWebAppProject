import React from "react";

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cost: 5,
            days: 0
        };
        this.purchase = this.purchase.bind(this);
    }
    componentDidMount() {
        let form = document.getElementById("date-form");
        function handle_submit(e) {
            e.preventDefault();
        }
        form.addEventListener('submit', handle_submit);
    }
    render() {
        return (
            <div className={"order-container"}>
                <p>
                    Order<br/>
                    Daily cost: ${this.state.cost}
                </p>
                <form id={"date-form"}>
                    <label htmlFor="time">Start: </label>
                    <input id="start" name="time" type="date" min={this.get_today()}/><br/>
                    <label htmlFor="time">End: </label>
                    <input id="end" name="time" type="date" min={this.get_today()}/><br/>
                    <input type="submit" value={"Calculate cost"} onClick={() => this.setState({days: this.find_days()})}/>
                    <input type="reset"/>
                </form>
                <div>
                    {this.state.days>0 ? "Negative days" : "$" + this.state.days*this.state.cost}
                </div>
                <button onClick={this.purchase}>Confirm Order</button>
            </div>
        );
    }
    find_days() {
        const end = Date.parse(document.getElementById("end").value);
        const start = Date.parse(document.getElementById("start").value);
        const milli_in_day = 1000*60*60*24;
        return (end - start) / milli_in_day
    }
    purchase() {
        console.log('Transaction made');
        console.log(this.state.cost*this.state.days);
    }

    // from stack overflow
    get_today() {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd
    }
}

export default Order
