import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';
import Admins from '@/Components/AdminList';
const Admin = (admins) => {
    console.log(admins.admins)
    return (
        <>
            <Head title="Add Admins" />
            <Admins data={admins}/>
        </>
    )
}

Admin.layout = page => <AuthLayout children={page} />

export default Admin