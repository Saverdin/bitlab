let a = +prompt()

let arr = []

for ( let i = 0; i < a; i++){
    arr.push(+prompt())
}
let b=1
for (let i = 0; i<a; i++){
    if(arr[i]!=0){
        b *= arr[i]
    }

}
alert(b)