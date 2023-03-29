var commandButton = document.getElementById("commandButton");

commandButton.addEventListener("click", function() {
    alert("Commande validée");
});

const validateEmail = (email) => { return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ );
};

$("#email").on("change", function() {
    if(validateEmail($("#email").val())){
        $("#email").css("background-color","green");
    } else {
        $("#email").css("background-color","red");
    }
})

/**/

$("#soumettre").on("click", function() {

    var nom = $("#nom").val()
    var email = $("#email").val()
    var message = $("#message").val()

    const request = new Request("http://localhost:3000/formulaire", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"nom": nom, "email": email, "message": message}),
    });

    fetch(request)
        .then((response) => {
            if(response.status === 200) {
                console.log(response.json())
            } else {
                console.error(response)
            }
        })
        .catch(error => {
            console.log(error)
        })
})