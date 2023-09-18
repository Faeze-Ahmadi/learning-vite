import './style.css';

const app = document.querySelector<HTMLDivElement>("#app");

// const h1 = document.createElement("h1");
// h1.classList.add("bg-pink-600");

// const span = document.createElement("span");
// span.innerHTML = "hello vite";

// h1.appendChild(span);

// app!.appendChild(h1);
console.log(app);

type BoxProps = {
  element: string;
  att?: Element;
  children?: Element;
};

const Box = (props: BoxProps) => {
  const el = document.createElement(props.element);
  const span = document.createElement("span");
  span.innerHTML = "hello vite";
  el.append(span, "gf", "hg")
  return el;
};

console.log(Box({ element: "h1" }));

