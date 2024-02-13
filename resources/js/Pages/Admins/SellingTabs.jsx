// src/components/Tab.js
import FirstTab from '@/Components/FirstTab';
import SecondTab from '@/Components/SecondTab';
import { useState } from 'react';
import AuthLayout from '@/Layouts/AuthLayout';

const SellingTabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="bg-slate-800 w-full min-h-screen p-7 flex flex-col items-center justify-center">
            <div className='bg-slate-700 p-7 w-fit rounded-md'>
                <div className="flex flex-row items-center justify-center">
                    <button
                        className={`md:w-[20%] px-4 py-2 bg-indigo-600 text-white border-r-[1px] border-slate-700 rounded-tl-xl rounded-bl-xl ${activeTab === 1 ? 'bg-indigo-800 text-white' : ''
                            }`}
                        onClick={() => setActiveTab(1)}
                    >
                        Selling
                    </button>

                    <button
                        className={`md:w-[20%] px-4 py-2 bg-indigo-600 text-white rounded-tr-xl rounded-br-xl ${activeTab === 2 ? 'bg-indigo-800 text-white' : ''
                            }`}
                        onClick={() => setActiveTab(2)}
                    >
                        Restock
                    </button>
                </div>

                <div className="mt-4">
                    {activeTab === 1 && <div className='flex flex-col md:w-[50vw] w-[80vw] items-center justify-center'>
                        <FirstTab />
                    </div>}
                    {activeTab === 2 && <div className='flex flex-col md:w-[50vw] w-[80vw] items-center justify-center'>
                        <SecondTab />
                    </div>}
                </div>
            </div>
        </div>
    );
};

SellingTabs.layout = page => <AuthLayout children={page} />

export default SellingTabs;
