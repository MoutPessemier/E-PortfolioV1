const articles = document.getElementsByClassName('selfInfo');
let counter = 1;
function init() {
  for (let article of articles) {
    if (counter % 2 === 0) {
      article.style.float = 'right';
      console.log(article.style.float);
    }
    counter++;
  }
}

window.onload = init;
