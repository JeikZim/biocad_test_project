
function noticeSwitch(id) {
    noticeEl = $('#notice' + id)
    if (noticeEl.attr('src').includes('no-notice')) {
        noticeEl.attr('src', 'assets/icons/block-notice-icon.svg');
    } 
    else if (noticeEl.attr('src').includes('block-notice')) {
        noticeEl.attr('src', 'assets/icons/notice-icon.svg');
    } 
    else {
        noticeEl.attr('src', 'assets/icons/no-notice-icon.svg');
    }
}

function chipsSwitch(chipName) {
    $('.chips').removeClass('active');
    $('#' + chipName).addClass('active');
}

function favSwitch() {
    favIcon = $('#fav-img')
    if (favIcon.attr('src').includes('no-notice')) {
        favIcon.attr('src', 'assets/icons/block-notice-icon.svg');
    } 
    else {
        favIcon.attr('src', 'assets/icons/no-notice-icon.svg');
    }
}