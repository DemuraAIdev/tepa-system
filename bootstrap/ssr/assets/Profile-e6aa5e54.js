import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthLayout-c7225f91.js";
import { useForm, usePage, Head } from "@inertiajs/react";
import { I as InputError } from "./InputError-75b3a913.js";
import { useRef } from "react";
import "./BrandLogo-c0dd44e2.js";
import "./Logo-82b068c2.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/ai/index.esm.js";
import "react-icons/fi/index.esm.js";
import "react-icons/ri/index.esm.js";
import "react-icons/fa/index.esm.js";
function UpdatePasswordForm({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium", children: "Update Password" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm ", children: [
        "Ensure your account is using a long, random ",
        /* @__PURE__ */ jsx("br", {}),
        " password to stay secure."
      ] })
    ] }),
    recentlySuccessful && /* @__PURE__ */ jsxs("div", { className: "alert alert-success my-5", children: [
      /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "stroke-current shrink-0 h-6 w-6", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
      /* @__PURE__ */ jsx("span", { children: "Your Password Updated" })
    ] }),
    /* @__PURE__ */ jsx("form", { onSubmit: updatePassword, className: "mt-6 ", children: /* @__PURE__ */ jsxs("div", { className: "form-control w-full max-w-xs gap-5", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          className: "input input-bordered w-full max-w-xs",
          name: "current_password",
          onChange: (e) => setData("current_password", e.target.value),
          value: data.current_password,
          ref: currentPasswordInput,
          placeholder: "Current Password",
          id: "current_password",
          autoComplete: "current-password"
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.current_password, className: "mt-2" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "password",
          ref: passwordInput,
          value: data.password,
          onChange: (e) => setData("password", e.target.value),
          type: "password",
          placeholder: "New Password",
          className: "input input-bordered w-full max-w-xs",
          autoComplete: "new-password"
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "password_confirmation",
          value: data.password_confirmation,
          onChange: (e) => setData("password_confirmation", e.target.value),
          type: "password",
          placeholder: "Confirm Password",
          className: "input input-bordered w-full max-w-xs",
          autoComplete: "new-password"
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          value: "Submit",
          disabled: processing,
          className: "btn btn-primary border-[1px] border-gray-700 hover:text-white hover:border-gray-500",
          children: "Save"
        }
      )
    ] }) })
  ] });
}
const ProfileEdit = () => {
  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  return /* @__PURE__ */ jsxs("div", { className: " bg-slate-700 p-7 rounded-md", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium", children: "Edit profile" }),
    /* @__PURE__ */ jsxs("p", { className: "mt-1 mb-5 text-sm", children: [
      "Update your account's profile information and ",
      /* @__PURE__ */ jsx("br", {}),
      "email address."
    ] }),
    recentlySuccessful && /* @__PURE__ */ jsxs("div", { className: "alert alert-success my-5", children: [
      /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "stroke-current shrink-0 h-6 w-6", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
      /* @__PURE__ */ jsx("span", { children: "Your profile has been saved" })
    ] }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "form-control w-full max-w-xs gap-5", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
          required: true,
          autoComplete: "username",
          onChange: (e) => setData("name", e.target.value),
          value: data.name,
          className: "input input-bordered w-full max-w-xs"
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" }),
      /* @__PURE__ */ jsx("input", { type: "email", id: "email", name: "email", onChange: (e) => setData("email", e.target.value), value: data.email, placeholder: "Email", className: "input input-bordered w-full max-w-xs" }),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          value: "Submit",
          className: "btn btn-primary border-[1px] border-gray-700 hover:text-white hover:border-gray-500",
          children: "Edit"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: " mt-8   shadow ", children: /* @__PURE__ */ jsx(UpdatePasswordForm, {}) })
  ] });
};
const Profile = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center ", children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile" }),
    /* @__PURE__ */ jsx(ProfileEdit, {})
  ] });
};
Profile.layout = (page) => /* @__PURE__ */ jsx(Authenticated, { children: page });
export {
  Profile as default
};
