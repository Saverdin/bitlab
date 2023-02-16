let a = +prompt()

let b = []

for( let i = 0; i < a; i++){
    b.push(prompt())
}
alert("Insert c")
let c = +prompt()


let d = 0

for ( let i = 0; i < a; i++) {
    
    if(b[i]==c){
        alert("Yes "+i)
    }
    else if(b[i]!=c){
        d=1
    }
}
if(d==1){
    alert("No")
}

Math