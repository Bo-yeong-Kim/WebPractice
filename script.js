// QR 코드 스캐너 인스턴스 생성
const scanner = new Instascan.Scanner({ video: document.getElementById('qr-video') });

scanner.addListener('scan', function (content) {
    // QR 코드 스캔 결과를 content로 받습니다.

    // content가 URL 형식인지 확인
    if (isValidURL(content)) {
        // content가 URL인 경우, 새 창에서 해당 URL 열기
        window.open(content, '_blank');
    } else {
        alert('인식된 QR 코드의 내용은 URL 형식이 아닙니다.');
    }
});

Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
    } else {
        console.error('카메라를 찾을 수 없습니다.');
    }
}).catch(function (e) {
    console.error(e);
});

function isValidURL(str) {
    // URL 형식 확인을 위한 정규식 사용
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(str);
}
