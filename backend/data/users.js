import bcrypt from "bcryptjs"

const users = [{
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true

},


{
    name: 'Dhiraj Bariyait',
    email: 'dhiraj@example.com',
    password: bcrypt.hashSync('123456', 10),


},


{
    name: 'Aditya Bariyait',
    email: 'aditya@example.com',
    password: bcrypt.hashSync('123456', 10),


},



]

export default users