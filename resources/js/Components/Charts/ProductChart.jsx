
const ProductChart = ({ item }) => {
    return (
        <div>
            <h1 className="pb-4 font-heading font-bold text-gray-200">Newest Products</h1>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nama</th>
                            <th>Jumlah</th>
                            <th>Jenis</th>
                            <th>Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.jumlah}</td>
                                <td>{item.jenis}</td>
                                <td>{item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductChart