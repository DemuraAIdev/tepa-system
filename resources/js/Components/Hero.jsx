import React from 'react';
import { useEffect } from 'react';
import Typed from 'typed.js';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link as ScrollLink } from 'react-scroll';

const items = {
    hidden: {
        opaciity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3,
        }
    }

}

const items2 = {
    hidden: {
        opaciity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .4,
        }
    }

}

const items3 = {
    hidden: {
        opaciity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
        }
    }

}

const Hero = () => {

    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 5,
            speed: 10,
            glare: true,
            "max-glare": 0.10
        })
    })

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Welcome to Raflesia Technopark's Official Website!", "Your All-in-One School Resource Center", "Unlocking School Convenience"],
            typeSpeed: 50,
            smartBackspace: true,
            backDelay: 3500,
            loop: Infinity,

        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className='flex flex-col gap-5 md:w-[50%] p-7 lg:ml-[5em] order-2 md:order-1  rounded-lg'>
            <h1 className='text-4xl font-body font-bold text-indigo-500'>
                <span ref={el} />
            </h1>
            <p className='text-justify text-gray-800'>
                Technopark, our school's multifunctional resource center, is dedicated to providing a seamless and enhanced school experience. From high-quality uniforms and comprehensive office supplies to electronics and efficient fee payment through the mini bank, along with photocopy services and expert educational travel planning, Tec   hnopark is your one-stop destination for academic and administrative support, aiming to elevate every aspect of your school journey.

            </p>
            <div>
                <ScrollLink to="cards" spy={true} smooth={true} href='#cards' offset={-150} duration={500}>
                    <button className='btn border-indigo-500 text-white hover:text-white font-bold bg-indigo-600 hover:scale-[1.05] '>
                        Read More!
                    </button>
                </ScrollLink>
            </div>
            <div className='w-fit flex gap-4'>
                <a href='https://www.facebook.com/Smkn1KotaBengkulu/?locale=id_ID'  aria-label='fesfsefesf' className='whitespace-no-wrap overflow-hidden' target='_blank' rel='noopener noreferrer'>
                    <motion.div
                        className='text-sm text-white rounded-full bg-indigo-600 p-2'
                        variants={items}
                        initial="hidden"
                        animate="show"
                    >
                        <FaFacebookF />
                    </motion.div>
                </a>

                <a href='https://www.instagram.com/smkn1kotabengkulu/'  aria-label='fesfsefesf' target='_blank' rel='noopener noreferrer'>
                    <motion.div
                        className='text-sm text-white rounded-full bg-pink-600 p-2'
                        variants={items2}
                        initial="hidden"
                        animate="show">
                        <FaInstagram />
                    </motion.div>
                </a>

                <a href='https://www.youtube.com/channel/UCydN3u2tCciDrJKo06ug-oQ' aria-label='fesfsefesf' target='_blank' rel='noopener noreferrer'>
                    <motion.div
                        className='text-sm text-white rounded-full bg-red-600 p-2 hover:scale-50'
                        variants={items3}
                        initial="hidden"
                        animate="show">
                        <FaYoutube />
                    </motion.div>
                </a>
            </div>
        </div>
    )
}

export default Hero