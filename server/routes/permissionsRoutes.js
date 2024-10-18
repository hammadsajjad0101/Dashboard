// routes/permissionsRoutes.js
const express = require("express");
const Permission = require("../models/Permission");

const router = express.Router();

// Get all permissions
router.get("/", async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.json(permissions);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add a new permission
router.post("/addPermission", async (req, res) => {
  const { permission } = req.body;
  try {
    const newPermission = new Permission({ name: permission });
    await newPermission.save();
    res.json(newPermission);
  } catch (err) {
    res.status(400).json({ message: "Error adding permission" });
  }
});

// Update an existing permission
router.put("/updatePermission", async (req, res) => {
  const { oldPermission, newPermission } = req.body;
  try {
    const updatedPermission = await Permission.findOneAndUpdate(
      { name: oldPermission },
      { name: newPermission },
      { new: true }
    );
    if (!updatedPermission) {
      return res.status(404).json({ message: "Permission not found" });
    }
    res.json(updatedPermission);
  } catch (err) {
    res.status(400).json({ message: "Error updating permission" });
  }
});

// Delete a permission
router.delete("/deletePermission", async (req, res) => {
  const { permission } = req.body;
  try {
    const deletedPermission = await Permission.findOneAndDelete({
      name: permission,
    });
    if (!deletedPermission) {
      return res.status(404).json({ message: "Permission not found" });
    }
    res.json({ message: "Permission deleted" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting permission" });
  }
});

// Toggle a permission's active status
router.put("/togglePermission", async (req, res) => {
  const { permission, active } = req.body;
  try {
    const updatedPermission = await Permission.findOneAndUpdate(
      { name: permission.name },
      { active: active },
      { new: true }
    );
    if (!updatedPermission) {
      return res.status(404).json({ message: "Permission not found" });
    }
    res.json(updatedPermission);
  } catch (err) {
    res.status(400).json({ message: "Error toggling permission" });
  }
});

module.exports = router;
