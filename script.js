const btnyes = document.getElementById("yes");
const btnno = document.getElementById("no");
const gif = document.getElementById("gif");
const question = document.getElementById("question");

btnyes.addEventListener("click", () => {
  question.innerHTML = "I love you too 😍";
  gif.src = "milk-and-mocha-milk-mocha.gif";

  btnyes.style.display = "none";
  btnno.style.display = "none";
});

btnno.addEventListener("click", () => {
  const btnnorect = btnno.getBoundingClientRect();
  const maxX = window.innerWidth - btnnorect.width;
  const maxY = window.innerHeight - btnnorect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btnno.style.left = `${randomX}px`;
  btnno.style.top = `${randomY}px`;
});
