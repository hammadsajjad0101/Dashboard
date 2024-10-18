export const setPermissions = (permissions) => ({
  type: "SET_PERMISSIONS",
  payload: permissions,
});

export const addPermission = (permission) => ({
  type: "ADD_PERMISSION",
  payload: permission,
});

export const updatePermission = (oldName, newName) => ({
  type: "UPDATE_PERMISSION",
  payload: { oldName, newName },
});

export const deletePermission = (name) => ({
  type: "DELETE_PERMISSION",
  payload: name,
});

export const togglePermission = (permission) => ({
  type: "TOGGLE_PERMISSION",
  payload: permission,
});

export const setModalActive = (isActive) => ({
  type: "SET_MODAL_ACTIVE",
  payload: isActive,
});

export const setNewPermission = (permission) => ({
  type: "SET_NEW_PERMISSION",
  payload: permission,
});

export const setEditMode = (mode) => ({
  type: "SET_EDIT_MODE",
  payload: mode,
});

export const setPermissionToEdit = (permission) => ({
  type: "SET_PERMISSION_TO_EDIT",
  payload: permission,
});
