import Brand from './BrandLogo';

const footer = () => {
    return (
        <div className='p-7 w-full bg-[url(/Image/CardSectionBg.svg)] bg-cover bg-center text-gray-200'>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <Brand />
                    <h1 className='font-heading text-center font-semibold text-xl'>
                        SMKN 1 Bengkulu City <br />Raflesia Technopark
                    </h1>
                    <p className='border-t-[1px] mt-5 pt-5 border-indigo-200'>Copyright SMKN 1 Kota Bengkulu © 2023 - All right reserved</p>
                </div>
            </div>

            <div>
                
            <div className='flex pl-7'>
                        <a href='/dev' className=" tooltip" data-tip="https://url/dev">
                            <button className="h-[30px] w-[30px] bg-indigo-950 rounded-md">▪</button>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default footer