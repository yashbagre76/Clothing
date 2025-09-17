

const  express = require("express")
const cors = require("cors")
const mongoose = require("mongoose") 
require("dotenv").config()

const app = express();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

//Middleware (these i run before  your routes)

app.use(cors());
app.use(express.json());       //it allows  us to  read  json from frontend;
app.use('/upload' , express.static('upload')) ; //server  upload images

//Routes
app.get("/", (req,res)=> {
    res.send("Backend is Working")
})

//Example  API routes

app.get("/" ,(req,res ) =>{
    res.json({message:"Ecommerce backend is working  "})
})


//start server 

app.listen(port, () => {
    console.log(`Server is Running on https://localhost:${port}`);
}) 

//connect mongoose 
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("connect to  mongoDB")).catch((err)=>console.log("MongoDB connection eorr" , err))
