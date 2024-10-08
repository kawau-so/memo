// 通知の許可をリクエストする関数
function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission !== 'granted') {
                alert('通知の許可がされていません。');
            }
        });
    } else {
        alert('このブラウザは通知をサポートしていません。');
    }
}

// 通知を表示する関数
function showNotification(message) {
    if (Notification.permission === 'granted') {
        new Notification('新しい通知', {
            body: message,
            icon: 'https://via.placeholder.com/100' // 任意のアイコンURL
        });
    }
}

// ページ読み込み時に通知の許可をリクエスト
document.addEventListener('DOMContentLoaded', () => {
    requestNotificationPermission();

    const form = document.getElementById('notification-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // フォームの送信をキャンセル
        const message = document.getElementById('message').value;
        showNotification(message); // 入力されたメッセージを通知として表示
    });
});
