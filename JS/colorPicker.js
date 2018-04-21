const colors = document.getElementsByClassName('colorPicker');
const colorBtnGreen = document.getElementsByClassName('color1');
const colorBtnYellow = document.getElementsByClassName('color2');
let HTMLElements = document.getElementsByTagName('*');

function changeColor(index) {
  let color = colors[index].style.backgroundColor;
  for (let i = 0; i < HTMLElements.length; i++) {
    if (HTMLElements[i].style.color) {
      HTMLElements[i].style.color = color;
    }
  }
}

function init() {
  colorBtnGreen.onclick = function() {
    changeColor(0);
  };

  colorBtnYellow.onclick = function() {
    changeColor(1);
  };
}

window.onload = init;
