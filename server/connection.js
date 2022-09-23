const mysql = require('mysql')

var connection = mysql.createConnection({
   port: 3306,
   host: "localhost",
   user: "root",
   password: "123456",
   database: "crud_database"
})

connection.connect((err) => {
   if (err)
      console.log(err)
   else
      console.log(`started`)
})

module.exports = connection