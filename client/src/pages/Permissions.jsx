import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setPermissions,
  addPermission,
  updatePermission,
  deletePermission,
  togglePermission,
  setModalActive,
  setNewPermission,
  setEditMode,
  setPermissionToEdit,
} from "../actions/permissionsActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPen,
  faTrash,
  faToggleOn,
  faToggleOff,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Permissions() {
  const dispatch = useDispatch();
  const {
    permissions,
    isModalActive,
    newPermission,
    editMode,
    permissionToEdit,
  } = useSelector((state) => state.permissions);

  useEffect(() => {
    axios
      .get("http://localhost:3001/permissions")
      .then((response) => {
        dispatch(setPermissions(response.data));
      })
      .catch((err) => {
        console.log("Could not fetch permissions:", err);
      });
  }, [dispatch]);

  // Modal control
  const handleModalShow = (permission = "") => {
    if (permission && !!permission.active) return;
    dispatch(setModalActive(true));
    dispatch(setNewPermission(permission));
    dispatch(setPermissionToEdit(permission));
    dispatch(setEditMode(!!permission));
  };

  const handleModalClose = () => {
    dispatch(setModalActive(false));
    dispatch(setNewPermission(""));
    dispatch(setEditMode(false));
    dispatch(setPermissionToEdit(""));
  };

  // Save or Update Permission
  const handleSavePermission = () => {
    if (!newPermission) {
      alert("Please enter a permission");
      return;
    }

    if (editMode) {
      axios
        .put("http://localhost:3001/permissions/updatePermission", {
          oldPermission: permissionToEdit,
          newPermission,
        })
        .then(() => {
          dispatch(updatePermission(permissionToEdit, newPermission));
          handleModalClose();
        })
        .catch((err) => {
          console.log("Could not update permission:", err);
        });
    } else {
      axios
        .post("http://localhost:3001/permissions/addPermission", {
          permission: newPermission,
        })
        .then((response) => {
          dispatch(addPermission({ name: newPermission, active: true }));
          handleModalClose();
        })
        .catch((err) => {
          console.log("Could not add permission:", err);
        });
    }
  };

  // Delete Permission
  const handleDeletePermission = (permission) => {
    axios
      .delete("http://localhost:3001/permissions/deletePermission", {
        data: { permission: permission.name },
      })
      .then(() => {
        dispatch(deletePermission(permission.name));
      })
      .catch((err) => {
        console.log("Could not delete permission:", err);
      });
  };

  // Toggle permission
  const handleTogglePermission = (permission) => {
    const updatedPermission = { ...permission, active: !permission.active };
    axios
      .put("http://localhost:3001/permissions/togglePermission", {
        permission: updatedPermission,
        active: updatedPermission.active,
      })
      .then(() => {
        dispatch(togglePermission(permission));
      })
      .catch((err) => {
        console.log("Could not toggle permission:", err);
      });
  };

  return (
    <div className="permissions-main">
      <div className="container permissions-container">
        <button
          className="btn btn-success addPermission-icon"
          onClick={() => handleModalShow()}
        >
          <FontAwesomeIcon className="pe-1" icon={faPlus} />
          Add Permission
        </button>
        <div className="row permissions-header">
          <div className="col-sm-6">Permissions</div>
          <div className="col-sm-6">Actions</div>
        </div>

        {permissions.length > 0 ? (
          permissions.map((permission, index) => (
            <div
              className={`row permission-content-display ${
                permission.active ? "active-permission" : "inactive-permission"
              }`}
              key={index}
            >
              <div className="col-sm-6 p-3">{permission.name}</div>
              <div className="col-sm-6 py-3 permission-actions">
                <FontAwesomeIcon
                  icon={faPen}
                  className={`editPermission-icon btn btn-secondary p-2 ${
                    !permission.active ? "disabled" : ""
                  }`}
                  onClick={() =>
                    permission.active && handleModalShow(permission.name)
                  }
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="deletePermission-icon btn btn-danger p-2"
                  onClick={() => handleDeletePermission(permission)}
                />
                <FontAwesomeIcon
                  icon={permission.active ? faToggleOn : faToggleOff}
                  className={`btn p-2 ${
                    permission.active ? "btn-primary" : "btn-dark"
                  }`}
                  onClick={() => handleTogglePermission(permission)}
                  title={
                    permission.active
                      ? "Disable Permission"
                      : "Enable Permission"
                  }
                />
              </div>
            </div>
          ))
        ) : (
          <p>No permissions found</p>
        )}

        {isModalActive && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-permission">
              <div className="modal-content">
                <div
                  className="modal-header d-flex justify-content-between"
                  style={{ border: "none" }}
                >
                  <h5 className="modal-title">
                    {editMode ? "Edit Permission" : "Add Permission"}
                  </h5>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="permission-modal-close"
                    onClick={handleModalClose}
                  />
                </div>
                <div className="modal-body p-3 pb-4">
                  <div className="form-group">
                    <label className="pb-2">Permission:</label>
                    <input
                      type="text"
                      value={newPermission}
                      onChange={(e) =>
                        dispatch(setNewPermission(e.target.value))
                      } // Correct way to dispatch
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn px-4"
                    onClick={handleModalClose}
                    style={{ backgroundColor: "#27293d", color: "white" }}
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-primary px-5"
                    onClick={handleSavePermission}
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
