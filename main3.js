// JavaScript for chat functionality

let isChatOpen = false;

function toggleChat() {
  const chatWindow = document.getElementById('chat-window');
  isChatOpen = !isChatOpen;

  if (isChatOpen) {
    chatWindow.style.display = 'block';
  } else {
    chatWindow.style.display = 'none';
  }
}

function closeChat() {
  const chatWindow = document.getElementById('chat-window');
  chatWindow.style.display = 'none';
  isChatOpen = false;
}

function handleUserInput() {
  const userInput = document.getElementById('user-input').value;
  const chatContent = document.getElementById('chat-content');

  // Display user input in the chat
  chatContent.innerHTML += `<p>User: ${userInput}</p>`;

  // Call a function to generate chat assistant reply based on user input
  const chatAssistantReply = generateChatAssistantReply(userInput);

  // Display chat assistant reply in the chat
  chatContent.innerHTML += `<p>Chat Assistant: ${chatAssistantReply}</p>`;

  // Clear the input field
  document.getElementById('user-input').value = '';

  // Scroll to the bottom of the chat content
  chatContent.scrollTop = chatContent.scrollHeight;
}

function generateChatAssistantReply(userInput) {
  // Add your logic here to generate a reply based on user input
  // For simplicity, let's just echo the user input for now
  return ` ${userInput}`;
}

// Assuming you have this code
document.getElementById('chat-icon').addEventListener('click', toggleChat);
document.getElementById('close-chat').addEventListener('click', closeChat);
document.getElementById('send-btn').addEventListener('click', handleUserInput);

// Your other JavaScript code
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})