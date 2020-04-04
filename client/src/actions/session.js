import axios from "axios";

// A function to send a GET request to the web server,
// and then loop through them and add a list element for each user
export const checkSession = async () => {
  // the URL for the request
  const url = "/session/check-session";

  const res = await axios.get(url)
  return res.data.currentUser
};

// A function to send a POST request with a new user
export const login = async (user) => {
  // the URL for the request
  const url = "/session/login";

  const response = await axios.post(url, user);
  return response;
};

// A function to send a DELETE request with a user
export const logout = async () => {
  // the URL for the request
  const url = "/session/logout";

  const res = await axios.get(url);
  return res;
};
