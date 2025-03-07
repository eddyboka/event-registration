import express from "express";
import mongoose from "mongoose";
import registrationRouter from "./routes/registration.js";

const app = express();

const port = 3003;

//checks for db
await mongoose.connect(process.env.MONGO_URI);

// mongoose.connect (conectionString).then(()=>{
//     console.log(`Database connected!`)
// }).catch((error)=>{
//     console.log(error)
// });

// use app
app.use(express.json());
app.use("/api/v1", registrationRouter);

//checks for server listening
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
