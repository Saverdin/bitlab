alert("INSERT [1] TO SEARCH BY NAME\nINSERT [2] TO SEARCH BY YEAR\nINSERT [3] TO SEARCH BY ENGINE VOLUME\nINSERT [4] TO SEARCH BY PRICE\nINSERT [5] TO EXIT")

let num = +prompt()


let cars = [

    { name: "Toyota", price: 120000, year: 2015, volume: 2.2 },

    { name: "Mercedes", price: 700000, year: 2018, volume: 3.8 },

    { name: "Toyota", price: 750000, year: 2013, volume: 2.0 },

    { name: "BMW", price: 1100000, year: 2011, volume: 3.0 },

    { name: "Lexus", price: 6000000, year: 2017, volume: 5.7 }

];

let Name = " "

if (num == 1) {
    alert("INSERT NAME OF CAR:")
    Name = prompt()
}
let text1=" "

for (let i = 0; i < cars.length; i++) {
    if (cars[i].name == Name) {
        text += (cars[i].name +" - "+ cars[i].price +" - "+ cars[i].year +" - "+ cars[i].volume+"\n")
    }
}
alert(text1)


let Startyear =" "
let Lastyear =" "

if( num == 2 ){
    alert("INSERT YEAR START FROM:")
    Startyear=+prompt()

    alert("INSERT YEAR ENDS FROM:")
    Lastyear=+prompt()
}

let text2=" "

for (let i = 0; i < cars.length; i++) {
    if (cars[i].year >= Startyear && cars[i].year <= Lastyear) {
        text2 += (cars[i].name +" - "+ cars[i].price +" - "+ cars[i].year +" - "+ cars[i].volume+"\n")
    }
}
alert(text2)


let StartVolume = " "
let LastVolume = " "

if( num == 3 ){
    alert("INSERT ENGINE VOLUME START FROM:")
    StartVolume = +prompt()

    alert("INSERT ENGINE VOLUME ENDS FROM:")
    LastVolume = +prompt()
}

let text3=" "

for (let i = 0; i < cars.length; i++) {
    if (cars[i].volume >= StartVolume && cars[i].volume <= LastVolume) {
        text3 += (cars[i].name +" - "+ cars[i].price +" - "+ cars[i].year +" - "+ cars[i].volume+"\n")
    }
}
alert(text3)


let Startprice = " "
let Lastprice = " "

if( num == 4 ){
    alert("INSERT PRICE START FROM:")
    Startprice = +prompt()

    alert("INSERT PRICE ENDS FROM:")
    Lastprice = +prompt()
}

let text4=" "

for (let i = 0; i < cars.length; i++) {
    if (cars[i].price >= Startprice && cars[i].price <= Lastprice) {
        text4 += (cars[i].name +" - "+ cars[i].price +" - "+ cars[i].year +" - "+ cars[i].volume+"\n")
    }
}
alert(text4)