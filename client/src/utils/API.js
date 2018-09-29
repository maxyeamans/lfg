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
    return axios.post("/api/users", userData);
  },
  //////////////////////////////////////////
  // Gets all profiles
  getProfiles: function() {
    return axios.get("/api/profiles");
  },
  // Gets the profile with the given id
  getProfile: function(id) {
    return axios.get("/api/profiles/" + id);
  },
  // Deletes the profile with the given id
  deleteProfile: function(id) {
    return axios.delete("/api/profiles/" + id);
  },
  // Saves a profile to the database
  saveProfile: function(profileData) {
    return axios.post("/api/profiles", profileData);
  },
  ////////////////////////////////////////////
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
    return axios.post("/api/groups", GroupData);
  }
};
