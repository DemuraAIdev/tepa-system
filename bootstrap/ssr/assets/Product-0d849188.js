import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthLayout-c7225f91.js";
import { usePage, useForm, Link, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Barcode from "react-barcode";
import { I as InputError } from "./InputError-75b3a913.js";
import "./BrandLogo-c0dd44e2.js";
import "./Logo-82b068c2.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/ai/index.esm.js";
import "react-icons/fi/index.esm.js";
import "react-icons/ri/index.esm.js";
import "react-icons/fa/index.esm.js";
const AdminAdd = ({ item }) => {
  const user = usePage().props.auth.user;
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const filteredItems = filter === "All" ? item.data : item.data.filter((i) => i.jenis === filter);
  console.log(filteredItems);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = filteredItems.slice(startIndex, endIndex);
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);
  const [file, setFile] = useState();
  function handleChange(e) {
    if (e.target.files.length === 0) {
      console.error("No files selected");
      return;
    }
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const { data, setData, post, patch, errors, progress, processing, reset } = useForm({
    id: user.id,
    name: "",
    harga: "",
    jumlah: "",
    jenis: "",
    productid: "",
    image_url: ""
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("product.store"), {
      onSuccess: () => {
        reset();
      }
    });
  }
  function handleEdit(e, item2) {
    e.preventDefault();
    patch(route("product.update", item2), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
      }
    });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-[5em] justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: " flex items-center", children: /* @__PURE__ */ jsxs("select", { className: "text-gray-300 select select-bordered h-[10px] w-24 max-w-xs", onChange: (e) => setFilter(e.target.value), children: [
        /* @__PURE__ */ jsx("option", { value: "All", children: "All" }),
        /* @__PURE__ */ jsx("option", { value: "Alat-Tulis", children: "Alat-Tulis" }),
        /* @__PURE__ */ jsx("option", { value: "Buku", children: "Buku" }),
        /* @__PURE__ */ jsx("option", { value: "Perlengkapan", children: "Perlengkapan" }),
        /* @__PURE__ */ jsx("option", { value: "Atribut", children: "Atribut" }),
        /* @__PURE__ */ jsx("option", { value: "Voucher", children: "Voucher" }),
        /* @__PURE__ */ jsx("option", { value: "Komponen-Komputer", children: "Komponen-Komputer" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("button", { className: "btn text-gray-300 border-[1px] border-gray-700", onClick: () => document.getElementById("my_modal_3").showModal(), children: "Add Product" }),
        /* @__PURE__ */ jsx("dialog", { id: "my_modal_3", className: "modal", children: /* @__PURE__ */ jsxs("div", { className: "modal-box", children: [
          /* @__PURE__ */ jsx("form", { method: "dialog", children: /* @__PURE__ */ jsx("button", { className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2", children: "✕" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "pb-4 font-bold text-xl text-center", children: "Add a product" }),
            /* @__PURE__ */ jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                className: "flex flex-col gap-4 items-center",
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        name: "name",
                        value: data.name,
                        id: "name",
                        onChange: (e) => setData("name", e.target.value),
                        placeholder: "Nama Produk",
                        className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80",
                        required: true
                      }
                    ),
                    /* @__PURE__ */ jsx(InputError, { message: errors.name })
                  ] }),
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("select", { id: "jenis", name: "jenis", onChange: (e) => setData("jenis", e.target.value), value: data.jenis, className: "select select-bordered w-80 max-w-xs", required: true, children: [
                    /* @__PURE__ */ jsx("option", { value: "All", children: "jenis" }),
                    /* @__PURE__ */ jsx("option", { value: "Alat-Tulis", children: "Alat-Tulis" }),
                    /* @__PURE__ */ jsx("option", { value: "Buku", children: "Buku" }),
                    /* @__PURE__ */ jsx("option", { value: "Perlengkapan", children: "Perlengkapan" }),
                    /* @__PURE__ */ jsx("option", { value: "Atribut", children: "Atribut" }),
                    /* @__PURE__ */ jsx("option", { value: "Voucher", children: "Voucher" }),
                    /* @__PURE__ */ jsx("option", { value: "Komponen-Komputer", children: "Komponen-Komputer" })
                  ] }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "number",
                        name: "jumlah",
                        value: data.jumlah,
                        id: "jumlah",
                        onChange: (e) => setData("jumlah", e.target.value),
                        placeholder: "Amount",
                        className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80",
                        required: true
                      }
                    ),
                    /* @__PURE__ */ jsx(InputError, { message: errors.jumlah })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "number",
                        name: "harga",
                        value: data.harga,
                        id: "harga",
                        onChange: (e) => setData("harga", e.target.value),
                        placeholder: "Price",
                        className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80",
                        required: true
                      }
                    ),
                    /* @__PURE__ */ jsx(InputError, { message: errors.harga })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "number",
                        name: "productid",
                        value: data.productid,
                        id: "productid",
                        onChange: (e) => setData("productid", e.target.value),
                        placeholder: "Id Product",
                        className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80",
                        required: true
                      }
                    ),
                    /* @__PURE__ */ jsx(InputError, { message: errors.productid })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("h2", { className: "pb-2", children: "Add product image" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "file",
                        name: "image_url",
                        id: "image_url",
                        onChange: (e) => {
                          setData("image_url", e.target.files[0]);
                          handleChange(e);
                        },
                        className: "file-input file-input-bordered w-full max-w-xs mb-3"
                      }
                    ),
                    /* @__PURE__ */ jsx(InputError, { message: errors.image_url }),
                    progress && /* @__PURE__ */ jsxs("progress", { value: progress.percentage, max: "100", children: [
                      progress.percentage,
                      "%"
                    ] }),
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: file,
                        className: "w-fit mx-auto"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "submit",
                      value: "Submit",
                      disabled: processing,
                      className: "btn border-[1px] border-gray-700 hover:text-white hover:border-gray-500",
                      children: "Add"
                    }
                  )
                ]
              }
            )
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "table", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { children: "Name" }),
        /* @__PURE__ */ jsx("th", { children: "Jumlah/Stok" }),
        /* @__PURE__ */ jsx("th", { children: "Harga" }),
        /* @__PURE__ */ jsx("th", { children: "Barcode" }),
        /* @__PURE__ */ jsx("th", { children: "Jenis" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: itemsToDisplay.map((item2, index) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx("div", { className: "avatar", children: /* @__PURE__ */ jsx("div", { className: " w-12 h-12", children: /* @__PURE__ */ jsx("img", { src: `/Image/items/${item2.image_url}`, alt: "Avatar Tailwind CSS Component" }) }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold", children: item2.name }),
            /* @__PURE__ */ jsx("div", { className: "text-sm opacity-50", children: item2.id })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("td", { children: item2.jumlah }),
        /* @__PURE__ */ jsx("td", { children: item2.harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" }) }),
        /* @__PURE__ */ jsxs("td", { children: [
          /* @__PURE__ */ jsx("button", { className: "btn", onClick: () => document.getElementById(`my_bar_${item2.id}`).showModal(), children: item2.barcode }),
          /* @__PURE__ */ jsxs("dialog", { id: `my_bar_${item2.id}`, className: "modal", children: [
            /* @__PURE__ */ jsxs("div", { className: "modal-box flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl text-gray-300 font-bold pb-4", children: "Barcode" }),
              /* @__PURE__ */ jsx(Barcode, { value: item2.barcode })
            ] }),
            /* @__PURE__ */ jsx("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ jsx("button", { children: "close" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("td", { children: item2.jenis }),
        /* @__PURE__ */ jsxs("th", { children: [
          /* @__PURE__ */ jsx("button", { className: "btn bg-[#16a34a] text-white btn-xs", onClick: () => document.getElementById(`edit_${item2.id}`).showModal(), children: "Edit" }),
          /* @__PURE__ */ jsx("dialog", { id: `edit_${item2.id}`, className: "modal", children: /* @__PURE__ */ jsxs("div", { className: "modal-box", children: [
            /* @__PURE__ */ jsx("form", { method: "dialog", children: /* @__PURE__ */ jsx("button", { className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2", children: "✕" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "pb-4 font-bold text-xl text-center", children: "Edit a product" }),
              /* @__PURE__ */ jsxs(
                "form",
                {
                  onSubmit: (e) => handleEdit(e, item2.id),
                  className: "flex flex-col gap-4 items-center",
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          name: "id",
                          value: data.id,
                          id: "id",
                          onChange: (e) => setData("id", e.target.value),
                          placeholder: "Nama Produk",
                          className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80"
                        }
                      ),
                      /* @__PURE__ */ jsx(InputError, { message: errors.id })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          name: "name",
                          value: data.name,
                          id: "name",
                          onChange: (e) => setData("name", e.target.value),
                          placeholder: "Nama Produk",
                          className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80"
                        }
                      ),
                      /* @__PURE__ */ jsx(InputError, { message: errors.name })
                    ] }),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("select", { id: "jenis", name: "jenis", onChange: (e) => setData("jenis", e.target.value), value: data.jenis, className: "select select-bordered w-80 max-w-xs", children: [
                      /* @__PURE__ */ jsx("option", { value: "All", children: "jenis" }),
                      /* @__PURE__ */ jsx("option", { value: "Alat-Tulis", children: "Alat-Tulis" }),
                      /* @__PURE__ */ jsx("option", { value: "Buku", children: "Buku" }),
                      /* @__PURE__ */ jsx("option", { value: "Perlengkapan", children: "Perlengkapan" }),
                      /* @__PURE__ */ jsx("option", { value: "Atribut", children: "Atribut" }),
                      /* @__PURE__ */ jsx("option", { value: "Voucher", children: "Voucher" }),
                      /* @__PURE__ */ jsx("option", { value: "Komponen-Komputer", children: "Komponen-Komputer" })
                    ] }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "number",
                          name: "jumlah",
                          value: data.jumlah,
                          id: "jumlah",
                          onChange: (e) => setData("jumlah", e.target.value),
                          placeholder: "Amount",
                          className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80"
                        }
                      ),
                      /* @__PURE__ */ jsx(InputError, { message: errors.jumlah })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "number",
                          name: "harga",
                          value: data.harga,
                          id: "harga",
                          onChange: (e) => setData("harga", e.target.value),
                          placeholder: "Price",
                          className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80"
                        }
                      ),
                      /* @__PURE__ */ jsx(InputError, { message: errors.harga })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "number",
                          name: "productid",
                          value: data.productid,
                          id: "productid",
                          onChange: (e) => setData("productid", e.target.value),
                          placeholder: "Id Product",
                          className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80"
                        }
                      ),
                      /* @__PURE__ */ jsx(InputError, { message: errors.productid })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsx("h2", { className: "pb-2", children: "Add product image" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "file",
                          name: "image_url",
                          id: "image_url",
                          onChange: (e) => {
                            setData("image_url", e.target.files[0]);
                            handleChange(e);
                          },
                          className: "file-input file-input-bordered w-full max-w-xs mb-3"
                        }
                      ),
                      /* @__PURE__ */ jsx(InputError, { message: errors.image_url }),
                      progress && /* @__PURE__ */ jsxs("progress", { value: progress.percentage, max: "100", children: [
                        progress.percentage,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: file,
                          className: "w-fit mx-auto"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "submit",
                        value: "submit",
                        className: "btn border-[1px] border-gray-700 hover:text-white hover:border-gray-500",
                        children: "Edit"
                      }
                    )
                  ]
                }
              )
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("th", { children: [
          /* @__PURE__ */ jsx("button", { className: "btn bg-red-500 text-white btn-xs", onClick: () => document.getElementById(`remove_${item2.id}`).showModal(), children: "Remove" }),
          /* @__PURE__ */ jsx("dialog", { id: `remove_${item2.id}`, className: "modal", children: /* @__PURE__ */ jsx("div", { className: "card w-96 bg-neutral text-neutral-content", children: /* @__PURE__ */ jsxs("div", { className: "card-body items-center text-center", children: [
            /* @__PURE__ */ jsx("h2", { className: "card-title", children: "Are you sure?" }),
            /* @__PURE__ */ jsx("p", { children: "You can't undo this action" }),
            /* @__PURE__ */ jsx("div", { className: "card-actions justify-end", children: /* @__PURE__ */ jsxs("form", { method: "dialog", className: "flex gap-4", children: [
              /* @__PURE__ */ jsx(Link, { href: route(`product.destroy`, item2.id), className: "btn bg-red-500 text-white", method: "delete", as: "button", type: "button", children: "Remove" }),
              /* @__PURE__ */ jsx("button", { className: "btn btn-ghost", children: "cancel" })
            ] }) })
          ] }) }) })
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "join flex items-center justify-center", children: Array.from({ length: item.last_page }, (_, i) => /* @__PURE__ */ jsx(
      "button",
      {
        className: `join-item btn ${currentPage === i + 1 ? "btn-active" : ""}`,
        onClick: () => handlePageChange(i + 1),
        children: i + 1
      },
      i
    )) })
  ] });
};
const Product = ({ items }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Product" }),
    /* @__PURE__ */ jsx(AdminAdd, { item: items })
  ] });
};
Product.layout = (page) => /* @__PURE__ */ jsx(Authenticated, { children: page });
export {
  Product as default
};
