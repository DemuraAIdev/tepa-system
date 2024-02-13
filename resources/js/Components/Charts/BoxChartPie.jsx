import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,Legend, ResponsiveContainer } from 'recharts';
import React, { PureComponent } from 'react';


const ProductChart = ({ data }) => {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return (
        <>
            <h1 className="pb-4 font-heading font-bold text-gray-200">Visitors Website Count {month[new Date().getMonth()]}</h1>
            <div className='h-[50vh] w-full'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="Visitor" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default ProductChart