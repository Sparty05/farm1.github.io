function sendMail() {
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const serviceId = "service_7f2mctq";
    const templateId = "template_457sjzk";

    emailjs.send(serviceId, templateId, params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert('Message sent succesfully');
        })
        .catch((err) => console.log(err));

}
