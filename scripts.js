window.addEventListener("load", function() {

let button = null;
let flightstatus = null;
let background = null;
let spaceShuttleHeight = null;

function init () {
    button = document.getElementById("takeoff");
    flightstatus = document.querySelector("p");
    background = document.getElementById("shuttleBackground");
    spaceShuttleHeight = document.querySelector("p")

    button.addEventListener("click", function() {
        flightstatus.innerHTML = "Shuttle in flight"
    });

    button.addEventListener("click", function() {
        window.alert("Confirm that the shuttle is ready for takeoff.")
    });

    button.addEventListener("click", function() {
        background.style.background = "blue"
    });

    button.addEventListener("Click", function() {

    })
  }
})
window.onload = init;

