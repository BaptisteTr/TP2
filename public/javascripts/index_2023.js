var element = document.getElementById("command-button");
element.addEventListener("click", function() {
  alert("Commande validée");
});

var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (email) => { return regex.test(String(email).toLowerCase())};

$("#email").on("change", () => {
  if(validateEmail($("#email").val())) {
    email.style.backgroundColor = "green";
    } else {
      email.style.backgroundColor = "red";
    };
})