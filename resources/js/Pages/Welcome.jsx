import React from 'react';
import Hero from '@/Components/Hero';
import CardSection from '@/Components/CardSection';
import Travel from '@/Components/Travel';
import MiniBank from '@/Components/MiniBank';
import BestItemsSection from '@/Components/BestItemsSection';
import FaqSection from '@/Components/FaqSection';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import MyThree from '@/Components/map';

export default function Welcome({ items }) {
    return (
        <>
            <Head title="Home" />
            <div id='home' className='mt-[4em] md:bg-[url(/Image/HomeWaveStacked.svg)] bg-no-repeat lg:bg-bottom bg-center bg-cover min-h-screen w-full bg-white '>
                <div className='w-full min-h-screen flex flex-col md:flex-row items-center justify-center '>

                    <Hero />

                    <div className='p-7 lg:mr-[5em] md:w-[50%] order-1 md:order-2 ' >
                        <div className='md:block hidden'>
                            <MyThree />
                        </div>
                        <div className='md:hidden block'>
                            <img src={'/Image/Hero.webp'} alt='Hero-Image' className='rounded-md w-fit shadow-cstm ' />
                        </div>
                    </div>
                </div>
            </div>
            <CardSection />
            <Travel />
            <MiniBank />
            <BestItemsSection item={items} />
            <FaqSection />
            <Footer />
            <Navbar />
        </>

    );
}