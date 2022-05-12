import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/Travels", {
    
}).then(db => console.log("La base de datos se conecto correctamente"))
  .catch(error => console.log(error));