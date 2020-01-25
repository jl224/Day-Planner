console.log("javascript loaded")
// Grab the HTML elements and convert to Javascript variables
var timeBlock = document.querySelector(".input-group");
var saveEntry = document.querySelector(".fa-save");

var timer = setInterval(showColor, 60000)

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
    var input = $(this).siblings(".form-Control").val()
    var hour = $(this).siblings(".form-Control").attr("id")
    console.log(input, hour)

    // save on localstorage
    plan[hour] = input
    console.log(plan)
    localStorage.setItem("plan", JSON.stringify(plan))

})

// change the colors of the input area based on the current time
function showColor() {
    // get the current time  // use moment
    var current = moment().format("MMMM Do YYYY, h:mm a")
    $("#currentDay").text(current)
    var hour = moment().hours()
    console.log("current hour", hour)

    //  msg8  past present future
    $(".form-Control").each(function () {
        var id = $(this).attr("id")
        var time = parseInt(id.slice(3))
        console.log("time", time)

        if (time < hour) {
            $(this).addClass("past")
        }
        else if (time === hour) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }
    })
}

//create function to save content
function timeBlock(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

showInfo()
showColor()


