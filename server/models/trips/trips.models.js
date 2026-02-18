import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({

    tripId : Number,
    
    total_trips : {
        type : Number
    }, 
    total_distance : {
        type : Number
    },
    locations_explored : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Detail"
    }]
})

export const Trip = mongoose.model("Trip", tripSchema);