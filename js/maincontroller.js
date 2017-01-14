// Get pin from user and initialize it as output
var pin = 15;//prompt("Enter GPIO pin", "15");

// Disable Scrolling
$(document).bind('touchmove', false);

$(document).ready(function(){
    var button = $("button");
    
    $.post("/php/setup.php", {pin: pin}, function(data, status) {
        var elStatus = $("#status");

        console.log(data);
        console.log(status);

        if (data == pin) {
            elStatus.css("color", "#0b0");
            elStatus.text("Connected to pin " + pin);
        } else {
            elStatus.css("color", "red");
            elStatus.text("Error");
        }
    }, "text");

    // Button Handler
    button.on("mouseup touchend", function(e){
        e.preventDefault();
        $.get("/php/launch.php");
        button.css("background", "red");
        button.text("LAUNCHING");
        setTimeout(function(){
            button.css("background", "#0b0");
            button.text("DONE");
        }, 2000);
    });
});