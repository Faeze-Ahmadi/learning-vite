import './style.css';
const app = document.querySelector<HTMLDivElement>("#app");


type BoxProps = {
  element: string;
  attr?: any;
  children?: string | string[] | Element | Element[];
};

const Box = (props: BoxProps) => {
  console.log(props.attr);
  const el = document.createElement(props.element);
  el.className = props.attr?.className;
  if (!Array.isArray(props.children)) el.append(props.children!);
  else el.append(...props.children);
  return el;
};

// app!.append(Box({ element: "h1", children: "hello children" }));
// app!.append(Box({ element: "mark", children: ["zahra", " ", "faeze", " ", "narges"] }));

app!.append(
  Box({
    element: "ul", 
    attr: {
      className: "bg-pink-500"
    },
    children: Box({ element: "li", children: "link" })
  })
);