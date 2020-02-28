import React from "react";
import SearchBar from "../../components/SearchBar";
import {Link} from "react-router-dom";
import "./styles.css";
import Popup from "./"

class Home extends React.Component {
    constructor(props){  
        super(props);  
        this.state = { showPopup: false };  
    }
    render() {
        return (
            <div className='main'>
                <h1> notKijiji </h1>
                <SearchBar/>
                <Browse/> 
                <button onClick={this.login.bind(this)}>Sign-in</button>
                {this.state.showPopup ?  <Popup closePopup={this.login.bind(this)}/> : null}  
            </div>

        )
    }
    login() {
        this.setState({  
            showPopup: !this.state.showPopup  
       });  
    }
}

class Browse extends React.Component {
    render() {
        return (
            <div>
                <Link to={"/catalogue"}>Browse everything</Link>
            </div>
        )
    }
}
export default Home;
