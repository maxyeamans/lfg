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
    console.log("api", userData);
    return axios.post("/api/login", userData);
  },
  getLogin: function() {
    return axios.get("/api/login");
  },
  
  /////////////////////////////////////////////////////////////////////////
  // // Gets all profiles
  // getProfiles: function() {
  //   return axios.get("/api/profiles");
  // },
  // // Gets the profile with the given id
  // getProfile: function(id) {
  //   return axios.get("/api/profiles/" + id);
  // },
  // // Deletes the profile with the given id
  // deleteProfile: function(id) {
  //   return axios.delete("/api/profiles/" + id);
  // },
  // // Saves a profile to the database
  // saveProfile: function(profileData) {
  //   return axios.post("/api/profiles", profileData);
  // },
  // // Updates the profile with the given id
  // updateProfile: function(id) {
  //   return axios.update("/api/profiles/" + id);
  // },
  ////////////////////////////////////////////////////////////////////////////////
  // Gets all groups
  getGroups: function() {
    return axios.get("/api/groups");
  },
  // Gets the group with the given id
  getGroup: function(id) {
    return axios.get("/api/groups/" + id);
  },
  // Deletes the group with the given id
  deleteGroup: function(id) {
    return axios.delete("/api/groups/" + id);
  },
  // Saves a group to the database
  saveGroup: function(GroupData) {
    console.log(GroupData);
    return axios.post("/api/groups", GroupData);
  },
  // Updates the group with the given id
  updateGroup: function(id) {
    return axios.update("/api/groups/" + id);
  },
  
};
