# Project Structure
* server.js -> entry point of backend server, setup database and express routes
* app/    -> backend nodejs codebase
  * models/ -> data model of item/item request/transaction/user
  * controllers/ -> control the data model
  * routes/ -> route http requests to controllers and middlewares
  * middlewares/ -> implements user authentication and user role identification
* client/src/ -> frontend react codebase
  * index.js -> entry point of frontend webpage
  * actions/ -> perform client-server requests
  * components/ -> react components


# Usage
Deployed link(heroku):https://csc309-team45-notkijiji.herokuapp.com/

username and password preset:

admin:admin, user1:user1, user2:user2

Admin:
- Manage page(not implemented): 
  admin can change their username and password.
- Listings page:
  admin can manage(remove and add) the items that the website offers to the users.
- User Management page:
  admin can see the status of all users, and admin can also remove any user.
- Requests:
  admin can see the list of requests from the users that what kind of items they
  want the website to offer but currently missing. If the admin agrees with the
  suggestion, the admin can approves any request. Once the request is approved,
  it will automatically create a item entry (both users and admin can see it).

In addition, admin can do whatever the normal users do.

Normal User:
- Searching:
  search for items, any item that contains the keyword in their name, description,
  comments will be showed as the search result.
- Browse:
  users can browse all the available items for them to rent. When they click the
  name of a item, they will be redirected to the item page.
  In addition, users can request for missing items at the bottom of this page.
  Users can also suggest a picture for this item.
- Item Page:
  users can see all the comments posted by any user to this item. After logged in,
  users can also post comments. Users can pick dates that they want to rent the
  items, once the user click confirm order, a transaction is created. However,
  for the transaction feature, only the backend is implemented. So far the frontend
  part is not implemented, hence it would not be shown on the website.
