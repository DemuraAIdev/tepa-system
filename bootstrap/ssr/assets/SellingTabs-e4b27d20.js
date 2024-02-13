import { jsx, jsxs } from "react/jsx-runtime";
import { useForm } from "@inertiajs/react";
import { I as InputError } from "./InputError-75b3a913.js";
import { useState } from "react";
import { A as Authenticated } from "./AuthLayout-c7225f91.js";
import "./BrandLogo-c0dd44e2.js";
import "./Logo-82b068c2.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/ai/index.esm.js";
import "react-icons/fi/index.esm.js";
import "react-icons/ri/index.esm.js";
import "react-icons/fa/index.esm.js";
const FirstTab$1 = () => {
  const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
    productid: "",
    jumlah: "",
    type: "sell"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("selling.store"), {
      onSuccess: () => {
        reset();
      }
    });
  }
  return /* @__PURE__ */ jsx("div", { className: "w-full rounded-xl md:p-7 py-7 px-0", children: /* @__PURE__ */ jsxs("form", { children: [
    recentlySuccessful && /* @__PURE__ */ jsxs("div", { className: "alert alert-success my-5", children: [
      /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "stroke-current shrink-0 h-6 w-6", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
      /* @__PURE__ */ jsx("span", { children: "Your data has been saved" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "Number",
          name: "productid",
          id: "productid",
          placeholder: "Product ID",
          onChange: (e) => setData("productid", e.target.value),
          value: data.productid,
          className: "py-2 px-4 w-[100%] text-white rounded-xl focus:outline-none bg-slate-800"
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.productid, className: "mt-2" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "Number",
          name: "jumlah",
          id: "jumlah",
          placeholder: "Product Amount",
          onChange: (e) => setData("jumlah", e.target.value),
          value: data.jumlah,
          className: "py-2 px-4 w-[100%] text-white rounded-xl focus:outline-none bg-slate-800"
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.jumlah, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center pt-10", children: /* @__PURE__ */ jsx(
      "button",
      {
        className: "bg-indigo-600 py-2 px-24 rounded-xl text-white",
        type: "submit",
        value: "send",
        onClick: handleSubmit,
        disabled: processing,
        children: "Send"
      }
    ) })
  ] }) });
};
const FirstTab = () => {
  const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
    productid: "",
    jumlah: "",
    type: "in"
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("selling.store"), {
      onSuccess: () => {
        reset();
      }
    });
  }
  return /* @__PURE__ */ jsx("div", { className: "w-full rounded-xl md:p-7 py-7 px-0", children: /* @__PURE__ */ jsxs("form", { children: [
    recentlySuccessful && /* @__PURE__ */ jsxs("div", { className: "alert alert-success my-5", children: [
      /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "stroke-current shrink-0 h-6 w-6", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
      /* @__PURE__ */ jsx("span", { children: "Your data has been saved" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "Number",
          name: "productid",
          id: "productid",
          placeholder: "Product ID",
          onChange: (e) => setData("productid", e.target.value),
          value: data.productid,
          className: "py-2 px-4 w-[100%] text-white rounded-xl focus:outline-none bg-slate-800"
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.productid, className: "mt-2" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "Number",
          name: "jumlah",
          id: "jumlah",
          placeholder: "Product Amount",
          onChange: (e) => setData("jumlah", e.target.value),
          value: data.jumlah,
          className: "py-2 px-4 w-[100%] text-white rounded-xl focus:outline-none bg-slate-800"
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.jumlah, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center pt-10", children: /* @__PURE__ */ jsx(
      "button",
      {
        className: "bg-indigo-600 py-2 px-24 rounded-xl text-white",
        type: "submit",
        value: "send",
        onClick: handleSubmit,
        disabled: processing,
        children: "Send"
      }
    ) })
  ] }) });
};
const SellingTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  return /* @__PURE__ */ jsx("div", { className: "bg-slate-800 w-full min-h-screen p-7 flex flex-col items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 p-7 w-fit rounded-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-center", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `md:w-[20%] px-4 py-2 bg-indigo-600 text-white border-r-[1px] border-slate-700 rounded-tl-xl rounded-bl-xl ${activeTab === 1 ? "bg-indigo-800 text-white" : ""}`,
          onClick: () => setActiveTab(1),
          children: "Selling"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `md:w-[20%] px-4 py-2 bg-indigo-600 text-white rounded-tr-xl rounded-br-xl ${activeTab === 2 ? "bg-indigo-800 text-white" : ""}`,
          onClick: () => setActiveTab(2),
          children: "Restock"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      activeTab === 1 && /* @__PURE__ */ jsx("div", { className: "flex flex-col md:w-[50vw] w-[80vw] items-center justify-center", children: /* @__PURE__ */ jsx(FirstTab$1, {}) }),
      activeTab === 2 && /* @__PURE__ */ jsx("div", { className: "flex flex-col md:w-[50vw] w-[80vw] items-center justify-center", children: /* @__PURE__ */ jsx(FirstTab, {}) })
    ] })
  ] }) });
};
SellingTabs.layout = (page) => /* @__PURE__ */ jsx(Authenticated, { children: page });
export {
  SellingTabs as default
};
