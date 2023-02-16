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