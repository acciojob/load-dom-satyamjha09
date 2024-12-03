document.addEventListener("DOMContentLoaded", () => {
  // Create a text node with the message
  const message = document.createTextNode("DOM load success");
  
  // Append the message to the body
  document.body.appendChild(message);
});
