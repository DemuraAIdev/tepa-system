import TepaLogo from './Logo.svg';

export default function Brand() {
    return (
        <div>
            <h2 className="font-body text-indigo-500 text-2xl font-extrabold flex items-center gap-1">
                <img src={TepaLogo} alt='logo' className='h-[20px] ' />
                TECHNOPARK
            </h2>
        </div>
    )
}