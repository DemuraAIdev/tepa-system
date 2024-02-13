import ShopContainer from "@/Components/ShopContainer"
import ShopNavbar from "@/Components/ShopNavbar"
import { Head } from '@inertiajs/react';

const Supplies = ({ items }) => {
    return (
        <div >
            <Head title="Supplies" />
            <ShopContainer item={items}/>
            <ShopNavbar />
        </div>
    )
}

export default Supplies