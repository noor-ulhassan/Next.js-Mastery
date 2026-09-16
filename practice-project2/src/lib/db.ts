
import { connect } from "mongoose";

const mongoUrl = process.env.MONGO_URI
if (!mongoUrl) {
    throw new Error("Provide DB URL ")
}


let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }

}

const connectDb = async () => {
    if (cached.conn) {
        console.log("Cached Db connected")
        return cached.conn
    }
    if (!cached.promise) {
        cached.promise = connect(mongoUrl).then((c) => c.connection)
    }

    try {
        cached.conn = await cached.promise
        console.log("Db connected")
    } catch (error) {
        throw error
    }

    return cached.conn

}


export default connectDb