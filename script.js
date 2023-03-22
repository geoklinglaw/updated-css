



function sendMail() {
    event.preventDefault();

    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const serviceID = 'service_ce9bhnh';
    const templateID = 'template_3fysvf3';

    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";

                console.log(res);
            
                alert('Thank you for your message! I will get back to you soon!');
        })
        .catch((err) => console.error('Failed to send feedback. Error: '));
}

// const form = document.getElementById('contact-form');
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     const inputs = document.querySelectorAll('#name, #email', '#message');

//     inputs.forEach(input => {
//         input.value = '';
//     });

//     const textarea = document.getElementById('message');
//     textarea.value = '';



//     alert('Thank you for your message! I will get back to you soon!');
