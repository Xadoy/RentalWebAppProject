import axios from "axios";

// A function to send a GET request to the web server,
// and then loop through them and add a list element for each item
export const getItems = async () => {
  // the URL for the request
  const url = "/items";

  const res = await axios.get(url)
  return res.data.items
};

// A function to update the item form state
// export const updateItemForm = (formComp, field) => {
//   const value = field.value;
//   const name = field.name;

//   formComp.setState({
//     [name]: value
//   });
// };

// A function to send a POST request with a new item
export const addItem = async (item) => {
  // the URL for the request
  const url = "/items";

  const response = await axios.post(url, item);
  return response;
  // // Create our request constructor with all the parameters we need
  // const request = new Request(url, {
  //   method: "post",
  //   body: JSON.stringify(item),
  //   headers: {
  //     Accept: "application/json, text/plain, */*",
  //     "Content-Type": "application/json"
  //   }
  // });

  // // Send the request with fetch()
  // fetch(request)
  //   .then(function(res) {
  //     // Handle response we get from the API.
  //     // Usually check the error codes to see what happened.
  //     if (res.status === 200) {
  //       // If item was added successfully, tell the user.
  //       dashboardComp.setState({
  //         message: {
  //           body: "Success: Added a item.",
  //           type: "success"
  //         }
  //       });
  //     } else {
  //       // If server couldn't add the item, tell the user.
  //       // Here we are adding a generic message, but you could be more specific in your app.
  //       dashboardComp.setState({
  //         message: {
  //           body: "Error: Could not add item.",
  //           type: "error"
  //         }
  //       });
  //     }
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
};

// A function to send a DELETE request with a item
export const delItem = async (id) => {
  // the URL for the request
  const url = "/items/" + id;

  const response = await axios.delete(url);
  return response;
};
