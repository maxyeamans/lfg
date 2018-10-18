import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    console.log(userData);
    return axios.post("/api/users", userData);
  },
  // Updates the user with the given id
  updateUser: function(userData) {
    console.log("api", userData);
    return axios.put("/api/users/" + userData._id, userData); // was update instead of post
  },
  loginUser: function(userData) {
    console.log("API", userData);
    return axios.post("/api/login", userData);
  },
  getUserName: function(username) {
    console.log(username);
    return axios.get("/api/users/" + username);
      
  },
  // deleteLogin: function() {
  //   console.log("util api delete login")
  //   return axios.delete("/api/login");
  // },
  
  /////////////////////////////////////////////////////////////////////////
  // Gets all messages
  getMessages: function() {
    return axios.get("/api/messages");
  },
  // Gets the message with the given id
  getMessage: function(id) {
    return axios.get("/api/messages/" + id);
  },
  // Deletes the message with the given id
  deleteMessage: function(id) {
    return axios.delete("/api/messages/" + id);
  },
  // Saves a message to the database
  saveMessage: function(messageData) {
    console.log(messageData);
    return axios.post("/api/messages", messageData);
  },
  // Updates the message with the given id
  updateMessage: function(id) {
    return axios.update("/api/messages/" + id._id);
  },
  ////////////////////////////////////////////////////////////////////////////////
  // Gets all groups
  // Params takes a JSON object created from the request query (e.g., /api/groups?platform=PS4)
  getGroups: function(params) {
    return axios.get("/api/groups", {params});
  },
  // Gets the group with the given id
  getGroup: function(id) {
    console.log(id._id);
    return axios.get("/api/groups/" + id._id);
  },
  // Deletes the group with the given id
  deleteGroup: function(id) {
    return axios.delete("/api/groups/" + id._id);
  },
  // Saves a group to the database
  saveGroup: function(GroupData) {
    console.log(GroupData);
    return axios.post("/api/groups", GroupData);
  },
  // Updates the group with the given id
  updateGroup: function(groupData) {
    console.log(groupData);
    return axios.put("/api/groups/" + groupData._id, groupData);
  },
  joinGroup: function(groupData) {
    return axios.put("/api/groups/join/" + groupData.id, groupData);
  }

  
};
