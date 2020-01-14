

var timeBlock = document.querySelector(".input-group");
var save = document.querySelector(".fa fa-save");

timeblock.addEventListener("click", function () {
});

save.addEventListener("click", function () {
});


function timeBlock(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

signUpButton.addEventListener("click", function (event) {
    event.preventDefault();

    // set new submission
    localStorage.setItem("user", JSON.stringify(timeBlock));

    // get most recent submission
    var lastUser = JSON.parse(localStorage.getItem("timeBlock"));
    userFirstNameSpan.textContent = lastUser.firstName;
    userLastNameSpan.textContent = lastUser.lastName;
    userEmailSpan.textContent = lastUser.email;
    userPasswordSpan.textContent = lastUser.password;
}