import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [status, setStatus] = useState("active");
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const [selectedRoles, setSelectedRoles] = useState([]);

  // Fetch users from the database
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch roles from the database
  const fetchRoles = async () => {
    try {
      const response = await axios.get("http://localhost:3001/roles");
      console.log("Fetched roles:", response.data);
      setRoles(response.data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  const handleEditClick = (user) => {
    if (adding) setAdding(false);
    setSelectedUser(user);
    setNewUser({ name: user.name, email: user.email, password: "" });
    setStatus(user.status);
    setSelectedRoles(user.roles ? user.roles.map((role) => role._id) : []);
    setEditing(true);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUpdate = async () => {
    const updatedUser = {
      ...selectedUser,
      ...newUser,
      status,
      roles: selectedRoles,
    };

    // Remove password field if it's empty or not being updated
    if (!updatedUser.password) {
      delete updatedUser.password;
    }

    console.log("Updating user:", updatedUser);

    try {
      const response = await axios.put(
        `http://localhost:5000/api/users/${updatedUser._id}`,
        updatedUser
      );
      console.log("Update response:", response.data);
      const updatedUserFromResponse = response.data.user;

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === updatedUserFromResponse._id
            ? updatedUserFromResponse
            : user
        )
      );
    } catch (error) {
      if (error.response && error.response.data) {
        // Log the specific error response from the backend
        console.error("Error updating user:", error.response.data.errors);
      } else {
        console.error("Error updating user:", error.message);
      }
    }

    setEditing(false);
    setNewUser({ name: "", email: "", password: "" });
    setSelectedRoles([]);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleAddClick = () => {
    if (editing) setEditing(false);
    setAdding(true);
    setNewUser({ name: "", email: "", password: "" });
    setStatus("active");
    setSelectedRoles([]);
  };

  const handleAddUser = async () => {
    const newUserWithRoles = {
      ...newUser,
      status,
      roles: selectedRoles,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/users",
        newUserWithRoles
      );

      // Optionally update the local state immediately
      setUsers((prevUsers) => [...prevUsers, response.data]);

      await fetchUsers();
    } catch (error) {
      console.error("Error adding user:", error);
    }

    setAdding(false);
    setNewUser({ name: "", email: "", password: "" });
    setSelectedRoles([]);
  };

  const handleRoleSelectChange = (selectedOptions) => {
    setSelectedRoles(
      selectedOptions ? selectedOptions.map((opt) => opt.value) : []
    );
  };

  const roleOptions = roles.map((role) => ({
    value: role._id,
    label: role.name,
  }));

  return (
    <div className="container users-main">
      <div className="position-relative users-container">
        {editing && (
          <div className="edit-container card p-3">
            <button
              className="close-btn btn btn-close"
              onClick={() => setEditing(false)}
            />
            <h3>Edit User</h3>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Name"
                value={newUser.name}
                onChange={handleNewUserChange}
                required
              />
              <select
                value={status}
                onChange={handleStatusChange}
                className="form-select mt-2"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <input
              className="form-control mb-2"
              type="email"
              name="email"
              placeholder="Email"
              value={newUser.email}
              onChange={handleNewUserChange}
              required
            />
            <input
              className="form-control mb-2"
              type="password"
              name="password"
              placeholder="Password"
              value={newUser.password}
              onChange={handleNewUserChange}
            />
            <div className="select-roles mb-3">
              <h5>Select Roles</h5>
              <Select
                isMulti
                value={roleOptions.filter((option) =>
                  selectedRoles.includes(option.value)
                )}
                onChange={handleRoleSelectChange}
                options={roleOptions}
              />
            </div>
            <div className="btn-group">
              <button className="btn btn-primary" onClick={handleUpdate}>
                Update
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {adding && (
          <div className="edit-container card p-3">
            <button
              className="close-btn btn btn-close"
              onClick={() => setAdding(false)}
            />
            <h3>Add New User</h3>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Name"
                value={newUser.name}
                onChange={handleNewUserChange}
                required
              />
              <select
                value={status}
                onChange={handleStatusChange}
                className="form-select mt-2"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <input
              className="form-control mb-2"
              type="email"
              name="email"
              placeholder="Email"
              value={newUser.email}
              onChange={handleNewUserChange}
              required
            />
            <input
              className="form-control mb-2"
              type="password"
              name="password"
              placeholder="Password"
              value={newUser.password}
              onChange={handleNewUserChange}
            />
            <div className="select-roles mb-3">
              <h5>Select Roles</h5>
              <Select
                isMulti
                value={roleOptions.filter((option) =>
                  selectedRoles.includes(option.value)
                )}
                onChange={handleRoleSelectChange}
                options={roleOptions}
              />
            </div>
            <div className="btn-group">
              <button className="btn btn-primary" onClick={handleAddUser}>
                Add User
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setAdding(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        <div style={{ position: "absolute", right: "-1%", top: "-9%" }}>
          <button className="btn btn-success" onClick={handleAddClick}>
            <FontAwesomeIcon icon={faPlus} /> Add User
          </button>
        </div>

        <div className="row users-header mb-2 fw-bold">
          <div className="col-3">Name</div>
          <div className="col-3">Email</div>
          <div className="col-2">Status</div>
          <div className="col-2">Roles</div>
          <div className="col-2">Actions</div>
        </div>

        {/* User Data Rows */}
        {users.map((user) => (
          <div className="row ps-3 user-content-display" key={user._id}>
            <div className="col-3 p-3">{user.name}</div>
            <div className="col-3 p-3">{user.email}</div>
            <div className="col-2 p-3">{user.status}</div>
            <div className="col-2 p-3">
              {user.roles
                ? user.roles.map((role) => role.name).join(", ")
                : "None"}
            </div>
            <div className="col-2 py-3">
              <button
                onClick={() => handleEditClick(user)}
                className="btn btn-secondary p-2"
              >
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button
                onClick={() => handleDelete(user._id)}
                className="btn btn-danger ms-2 p-2"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
