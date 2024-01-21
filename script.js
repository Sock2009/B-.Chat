var socket = new WebSocket('ws://localhost:3000');

socket.onmessage = function (event) {
  var chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += '<div><strong>Інший користувач:</strong> ' + event.data + '</div>';
  chatBox.scrollTop = chatBox.scrollHeight;
};

function sendMessage() {
  var userNameInput = document.getElementById('user-name');
  var userInput = document.getElementById('user-input');

  if (userNameInput.value.trim() === '') {
    alert('Будь ласка, введіть ваше ім\'я.');
    return;
  }

  if (userInput.value.trim() !== '') {
    var message = userNameInput.value + ': ' + userInput.value;
    socket.send(message);
    appendMessage(message);
    userInput.value = '';
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function appendMessage(message) {
  var chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += '<div><strong>Ви:</strong> ' + message + '</div>';
  chatBox.scrollTop = chatBox.scrollHeight;
}
