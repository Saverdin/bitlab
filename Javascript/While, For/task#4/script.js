let a = +prompt()

let b = []
let c = []

for ( let i = 0; i < a; i++){

    b.push(prompt())
}

for (let j = 0; j < a; j++){
    
    c.push(b[j]*b[j])

    
}  alert(c)

