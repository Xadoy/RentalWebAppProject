import React, { useState } from "react";
import { parseISO, format } from "date-fns";

function Comments({item_id, comments}) {
    // const [comments, setComments] = useState();
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comments: []
    //     };
    // }
    // componentDidMount() {
    //     let form = document.getElementById("commentForm");
    //     function handle_submit(e) {
    //         e.preventDefault();
    //     }
    //     form.addEventListener('submit', handle_submit);
    // }

        return (
            <div className={"comment-container"}>
                <div className="commentList">
                    <h5>
                        <span>{comments.length}</span>{" "}
                        Comment{comments.length > 0 ? "s" : ""}
                    </h5>
                    {comments.map((comment) => (
                        <Comment comment={comment} />))
                    }
                </div>
                <div>
                    <form id={"commentForm"}>
                        <input type="text" placeholder={"Your comment here"} id={"comment"}/>
                        {/* <input type="submit" value="Submit comment" onClick={this.addComment}/> */}
                    </form>
                </div>
            </div>
        );

    // addComment() {
    //     let comment = [{message: document.getElementById("comment").value, name: this.state.user, time: this.get_today()}];
    //     this.setState({
    //         comments: this.state.comments.concat(comment)
    //     });
    // }
}

function Comment({ comment }) {
  const { creator, content, createdAt } = comment
    return (
        <div>
            <small>time posted: {format(parseISO(createdAt), "yyyy-MM-dd HH:mm:ss")} user: {creator.userName}</small>
            <br/>{content}
        </div>
    );
}


export default Comments
