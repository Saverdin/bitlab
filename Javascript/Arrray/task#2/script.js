
let b = []
let c =0 

while (true) {
    let a = +prompt()
    if (a==0) {
        break;
    }
    else{
        b.push(a)
    }
} 

let d = 1

for ( let i = 0; i < b.length; i++){
    d = d*b[i]
}

alert((Math.pow(d,1/b.length)).toFixed(3))
