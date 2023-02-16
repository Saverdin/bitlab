let a = +prompt()

let b = []

let c = 0

for ( let i = 0; i < a; i++){
    b.push(+prompt())
    c = c+b[i]
    
}
let d = c/a
alert(c+" "+d)