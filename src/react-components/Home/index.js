import React from "react";
import SearchBar from "../../components/SearchBar";
import "./styles.css";

class Home extends React.Component {
    render() {
        return (
            <div className='main'>
                <h1> notKJJ </h1>
                <SearchBar/>
                {/* <Browse/> */}
            </div>
            
        )
    }
}

// class Browse extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Link to={"/catalogue"}>Browse</Link>
//             </div>
//         )
//     }
// }
export default Home;