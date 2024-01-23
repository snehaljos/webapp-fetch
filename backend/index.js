import express from 'express';
import {getAllEmployees,getAllEmployeesById,updateEmployees} from './database.js';
const app=express();

//app.use(())
app.use(express.json());

app.listen(5000, () =>{
    console.log("listing to port 5000");
})

app.get("/employees",async (req,res) =>{
    console.log("GetAll invoked");
    const employees=await getAllEmployees();
    res.send(employees);
}) 

app.patch("/employees/update",async (req,res) =>{
    console.log("POST called");
    const {id,email,name} =req.body;
    const status=await updateEmployees(id,email,name);
    res.status( status ? 200 : 400).send();
})