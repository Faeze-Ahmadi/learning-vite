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
  
  if(props.attr)
  Object.keys(props.attr).forEach((key: string) => {
    el[key] = props.attr[key]
  })
  
  
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
      className: "bg-pink-500",
      id: "1000",
      style: "test"
    },
    children: Box({ element: "li", attr: {className: "text-slate-100"}, children: "link" })
  })
);