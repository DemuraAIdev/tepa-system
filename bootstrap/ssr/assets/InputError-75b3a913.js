import { jsxs, jsx } from "react/jsx-runtime";
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsxs("div", { ...props, className: "alert alert-error", children: [
    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "stroke-current shrink-0 h-6 w-6", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
    /* @__PURE__ */ jsx("span", { children: message })
  ] }) : null;
}
export {
  InputError as I
};
