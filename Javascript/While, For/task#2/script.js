let a = parseInt(prompt())

let b =[]
let max = 1

for( let i = 0; i<a; i++){
    let c = parseInt(prompt())

    b.push(c)
}

for( let i = 0; i < a; i++){          //2 8 5 4 3
    if (max<b[i]){
        max=b[i]
    }
}

alert(max)
