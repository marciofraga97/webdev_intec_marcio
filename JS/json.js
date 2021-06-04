let usersDB = {
    "users":[
        {
            "id": 1,
            "user":"root",
            "pass": "root123"
        }
    ]
}

console.log(usersDB)



const db = require("users.json"); //import JSON file but this won't work in HTML

console.log(typeof db)

db.users.forEach(user=>{
    console.log(user)
})