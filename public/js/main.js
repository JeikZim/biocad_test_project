function noticeSwitch(id) {
    noticeEl = $('#notice' + id)
    if (noticeEl.attr('src').includes('no-notice')) {
        noticeEl.attr('src', 'block-notice-icon.svg');
    } 
    else if (noticeEl.attr('src').includes('block-notice')) {
        noticeEl.attr('src', 'notice-icon.svg');
    } 
    else {
        noticeEl.attr('src', 'no-notice-icon.svg');
    }
}

function chipsSwitch(chipName) {
    $('.chips').removeClass('active');
    $('#' + chipName).addClass('active');
}