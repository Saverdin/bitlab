alert("INSERT YOUR AMOUNT IN KZT:\n1- CONVERT TO USD\n2- CONVERT TO EUR\n3- CONVERT TO GBP")

let tg = parseInt(prompt())
let k = parseInt(prompt())

if(k==1){
    let a=(tg/380).toFixed(2)
    let b=`${tg} KZT = ${a}USD`
    alert(b)
}
else if(k==2){
    let a=(tg/430).toFixed(2)
    
    let b=`${tg} KZT = ${a}EUR`
    alert(b)
}
else if(k==3){
    let a=(tg/480).toFixed(2)
    let b=`${tg} KZT = ${a}GBP`
    alert(b)
}








