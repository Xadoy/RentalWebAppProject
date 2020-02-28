import React from "react";
import SearchBar from "../../components/SearchBar";
import {Link} from "react-router-dom";
import "./styles.css";

class Home extends React.Component {
    render() {
        return (
            <div className='main'>
                <h1> notKijiji </h1>
                <SearchBar/>
                <Browse/> 
            </div>

        )
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
