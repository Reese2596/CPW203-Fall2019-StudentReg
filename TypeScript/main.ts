
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
/* 
    let stu = new Student();
    stu.firstName = "Makayla";   //set
    let fName = stu.firstName;  //get
    stu.mailingAddress = "123 fake Street, Fake, Fake, 89375" 
*/
//************************************************************ */

//Constant
const programAttribute = "data-program";
const AddressAttribute = "data-address";
const dateOfBirthAttribute = "data-dob";




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
    newItem.innerText = disciple.firstName + " " + disciple.lastName;
    let list = document.querySelector("#student-list > ul");

    //embed student data in list item
    newItem.setAttribute(programAttribute, disciple.programOfStudy);
    newItem.setAttribute(AddressAttribute, disciple.mailingAddress);
    newItem.setAttribute(dateOfBirthAttribute, disciple.dateOfBirth.toString());
    //console.log(newItem);

    newItem.onclick = showDiscipleData;
    //add li element as a child to ul
    list.appendChild(newItem);
}

/**
 * shows individual student when student <li> is clicked
 */
function showDiscipleData(){
    //console.log(this);
    let currListItem = <HTMLLIElement>this;
    let name = currListItem.innerText;
    let program = currListItem.getAttribute(programAttribute);
    //alert(name + program);
    document.querySelector("#display > h2").innerHTML = name;
    document.querySelector("#display > p").innerHTML = program;
}


function clearForm(){
    /*
    let regForm = <HTMLFormElement> document.getElementById(form name);
    regForm.reset();
    */
    let allTextBoxes = document.querySelectorAll("input[type=text]");

    let dropDown = document.querySelector("select")
    dropDown.value = "";

    for (let i = 0; i < allTextBoxes.length; i++) {
        let currBox = <HTMLInputElement>allTextBoxes[i];
        currBox.value = "";
    }
}