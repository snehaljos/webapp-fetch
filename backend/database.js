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
export async function getAllEmployeesByName(name){
    const [users]=await pool.query(`select * from employees where employees_name=?`,[name]);
    return (users[0]);
}

export async function getAllEmployeesById(id){
    const [users]=await pool.query(`select * from employees where employees_id=?`,[id]);
    return (users[0]);
}

export async function updateEmployees(id,email,name){
    const [response]=await pool.query(`
    update employees set employees_name = ?,employees_email=? where employees_id =?
    `,[name,email,id]);
    return response.affectedRows !==0 ? true :false ;
}

