import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({
        TripId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Trip"
        },
        start_loc : {
            type : Array
        },
        end_loc : {
            type : Array
        }
})

export const Detail = mongoose.model("Detail", detailSchema);