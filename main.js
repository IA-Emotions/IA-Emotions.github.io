(function($){
    $(function(){

        $('.sidenav').sidenav();

    }); // end of document ready
})(jQuery); // end of jQuery name space


    document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    // Detect French page (contains "Fr.html")
    const isFrenchPage = currentPage.includes('Fr.html');

    // Define settings based on current language
    const langSettings = isFrenchPage
    ? {
    flagSrc: './rsc/united.png',
    flagAlt: 'Switch to English',
    targetPage: currentPage.replace(/(\s|%20)Fr\.html/i, '.html')
}
    : {
    flagSrc: './rsc/france.png',
    flagAlt: 'Passer en français',
    targetPage: currentPage === 'index.html' ? 'index%20Fr.html' : currentPage.replace('.html', '%20Fr.html')
};

    // Update both desktop and mobile flags
    ['desktop', 'mobile'].forEach(type => {
    const flagImg = document.getElementById(`lang-flag-${type}`);
    const flagLink = document.getElementById(`lang-link-${type}`);
    if (flagImg && flagLink) {
    flagImg.src = langSettings.flagSrc;
    flagImg.alt = langSettings.flagAlt;
    flagLink.href = langSettings.targetPage;
}
});
});
