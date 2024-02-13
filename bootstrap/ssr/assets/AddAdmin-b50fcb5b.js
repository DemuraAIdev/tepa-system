import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthLayout-c7225f91.js";
import { usePage, useForm, Link, Head } from "@inertiajs/react";
import { I as InputError } from "./InputError-75b3a913.js";
import "react";
import "./BrandLogo-c0dd44e2.js";
import "./Logo-82b068c2.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/ai/index.esm.js";
import "react-icons/fi/index.esm.js";
import "react-icons/ri/index.esm.js";
import "react-icons/fa/index.esm.js";
const AdminAdd = (datas) => {
  usePage().props.auth.user;
  const { data, setData, post, patch, errors, processing, reset } = useForm({
    name: "",
    email: "",
    password: "",
    role: ""
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("adminadd.store"), {
      onSuccess: () => {
        reset();
      }
    });
  }
  function handleEdit(e, item) {
    e.preventDefault();
    patch(route("adminadd.update", item), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
      }
    });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex gap-[5em] justify-between", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "btn text-gray-300 border-[1px] border-gray-700",
          onClick: () => document.getElementById("my_modal_3").showModal(),
          children: "Register New Admin"
        }
      ),
      /* @__PURE__ */ jsx("dialog", { id: "my_modal_3", className: "modal", children: /* @__PURE__ */ jsxs("div", { className: "modal-box", children: [
        /* @__PURE__ */ jsx("form", { method: "dialog", children: /* @__PURE__ */ jsx("button", { className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2", children: "✕" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "pb-4 font-bold text-xl text-center", children: "Register New Admin" }),
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
                      placeholder: "Admin Name",
                      className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80",
                      required: true
                    }
                  ),
                  /* @__PURE__ */ jsx(InputError, { message: errors.name })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
                  "select",
                  {
                    id: "admintype",
                    name: "admintype",
                    onChange: (e) => setData("role", e.target.value),
                    value: data.role,
                    className: "select select-bordered w-80 max-w-xs",
                    required: true,
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "admin", disabled: true, children: "Admin Type" }),
                      /* @__PURE__ */ jsx("option", { value: "admin", children: "Admin" }),
                      /* @__PURE__ */ jsx("option", { value: "superadmin", children: "SuperAdmin" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      name: "adminemail",
                      value: data.email,
                      id: "adminemail",
                      onChange: (e) => setData("email", e.target.value),
                      placeholder: "Enter Admin Email",
                      className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80",
                      required: true
                    }
                  ),
                  /* @__PURE__ */ jsx(InputError, { message: errors.email })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "password",
                      name: "adminpasswords",
                      value: data.password,
                      id: "adminpasswords",
                      onChange: (e) => setData("password", e.target.value),
                      placeholder: "Enter Admin Password",
                      className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80",
                      required: true
                    }
                  ),
                  /* @__PURE__ */ jsx(InputError, { message: errors.password })
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    value: "Submit",
                    disabled: processing,
                    className: "btn border-[1px] border-gray-700 hover:text-white hover:border-gray-500",
                    children: "Add New Admin"
                  }
                )
              ]
            }
          )
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "table", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { children: "Admin Name" }),
        /* @__PURE__ */ jsx("th", { children: "Admin Type" }),
        /* @__PURE__ */ jsx("th", { children: "Admin Email" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: datas.data.admins.map((item, index) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "font-bold", children: item.name }) }) }) }),
        /* @__PURE__ */ jsx("td", { children: item.role }),
        /* @__PURE__ */ jsx("td", { children: item.email }),
        /* @__PURE__ */ jsxs("th", { children: [
          /* @__PURE__ */ jsx("button", { className: "btn bg-[#16a34a] text-white btn-xs", onClick: () => document.getElementById(`edit_${item.id}`).showModal(), children: "Edit Admin" }),
          /* @__PURE__ */ jsx("dialog", { id: `edit_${item.id}`, className: "modal", children: /* @__PURE__ */ jsxs("div", { className: "modal-box", children: [
            /* @__PURE__ */ jsx("form", { method: "dialog", children: /* @__PURE__ */ jsx("button", { className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2", children: "✕" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "pb-4  text-xl text-center", children: "Edit Admin" }),
              /* @__PURE__ */ jsxs(
                "form",
                {
                  onSubmit: (e) => handleEdit(e, item.id),
                  className: "flex flex-col gap-4 items-center",
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          name: "nama",
                          id: "nama",
                          onChange: (e) => setData("name", e.target.value),
                          placeholder: "Edit Admin Name",
                          className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80 font-normal"
                        }
                      ),
                      /* @__PURE__ */ jsx(InputError, { message: errors.name })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs(
                        "select",
                        {
                          id: "admintype",
                          name: "admintype",
                          onChange: (e) => setData("role", e.target.value),
                          value: data.role,
                          className: "select select-bordered w-80 max-w-xs font-normal",
                          children: [
                            /* @__PURE__ */ jsx("option", { value: "admin", disabled: true, children: "Admin Type" }),
                            /* @__PURE__ */ jsx("option", { value: "admin", children: "Admin" }),
                            /* @__PURE__ */ jsx("option", { value: "superadmin", children: "SuperAdmin" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(InputError, { message: errors.role })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "email",
                          name: "email",
                          value: data.email,
                          id: "email",
                          onChange: (e) => setData("email", e.target.value),
                          placeholder: "Edit Admin Email",
                          className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80 font-normal"
                        }
                      ),
                      /* @__PURE__ */ jsx(InputError, { message: errors.email })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "password",
                          name: "adminpassword",
                          value: data.password,
                          id: "adminpassword",
                          onChange: (e) => setData("password", e.target.value),
                          placeholder: "Edit Admin Password",
                          className: "placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80 font-normal"
                        }
                      ),
                      /* @__PURE__ */ jsx(InputError, { message: errors.password })
                    ] }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "submit",
                        value: "submit",
                        className: "btn border-[1px] border-gray-700 hover:text-white hover:border-gray-500",
                        children: "Edit This Admin"
                      }
                    )
                  ]
                }
              )
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("th", { children: [
          /* @__PURE__ */ jsx("button", { className: "btn bg-red-500 text-white btn-xs", onClick: () => document.getElementById(`remove_${item.id}`).showModal(), children: "Remove" }),
          /* @__PURE__ */ jsx("dialog", { id: `remove_${item.id}`, className: "modal", children: /* @__PURE__ */ jsx("div", { className: "card w-96 bg-neutral text-neutral-content", children: /* @__PURE__ */ jsxs("div", { className: "card-body items-center text-center", children: [
            /* @__PURE__ */ jsx("h2", { className: "card-title", children: "Are you sure?" }),
            /* @__PURE__ */ jsx("p", { className: "font-normal", children: "You can‘t undo this action" }),
            /* @__PURE__ */ jsx("div", { className: "card-actions justify-end", children: /* @__PURE__ */ jsxs("form", { method: "dialog", className: "flex gap-4 pt-4", children: [
              /* @__PURE__ */ jsx(Link, { href: route(`adminadd.destroy`, item.id), className: "btn bg-red-500 text-white", method: "delete", as: "button", type: "button", children: "Remove" }),
              /* @__PURE__ */ jsx("button", { className: "btn btn-ghost", children: "cancel" })
            ] }) })
          ] }) }) })
        ] })
      ] }, index)) })
    ] }) })
  ] });
};
const Admin = (admins) => {
  console.log(admins.admins);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Add Admins" }),
    /* @__PURE__ */ jsx(AdminAdd, { data: admins })
  ] });
};
Admin.layout = (page) => /* @__PURE__ */ jsx(Authenticated, { children: page });
export {
  Admin as default
};
