import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthLayout-c7225f91.js";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, AreaChart, Area } from "recharts";
import "react";
import { Head } from "@inertiajs/react";
import "./BrandLogo-c0dd44e2.js";
import "./Logo-82b068c2.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/ai/index.esm.js";
import "react-icons/fi/index.esm.js";
import "react-icons/ri/index.esm.js";
import "react-icons/fa/index.esm.js";
const AdminLog = (audit) => {
  console.log(audit);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { className: "pb-4 font-heading font-bold text-gray-200", children: "Admin Login Log" }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "table table-xs", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", {}),
        /* @__PURE__ */ jsx("th", { children: "Name" }),
        /* @__PURE__ */ jsx("th", { children: "Action" }),
        /* @__PURE__ */ jsx("th", { children: "Time" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: audit.data.map((item, index) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: item.id }),
        /* @__PURE__ */ jsx("td", { children: item.admin.name }),
        /* @__PURE__ */ jsx("td", { children: item.action }),
        /* @__PURE__ */ jsx("td", { children: item.timestamp })
      ] }, index)) })
    ] }) })
  ] });
};
const BoxChartOne = (monthlyData) => {
  console.log(monthlyData);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h1", { className: "pl-[2em] pb-[1em] text-md font-body text-white font-bold", children: [
      "Product Log Graphic ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "h-[40vh] w-full", children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(
      BarChart,
      {
        width: 500,
        height: 300,
        data: monthlyData.data,
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        },
        children: [
          /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3" }),
          /* @__PURE__ */ jsx(XAxis, { dataKey: "name" }),
          /* @__PURE__ */ jsx(YAxis, {}),
          /* @__PURE__ */ jsx(Tooltip, {}),
          /* @__PURE__ */ jsx(Legend, {}),
          /* @__PURE__ */ jsx(Bar, { dataKey: "Inward", barSize: 20, fill: "#4f46e5" }),
          /* @__PURE__ */ jsx(Bar, { dataKey: "Outward", barSize: 20, fill: "#82ca9d" })
        ]
      }
    ) }) })
  ] });
};
const ProductChart$1 = ({ item }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { className: "pb-4 font-heading font-bold text-gray-200", children: "Newest Products" }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "table table-xs", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", {}),
        /* @__PURE__ */ jsx("th", { children: "Nama" }),
        /* @__PURE__ */ jsx("th", { children: "Jumlah" }),
        /* @__PURE__ */ jsx("th", { children: "Jenis" }),
        /* @__PURE__ */ jsx("th", { children: "Harga" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: item.map((item2, index) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: item2.id }),
        /* @__PURE__ */ jsx("td", { children: item2.name }),
        /* @__PURE__ */ jsx("td", { children: item2.jumlah }),
        /* @__PURE__ */ jsx("td", { children: item2.jenis }),
        /* @__PURE__ */ jsx("td", { children: item2.harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" }) })
      ] }, index)) })
    ] }) })
  ] });
};
const ProductChart = ({ data }) => {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("h1", { className: "pb-4 font-heading font-bold text-gray-200", children: [
      "Visitors Website Count ",
      month[(/* @__PURE__ */ new Date()).getMonth()]
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-[50vh] w-full", children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(
      AreaChart,
      {
        width: 500,
        height: 400,
        data,
        margin: {
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        },
        children: [
          /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3" }),
          /* @__PURE__ */ jsx(XAxis, { dataKey: "day" }),
          /* @__PURE__ */ jsx(YAxis, {}),
          /* @__PURE__ */ jsx(Tooltip, {}),
          /* @__PURE__ */ jsx(Area, { type: "monotone", dataKey: "Visitor", stroke: "#8884d8", fill: "#8884d8" })
        ]
      }
    ) }) })
  ] });
};
const AdminCharts = ({ item, data, audit, visit }) => {
  return /* @__PURE__ */ jsxs("div", { className: " grid md:grid-cols-4 gap-[20px] auto-rows-gridBox", children: [
    /* @__PURE__ */ jsx("div", { className: "p-[20px] rounded-md border-[1px] border-gray-700 md:col-span-1 md:row-span-2", children: /* @__PURE__ */ jsx(ProductChart$1, { item }) }),
    /* @__PURE__ */ jsx("div", { className: "p-[20px] rounded-md border-[1px] border-gray-700 md:row-span-2 md:col-span-2", children: /* @__PURE__ */ jsx(ProductChart, { data: visit }) }),
    /* @__PURE__ */ jsx("div", { className: "p-[20px] rounded-md border-[1px] border-gray-700 md:col-span-1 md:row-span-2", children: /* @__PURE__ */ jsx(AdminLog, { data: audit }) }),
    /* @__PURE__ */ jsx("div", { className: "p-[20px] rounded-md border-[1px] border-gray-700 md:col-span-4 md:row-span-2", children: /* @__PURE__ */ jsx(BoxChartOne, { data }) })
  ] });
};
const AdminApp = ({ items, audit, monthlyData, visitors }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx(AdminCharts, { item: items, data: monthlyData, audit, visit: visitors })
  ] });
};
AdminApp.layout = (page) => /* @__PURE__ */ jsx(Authenticated, { children: page });
export {
  AdminApp as default
};
