import AdminLog from "./Charts/AdminLog"
import BoxChartOne from "./Charts/BoxChartOne"
import ProductChart from "./Charts/ProductChart"
import BoxChartPie from "./Charts/BoxChartPie"

const AdminCharts = ({ item, data, audit, visit }) => {
    return (
        <div className=" grid md:grid-cols-4 gap-[20px] auto-rows-gridBox">
            <div className="p-[20px] rounded-md border-[1px] border-gray-700 md:col-span-1 md:row-span-2">
                <ProductChart item={item}/>
            </div>
            <div className="p-[20px] rounded-md border-[1px] border-gray-700 md:row-span-2 md:col-span-2">
                <BoxChartPie data={visit}/>
            </div>
            <div className="p-[20px] rounded-md border-[1px] border-gray-700 md:col-span-1 md:row-span-2">
                <AdminLog data={audit}/>
            </div>
            <div className="p-[20px] rounded-md border-[1px] border-gray-700 md:col-span-4 md:row-span-2">
                <BoxChartOne data={data}/>
            </div>
            {/* <div className="p-[20px] rounded-md border-[1px] border-gray-700 md:col-span-4 md:row-span-2">
                <BoxChartOne data={data}/>
            </div> */}


        </div>
    )
}

export default AdminCharts