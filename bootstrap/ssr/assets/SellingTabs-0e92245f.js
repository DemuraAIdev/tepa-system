import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { A as Authenticated } from "./AuthLayout-6232ca48.js";
import axios from "axios";
import { usePage, Head, Link } from "@inertiajs/react";
import "./BrandLogo-c0dd44e2.js";
import "./Logo-82b068c2.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/ai/index.esm.js";
import "react-icons/fi/index.esm.js";
import "react-icons/ri/index.esm.js";
import "react-icons/fa/index.esm.js";
import "react-icons/md/index.esm.js";
const SellingCashier = ({ items, kode_inv }) => {
  const itemss = items;
  const [addedItems, setAddedItems] = useState([]);
  const [transactionID, setTransactionID] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [itemId, setItemId] = useState("");
  const addItem = (item, kode_inv2) => {
    setAddedItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        if (existingItem.buyAmount < item.jumlah) {
          existingItem.buyAmount += 1;
          return [...prevItems];
        } else {
          alert("Cannot add more items than available in stock");
          return prevItems;
        }
      } else {
        return [...prevItems, { ...item, buyAmount: 1 }];
      }
    });
    calculateGrandTotal();
  };
  const handleQuantityChange = (id, newQuantity) => {
    const itemToUpdate = addedItems.find((item) => item.id === id);
    if (itemToUpdate) {
      if (newQuantity <= itemToUpdate.jumlah) {
        itemToUpdate.buyAmount = newQuantity;
        setAddedItems([...addedItems]);
        calculateGrandTotal();
      } else {
        alert("Cannot add more items than available in stock");
      }
    }
  };
  const deleteItem = (id) => {
    setAddedItems(addedItems.filter((item) => item.id !== id));
    calculateGrandTotal();
  };
  useEffect(() => {
    calculateGrandTotal();
    console.log(addedItems);
  }, [addedItems]);
  const calculateGrandTotal = () => {
    let total = 0;
    addedItems.forEach((item) => {
      total += item.buyAmount * item.harga;
    });
    setGrandTotal(total);
  };
  const handleItemIdSubmit = (e) => {
    e.preventDefault();
    const item = itemss.find((i) => i.barcode === Number(itemId));
    if (item) {
      addItem(item);
    } else {
      alert("Item not found");
    }
    setItemId("");
  };
  const user = usePage().props.auth.user;
  const handleSubmit = (event) => {
    event.preventDefault();
    const items2 = addedItems.map((item) => ({
      nama_barang: item.name,
      item_id: item.id,
      qty: item.buyAmount,
      harga_jual: item.harga,
      subtotal: item.buyAmount * item.harga
    }));
    axios.post("/selling", {
      items: items2,
      user_id: user.id,
      total: grandTotal,
      kode_inv
    }).then((response) => {
      setAddedItems([]);
      if (response.data.success) {
        setGrandTotal(0);
        setTransactionID(response.data.transaction_id);
        document.getElementById("my_modal_4").showModal();
      } else {
        alert("Failed to save transaction");
      }
    }).catch((error) => {
      console.log(error);
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Invoice" }),
    /* @__PURE__ */ jsx("div", { className: "bg-[#171d23] md:w-full  min-h-[90vh] p-7 flex flex-col items-center justify-center font-body", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#1D232A] p-7 flex flex-col gap-7 rounded-xl shadow-md w-10/12", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center font-bold text-white text-2xl", children: [
        /* @__PURE__ */ jsx("h1", { className: "uppercase font-body", children: "Item Registration" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
          "Kode Invoice: ",
          kode_inv
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 justify-center", children: [
          /* @__PURE__ */ jsxs("form", { onSubmit: handleItemIdSubmit, children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                id: "itemId",
                name: "itemId",
                placeholder: "Here goes the item's id...",
                className: "input  input-bordered border-[1px] border-gray-700 px-4 py-2 bg-[#171d23] text-sm",
                value: itemId,
                onChange: (e) => setItemId(e.target.value)
              }
            ),
            /* @__PURE__ */ jsx("button", { className: "btn border-[1px] border-gray-700 hover:text-white hover:border-gray-500 text-sm ml-2", children: "Ok" })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "btn text-gray-300 border-[1px] border-gray-700",
              onClick: () => document.getElementById("my_modal_3").showModal(),
              children: "Add Items"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("dialog", { id: "my_modal_3", className: "modal ", children: /* @__PURE__ */ jsxs("div", { className: "modal-box w-11/12 max-w-xl", children: [
          /* @__PURE__ */ jsx("form", { method: "dialog", children: /* @__PURE__ */ jsx("button", { className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2", children: "✕" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "pb-4 font-bold text-xl text-center", children: "Add Product" }),
            /* @__PURE__ */ jsxs("table", { className: "table w-full", children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("th", { children: "Item" }),
                /* @__PURE__ */ jsx("th", { children: "Price" }),
                /* @__PURE__ */ jsx("th", { children: "Quantity" }),
                /* @__PURE__ */ jsx("th", { children: "Barcode" }),
                /* @__PURE__ */ jsx("th", { children: "Image" }),
                /* @__PURE__ */ jsx("th", { children: "Action" })
              ] }) }),
              /* @__PURE__ */ jsx("tbody", { children: itemss.map((item) => /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: item.name }),
                /* @__PURE__ */ jsx("td", { children: item.harga.toLocaleString(
                  "id-ID",
                  {
                    style: "currency",
                    currency: "IDR"
                  }
                ) }),
                /* @__PURE__ */ jsx("td", { children: item.jumlah }),
                /* @__PURE__ */ jsx("td", { children: item.barcode }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `/Image/items/${item.image_url}`,
                    alt: "Avatar Tailwind CSS Component"
                  }
                ) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "btn btn-sm btn-circle btn-ghost",
                    onClick: () => addItem(item),
                    children: "+"
                  }
                ) })
              ] }, item.id)) })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto border-b-[1px] border-gray-700 pb-7", children: /* @__PURE__ */ jsxs("table", { className: "table mx-auto", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: "No" }),
          /* @__PURE__ */ jsx("th", { children: "Item" }),
          /* @__PURE__ */ jsx("th", { children: "Quantity" }),
          /* @__PURE__ */ jsx("th", { children: "Price" }),
          /* @__PURE__ */ jsx("th", { children: "Total" }),
          /* @__PURE__ */ jsx("th", { children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: addedItems.map((item, index) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: index + 1 }),
          /* @__PURE__ */ jsx("td", { children: item.name }),
          /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              value: item.buyAmount,
              onChange: (e) => handleQuantityChange(
                item.id,
                Number(
                  e.target.value
                )
              ),
              className: "focus:outline-none px-3 py-2 rounded-md bg-[#171d23] border-[1px] border-gray-700"
            }
          ) }),
          /* @__PURE__ */ jsx("td", { children: item.harga.toLocaleString(
            "id-ID",
            {
              style: "currency",
              currency: "IDR"
            }
          ) }),
          /* @__PURE__ */ jsx("td", { children: (item.buyAmount * item.harga).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR"
          }) }),
          /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "btn bg-red-500 text-white font-bold btn-xs",
              onClick: () => deleteItem(item.id),
              children: "Delete"
            }
          ) })
        ] }, item.id)) }),
        /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsx("tr", {}) })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center text-sm", children: [
          /* @__PURE__ */ jsx("label", { for: "total", children: "Grand Total" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "total",
              name: "total",
              value: grandTotal.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR"
              }),
              className: "input input-bordered border-[1px] border-gray-700 md:w=[75%] px-4 py-2 bg-[#171d23] text-sm ",
              disabled: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsx("button", { className: "uppercase font-bold btn border-gray-700 hover:border-gray-500", children: "Save Transaction" }) }),
        /* @__PURE__ */ jsx("dialog", { id: "my_modal_4", className: "modal ", children: /* @__PURE__ */ jsxs("div", { className: "modal-box w-11/12 max-w-xl", children: [
          /* @__PURE__ */ jsx("form", { method: "dialog", children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("selling"),
              className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
              children: "✕"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "pb-4 font-bold text-xl text-center", children: "Print Invoice" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-500", children: [
                "Transaction ID: ",
                transactionID
              ] }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `/invoice/${transactionID}/print`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn btn-sm btn-circle btn-ghost",
                  children: "Print"
                }
              )
            ] })
          ] })
        ] }) })
      ] })
    ] }) })
  ] });
};
SellingCashier.layout = (page) => /* @__PURE__ */ jsx(Authenticated, { children: page });
export {
  SellingCashier as default
};
