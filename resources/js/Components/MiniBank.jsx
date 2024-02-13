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
        <div id='minibank' className="bg-white min-h-[80vh] w-full flex md:flex-row flex-col items-center justify-center font-body">
            <motion.div
                className="flex flex-col gap-5 md:w-[50%] p-7 lg:mr-[5em] md:order-2 order-2"
                variants={items}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: true,
                }}
            >
                <h1 className="text-4xl font-body font-bold text-indigo-500">
                    Mini Bank
                </h1>
                <p className='text-justify text-gray-800'>
                    Mini bank is a banking activity located at SMK Negeri 1 Kota Bengkulu. Mini Bank is also one of the learning resources and training facilities for students majoring in Accounting and Institutional Finance in practicing the application of accounting knowledge.
                    Mini Bank is an accounting laboratory that is used as a place for student financial payments and accommodates funds from all students of SMK Negeri 1 Bengkulu City. Every day the Mini Bank manages various financial transactions using a manual system in recording finances using only ledgers and digital systems through computer media.
                </p>
            </motion.div>

            <motion.div
                className='p-7 lg:ml-[5em] md:w-[50%] md-order-1 order-1'
                variants={items2}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: true,
                }}
            >
                <img src={"/Image/landing/bank.webp"} alt='Tavel-Image-1' className='rounded-md w-fit shadow-cstm' />
            </motion.div>
            <div>

            </div>
        </div >
    )
}

export default Travel