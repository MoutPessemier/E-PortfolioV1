const colors = document.getElementsByClassName('colorPicker');
const colorBtnGreen = document.getElementsByClassName('color1');
const colorBtnYellow = document.getElementsByClassName('color2');

function init() {
  let color;
  if (colorBtnGreen.onclick) {
    color = colors[0].style.backgroundColor;
  }
  if (colorBtnYellow.onclick) {
    color = colors[1].style.backgroundColor;
  }

  //loop over mijn css file en stel elke keer de kleur in op color
}

window.onload = init;
