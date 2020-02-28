import React from "react";
import queryString from "query-string";
import SearchBar from "./SearchBar";

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

    render() {
        return (
            <div>
                <SearchBar/>
                You searched for {this.state.search_val}
            </div>
        )
    }
}

export default SearchResults;
