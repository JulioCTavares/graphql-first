import mongoose from "mongoose";

const uri = process.env.MONGO

try {
  mongoose.connect(uri, {},
  () => console.log("Mongoose is Connected"))
} catch (err) {
  console.log(`err: ${err}`)
}