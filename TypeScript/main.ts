
/**
 * Represents a college Student
 */
class Student{
    firstName: string;
    lastName: string;
    dateOfBirth: Date;

    /**
     * street, city, state, zip
     */
    mailingAddress: string;

    /**
     * Program of study
     */
    programOfStudy: string;

    //constructor(fName, lName){
        //this.firstName = fName;
        //this.lastName = lName;
    //}
    
}

//This is test code
let stu = new Student();
stu.firstName = "Makayla";   //set
let fName = stu.firstName;  //get
stu.mailingAddress = "123 fake Street, Fake, Fake, 89375"
//************************************************************ */

window.onload = main;

function main(){
    let regBtn = document.querySelector("button");
    regBtn.onclick = processForm;
}

function processForm(){
    //Get the student information off the form
    let disciple:Student = getStudentFromForm();
    displayStudent(disciple);
    clearForm();
}

function getStudentFromForm():Student{
    let tempdisciple = new Student();
    tempdisciple.firstName = getInputValue("first-name");
    tempdisciple.lastName = getInputValue("last-name");
    tempdisciple.dateOfBirth = new Date(getInputValue("dob"));
    tempdisciple.mailingAddress = getInputValue("address");
    tempdisciple.programOfStudy =  getInputValue("program");
    console.log(tempdisciple);
    return tempdisciple;
}

function getInputValue(id:string):string{
    //return (<HTMLInputElement> document.getElementById(id)).value;
    let element = <HTMLInputElement> document.getElementById(id);
    return element.value;
}

function displayStudent(disciple:Student){
    let newItem = document.createElement("li");
    newItem.innerText = disciple.lastName + ", " + disciple.firstName;

    let list = document.querySelector("#student-list > ul");
    //add li element as a child to ul
    list.appendChild(newItem);
}

function clearForm(){}