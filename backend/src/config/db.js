import mongoose, { mongo } from 'mongoose'

export const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.log("Error Connecting to MongoDB", error)
        process.exit(1)
    }
}