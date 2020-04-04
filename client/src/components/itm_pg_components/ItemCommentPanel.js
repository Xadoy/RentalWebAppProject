import React, { useState } from "react";
import { parseISO, format } from "date-fns";
import { addCommentToItem } from "../../actions/item";
import { useInput } from "../Utility"
import {
  withStyles,
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";
function Comments({ item_id, comments, afterSubmit }) {
  return (
    <div className={"comment-container"}>
      <div className="commentList">
        <h5>
          <span>{comments.length}</span> Comment{comments.length > 0 ? "s" : ""}
        </h5>
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
      <AddCommentForm item_id={item_id} afterSubmit={afterSubmit} />
    </div>
  );
}
function AddCommentForm({ item_id, afterSubmit }) {
  const [error, setError] = useState();
  const { value: comment, bind: bindComment, reset: resetComment } = useInput(
    ""
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const commentToSubmit = {
      content: comment,
    };
    const response = await addCommentToItem(
      item_id,
      commentToSubmit
    ).catch((error) => setError(error.response.data));
    resetComment();
    afterSubmit();
  };
  if (error) throw error;
  return (
    <Grid>
      <TextField label="Comment" name="new_comment" {...bindComment} />
      <div>
        <Button type="submit" onClick={handleSubmit}>
          Submit comment
        </Button>
      </div>
    </Grid>
  );
}
function Comment({ comment }) {
  const { creator, content, createdAt } = comment;
  return (
    <div>
      <small>
        time posted: {format(parseISO(createdAt), "yyyy-MM-dd HH:mm:ss")} user:{" "}
        {creator.userName}
      </small>
      <br />
      {content}
    </div>
  );
}

export default Comments;
