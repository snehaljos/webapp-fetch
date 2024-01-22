import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
const pool=mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();
export async function getAllEmployees(){
    const [users]=await pool.query("select * from employees");
    return (users);
}
export async function getAllEmployeesById(id){
    const [users]=await pool.query(`select * from employees where employees_id=?`,[id]);
    return (users[0]);
}


