import React, { useState } from 'react';
import { router } from '@inertiajs/react'

const ShopSearchBar = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('supplies'), { search: search });
    };

    return (
        <div>
            <form className="flex" onSubmit={handleSearch}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search here..."
                    className="bg-transparent input input-bordered rounded-l-lg rounded-r-none border-gray-400 w-full max-w-xs text-gray-800"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <input
                    type="submit"
                    name="submit"
                    id="submit"
                    value="Search"
                    className="rounded-r-lg rounded-l-none btn border-indigo-500 hover:border-indigo-500 bg-indigo-500 hover:bg-indigo-600 text-white max-w-x"
                />
            </form>
        </div>
    );
};

export default ShopSearchBar;
