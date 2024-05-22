var button = document.getElementById("Cookie");
var counter = document.getElementById("Cookie_counter");
var cookies = 0

// Add a click event listener to the button
button.addEventListener("click", function() {
// Function to execute when the button is clicked
cookies += 1;
});

function updateCookies(){
    counter.innerHTML = cookies;
}

var intervalId = setInterval(updateCookies, 1);