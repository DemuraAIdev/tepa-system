import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useForm, Head } from "@inertiajs/react";
import { T as TextInput } from "./TextInput-2013c4bf.js";
import { I as InputError } from "./InputError-75b3a913.js";
import { useEffect } from "react";
const Login = ({ token, email }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsx("div", { className: "bg-white h-[100vh] w-full flex items-center justify-center p-7", children: /* @__PURE__ */ jsxs("div", { className: "shadow-cstm2 md:p-7 rounded-xl ", children: [
      status && /* @__PURE__ */ jsxs("div", { className: "alert alert-info", children: [
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", className: "stroke-current shrink-0 w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
        /* @__PURE__ */ jsx("span", { children: status })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "judul text-center p-2", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-body font-bold text-gray-800", children: "Reset Password" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Type your details to login to your Admin account" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-7 px-4", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "my-2 lg:w-[50vh] sm:w-[50vh] p-2" }),
        /* @__PURE__ */ jsxs("table", { children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(
            TextInput,
            {
              type: "email",
              name: "email",
              value: data.email,
              id: "email",
              autoComplete: "username",
              isFocused: true,
              onChange: (e) => setData("email", e.target.value),
              placeholder: "Enter your email "
            }
          ) }) }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
              TextInput,
              {
                type: "password",
                name: "password",
                id: "password",
                value: data.password,
                placeholder: "Enter your password ",
                autoComplete: "new-password",
                onChange: (e) => setData("password", e.target.value)
              }
            ) }) }),
            /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
              TextInput,
              {
                type: "password",
                name: "password_confirmation",
                id: "password_confirmation",
                value: data.password_confirmation,
                placeholder: "Enter COnfirm password ",
                autoComplete: "new-password",
                onChange: (e) => setData("password_confirmation", e.target.value)
              }
            ) }) })
          ] }),
          /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { className: "pt-4", children: /* @__PURE__ */ jsx(
            "input",
            {
              className: " btn text-gray-100 bg-indigo-500 border-[1px] border-indigo-500 hover:bg-indigo-600 hover:border-indigo-600 p-2 rounded-md w-full",
              type: "submit",
              id: "submit",
              name: "submit",
              disabled: processing,
              value: "Reset"
            }
          ) }) }) })
        ] })
      ] }) })
    ] }) })
  ] });
};
export {
  Login as default
};
