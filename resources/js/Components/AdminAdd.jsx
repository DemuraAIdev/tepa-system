import { useForm, Link, usePage } from '@inertiajs/react'
import { useState, useEffect } from 'react';
import Barcode from 'react-barcode';
import InputError from './Form/InputError';


const AdminAdd = ({ item }) => {
    const user = usePage().props.auth.user;
    const [filter, setFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const filteredItems = filter === 'All' ? item.data : item.data.filter(i => i.jenis === filter);
    console.log(filteredItems);
    const itemsPerPage = 10; // You can adjust this value

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const itemsToDisplay = filteredItems.slice(startIndex, endIndex);

    useEffect(() => {
        setCurrentPage(1); // Reset to the first page when changing the filter
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
        image_url: "",
    })

    function handleSubmit(e) {
        e.preventDefault()
        post(route('product.store'), {
            onSuccess: () => {
                reset();
            }
        })
    }

    function handleEdit(e, item) {
        e.preventDefault()
        patch(route('product.update', item), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            }
        })
    }


    return (
        <>
            <div className='flex gap-[5em] justify-between'>
                <div className=" flex items-center">
                    <select className="text-gray-300 select select-bordered h-[10px] w-24 max-w-xs" onChange={e => setFilter(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Alat-Tulis">Alat-Tulis</option>
                        <option value="Buku">Buku</option>
                        <option value="Perlengkapan">Perlengkapan</option>
                        <option value="Atribut">Atribut</option>
                        <option value="Voucher">Voucher</option>
                        <option value="Komponen-Komputer">Komponen-Komputer</option>
                    </select>
                </div>
                <div>
                    <button className="btn text-gray-300 border-[1px] border-gray-700" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Product</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div>
                                <h1 className='pb-4 font-bold text-xl text-center'>Add a product</h1>
                                <form onSubmit={handleSubmit}
                                    className='flex flex-col gap-4 items-center'
                                >

                                    <div>
                                        <input
                                            type='text'
                                            name='name'
                                            value={data.name}
                                            id='name'
                                            onChange={e => setData('name', e.target.value)}
                                            placeholder="Nama Produk"
                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80' required />
                                        <InputError message={errors.name} />

                                    </div>
                                    <div>
                                        <select id='jenis' name='jenis' onChange={e => setData('jenis', e.target.value)} value={data.jenis} className="select select-bordered w-80 max-w-xs" required>
                                            <option value="All">jenis</option>
                                            <option value="Alat-Tulis">Alat-Tulis</option>
                                            <option value="Buku">Buku</option>
                                            <option value="Perlengkapan">Perlengkapan</option>
                                            <option value="Atribut">Atribut</option>
                                            <option value="Voucher">Voucher</option>
                                            <option value="Komponen-Komputer">Komponen-Komputer</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input
                                            type='number'
                                            name='jumlah'
                                            value={data.jumlah}
                                            id='jumlah'
                                            onChange={e => setData('jumlah', e.target.value)}
                                            placeholder="Amount"
                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80' required />
                                        <InputError message={errors.jumlah} />
                                    </div>
                                    <div>
                                        <input
                                            type='number'
                                            name='harga'
                                            value={data.harga}
                                            id='harga'
                                            onChange={e => setData('harga', e.target.value)}
                                            placeholder="Price"
                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80' required />
                                        <InputError message={errors.harga} />
                                    </div>
                                    <div>
                                        <input
                                            type='number'
                                            name='productid'
                                            value={data.productid}
                                            id='productid'
                                            onChange={e => setData('productid', e.target.value)}
                                            placeholder="Id Product"
                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80' required />
                                        <InputError message={errors.productid} />
                                    </div>

                                    <div className='text-center'>
                                        <h2 className='pb-2'>Add product image</h2>
                                        <input
                                            type="file"
                                            name='image_url'
                                            id='image_url'
                                            onChange={e => {
                                                setData('image_url', e.target.files[0]);
                                                handleChange(e);
                                            }}
                                            className="file-input file-input-bordered w-full max-w-xs mb-3" />
                                        <InputError message={errors.image_url} />

                                        {progress &&
                                            <progress value={progress.percentage} max="100" >
                                                {progress.percentage}%
                                            </progress>
                                        }
                                        <img
                                            src={file}
                                            className='w-fit mx-auto' />
                                    </div>

                                    <button
                                        type='submit'
                                        value="Submit"
                                        disabled={processing}
                                        className='btn border-[1px] border-gray-700 hover:text-white hover:border-gray-500'
                                    >
                                        Add
                                    </button>
                                </form>

                            </div>
                        </div>
                    </dialog>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Jumlah/Stok</th>
                            <th>Harga</th>
                            <th>Barcode</th>
                            <th>Jenis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {itemsToDisplay.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className=" w-12 h-12">
                                                <img src={`/Image/items/${item.image_url}`} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                            <div className="text-sm opacity-50">{item.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.jumlah}
                                </td>
                                <td>{item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                <td>
                                    <button className="btn" onClick={() => document.getElementById(`my_bar_${item.id}`).showModal()}>{item.barcode}</button>
                                    <dialog id={`my_bar_${item.id}`} className="modal">
                                        <div className="modal-box flex flex-col items-center justify-center">
                                            <h2 className='text-3xl text-gray-300 font-bold pb-4'>Barcode</h2>
                                            <Barcode value={item.barcode} />
                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>
                                </td>
                                <td>{item.jenis}</td>
                                <th>
                                    <button className="btn bg-[#16a34a] text-white btn-xs" onClick={() => document.getElementById(`edit_${item.id}`).showModal()}>Edit</button>
                                    <dialog id={`edit_${item.id}`} className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <div>
                                                <h1 className='pb-4 font-bold text-xl text-center'>Edit a product</h1>
                                                <form onSubmit={(e) => handleEdit(e, item.id)}
                                                    className='flex flex-col gap-4 items-center'>
                                                    <div>
                                                        <input
                                                            type='text'
                                                            name='id'
                                                            value={data.id}
                                                            id='id'
                                                            onChange={e => setData('id', e.target.value)}
                                                            placeholder="Nama Produk"
                                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80' />
                                                        <InputError message={errors.id} />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type='text'
                                                            name='name'
                                                            value={data.name}
                                                            id='name'
                                                            onChange={e => setData('name', e.target.value)}
                                                            placeholder="Nama Produk"
                                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80' />
                                                        <InputError message={errors.name} />
                                                    </div>
                                                    <div>
                                                        <select id='jenis' name='jenis' onChange={e => setData('jenis', e.target.value)} value={data.jenis} className="select select-bordered w-80 max-w-xs">
                                                            <option value="All">jenis</option>
                                                            <option value="Alat-Tulis">Alat-Tulis</option>
                                                            <option value="Buku">Buku</option>
                                                            <option value="Perlengkapan">Perlengkapan</option>
                                                            <option value="Atribut">Atribut</option>
                                                            <option value="Voucher">Voucher</option>
                                                            <option value="Komponen-Komputer">Komponen-Komputer</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <input
                                                            type='number'
                                                            name='jumlah'
                                                            value={data.jumlah}
                                                            id='jumlah'
                                                            onChange={e => setData('jumlah', e.target.value)}
                                                            placeholder="Amount"
                                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80' />
                                                        <InputError message={errors.jumlah} />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type='number'
                                                            name='harga'
                                                            value={data.harga}
                                                            id='harga'
                                                            onChange={e => setData('harga', e.target.value)}
                                                            placeholder="Price"
                                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80' />
                                                        <InputError message={errors.harga} />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type='number'
                                                            name='productid'
                                                            value={data.productid}
                                                            id='productid'
                                                            onChange={e => setData('productid', e.target.value)}
                                                            placeholder="Id Product"
                                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80' />
                                                        <InputError message={errors.productid} />
                                                    </div>

                                                    <div className='text-center'>
                                                        <h2 className='pb-2'>Add product image</h2>
                                                        <input
                                                            type="file"
                                                            name='image_url'
                                                            id='image_url'
                                                            onChange={e => {
                                                                setData('image_url', e.target.files[0]);
                                                                handleChange(e);
                                                            }}
                                                            className="file-input file-input-bordered w-full max-w-xs mb-3" />
                                                        <InputError message={errors.image_url} />

                                                        {progress &&
                                                            <progress value={progress.percentage} max="100" >
                                                                {progress.percentage}%
                                                            </progress>
                                                        }
                                                        <img
                                                            src={file}
                                                            className='w-fit mx-auto' />
                                                    </div>

                                                    <button
                                                        type='submit'
                                                        value="submit"
                                                        className='btn border-[1px] border-gray-700 hover:text-white hover:border-gray-500'
                                                    >
                                                        Edit
                                                    </button>
                                                </form>

                                            </div>
                                        </div>


                                    </dialog>
                                </th>
                                <th>
                                    <button className="btn bg-red-500 text-white btn-xs" onClick={() => document.getElementById(`remove_${item.id}`).showModal()}>Remove</button>
                                    <dialog id={`remove_${item.id}`} className="modal">
                                        <div className="card w-96 bg-neutral text-neutral-content">
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">Are you sure?</h2>
                                                <p>You can't undo this action</p>
                                                <div className="card-actions justify-end">
                                                    <form method="dialog" className='flex gap-4'>
                                                        <Link href={route(`product.destroy`, item.id)} className="btn bg-red-500 text-white" method="delete" as='button' type="button">Remove</Link>

                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-ghost">cancel</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </dialog>
                                </th>

                            </tr>
                        ))}


                    </tbody>

                </table>

            </div>
            <div className="join flex items-center justify-center">
                {Array.from({ length: item.last_page }, (_, i) => (
                    <button
                        key={i}
                        className={`join-item btn ${currentPage === i + 1 ? 'btn-active' : ''}`}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </>
    )
}

export default AdminAdd