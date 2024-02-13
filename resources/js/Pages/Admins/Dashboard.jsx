import AuthLayout from '@/Layouts/AuthLayout';
import AdminCharts from '@/Components/AdminCharts';
import { Head } from '@inertiajs/react';
const AdminApp = ({ items,audit, monthlyData, visitors }) => {
    return (
        <>
            <Head title="Dashboard" />
            <AdminCharts item={items} data={monthlyData} audit={audit} visit={visitors} />
        </>
    )
}

AdminApp.layout = page => <AuthLayout children={page} />

export default AdminApp