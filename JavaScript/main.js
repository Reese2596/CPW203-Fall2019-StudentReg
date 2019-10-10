var Student = (function () {
    function Student() {
    }
    return Student;
}());
var stu = new Student();
stu.firstName = "Makayla";
var fName = stu.firstName;
stu.mailingAddress = "123 fake Street, Fake, Fake, 89375";
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
    newItem.innerText = disciple.lastName + ", " + disciple.firstName;
    var list = document.querySelector("#student-list > ul");
    list.appendChild(newItem);
}
function clearForm() { }
