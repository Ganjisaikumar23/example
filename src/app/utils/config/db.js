import mongoose from "mongoose";

export const DBconnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db is connected")
    } catch (error) {
        console.log(error)
        console.log("not connected")
    }
}