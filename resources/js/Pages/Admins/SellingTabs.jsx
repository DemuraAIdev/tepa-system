// src/components/Tab.js

import { useState, useEffect } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import axios from "axios";
import { Link as RouteLink, usePage } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

const SellingCashier = ({ items, kode_inv }) => {
    // [{
    //     "id": 2,
    //     "name": "Buku",
    //     "harga": 5000,
    //     "jumlah": 190,
    //     "barcode": 46334657343456,
    //     "image_url": "2023112711107ce729413905055509e62a1f82a382f2.jpeg",
    //     "jenis": "Buku",
    //     "created_at": "2023-11-27T11:10:56.000000Z",
    //     "updated_at": "2023-11-27T11:11:24.000000Z"
    //     }]
    const itemss = items;
    const [addedItems, setAddedItems] = useState([]);
    const [transactionID, setTransactionID] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [itemId, setItemId] = useState("");

    const addItem = (item, kode_inv) => {
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
        setItemId(""); // reset the input field
    };
    const user = usePage().props.auth.user;

    const handleSubmit = (event) => {
        event.preventDefault();
        const items = addedItems.map((item) => ({
            nama_barang: item.name,
            item_id: item.id,
            qty: item.buyAmount,
            harga_jual: item.harga,
            subtotal: item.buyAmount * item.harga,
        }));

        axios
            .post("/selling", {
                items: items,
                user_id: user.id,
                total: grandTotal,
                kode_inv: kode_inv,
            })
            .then((response) => {
                // handle success
                setAddedItems([]);
                if (response.data.success) {
                    setGrandTotal(0);
                    setTransactionID(response.data.transaction_id);
                    document.getElementById("my_modal_4").showModal();
                } else {
                    alert("Failed to save transaction");
                }
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    };

    return (
        <>
            <Head title="Invoice" />
            <div className="bg-[#171d23] md:w-full  min-h-[90vh] p-7 flex flex-col items-center justify-center font-body">
                <div className="bg-[#1D232A] p-7 flex flex-col gap-7 rounded-xl shadow-md w-10/12">
                    <div className="text-center font-bold text-white text-2xl">
                        <h1 className="uppercase font-body">
                            Item Registration
                        </h1>
                        {/* add kode inv */}
                        <p className="text-sm text-gray-500">
                            Kode Invoice: {kode_inv}
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 justify-center">
                            <form onSubmit={handleItemIdSubmit}>
                                <input
                                    type="number"
                                    id="itemId"
                                    name="itemId"
                                    placeholder="Here goes the item's id..."
                                    className="input  input-bordered border-[1px] border-gray-700 px-4 py-2 bg-[#171d23] text-sm"
                                    value={itemId}
                                    onChange={(e) => setItemId(e.target.value)}
                                />
                                <button className="btn border-[1px] border-gray-700 hover:text-white hover:border-gray-500 text-sm ml-2">
                                    Ok
                                </button>
                            </form>
                            <button
                                className="btn text-gray-300 border-[1px] border-gray-700"
                                onClick={() =>
                                    document
                                        .getElementById("my_modal_3")
                                        .showModal()
                                }
                            >
                                Add Items
                            </button>
                        </div>
                        <dialog id="my_modal_3" className="modal ">
                            <div className="modal-box w-11/12 max-w-xl">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                        ✕
                                    </button>
                                </form>
                                <div>
                                    <h1 className="pb-4 font-bold text-xl text-center">
                                        Add Product
                                    </h1>
                                    {/* table of items */}
                                    <table className="table w-full">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Barcode</th>
                                                <th>Image</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {itemss.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.name}</td>
                                                    <td>
                                                        {item.harga.toLocaleString(
                                                            "id-ID",
                                                            {
                                                                style: "currency",
                                                                currency: "IDR",
                                                            }
                                                        )}
                                                    </td>
                                                    <td>{item.jumlah}</td>
                                                    <td>{item.barcode}</td>
                                                    <td>
                                                        <img
                                                            src={`/Image/items/${item.image_url}`}
                                                            alt="Avatar Tailwind CSS Component"
                                                        />
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-sm btn-circle btn-ghost"
                                                            onClick={() =>
                                                                addItem(item)
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </dialog>
                    </div>
                    <div>
                        <div className="overflow-x-auto border-b-[1px] border-gray-700 pb-7">
                            <table className="table mx-auto">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {/* <tr>
        <td>1</td>
        <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                        />
                    </div>
                </div>
                <div>
                    <div className="font-bold">
                        Sempak Rimuru
                    </div>
                </div>
            </div>
        </td>
        <td>
            <input
                type="number"
                className="focus:outline-none px-3 py-2 rounded-md bg-[#171d23] border-[1px] border-gray-700"
            />
        </td>
        <td>500000</td>
        <td>total</td>
        <th>
            <button className="btn bg-red-500 text-white font-bold btn-xs">
                Delete
            </button>
        </th>
    </tr> */}
                                    {addedItems.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    value={item.buyAmount}
                                                    onChange={(e) =>
                                                        handleQuantityChange(
                                                            item.id,
                                                            Number(
                                                                e.target.value
                                                            )
                                                        )
                                                    }
                                                    className="focus:outline-none px-3 py-2 rounded-md bg-[#171d23] border-[1px] border-gray-700"
                                                />
                                            </td>
                                            <td>
                                                {item.harga.toLocaleString(
                                                    "id-ID",
                                                    {
                                                        style: "currency",
                                                        currency: "IDR",
                                                    }
                                                )}
                                            </td>
                                            <td>
                                                {(
                                                    item.buyAmount * item.harga
                                                ).toLocaleString("id-ID", {
                                                    style: "currency",
                                                    currency: "IDR",
                                                })}
                                            </td>
                                            <td>
                                                <button
                                                    className="btn bg-red-500 text-white font-bold btn-xs"
                                                    onClick={() =>
                                                        deleteItem(item.id)
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                {/* foot */}
                                <tfoot>
                                    <tr></tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-4 ">
                        <div className="flex gap-2 items-center text-sm">
                            <label for="total">Grand Total</label>
                            <input
                                type="text"
                                id="total"
                                name="total"
                                value={grandTotal.toLocaleString("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                })}
                                className="input input-bordered border-[1px] border-gray-700 md:w=[75%] px-4 py-2 bg-[#171d23] text-sm "
                                disabled
                            />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <button className="uppercase font-bold btn border-gray-700 hover:border-gray-500">
                                Save Transaction
                            </button>
                        </form>

                        <dialog id="my_modal_4" className="modal ">
                            <div className="modal-box w-11/12 max-w-xl">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => }>
        
    </button> */}
                                    <RouteLink
                                        href={route("selling")}
                                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                    >
                                        ✕
                                    </RouteLink>
                                </form>
                                <div>
                                    <h1 className="pb-4 font-bold text-xl text-center">
                                        Print Invoice
                                    </h1>
                                    <div className="flex items-center justify-center gap-4">
                                        <p className="text-lg text-gray-500">
                                            Transaction ID: {transactionID}
                                        </p>
                                        <a
                                            href={`/invoice/${transactionID}/print`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-circle btn-ghost"
                                        >
                                            Print
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </>
    );
};

SellingCashier.layout = (page) => <AuthLayout children={page} />;

export default SellingCashier;
