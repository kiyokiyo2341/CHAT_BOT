document.addEventListener('DOMContentLoaded', function() {
    const messageArea = document.getElementById('message-area');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const clearButton = document.getElementById('clear-button'); // クリアボタンの要素を取得


    const responses = {
        'こんにちは': 'こんにちは！何かお手伝いできることはありますか？',
        '元気ですか': 'はい、元気です！',
        'ありがとう': 'どういたしまして。',
        'さようなら': 'さようなら。またね！',
        '好きな食べ物は何ですか': '私はプログラムなので、特に好きな食べ物はありません。でも、ユーザーの好きな食べ物の話を聞くのは好きです！',
        '何か面白いことを教えて': '今日の福岡の天気は晴れです。気温は25度くらいでしょう。', // 現在地と時間に基づいた情報を追加
        'ヤギさんといえば': '大野さんフォローがやたら距離が近いですね。(^^;;', // ヤギさんに関する情報を追加

        // 他の応答パターンもここに追加できます
    };

    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
        messageDiv.textContent = text;
        messageArea.appendChild(messageDiv);
        messageArea.scrollTop = messageArea.scrollHeight; // 最新のメッセージが見えるようにスクロール
    }

    sendButton.addEventListener('click', function() {
        const userText = userInput.value.trim();
        if (userText !== '') {
            addMessage(userText, true);
            userInput.value = ''; // 入力欄をクリア

            // ボットの応答
            let botResponse = responses[userText];
            if (botResponse === undefined) {
                botResponse = 'ごめんなさい、よくわかりませんでした。';
            }
            setTimeout(function() {
                addMessage(botResponse, false);
            }, 500); // 少し遅れてボットのメッセージを表示
        }
    });

    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendButton.click(); // Enterキーで送信ボタンをクリック
        }
    });

    clearButton.addEventListener('click', function() {
        messageArea.innerHTML = ''; // メッセージ表示エリアの中身を空にする
        // 必要であれば、初期メッセージを再度追加することもできます
        const initialMessage = document.createElement('div');
        initialMessage.classList.add('bot-message');
        initialMessage.textContent = 'こんにちは！何かお手伝いできることはありますか？';
        messageArea.appendChild(initialMessage);
    });
});
