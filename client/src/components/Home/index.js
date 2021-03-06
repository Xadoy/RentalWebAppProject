import React from "react";
import SearchBar from "../SearchBar";
import {Link} from "react-router-dom";
import "./styles.css";
//import Popup from "./"

class Home extends React.Component {
    constructor(props){  
        super(props);  
        this.state = { showPopup: false };  
    }
    render() {
        return (
            <div className='main'>
                <h1 className = 'title'> notKijiji </h1>
                <SearchBar/>
                <Browse/> 
                
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
