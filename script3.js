let isChatOpen = false;

// Make the chat assistant draggable
function makeDraggable(element) {
  let offsetX, offsetY, isDragging = false;

  element.addEventListener('mousedown', (event) => {
    isDragging = true;
    offsetX = event.clientX - element.getBoundingClientRect().left;
    offsetY = event.clientY - element.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const newX = event.clientX - offsetX;
    const newY = event.clientY - offsetY;

    element.style.left = `${newX}px`;
    element.style.top = `${newY}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

// Toggle the chat assistant visibility
function toggleChat() {
  const chatContainer = document.getElementById('chat-container');
  isChatOpen = !isChatOpen;

  if (isChatOpen) {
    chatContainer.style.display = 'block';
  } else {
    chatContainer.style.display = 'none';
  }
}

// Close the chat assistant
function closeChat() {
  const chatContainer = document.getElementById('chat-container');
  chatContainer.style.display = 'none';
  isChatOpen = false;
}

// Make the chat assistant elements draggable
makeDraggable(document.getElementById('chat-button'));
makeDraggable(document.getElementById('chat-container'));
makeDraggable(document.getElementById('chat-header'));
