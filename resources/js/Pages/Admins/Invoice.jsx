import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';
import { Link, usePage } from '@inertiajs/react';
const Invoice = ({ transaction }) => {

    return (
        <>
            <Head title="Invoice" />
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Kode Invoice</th>
                        <th>Tanggal</th>
                        <th>Total</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {transaction.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.kode_inv}</td>
                            <td>{new Date(item.created_at).toLocaleDateString()}</td>
                            <td>{item.total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                            <td>
                                <a
                                    href={`/invoice/${item.id}/print`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm  btn-primary"
                                >
                                    Print
                                </a>
                                {/*delete  */}
                                <Link href={route(`invoice.destroy`, item.id)} className="btn bg-red-500 text-white" method="delete" as='button' type="button">Remove</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

Invoice.layout = page => <AuthLayout children={page} />

export default Invoice