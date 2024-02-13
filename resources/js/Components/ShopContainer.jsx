import React, { useState, useEffect } from 'react';
import ShopProduct from "./ShopProduct"

const ShopContainer = ({ item }) => {
    const [filter, setFilter] = useState('All');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredItems(item);
        } else {
            setFilteredItems(item.filter(i => i.jenis === filter));
        }
    }, [filter, item]);

    return (
        <>
            <div className="h-[10vh] bg-white border-[1px] border-b-gray-200 mt-[4em] md:mt-[5.5em] md:px-[5em] px-7     flex items-center">
                <select className="text-gray-500 select select-bordered h-[10px] md:w-[10%]  bg-white" onChange={e => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Alat-Tulis">Alat-Tulis</option>
                    <option value="Buku">Buku</option>
                    <option value="Perlengkapan">Perlengkapan</option>
                    <option value="Atribut">Atribut</option>
                    <option value="Voucher">Voucher</option>
                    <option value="Komponen-Komputer">Komponen-Komputer</option>
                </select>
            </div>

            <div className="bg-white w-full min-h-screen md:px-[5em] p-7 grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[1em] md:gap-4    ">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <ShopProduct key={index} nama={item.name} jenis={item.jenis} harga={item.harga} img={item.image_url} />
                    ))
                ) : (
                    <h1 className='text-xl font-bold'>Item Not Found</h1>
                )}

            </div>
        </>
    )
}

export default ShopContainer
