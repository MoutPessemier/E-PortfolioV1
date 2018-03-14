var swatches = document.querySelectorAll('.swatches span');
var root = document.querySelector(':root');
swatches.forEach((swatch) => {
    swatch.addEventListener('click', (e) => {
        root.style.setProperty('--main-color', e.target.style.background);
        root.style.setProperty('--accent-color', e.target.style.color);
    })
});