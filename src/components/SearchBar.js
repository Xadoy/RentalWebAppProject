import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <form action={"search"}>
                    <input type={"text"} name={"value"} placeholder={"Item/Service"}/>
                    <input type={"submit"} value={"Search"}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;
