import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect } from "react";
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "bg-white border-[1px] autofill:bg-white border-gray-500 p-2 rounded-md lg:w-[50vh] sm:w-[50vh] text-gray-700 " + className,
      ref: input
    }
  );
});
export {
  TextInput as T
};
