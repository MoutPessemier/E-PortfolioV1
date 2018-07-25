$('document').ready(() => {

    $('.lTitle').on('click', () => {
        $('#languagePic').show();
    })

    $('#language').on('mouseleave', () => {
        $('#languagePic').hide();
    })

})