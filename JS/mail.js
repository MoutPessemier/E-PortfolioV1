function init() {
    const feedback = document.getElementById('feedback');

    document.getElementById('mail').addEventListener('submit', e => {
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let message = document.getElementById('message');

        if (!name.value || !email.value || !message.value) {
            feedback.style.backgroundColor = 'rgba(170,4,34,0.7)';
            feedback.style.visibility = 'visible';
            feedback.innerHTML = "Check your entries!"
            setTimeout(() => {
                feedback.style.visibility = 'hidden';
            }, 3000);
            e.preventDefault();
        } else {

            feedback.style.backgroundColor = 'rgba(0,170,16,0.7)';
            feedback.style.visibility = 'visible';
            feedback.innerHTML = "Message sent!"
            name.innerHTML = "";
            email.innerHTML = "";
            message.innerHTML = "";
            setTimeout(() => {
                feedback.style.visibility = 'hidden';
            }, 3000);
        }
    })
}

window.onload = () => init();