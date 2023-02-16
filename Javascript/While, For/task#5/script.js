
users = [

    {login:"ilyas", password: "qwerty"},

    {login:"eldar", password: "qqqqq"},

    {login:"assylkhan", password: "qweqwe"},

    {login:"anel", password: "asdasd"},

    {logi:"alibek", password: "aaaaaa"}

];

let log = prompt("Insert you login: ")

let pass = prompt("Insert you password: ")

let usersEnter=false;


for ( let u of users){

    if (u.login==log && u.password==pass){
        usersEnter=true;
        alert("Welcome, you are authenticated")
        break;
    }
    
}
if(!usersEnter){

    alert("User not found")
}

