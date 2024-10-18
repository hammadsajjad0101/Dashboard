const initialState = {
    permissions: [],
    isModalActive: false,
    newPermission: "",
    editMode: false,
    permissionToEdit: "",
  };
  
  const permissionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PERMISSIONS":
        return { ...state, permissions: action.payload };
      case "ADD_PERMISSION":
        return { ...state, permissions: [...state.permissions, action.payload] };
      case "UPDATE_PERMISSION":
        return {
          ...state,
          permissions: state.permissions.map((p) =>
            p.name === action.payload.oldName ? { ...p, name: action.payload.newName } : p
          ),
        };
      case "DELETE_PERMISSION":
        return {
          ...state,
          permissions: state.permissions.filter((p) => p.name !== action.payload),
        };
      case "TOGGLE_PERMISSION":
        return {
          ...state,
          permissions: state.permissions.map((p) =>
            p.name === action.payload.name ? { ...p, active: !p.active } : p
          ),
        };
      case "SET_MODAL_ACTIVE":
        return { ...state, isModalActive: action.payload };
      case "SET_NEW_PERMISSION":
        return { ...state, newPermission: action.payload };
      case "SET_EDIT_MODE":
        return { ...state, editMode: action.payload };
      case "SET_PERMISSION_TO_EDIT":
        return { ...state, permissionToEdit: action.payload };
      default:
        return state;
    }
  };
  
  export default permissionsReducer;
  