// script.js
document.getElementById("sendBtn").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  if (userInput.trim() !== "") {
    addMessage("user", userInput);
    getBotResponse(userInput);
    document.getElementById("userInput").value = "";
  }
}

function addMessage(sender, text) {
  const messageElement = document.createElement("div");
  messageElement.className = sender;
  messageElement.textContent = text;
  document.getElementById("messages").appendChild(messageElement);
}

function getBotResponse(input) {
  let response = "Lo siento, no entiendo tu pregunta.";
  const today = new Date();
  
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes("hola")) {
    response = "¡Hola! ¿En qué puedo ayudarte?";
  } else if (lowerInput.includes("día es hoy") || lowerInput.includes("dia es hoy")) {
    response = `Hoy es ${today.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`;
  } else if (lowerInput.includes("cuánto dura un día") || lowerInput.includes("cuanto dura un dia")) {
    response = "Un día dura 24 horas.";
  } else if (lowerInput.includes("qué hora es") || lowerInput.includes("que hora es")) {
    response = `La hora actual es ${today.toLocaleTimeString('es-ES')}.`;
  } else if (lowerInput.includes("cuál es mi futuro") || lowerInput.includes("cual es mi futuro")) {
    response = "Tu futuro está a tu lado.";
  }
  
  addMessage("bot", response);
}
