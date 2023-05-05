//CONFIG
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "13.126.200.203",
  user: "iems_admin",
  password: "iemsPa$$word@buildint",
  database: "db_iems"
});

con.connect((err)=>{
    if(err) {
        console.warn("Error in connection")
        console.warn(err)
    }
})

module.exports = con;