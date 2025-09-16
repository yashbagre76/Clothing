

const  express = require("express")
const cors = require("cors")

const app = express();
const port = 5000;

//Middleware 

app.use(cors());
app.use(express.json()); //it allows  us to  read  json from frontend;

//Routes
app.get("/", (req,res)=> {
    res.send("Backend is Working")
})

//Example  API routes

app.get("/api/data" ,(req,res ) =>{
    res.json({message:"Hello from backend "})
})


//start server 

app.listen(port, () => {
    console.log(`Server is Running on https://localhost:${port}`);
}) 