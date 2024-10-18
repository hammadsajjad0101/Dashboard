import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRoles,
  fetchPermissions,
  addRole,
  updateRole,
  deleteRole,
  toggleRole,
} from "../actions/rolesActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPen,
  faTrash,
  faToggleOn,
  faToggleOff,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

export default function Roles() {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.roles.roles);
  const permissions = useSelector((state) => state.roles.permissions);
  const loading = useSelector((state) => state.roles.loading);
  const permissionsError = useSelector((state) => state.roles.permissionsError);
  const [isModalActive, setIsModalActive] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [roleToEdit, setRoleToEdit] = useState(null);
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  useEffect(() => {
    dispatch(fetchRoles());
    dispatch(fetchPermissions());
  }, [dispatch]);

  const handleModalShow = (role = {}) => {
    setIsModalActive(true);
    setNewRole(role.name || "");
    setRoleToEdit(role._id || null);
    setEditMode(!!role.name);

    if (role.permissions) {
      const permissionsSelected = permissions.filter((p) =>
        role.permissions.includes(p.value)
      );
      setSelectedPermissions(permissionsSelected);
    } else {
      setSelectedPermissions([]);
    }
  };

  const handleModalClose = () => {
    setIsModalActive(false);
    setNewRole("");
    setEditMode(false);
    setRoleToEdit(null);
    setSelectedPermissions([]);
  };

  const handleSaveRole = () => {
    if (!newRole) {
      alert("Please enter a role");
      return;
    }

    const payload = {
      newRole,
      permissions: selectedPermissions.map((p) => p.value),
    };

    if (editMode) {
      dispatch(updateRole(roleToEdit, payload));
    } else {
      dispatch(addRole(payload));
    }
    handleModalClose();
  };

  const handleDeleteRole = (roleId) => {
    dispatch(deleteRole(roleId));
  };

  const handleToggleRole = (role) => {
    dispatch(toggleRole(role._id, !role.active));
  };

  const renderPermissions = (permissionsIds) => {
    return (
      permissionsIds
        .map((p) => {
          const permissionId = p._id || p;
          const permission = permissions.find(
            (perm) => perm.value === permissionId
          );
          return permission ? permission.label : null;
        })
        .filter(Boolean)
        .join(", ") || "No permissions"
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (permissionsError) {
    return <div>Error fetching permissions: {permissionsError}</div>;
  }

  const optionsWithDisabled = permissions.map((perm) => ({
    ...perm,
    isDisabled: selectedPermissions.some(
      (selected) => selected.value === perm.value
    ),
  }));

  return (
    <div className="roles-main">
      <div className="container roles-container">
        <button
          className="btn btn-success"
          onClick={() => handleModalShow()}
          style={{ position: "fixed", right: "15.3%", top: "18%" }}
        >
          <FontAwesomeIcon icon={faPlus} /> Add Role
        </button>

        <div className="row rounded-1 roles-header">
          <div className="col-sm-4 font-weight-bold">Roles</div>
          <div className="col-sm-5 font-weight-bold">Permissions</div>
          <div className="col-sm-3 font-weight-bold">Actions</div>
        </div>

        {Array.isArray(roles) && roles.length > 0 ? (
          roles.map((role, index) => (
            <div
              className={`row role-content-display ${
                role.active ? "active-role" : "inactive-role"
              }`}
              key={index}
              style={{ paddingLeft: "1rem" }}
            >
              <div className="col-4 p-3">{role.name}</div>
              <div className="col-5 p-3">
                {renderPermissions(role.permissions)}
              </div>
              <div className="col-3 p-3 role-actions">
                <FontAwesomeIcon
                  icon={faPen}
                  className="me-2 btn btn-secondary p-2"
                  onClick={() => role.active && handleModalShow(role)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="me-2 btn btn-danger p-2 delete-Role-icon"
                  onClick={() => handleDeleteRole(role._id)}
                />
                <FontAwesomeIcon
                  icon={role.active ? faToggleOn : faToggleOff}
                  onClick={() => handleToggleRole(role)}
                  title={role.active ? "Disable Role" : "Enable Role"}
                  className={`btn p-2 ${role.active ? "btn-primary" : "btn-dark"} `}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="row">
            <div className="col-12">No roles available</div>
          </div>
        )}

        {isModalActive && (
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-role">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {editMode ? "Edit Role" : "Add Role"}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleModalClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label label-heading">Role</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter role"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label label-heading">
                      Permissions
                    </label>
                    <Select
                      isMulti
                      options={optionsWithDisabled.filter(
                        (option) =>
                          !selectedPermissions.some(
                            (selected) => selected.value === option.value
                          )
                      )}
                      value={selectedPermissions}
                      onChange={setSelectedPermissions}
                      isDisabled={permissions.length === 0}
                      className="label-heading"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleModalClose}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSaveRole}
                  >
                    {editMode ? "Update" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
