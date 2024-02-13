import { FaFacebook, FaInstagram, FaGlobe, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Head } from "@inertiajs/react";

const Dev = () => {
    return (
        <>
            <Head title="Dev" />
            <div className="p-7 min-h-screen flex w-full bg-[url(../Images/CardSectionBg.svg)] items-center justify-center ">
                <div className="lg:mx-[5em] md:mx-[2em] flex flex-col gap-10 p-7 backdrop-blur-xl bg-gray-900/30 border-[1px] border-gray-950 shadow-cstm2 rounded-xl">

                    <div className="flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-gray-200 font-body font-semibold text-xl tracking-wider text-center">
                            Meet Our Dev Squad
                        </h1>
                        <p className="text-gray-300 font-body text-justify md:text-center">
                            Behind every feature and application we build, there&lsquo;s a passionate and dedicated team of developers committed to delivering the best possible experiences for you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                        <div className="border-[1px] border-gray-500 rounded-br-3xl rounded-tl-3xl flex flex-col items-center justify-center p-4 text-center order-3 md:order-1">
                            <img
                                src="image/avatar.png"
                                className="w-[6em] rounded-full" />
                            <h1 className="font-body font-semibold text-md text-gray-200 pt-2">
                                Aida Silva M
                            </h1>
                            <h4 className="font-semibold font-body py-2 text-sm text-gray-400">
                                System Designer
                            </h4>
                            <p className="text-gray-300 font-body text-center italic">
                                "You can cry and scream but don't give up."

                            </p>
                            <div>
                                <ul className="flex gap-4 p-2">
                                    <li>
                                        <a href='https://instagram.com/ads_mhydn?igshid=ZW45Y3ozYWZ2bGhu' rel="noopener noreferrer" className="text-indigo-600 text-xl">
                                            <FaInstagram />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:col-span-2 border-[1px] border-gray-500 rounded-br-3xl rounded-tl-3xl flex flex-col items-center justify-center p-4 text-center order-1 md:order-2">
                            <img
                                src="image/avatar.png"
                                className="w-[6em] rounded-full" />
                            <h1 className="font-body font-semibold text-md text-gray-200 pt-2">
                                Haekal Abdillah Ramadhan
                            </h1>
                            <h4 className="font-semibold font-body py-2 text-sm text-gray-400">
                                Lead/Front-End
                            </h4>
                            <p className="text-gray-300 font-body text-center italic">
                                "You only live once, but if you do it right, once is enough."

                            </p>
                            <div>
                                <ul className="flex gap-4 p-2">
                                    <li>
                                        <a href='https://www.instagram.com/haekal.a.r/' rel="noopener noreferrer" className="text-indigo-600 text-xl">
                                            <FaInstagram />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.youtube.com/channel/UCj1iYTxSafuX4fzlTxwgG9g' rel="noopener noreferrer" className="text-indigo-600 text-xl">
                                            <FaYoutube />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://cielhollow.tech' rel="noopener noreferrer" className="text-indigo-600 text-xl">
                                            <FaGlobe />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-[1px] border-gray-500 rounded-br-3xl rounded-tl-3xl flex flex-col items-center justify-center p-4 text-center order-2 md:order-3">
                            <img
                                src="image/avatar.png"
                                className="w-[6em] rounded-full" />
                            <h1 className="font-body font-semibold text-md text-gray-200 pt-2">
                                Abdul Vaiz Vahry Iskandar
                            </h1>
                            <h4 className="font-semibold font-body py-2 text-sm text-gray-400">
                                Back-End
                            </h4>
                            <p className="text-gray-300 font-body text-center italic">
                                "Your determination is the spark that ignites your success."
                            </p>
                            <div>
                                <ul className="flex gap-4 p-2">
                                    <li>
                                        <a href='https://github.com/DemuraAIdev/' rel="noopener noreferrer" className="text-indigo-600 text-xl">
                                            <FaGithub />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.linkedin.com/in/abdul-vaiz-vi' rel="noopener noreferrer" className="text-indigo-600 text-xl">
                                            <FaLinkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://vahryiskandar.my.id/' rel="noopener noreferrer" className="text-indigo-600 text-xl">
                                            <FaGlobe />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:col-span-2 border-[1px] border-gray-500 rounded-br-3xl rounded-tl-3xl flex flex-col items-center justify-center p-4 text-center order-4">
                            <img
                                src="image/avatar.png"
                                className="w-[6em] rounded-full" />
                            <h1 className="font-body font-semibold text-md text-gray-200 pt-2">
                                M Alif Dwi Saputra
                            </h1>
                            <h4 className="font-semibold font-body py-2 text-sm text-gray-400">
                                Documentation Specialist
                            </h4>
                            <p className="text-gray-300 font-body text-center italic">
                                "Tap Confidence in the Online World."
                            </p>
                            <div>
                                <ul className="flex gap-4 p-2">
                                    <li>
                                        <a href='#' rel="noopener noreferrer" className="text-indigo-600 text-xl">
                                            <FaFacebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' rel="noopener noreferrer" className="text-indigo-600 text-xl">
                                            <FaInstagram />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' rel="noopener noreferrer" className="text-indigo-600 text-xl">
                                            <FaGlobe />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:col-span-2 border-[1px] border-gray-500 rounded-br-3xl rounded-tl-3xl flex flex-col items-center justify-center p-4 text-center order-5">
                            <img
                                src="image/avatar.png"
                                className="w-[6em] rounded-full" />
                            <h1 className="font-body font-semibold text-md text-gray-200 pt-2">
                                Allysa Rania S
                            </h1>
                            <h4 className="font-semibold font-body py-2 text-sm text-gray-400">
                                System Designer
                            </h4>
                            <p className="text-gray-300 font-body text-center italic">
                                "i'm pretty, pretty depressed"
                            </p>
                            <div>
                                <ul className="flex gap-4 p-2">
                                    <li>
                                        <a href='https://instagram.com/allysarania?igshid=MWJhdDFtcGxxY3Bybg' rel="noopener noreferrer" className="text-indigo-600 text-xl">
                                            <FaInstagram />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-7">
                        <h1 className="text-gray-200 font-body font-semibold text-xl tracking-wider text-center">
                            About System
                        </h1>
                        <div className="flex justify-center items-center  flex-col">
                            <div className="border-gray-500 border-[1px] p-7 rounded-br-3xl rounded-tl-3xl">
                                <img src="/w.png" width={250} alt="" />
                            </div>
                        </div>
                        <p className="text-gray-300 font-body text-justify">
                            Our system is built on a robust stack, with <a className="text-red-500 hover:underline" href="https://laravel.com/">Laravel</a> as the backend framework, <a href="https://react.dev/" className="text-blue-400 hover:underline">ReactJS</a> as the frontend framework, and <a href="https://inertiajs.com/" className="text-purple-400 hover:underline">InertiaJS</a> serving as the seamless bridge connecting the two. We've harnessed the power of <a href="https://tailwindcss.com/" className="text-sky-500 hover:underline">TailwindCSS</a> for a flexible and responsive UI.

                            For bundling and managing dependencies, we rely on <a href="https://vitejs.dev/" className="hover:underline text-yellow-500">Vite</a>, which helps ensure fast and efficient development. Behind the scenes, we store and manage data using <a href="https://www.mysql.com/" className="text-[#3E6E93] hover:underline">MySQL</a>, a well-established and reliable database solution. To add a touch of creativity and flair to our user interface, we've integrated the React-Icon third-party library.

                            With this tech-savvy infrastructure, we're dedicated to providing a modern and user-friendly system that leverages the latest technologies to deliver an exceptional user experience.
                            <br />
                            <br />
                            &copy; {new Date().getFullYear()} ISEKAI SYSTEM
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dev