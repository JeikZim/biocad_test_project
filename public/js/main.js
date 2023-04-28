function noticeSwitch(id) {
    noticeEl = $('#notice' + id)
    if (noticeEl.attr('src').includes('no-notice')) {
        noticeEl.attr('src', '../assets/notice.svg')
    } 
    else {
        noticeEl.attr('src', '../assets/no-notice.svg')
    }

}