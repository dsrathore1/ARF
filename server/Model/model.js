import mongoose from "mongoose";

const Schema = await mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    contactNum: {
        type: Number,
        require: true
    },
    rank: {
        type: String
    },
    address: {
        type: String
    },
    operation_done: {
        type: Array
    },
    certificate: {
        type: Array
    },
    role: {
        type: String,
        require: true,
        default: "Volunteer"
    }
});

const model = new mongoose.model("member", Schema);

export default model;