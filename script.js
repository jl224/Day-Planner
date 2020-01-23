console.log("javascript loaded")
// Grab the HTML elements and convert to Javascript variables
var timeBlock = document.querySelector(".input-group");
var saveEntry = document.querySelector(".fa-save");

var plan = JSON.parse(localStorage.getItem("plan"))  // store key and a string
if (!plan) {
    plan = {}
}



function showInfo() {

    for (key in plan) {
        console.log(key, plan[key])
        $("#" + key).val(plan[key])   // $("#msg8")
    }
}


$(".input-group-addon").on("click", function () {
    console.log("click the whole button")

    event.preventDefault();
    console.log("clicked")
    var input = $(this).siblings(".form-control").val()
    var hour = $(this).siblings(".form-control").attr("id")
    console.log(input, hour)

    // save on localstorage
    plan[hour] = input
    console.log(plan)
    localStorage.setItem("plan", JSON.stringify(plan))

})

// change the colors of the input area based on the current time
function showColor() {
    // get the current time  // use moment
    var current = moment().format("dddd, MMMM Do")
    $("#currentDay").text(current)
    var hour = moment().hours()

    //
}

//create function to save content
function timeBlock(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}




showInfo()
showColor()


