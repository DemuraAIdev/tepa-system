
import { motion } from "framer-motion";

const items = {
    hidden: {
        opaciity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
        }
    }

}
const items2 = {
    hidden: {
        opaciity: 0,
        y: 150,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
        }
    }

}

const Travel = () => {
    return (
        <div
            id='travel'
            className=" bg-[url(/Image/TravelBg.svg)] bg-center bg-cover min-h-[100vh] w-full flex md:flex-row flex-col items-center justify-center font-body"

        >
            <motion.div
                className="flex flex-col gap-5 md:w-[50%] p-7 lg:ml-[5em] order-2 md:order-1"
                variants={items}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: true,
                }}
            >
                <h1 className="text-4xl font-body font-bold text-indigo-500">
                    K-One and Travel
                </h1>
                <p className='text-justify text-gray-800'>
                    K-One and Travel is a distinguished service within Technopark, dedicated to providing travel solutions for schools and other individuals. Moreover, it serves as a training ground for students specializing in ULP (Business Services and Tourism.), offering a conducive environment for honing the skills of young learners. This establishment not only ensures efficient travel arrangements but also contributes significantly to the educational development of students pursuing ULP courses
                </p>
            </motion.div>

            <motion.div
                className='p-7 lg:mr-[5em] md:w-[50%] order-1 md:order-2'
                variants={items2}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: true,
                }}
            >
                <img src={'/Image/landing/travel.webp'} alt='Tavel-Image-1' className='rounded-md w-fit shadow-cstm' />
            </motion.div>
        </div>
    )
}

export default Travel