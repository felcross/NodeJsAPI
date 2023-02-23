import mongoose from "mongoose";

// abrindo a conexão
mongoose.connect("mongodb+srv://feljava32:xo7qOJc8Ji8bUYFi@cluster0.db8pwob.mongodb.net/alura-node")

// var que contem a conexão
let db = mongoose.connection

export default db