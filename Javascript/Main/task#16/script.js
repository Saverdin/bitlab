let a = parseInt(prompt())

let b = a%60
let d = a/60
 
if(a%60!=0)
{
let c = Math.floor(a/60)
alert( ` ${c} HOURS and ${b} MINUTES ` )
}

else{
    alert( ` ONLY ${d} HOURS ` )
}
