window.addEventListener("load", function() {



    let takeoff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus")
    let background = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")

    takeoff.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff")
        if(response) {
            flightStatus.innerHTML = "Shuttle in flight";
            background.style.background = "blue"
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    };
  })
})

