import express from 'express';
import {getAllEmployees,getAllEmployeesById} from './database.js';
const app=express();

//app.use(())


app.listen(5000, () =>{
    console.log("listing to port 5000");
})

app.get("/employees",async (req,res) =>{
    console.log("GetAll invoked");
    const employees=await getAllEmployees();
    res.send(employees);
}) 