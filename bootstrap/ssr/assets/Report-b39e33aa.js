import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthLayout-c7225f91.js";
import { Head } from "@inertiajs/react";
import { AiFillPrinter } from "react-icons/ai/index.esm.js";
import { useRef, useState } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import "./BrandLogo-c0dd44e2.js";
import "./Logo-82b068c2.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/fi/index.esm.js";
import "react-icons/ri/index.esm.js";
import "react-icons/fa/index.esm.js";
const Report$1 = (props) => {
  const tableRef = useRef(null);
  const [data, setData] = useState(Object.values(props.data).sort((a, b) => new Date(a.formatted_created_at) - new Date(b.formatted_created_at)));
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const filteredData = Object.values(props.data).filter((item) => {
      if (name === "year") {
        const year = new Date(item.formatted_created_at).getFullYear().toString();
        return year.includes(value);
      }
      if (name === "month") {
        const month = (new Date(item.formatted_created_at).getMonth() + 1).toString().padStart(2, "0");
        return month.includes(value);
      }
      if (name === "date") {
        const date = new Date(item.formatted_created_at).getDate().toString().padStart(2, "0");
        return date.includes(value);
      }
      return false;
    });
    setData(filteredData.sort((a, b) => new Date(a.formatted_created_at) - new Date(b.formatted_created_at)));
  };
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users"
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-[5em] justify-between mb-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "year",
            placeholder: "Year",
            className: "input input-bordered w-full max-w-xs",
            onChange: handleFilterChange
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "month",
            placeholder: "Month",
            className: "input input-bordered w-full max-w-xs",
            onChange: handleFilterChange
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "date",
            placeholder: "Day",
            className: "input input-bordered w-full max-w-xs",
            onChange: handleFilterChange
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: onDownload, className: "btn border-[1px] border-gray-700", children: [
        "Export ",
        /* @__PURE__ */ jsx(AiFillPrinter, { className: "text-lg" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "table table-xs", ref: tableRef, children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { children: "ID" }),
        /* @__PURE__ */ jsx("th", { children: "Nama barang" }),
        /* @__PURE__ */ jsx("th", { children: "Tipe" }),
        /* @__PURE__ */ jsx("th", { children: "Jumlah" }),
        /* @__PURE__ */ jsx("th", { children: "Total" }),
        /* @__PURE__ */ jsx("th", { children: "Tanggal transaksi" }),
        /* @__PURE__ */ jsx("th", { children: "Harga" }),
        /* @__PURE__ */ jsx("th", { children: "Produk ID" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: data.map((item, index) => /* @__PURE__ */ jsxs("tr", { className: item.type === "masuk" ? "bg-green-800" : "bg-red-900", children: [
        /* @__PURE__ */ jsx("td", { children: item.id }),
        /* @__PURE__ */ jsx("td", { children: item.item.name }),
        /* @__PURE__ */ jsx("td", { children: item.type }),
        /* @__PURE__ */ jsx("td", { children: item.jumlah }),
        /* @__PURE__ */ jsx("td", { children: item.total }),
        /* @__PURE__ */ jsx("td", { children: item.formatted_created_at }),
        /* @__PURE__ */ jsx("td", { children: item.item.harga }),
        /* @__PURE__ */ jsx("td", { children: item.item.barcode.toString() })
      ] }, index)) })
    ] }) })
  ] });
};
const Report = (reportData) => {
  console.log(reportData.data);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Report" }),
    /* @__PURE__ */ jsx(Report$1, { data: reportData.data })
  ] });
};
Report.layout = (page) => /* @__PURE__ */ jsx(Authenticated, { children: page });
export {
  Report as default
};
