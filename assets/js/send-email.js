function sendMail() {
  var templateParams = {
    from_name: document.getElementById("name").value,
    Email: document.getElementById("emailaddress").value,
    message: document.getElementById("msg").value,
  };

  emailjs.send("gmail", "template_besheraj", templateParams).then(
    function (response) {
      $.alert({
        title: "Success!",
        content: "Your message has been sent!",
        type: "green",
      });
      document.getElementById("name").value = "";
      document.getElementById("msg").value = "";
      document.getElementById("emailaddress").value = "";
      setTimeout(function(){window.location.href="#playnow"},5000);
    },
    function (error) {
      $.alert({
        title: "Error!",
        content: "Something went wrong!... please try again later!",
        type: "red",
      });
    }
  );
  return false;
}
