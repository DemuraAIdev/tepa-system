import { Head } from "@inertiajs/react";
import AuthLayout from '@/Layouts/AuthLayout';

const Cashier = () => {
    return (
        <>
            <Head title="Cashier" />
            <div>
                <h1>Cashier</h1>
            </div>
        </>

    )
}

Cashier.layout = page => <AuthLayout children={page} />

export default Cashier