var templateParams = {
    from_name: document.getElementById("name").toString,
    Email: document.getElementById("emailaddress").toString,
    message: document.getElementById("msg").toString
};
function sendMail() {
emailjs.send('gmail', 'template_besheraj', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    }); return false; }