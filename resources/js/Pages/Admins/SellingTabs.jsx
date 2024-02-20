// src/components/Tab.js
import FirstTab from '@/Components/FirstTab';
import SecondTab from '@/Components/SecondTab';
import { useState } from 'react';
import AuthLayout from '@/Layouts/AuthLayout';

const SellingTabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="bg-[#171d23] w-full min-h-screen p-7 flex flex-col items-center justify-center">
            <div className='bg-[#1e252f] shadow-cstm p-7 overflow-hidden rounded-xl'>
                <div className="flex flex-row items-center justify-center">
                    <button
                        className={`md:w-[20%] md:px-4 px-4 md:py-3 md:text-md text-sm py-2 border-gray-700 border-[1px] text-gray-300 rounded-tl-md rounded-bl-md ${activeTab === 1 ? 'bg-[#171d23] text-white ' : ''
                            }`}
                        onClick={() => setActiveTab(1)}
                    >
                        Selling
                    </button>

                    <button
                        className={`md:w-[20%] md:px-4 px-4 md:py-3 md:text-md text-sm py-2 border-gray-700 border-[1px] text-gray-300 rounded-tr-md rounded-br-md ${activeTab === 2 ? 'bg-[#171d23] text-white' : ''
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
