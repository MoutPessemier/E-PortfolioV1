// function init() {
//     const feedback = document.getElementById('feedback');

//     document.getElementById('mail').addEventListener('submit', e => {
//         let name = document.getElementById('name');
//         let email = document.getElementById('email');
//         let message = document.getElementById('message');

//         if (!name.value || !email.value || !message.value) {
//             feedback.style.backgroundColor = 'rgba(170,4,34,0.7)';
//             feedback.style.visibility = 'visible';
//             feedback.innerHTML = "Check your entries!"
//             setTimeout(() => {
//                 feedback.style.visibility = 'hidden';
//             }, 3000);
//             e.preventDefault();
//         } else {

//             feedback.style.backgroundColor = 'rgba(0,170,16,0.7)';
//             feedback.style.visibility = 'visible';
//             feedback.innerHTML = "Message sent!"
//             name.innerHTML = "";
//             email.innerHTML = "";
//             message.innerHTML = "";
//             setTimeout(() => {
//                 feedback.style.visibility = 'hidden';
//             }, 3000);
//         }
//     })
// }

function init() {
    let good;
    let bad;
    if (document.documentElement.lang === "en") {
        good = "Message sent!";
        bad = "Check your entries!";
    } else {
        good = "Mail verzonden!";
        bad = "Vul alles in!";
    }

    $('#mail').submit((e) => {
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let message = document.getElementById('message');

        console.log(name.value); // niets?
        console.log(email.value); // niets?
        console.log(message.value); // print content

        if (!name.value || !email.value || !message.value) {
            feedback.style.backgroundColor = 'rgba(170,4,34,0.7)';
            feedback.style.visibility = 'visible';
            feedback.innerHTML = bad;
            setTimeout(() => {
                feedback.style.visibility = 'hidden';
            }, 3000);

        } else {
            $.ajax({
                url: "https://formspree.io/moutpessemier@hotmail.com",
                method: "POST",
                data: {
                    message: $(this).serialize()
                },
                dataType: "json"
            });
            e.preventDefault();
            feedback.style.backgroundColor = 'rgba(0,170,16,0.7)';
            feedback.style.visibility = 'visible';
            feedback.innerHTML = good;
            setTimeout(() => {
                feedback.style.visibility = 'hidden';
            }, 3000);
            $(this).get(0).reset();
        }
    });
}

window.onload = () => init();

document.la