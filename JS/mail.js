function init() {
  let good;
  let bad;
  if (document.documentElement.lang === 'en') {
    good = 'Message sent!';
    bad = 'Check your entries!';
  } else {
    good = 'Mail verzonden!';
    bad = 'Vul alles in!';
  }

  $('#mail').submit(
    e => {
      let name = document.getElementById('name');
      let email = document.getElementById('email');
      let messageM = document.getElementById('message');

      console.log(name.value);
      console.log(email.value);
      console.log(message.value);

      // if (!name.value || !email.value || !messageM.value) {
      //     feedback.style.backgroundColor = 'rgba(170,4,34,0.7)';
      //     feedback.style.visibility = 'visible';
      //     feedback.innerHTML = bad;
      //     setTimeout(() => {
      //         feedback.style.visibility = 'hidden';
      //     }, 3000);

      // } else {
      $.ajax({
        url: 'https://formspree.io/mail',
        type: 'POST',
        data: {
          name: name.value,
          email: email.value,
          message: messageM.value
        },
        dataType: 'json'
      });
      e.preventDefault();
      feedback.style.backgroundColor = 'rgba(0,170,16,0.7)';
      feedback.style.visibility = 'visible';
      feedback.innerHTML = good;
      setTimeout(() => {
        feedback.style.visibility = 'hidden';
      }, 3000);
      name.value = '';
      email.value = '';
      message.value = '';
    }
    //}
  );
}

window.onload = () => init();
