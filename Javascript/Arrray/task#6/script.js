
let arr = [];




while (true) {
    alert("PRESS 1 TO ADD STUDENT:\nPRESS 2 TO LIST STUDENT:\nPRESS 0 TO EXIT:")

    let PRESS = prompt()

    if (PRESS == 1) {

        alert("INSERT NAME:\nINSERT SURNAME:\nINSERT GPA:")

        let student = { Name: " ", Surname: " ", Gpa: " " }

        student.Name = prompt();
        student.Surname = prompt();
        student.Gpa = prompt();
        arr.push(student);



    }


    if (PRESS == 2) {
        let text = " "
        for (let i = 0; i < arr.length; i++) {
            text += (arr[i].Name + " - " + arr[i].Surname + " - " + arr[i].Gpa+'\n')
        }
        alert(text)
    }

    if (PRESS == 0) break;

}