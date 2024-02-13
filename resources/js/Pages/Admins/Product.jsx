import AuthLayout from '@/Layouts/AuthLayout';
import AdminAdd from '@/Components/AdminAdd';
import { Head } from '@inertiajs/react';
const Product = ({ items }) => {
    
    return (
        <>
            <Head title="Product" />
            <AdminAdd item={items}/>
        </>
    )
}

Product.layout = page => <AuthLayout children={page} />

export default Product