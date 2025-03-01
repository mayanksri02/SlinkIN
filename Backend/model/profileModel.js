import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    bio: {
      type: String,
    },
    location: {
      type: String,
    },
    about: {
      type: String,
    },
    posts: {
      type: Array,
    },
    experience: {
      type: Object,
    },
    education: {
      type: Object,
    },
    skills: {
      type: Array,
    },
  },
  { collection: "profiles" }
);

export const Profile = mongoose.model("Profile", profileSchema);
