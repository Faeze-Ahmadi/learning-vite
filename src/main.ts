import './style.css';
const app = document.querySelector<HTMLDivElement>("#app");


type BoxProps = {
  element: string;
  att?: Element;
  children?: string | string[] | Element | Element[];
};

const Box = (props: BoxProps) => {
  const el = document.createElement(props.element);
  const span = document.createElement("span");
  span.innerHTML = "hello vite";
  el.append(span, "gf", " ", "hg")
  el.append(props.children)
  return el;
};

app!.append(Box({ element: "h1", children: "hello children" }));
app!.append(Box({ element: "mark", children: "zahra" }));