// Tiny flavor script: fake type effect on the chat input placeholder
(function () {
  const input = document.querySelector(".chat-input");
  if (!input) return;

  const messages = [
    "Remember when online lobbies actually felt like a place?",
    "Op BattleNet: where friendships, rivalries, and lag were born.",
    "Type /join clan-channel to relive the glory days.",
    "Dial-up ready. CRT warmed up. GG incoming."
  ];

  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % messages.length;
    input.value = messages[idx];
  }, 5000);
})();


