const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  active: { type: Boolean, default: true },
});

const Permission = mongoose.model("Permission", permissionSchema);

module.exports = Permission;
