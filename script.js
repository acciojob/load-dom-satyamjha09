document.addEventListener("DOMContentLoaded", () => {
  // Create a text node with the message
  const message = document.createTextNode("DOM load success");
  
  document.body.innerText = "DOM load success";
  document.body.appendChild(message);
});
