const express = require("express");

const app = express();

const port = 5000;

// app.get("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"Get all contact"});
// });

// app.get("/api/contacts/:id",(req,res)=>{
//     res.status(200).json({message:`${req.params.id}`});
// });

// app.post("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"post a contact"});
// });

// app.put("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"update contact"});
// });

// app.delete("/api/contacts",(req,res)=>{
//     res.status(200).json({message:"delete contact"});
// });


// app.listen(port,()=>{
//     console.log(`Server running onn port ${port}`);
// })

const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server running onn port ${port}`);
});