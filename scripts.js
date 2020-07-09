let button = null;

function init () {
    button = document.getElementById("takeoff")

    button.addEventListener("click", function() {
        alert("Confirm that the shuttle is ready for takeoff.")
      });
}



