const articles = document.getElementsByClassName('selfInfo');

function sort() {
  let counter = 1;
  for (let article of articles) {
    article.style.width = '50%';
    article.style.display = 'inline-block';
    if (counter % 2 === 0) {
      article.style.float = 'right';
    }
    counter++;
  }
}

function restore() {
  let counter = 1;
  for (let article of articles) {
    article.style.width = '100%';
    article.style.display = 'block';
    if (counter % 2 === 0) {
      article.style.float = 'none';
    }
    counter++;
  }
}

function init() {
  const btnSort = document.getElementById('resort');
  btnSort.onclick = function() {
    sort();
  };

  const btnRestore = document.getElementById('restore');
  btnRestore.onclick = function() {
    restore();
  };
}

window.onload = init;
