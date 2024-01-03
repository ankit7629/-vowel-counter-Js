let Input = document.getElementById("input");
const message = document.getElementById("message");

Input.addEventListener("input", () => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let letter of Input.value.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  if (count > 0) {
    message.innerHTML = `Count vowel: ${count}`;
  }
});
