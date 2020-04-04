import axios from "axios";

// A function to send a GET request to the web server,
// and then loop through them and add a list element for each item
export const getAllValidItems = async () => {
  // the URL for the request
  const url = "/api/items";

  const res = await axios.get(url)
  return res.data.items
};

export const getItem = async (id) => {
  // the URL for the request
  const url = "/api/items/" + id;

  const res = await axios.get(url)
  return res.data.item
};

// A function to send a POST request with a new item
export const addItem = async (item) => {
  // the URL for the request
  const url = "/api/items";

  const response = await axios.post(url, item);
  return response;
};

// A function to send a DELETE request with a item
export const delItem = async (id) => {
  // the URL for the request
  const url = "/api/items/" + id;

  const response = await axios.delete(url);
  return response;
};


// comments:
export const addCommentToItem = async (item_id, comment) => {
  // the URL for the request
  const url = "/api/items/" + item_id + "/comments";

  const response = await axios.post(url, comment);
  return response;
};
export const getCommentsOfItem = async (item_id) => {
  // the URL for the request
  const url = "/api/items/" + item_id + "/comments";

  const res = await axios.get(url)
  return res.data.comments;
};
