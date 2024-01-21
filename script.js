function sendMessage() {
    var userNameInput = document.getElementById('user-name');
    var userInput = document.getElementById('user-input');
    var chatBox = document.getElementById('chat-box');
  
    if (userNameInput.value.trim() === '') {
      alert('Будь ласка, введіть ваше ім\'я.');
      return;
    }
  
    if (userInput.value.trim() !== '') {
      chatBox.innerHTML += '<div><strong>' + userNameInput.value + ':</strong> ' + userInput.value + '</div>';
      userInput.value = '';
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
  
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }
  