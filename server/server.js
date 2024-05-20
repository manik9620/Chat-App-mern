const express =require ("express")
const cors=require("cors");
const mongoose=require("mongoose")
const colors=require("colors");
const userRoutes =require("./routes/userRoutes")

const app=express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Successfully Connected to Database".bgGreen.white);
}).catch((err)=>{
    console.log(err.message.bgRed.white);

})

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})