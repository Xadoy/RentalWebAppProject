import axios from "axios";

// A function to send a GET request to the web server,
// and then loop through them and add a list element for each item
export const getAllItemRequests = async () => {
  // the URL for the request
  const url = "/api/item_requests";

  const res = await axios.get(url)
  return res.data.itemRequests
};

export const addItemRequestImage = async (form) => {
  // the URL for the request
  const url = "/api/item_requests/images";
  const imageData = new FormData(form);
  const res = await axios.post(url, imageData)
  console.log(res.data)
  return res.data
};

// A function to send a POST request with a new item
export const addItemRequest = async (itemReq) => {
  // the URL for the request
  const url = "/api/item_requests";

  const response = await axios.post(url, itemReq);
  return response;
};

// A function to send a DELETE request with a item
export const delItemRequest = async (id) => {
  // the URL for the request
  const url = "/api/item_requests/" + id;

  const response = await axios.delete(url);
  return response;
};
