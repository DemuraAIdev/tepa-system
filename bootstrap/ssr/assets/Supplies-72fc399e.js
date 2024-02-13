import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { B as Brand } from "./Brand-867fe532.js";
import { FaBarsStaggered } from "react-icons/fa6/index.esm.js";
import { router, Link, Head } from "@inertiajs/react";
import "./Logo-82b068c2.js";
const ShopProduct = ({ nama, jenis, harga, img }) => {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-md m-[1em] bg-gray-100 shadow-cstm2 h-[300px] rounded-xl overflow-hidden md:max-w-2xl", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: `/Image/items/${img}`,
        className: "rounded-t-md h-[200px] object-cover w-full",
        alt: nama
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold text-gray-800 mb-2", children: harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 overflow-ellipsis overflow-hidden", children: nama })
    ] })
  ] });
};
const ShopContainer = ({ item }) => {
  const [filter, setFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    if (filter === "All") {
      setFilteredItems(item);
    } else {
      setFilteredItems(item.filter((i) => i.jenis === filter));
    }
  }, [filter, item]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "h-[10vh] bg-white border-[1px] border-b-gray-200 mt-[4em] md:mt-[5.5em] md:px-[5em] px-7     flex items-center", children: /* @__PURE__ */ jsxs("select", { className: "text-gray-500 select select-bordered h-[10px] md:w-[10%]  bg-white", onChange: (e) => setFilter(e.target.value), children: [
      /* @__PURE__ */ jsx("option", { value: "All", children: "All" }),
      /* @__PURE__ */ jsx("option", { value: "Alat-Tulis", children: "Alat-Tulis" }),
      /* @__PURE__ */ jsx("option", { value: "Buku", children: "Buku" }),
      /* @__PURE__ */ jsx("option", { value: "Perlengkapan", children: "Perlengkapan" }),
      /* @__PURE__ */ jsx("option", { value: "Atribut", children: "Atribut" }),
      /* @__PURE__ */ jsx("option", { value: "Voucher", children: "Voucher" }),
      /* @__PURE__ */ jsx("option", { value: "Komponen-Komputer", children: "Komponen-Komputer" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-white w-full min-h-screen md:px-[5em] p-7 grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[1em] md:gap-4    ", children: filteredItems.length > 0 ? filteredItems.map((item2, index) => /* @__PURE__ */ jsx(ShopProduct, { nama: item2.name, jenis: item2.jenis, harga: item2.harga, img: item2.image_url }, index)) : /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: "Item Not Found" }) })
  ] });
};
const ShopSearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    router.get(route("supplies"), { search });
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { className: "flex", onSubmit: handleSearch, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        name: "search",
        id: "search",
        placeholder: "Search here...",
        className: "bg-transparent input input-bordered rounded-l-lg rounded-r-none border-gray-400 w-full max-w-xs text-gray-800",
        value: search,
        onChange: (e) => setSearch(e.target.value)
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "submit",
        name: "submit",
        id: "submit",
        value: "Search",
        className: "rounded-r-lg rounded-l-none btn border-indigo-500 hover:border-indigo-500 bg-indigo-500 hover:bg-indigo-600 text-white max-w-x"
      }
    )
  ] }) });
};
const ShopNavbar = () => {
  let [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsx("div", { className: "shadow-md w-full fixed top-0 left-0", children: /* @__PURE__ */ jsxs("div", { className: "md:flex items-center justify-between py-4 px-7 md:px-[7.5em] bg-gray-200 z-[2]", children: [
    /* @__PURE__ */ jsx("div", { className: "font-bold  text-2xl cursor-pointer flex items-center font-body text-gray-800", children: /* @__PURE__ */ jsx(Link, { href: "/", className: "text-3xl text-indigo-700 mr-1", children: /* @__PURE__ */ jsx(Brand, {}) }) }),
    /* @__PURE__ */ jsx("div", { onClick: () => setOpen(!open), className: "text-xl absolute right-8 top-6 cursor-pointer md:hidden", children: /* @__PURE__ */ jsx(FaBarsStaggered, { name: "{open ? 'close':'menu'}" }) }),
    /* @__PURE__ */ jsx("ul", { className: `md:bg-none bg-gray-200 cursor-pointer md:flex md:items-center md:pb-0 p-2 md:static z-[100] left-0 w-full md:w-auto md:pl-auto pl-9 transition-all duration 500 ease-in-out absolute  md:border-none border-[1px] border-gray-300 ${open ? "top-16 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" : "top-[-100vh]"}`, children: /* @__PURE__ */ jsx("li", { className: "md:ml-8 text-base font-body", children: /* @__PURE__ */ jsx(ShopSearchBar, {}) }) })
  ] }) });
};
const Supplies = ({ items }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Supplies" }),
    /* @__PURE__ */ jsx(ShopContainer, { item: items }),
    /* @__PURE__ */ jsx(ShopNavbar, {})
  ] });
};
export {
  Supplies as default
};
