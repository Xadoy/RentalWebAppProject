import React from "react";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [{message: "hello there", name: "bro", time: "2020-03-01"},
                {message: "yo", name: "bro 2", time: "2020-03-02"}]
        };
        this.addComment = this.addComment.bind(this);
    }
    componentDidMount() {
        let form = document.getElementById("commentForm");
        function handle_submit(e) {
            e.preventDefault();
        }
        form.addEventListener('submit', handle_submit);
    }
    render() {
        return (
            <div className={"comment-container"}>
                <div className="commentList">
                    <h5>
                        <span>{this.state.comments.length}</span>{" "}
                        Comment{this.state.comments.length > 0 ? "s" : ""}
                    </h5>
                    {this.state.comments.map((comment, index) => (
                        <Comment key={index} comment={comment} />))
                    }
                </div>
                <div>
                    <form id={"commentForm"}>
                        <input type="text" placeholder={"Your comment here"} id={"comment"}/>
                        <input type="submit" value="Submit comment" onClick={this.addComment}/>
                    </form>
                </div>
            </div>
        );
    }

    addComment() {
        let comment = [{message: document.getElementById("comment").value, name: "curr", time: this.get_today()}];
        this.setState({
            comments: this.state.comments.concat(comment)
        });
    }

    get_today() {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd
    }
}

function Comment(props) {
    const { name, message, time } = props.comment;
    return (
        <div>
            <small>time posted: {time} user: {name}</small>
            <br/>{message}
        </div>
    );
}


export default Comments
