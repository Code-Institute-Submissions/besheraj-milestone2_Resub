var templateParams = {
    from_name: document.getElementById("name").value,
    Email: document.getElementById("emailaddress").value,
    message: document.getElementById("msg").value
};
function sendMail() {
emailjs.send('gmail', 'template_besheraj', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    }); return false; }