let autor = prompt( "Insert Autor: ")

Books = [

    { Name:"War and Piece", Autor:"Tolstoy", ISBN:"01212", Price:20000 },
    { Name:"War", Autor:"Pushkin", ISBN:"03232", Price:20000 },
    { Name:"WarPiece", Autor:"Tolstoy", ISBN:"04545", Price:20000 },
    { Name:"Piece", Autor:"Pushkin", ISBN:"05454", Price:20000 },    
    { Name:"War and ", Autor:"Vasya", ISBN:"09191", Price:20000 }, 
    { Name:"and Piece", Autor:"Pushkin", ISBN:"08181", Price:20000 },
    { Name:"War Piece", Autor:"Vasya", ISBN:"07575", Price:20000 } 

]



for ( let i = 0; i < Books.length; i++){
    
    if(Books[i].Autor==autor){

        alert(Books[i].Name +" " +Books[i].Autor +" "+ Books[i].ISBN +" "+ Books[i].Price)
    }

}

