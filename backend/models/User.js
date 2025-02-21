const mongoose = require("mongoose");
const ROLES = require("../constants/roles");

const UserSchema = mongoose.Schema(
    {
        login: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: Number,
            default: ROLES.USER,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema, "users");

module.exports = User;
