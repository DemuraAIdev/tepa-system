import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { Link as RouterLink } from '@inertiajs/react';



const BestItems = ({ name, type, price, img }) => {

    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 5,
            speed: 10,
            glare: true,
            "max-glare": 0.10
        })
    })

    return (
        <div className="max-w-md m-[1em] bg-gray-100 shadow-cstm2 rounded-xl overflow-hidden md:max-w-2xl">

            <RouterLink href='/supplies'>
                <img src={`/Image/items/${img}`}
                    className='rounded-t-md max-h-[200px] min-w-[270px]'
                    alt={name}
                />
            </RouterLink>
            <div className="p-6">
                <p className="text-xl font-semibold text-gray-800 mb-2">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                <p className="text-gray-600 overflow-ellipsis overflow-hidden">
                    {name}</p>
            </div>
        </div>
    )
}



export default BestItems;

