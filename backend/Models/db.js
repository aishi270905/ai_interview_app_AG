import mongoose from "mongoose";




const connectDB =  () => {
   mongoose.connect(process.env.MONGO_URL)

  .then(() => {
    console.log("MongoBD connected");
  }).catch((err) => {
    console.log("connection error: ", err);
  })


}

export default connectDB;