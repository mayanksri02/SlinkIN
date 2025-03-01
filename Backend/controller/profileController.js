import { Profile } from "../model/profileModel.js";

export const setProfile = async (req, res) => {
  try {
    const email = req.user.email;
    if (!email) {
      return res.status(401).json({ error: "Unauthorized: No email found" });
    }
    const { ...formData } = req.body;
    await Profile.updateOne({ email }, { $set: formData }, { upsert: true });
    res.json({ message: "Data saved successfully." });
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.query.email });
    if (!profile) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
