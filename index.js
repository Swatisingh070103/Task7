document.addEventListener("DOMContentLoaded", () => {
  const chatMessages = document.getElementById("chatMessages");
  const userInput = document.getElementById("userInput");
  const sendButton = document.getElementById("sendButton");
  const loadingIcon = document.getElementById("loadingIcon");

  sendButton.addEventListener("click", sendMessage);

  function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    appendMessage("You", message);
    userInput.value = "";

    loadingIcon.style.display = "block";

    // Simulate a chatbot response
    setTimeout(() => {
      appendMessage("Reply", "This is a simulated response.");
      loadingIcon.style.display = "none";
    }, 1000);
  }

  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
