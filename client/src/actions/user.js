import axios from "axios";

// A function to send a GET request to the web server,
// and then loop through them and add a list element for each user
export const getAllValidUsers = async () => {
  // the URL for the request
  const url = "/api/users";

  const res = await axios.get(url)
  return res.data.users
};

// A function to send a POST request with a new user
export const addUser = async (user) => {
  // the URL for the request
  const url = "/api/users";

  const response = await axios.post(url, user);
  return response;
};

// A function to send a DELETE request with a user
export const delUser = async (id) => {
  // the URL for the request
  const url = "/api/users/" + id;

  const response = await axios.delete(url);
  return response;
};
