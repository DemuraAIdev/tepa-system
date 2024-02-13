import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const BoxChartOne = (monthlyData) => {
    console.log(monthlyData)
    return (
        <>
            <div>
                <h1 className='pl-[2em] pb-[1em] text-md font-body text-white font-bold'>Product Log Graphic {new Date().getFullYear()}</h1>
            </div>

            <div className='h-[40vh] w-full'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={monthlyData.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Inward" barSize={20} fill="#4f46e5" />
                        <Bar dataKey="Outward" barSize={20} fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default BoxChartOne