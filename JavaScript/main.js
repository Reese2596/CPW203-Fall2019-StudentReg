var Student = (function () {
    function Student() {
    }
    return Student;
}());
var programAttribute = "data-program";
var AddressAttribute = "data-address";
var dateOfBirthAttribute = "data-dob";
window.onload = main;
function main() {
    var regBtn = document.querySelector("button");
    regBtn.onclick = processForm;
}
function processForm() {
    var disciple = getStudentFromForm();
    displayStudent(disciple);
    clearForm();
}
function getStudentFromForm() {
    var tempdisciple = new Student();
    tempdisciple.firstName = getInputValue("first-name");
    tempdisciple.lastName = getInputValue("last-name");
    tempdisciple.dateOfBirth = new Date(getInputValue("dob"));
    tempdisciple.mailingAddress = getInputValue("address");
    tempdisciple.programOfStudy = getInputValue("program");
    console.log(tempdisciple);
    return tempdisciple;
}
function getInputValue(id) {
    var element = document.getElementById(id);
    return element.value;
}
function displayStudent(disciple) {
    var newItem = document.createElement("li");
    newItem.innerText = disciple.firstName + " " + disciple.lastName;
    var list = document.querySelector("#student-list > ul");
    newItem.setAttribute(programAttribute, disciple.programOfStudy);
    newItem.setAttribute(AddressAttribute, disciple.mailingAddress);
    newItem.setAttribute(dateOfBirthAttribute, disciple.dateOfBirth.toString());
    newItem.onclick = showDiscipleData;
    list.appendChild(newItem);
}
function showDiscipleData() {
    var currListItem = this;
    var name = currListItem.innerText;
    var program = currListItem.getAttribute(programAttribute);
    document.querySelector("#display > h2").innerHTML = name;
    document.querySelector("#display > p").innerHTML = program;
}
function clearForm() {
    var allTextBoxes = document.querySelectorAll("input[type=text]");
    var dropDown = document.querySelector("select");
    dropDown.value = "";
    for (var i = 0; i < allTextBoxes.length; i++) {
        var currBox = allTextBoxes[i];
        currBox.value = "";
    }
}
