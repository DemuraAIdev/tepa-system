const FaqSection = () => {
    return (
        <div className="min-h-[80vh] bg-gray-200 flex flex-col items-center justify-evenly p-7">
            <div className="pb-7" data-aos="fade-up" data-aos-duration="300">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-700">
                    FAQ
                </h1>
                <p className="text-md md:text-md font-heading font-medium pt-4 text-gray-700 text-center">
                    Frequently Asked Questions
                    <br />
                    <span className="text-gray-600">
                        Get quick answers to common questions about Technopark</span>

                </p>
            </div>

            <div className="join join-vertical md:w-[50%] flex gap-1" data-aos="flip-up" data-aos-duration="700">
                <div className="collapse collapse-arrow bg-gray-200 border-[1px] border-gray-400 ">
                    <input type="radio" name="my-accordion-1" aria-label="ac2" />
                    <div className="collapse-title text-xl text-gray-700 font-body font-semibold">
                        What is Technopark?
                    </div>
                    <div className="collapse-content">
                        <p className="text-gray-700">Technopark is a multifaceted resource center located within our school's campus, offering a wide range of essential services and products. From school uniforms to office supplies, electronics, a mini bank for secure transactions, and the convenience of K-One Travel, Technopark is your one-stop destination for all your academic and administrative needs. It is designed to streamline and enhance the overall school experience, providing a comprehensive solution for students, parents, and staff, ensuring convenience and efficiency in one central location.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-200 border-[1px] border-gray-400" >
                    <input type="radio" name="my-accordion-1" aria-label="ac22" />

                    <div className="collapse-title text-xl text-gray-700 font-body font-semibold">
                        What does the Technopark sell?                    </div>
                    <div className="collapse-content">
                        <p className="text-gray-700">Technopark offers a diverse range of products and services, including school uniforms, office supplies, electronics, secure fee payment through a mini bank, and travel services provided by K-One Travel.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-200 border-[1px] border-gray-400">
                    <input type="radio" name="my-accordion-1" aria-label="ac232" />
                    <div className="collapse-title text-xl text-gray-700 font-body font-semibold">
                        Where is the location of the Technopark?                    </div>
                    <div className="collapse-content">
                        <p className="text-gray-700">The Technopark is located inside SMKN 1 Bengkulu City, adjacent to the BKK (Specialized Job Fair) room.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FaqSection