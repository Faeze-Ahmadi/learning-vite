import './style.css';

const app = document.querySelector<HTMLDivElement>("#app");

const h1 = document.createElement("h1");
h1.classList.add("bg-pink-600");

const span = document.createElement("span");
span.innerHTML = "hello vite";

h1.appendChild(span);

app!.appendChild(h1);

console.log(app);
