import React from "react";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    render() {
        return (
            <div className={"comment-container"}>
                Comments
                <div>
                    Very under construction
                </div>
                <form>
                    <input type="text"/><br/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default Comments
