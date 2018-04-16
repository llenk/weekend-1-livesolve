console.log('hello');

const employeeList = [];

$(document).ready(doWhenReady);

function doWhenReady() {
    console.log('jquery good');
    $('#btn-add').on('click', addEmployee);
}

function Employee(firstName, lastName, id, title, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.title = title;
    this.salary = salary;
}

function addEmployee() {
    //make employee
    const employee = new Employee(
        $('#in-first').val(),
        $('#in-last').val(),
        $('#in-id').val(),
        $('#in-title').val(),
        $('#in-salary').val(),
    );
    //clear input fields
    $('input').val('');

    // add to DOM
    $('#out-employees').append(`<p>${employee.firstName}</p>`);
}

function calculateTotalMonthlyCost() {
    +
}