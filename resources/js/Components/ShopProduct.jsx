

const ShopProduct = ({ nama, jenis, harga, img }) => {
    return (

        <div className="max-w-md m-[1em] bg-gray-100 shadow-cstm2 h-[300px] rounded-xl overflow-hidden md:max-w-2xl">

            <img src={`/Image/items/${img}`}
                className='rounded-t-md h-[200px] object-cover w-full'
                alt={nama}
            />
            <div className="p-6">
                <p className="text-xl font-semibold text-gray-800 mb-2">{harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                <p className="text-gray-600 overflow-ellipsis overflow-hidden">
                    {nama}</p>
            </div>
        </div>
    )
}

export default ShopProduct