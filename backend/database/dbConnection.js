import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://munanira64:KYBjxfKGACk2sQez@cluster0.uwxawis.mongodb.net/EVENT-MANAGEMENT-SYSTEM?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
