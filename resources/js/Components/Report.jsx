import { AiFillPrinter } from 'react-icons/ai';
import React, { useRef, useState } from 'react';
import { useDownloadExcel } from "react-export-table-to-excel";

const Report = (props) => {
    const tableRef = useRef(null);
    const [data, setData] = useState(Object.values(props.data).sort((a, b) => new Date(a.formatted_created_at) - new Date(b.formatted_created_at)));

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const filteredData = Object.values(props.data).filter((item) => {
            if (name === 'year') {
                const year = new Date(item.formatted_created_at).getFullYear().toString();
                return year.includes(value);
            }
            if (name === 'month') {
                const month = (new Date(item.formatted_created_at).getMonth() + 1).toString().padStart(2, '0');
                return month.includes(value);
            }
            if (name === 'date') {
                const date = new Date(item.formatted_created_at).getDate().toString().padStart(2, '0');
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


    return (
        <>
            <div className='flex gap-[5em] justify-between mb-3'>
                <div className="flex gap-2">
                    <input
                        type="text"
                        name="year"
                        placeholder='Year'
                        className="input input-bordered w-full max-w-xs"
                        onChange={handleFilterChange}
                    />
                    <input
                        type="text"
                        name="month"
                        placeholder='Month'
                        className="input input-bordered w-full max-w-xs"
                        onChange={handleFilterChange}
                    />
                    <input
                        type="text"
                        name="date"
                        placeholder='Day'
                        className="input input-bordered w-full max-w-xs"
                        onChange={handleFilterChange}
                    />
                </div>
                    <button onClick={onDownload} className="btn border-[1px] border-gray-700">
                        Export <AiFillPrinter className='text-lg' />
                    </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs" ref={tableRef}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama barang</th>
                            <th>Tipe</th>
                            <th>Jumlah</th>
                            <th>Total</th>
                            <th>Tanggal transaksi</th>
                            <th>Harga</th>
                            <th>Produk ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className={item.type === 'masuk' ? 'bg-green-800' : 'bg-red-900'}>
                                <td>{item.id}</td>
                                <td>{item.item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.jumlah}</td>
                                <td>{item.total}</td>
                                <td>{item.formatted_created_at}</td>
                                <td>{item.item.harga}</td>
                                <td>{item.item.barcode.toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Report;
