document.getElementById("emergencyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let problem = document.getElementById("problem").value;
    let amount = document.getElementById("amount").value;

    let message = "Request submitted by " + name + " for ₹" + amount + " regarding " + problem;

    document.getElementById("result").innerText = message;
});