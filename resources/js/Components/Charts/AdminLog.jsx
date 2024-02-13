
const AdminLog = (audit) => {
    console.log(audit)
    return (
        <div>
            <h1 className="pb-4 font-heading font-bold text-gray-200">Admin Login Log</h1>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Action</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            audit.data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.admin.name}</td>
                                    <td>{item.action}</td>
                                    <td>{item.timestamp}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminLog;