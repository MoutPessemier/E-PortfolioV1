function init() {
    document.getElementById('show').onclick = () => {
        if (document.getElementsByClassName('curvitd')[0]) {
            document.getElementsByClassName('curvitd')[0].setAttribute('class', 'curvita');
        } else {
            if (document.getElementsByClassName('curvita')[0]) {
                document.getElementsByClassName('curvita')[0].setAttribute('class', 'curvitd');
            }
        }
    }
}

window.onload = () => init();