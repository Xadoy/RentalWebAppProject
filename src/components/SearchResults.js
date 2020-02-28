import React from "react";
import queryString from "query-string";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search_val : 'null'
        }
    }

    componentDidMount() {
        const { location: { search } } = this.props;
        const values = queryString.parse(search);
        this.setState({search_val : values["value"]});
    }
    // TODO remove these results later
    render() {
        return (
            <div>
                <SearchBar/>
                You searched for {this.state.search_val}
                <div>
                    <Link to={"/item/apple"}>Apple</Link>
                </div>
            </div>
        )
    }
}

export default SearchResults;
