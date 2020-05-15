//create CSS and setup page
$(document).ready(function () {
var appointments=[];
var startDate;
var subject;
var endDate;
var location;
var appointment;
var i = 0;

function newAppointment () {
    var startDate = prompt('please input the starting day and time');
    var length = prompt('please input the time length (in minutes)');
    var location = prompt('Where is the appointment being held?');
    var subject = prompt('What is the appointment about?');
    i++;
     var appointment = {
        startDate,
        length,
        location,
        subject,
    }
    appointments.push(appointment[i])
    function addAppointment(){}
};

function addAppointment(){
    $("#startDate").innerHTML = appointment[i]
};

$(".tblock").addEventListener("click", function (){
    var location = prompt('Please input the location of the event');
    var subject = prompt('What is the subject of the event?');
    text = `${subject}`+ "at/in" + `${location}`
});

//var lookhour = moment().hour()


var date = moment().format('ll');
var displayDate = document.getElementById('currentDay');
displayDate.innerHTML = `${date}`



})
//End