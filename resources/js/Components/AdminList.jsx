import { useForm, Link, usePage } from '@inertiajs/react'
// import { useState, useEffect } from 'react';
// import Barcode from 'react-barcode';
import InputError from './Form/InputError';


const AdminAdd = (datas) => {
    const user = usePage().props.auth.user;


    const { data, setData, post, patch, errors, processing, reset } = useForm({
        name: '',
        email: '',
        password: '',
        role: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post(route('adminadd.store'), {
            onSuccess: () => {
                reset();
            }
        })
    }

    function handleEdit(e, item) {
        e.preventDefault()
        patch(route('adminadd.update', item), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            }
        })
    }


    return (
        <>
            <div className='flex gap-[5em] justify-between'>
                <div>
                    <button className="btn text-gray-300 border-[1px] border-gray-700"
                        onClick={() => document.getElementById('my_modal_3').showModal()}
                    >Register New Admin</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div>
                                <h1 className='pb-4 font-bold text-xl text-center'>Register New Admin</h1>
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
                                            placeholder="Admin Name"
                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80' required />
                                        <InputError message={errors.name} />

                                    </div>
                                    <div>
                                        <select id='admintype' name='admintype'
                                            onChange={e => setData('role', e.target.value)} 
                                            value={data.role} 
                                            className="select select-bordered w-80 max-w-xs" required>
                                            <option value="admin" disabled>Admin Type</option>
                                            <option value="admin">Admin</option>
                                            <option value="superadmin">SuperAdmin</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input
                                            type='email'
                                            name='adminemail'
                                            value={data.email}
                                            id='adminemail'
                                            onChange={e => setData('email', e.target.value)}
                                            placeholder="Enter Admin Email"
                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80' required />
                                        <InputError message={errors.email} />
                                    </div>
                                    <div>
                                        <input
                                            type='password'
                                            name='adminpasswords'
                                            value={data.password}
                                            id='adminpasswords'
                                            onChange={e => setData('password', e.target.value)}
                                            placeholder="Enter Admin Password"
                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80' required />
                                        <InputError message={errors.password} />
                                    </div>


                                    <button
                                        type='submit'
                                        value="Submit"
                                        disabled={processing}
                                        className='btn border-[1px] border-gray-700 hover:text-white hover:border-gray-500'
                                    >
                                        Add New Admin
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
                            <th>Admin Name</th>
                            <th>Admin Type</th>
                            <th>Admin Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.data.admins.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="flex items-center space-x-3">

                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.role}
                                </td>
                                <td>{item.email}</td>
                                <th>
                                    <button className="btn bg-[#16a34a] text-white btn-xs" onClick={() => document.getElementById(`edit_${item.id}`).showModal()}>Edit Admin</button>
                                    <dialog id={`edit_${item.id}`} className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <div>
                                                <h1 className='pb-4  text-xl text-center'>Edit Admin</h1>
                                                <form
                                                    onSubmit={(e) => handleEdit(e, item.id)}
                                                    className='flex flex-col gap-4 items-center'>
                                                    <div>
                                                        <input
                                                            type='text'
                                                            name='nama'
                                                            id='nama'
                                                            onChange={e => setData('name', e.target.value)}
                                                            placeholder="Edit Admin Name"
                                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80 font-normal'  />
                                                        <InputError message={errors.name} />
                                                    </div>
                                                    <div>
                                                        <select id='admintype' name='admintype'
                                                            onChange={e => setData('role', e.target.value)} 
                                                            value={data.role} 
                                                            className="select select-bordered w-80 max-w-xs font-normal" >
                                                            <option value="admin" disabled>Admin Type</option>
                                                            <option value="admin">Admin</option>
                                                            <option value="superadmin">SuperAdmin</option>
                                                        </select>
                                                        <InputError message={errors.role} />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type='email'
                                                            name='email'
                                                            value={data.email}
                                                            id='email'
                                                            onChange={e => setData('email', e.target.value)}
                                                            placeholder="Edit Admin Email"
                                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80 font-normal'  />
                                                        <InputError message={errors.email} />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type='password'
                                                            name='adminpassword'
                                                            value={data.password}
                                                            id='adminpassword'
                                                            onChange={e => setData('password', e.target.value)}
                                                            placeholder="Edit Admin Password"
                                                            className='placeholder:text-sm pl-4 bg-transparent border-[1px] border-gray-700 rounded-md h-12 w-80 font-normal'  />
                                                        <InputError message={errors.password} />
                                                    </div>

                                                    <button
                                                        type='submit'
                                                        value="submit"
                                                        className='btn border-[1px] border-gray-700 hover:text-white hover:border-gray-500'
                                                    >
                                                        Edit This Admin
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
                                                <p className="font-normal">You can&lsquo;t undo this action</p>
                                                <div className="card-actions justify-end">
                                                    <form method="dialog" className='flex gap-4 pt-4'>
                                                        <Link href={route(`adminadd.destroy`, item.id)} className="btn bg-red-500 text-white" method="delete" as='button' type="button">Remove</Link>
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
            {/* <div className="join flex items-center justify-center">
                {Array.from({ length: item.last_page }, (_, i) => (
                    <button
                        key={i}
                        className={`join-item btn ${currentPage === i + 1 ? 'btn-active' : ''}`}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div> */}
        </>
    )
}

export default AdminAdd