
let arr = []

while(true){
    let a = +prompt()
    if(a==0){
        break
    }
    else{
        arr.push(a)
    }

}
let Arr = []
for ( let i = 0; i<arr.length; i++){
    if(arr[i]>0){
        Arr.push(arr[i])
    }

}
alert(Arr)