import mongoose from "mongoose";

const locationSchema = mongoose.Schema({
    location: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const locationModel = mongoose.model("location", locationSchema);

export default locationModel;