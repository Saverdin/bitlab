let a = parseInt(prompt())
let b;

let d = (a/380).toFixed(2)
let c = Math.floor(d)
let e = a/380-c
let f = (e*100).toFixed(0)


if(a%380!=0){
    
    alert(`${c} USD and cents${f}`)
}
else{
    alert(`ONLY ${d} USD`)
}


//118 USD and 42 cents        ONLY 100 USD