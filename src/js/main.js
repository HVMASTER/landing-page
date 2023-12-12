function isMobile() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function abrirDownloadApp() {
    if (isMobile()) {
        document.getElementById('downloadButton').style.display = 'block';
    } else {
        document.getElementById('qrCode').style.display = 'block';
    }
}

document.getElementById('downloadButton').addEventListener('click', function () {
    window.location.href = "https://drive.google.com/drive/u/1/folders/1i1SZ7MfA3F7ZlWUxuRC4TbiAuQT9ANb3";
});

abrirDownloadApp();