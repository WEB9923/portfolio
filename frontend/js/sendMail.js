const form = document.querySelector('form'),
    fullname = form.getElementbyId('fullname'),
    lastname = form.getElementbyId('lastname'),
    email = form.getElementbyId('email'),
    subject = form.getElementbyId('subject'),
    message = form.getElementbyId('message');

let mailBody =
    `
        <div>
            <div>
                <h4>name:</h4>
                ${name.value}
            </div>
            <div>
                <h4>name:</h4>
                ${lastname.value}
            </div>
        </div>
    `

form.addEventListener('submit' , (e) => {
    e.preventDefault();

})

function sendMail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}
//Email.send({
//     SecureToken : "1e2ab1b3-ea29-41a8-8913-60c9bb0c3f1a",
//     Username : name.value,
//     To : 'amikochixladze1234@gmail.com',
//     From : email.value,
//     Subject : subject.value,
//     Body : mailBody,
// }).then(
//     message => alert(message)
// );