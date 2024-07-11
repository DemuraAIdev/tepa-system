import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthLayout-9109092b.js";
import { Head, Link } from "@inertiajs/react";
import "react";
import "./BrandLogo-c0dd44e2.js";
import "./Logo-82b068c2.js";
import "react-icons/fa6";
import "react-icons/ai";
import "react-icons/fi";
import "react-icons/ri";
import "react-icons/fa";
import "react-icons/md";
const Invoice = ({ transaction }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Invoice" }),
    /* @__PURE__ */ jsxs("table", { className: "table", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { children: "No" }),
        /* @__PURE__ */ jsx("th", { children: "Kode Invoice" }),
        /* @__PURE__ */ jsx("th", { children: "Tanggal" }),
        /* @__PURE__ */ jsx("th", { children: "Total" }),
        /* @__PURE__ */ jsx("th", { children: "Aksi" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: transaction.map((item, index) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: index + 1 }),
        /* @__PURE__ */ jsx("td", { children: item.kode_inv }),
        /* @__PURE__ */ jsx("td", { children: new Date(item.created_at).toLocaleDateString() }),
        /* @__PURE__ */ jsx("td", { children: item.total.toLocaleString("id-ID", { style: "currency", currency: "IDR" }) }),
        /* @__PURE__ */ jsxs("td", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `/invoice/${item.id}/print`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn btn-xs  btn-primary",
              children: "Print"
            }
          ),
          /* @__PURE__ */ jsx(Link, { href: route(`invoice.destroy`, item.id), className: "btn btn-xs bg-red-500 text-white", method: "delete", as: "button", type: "button", children: "Remove" })
        ] })
      ] }, item.id)) })
    ] })
  ] });
};
Invoice.layout = (page) => /* @__PURE__ */ jsx(Authenticated, { children: page });
export {
  Invoice as default
};
