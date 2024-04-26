// translation
import { useTranslation } from "react-i18next";

const FaqSection = () => {
    // Translation
    const { t, i18n } = useTranslation(["global"]);
    return (
        <div className="min-h-[80vh]  flex flex-col items-center justify-evenly p-7">
            <div className="pb-7" data-aos="fade-up" data-aos-duration="300">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-center ">
                    FAQ
                </h1>
                <p className="text-md md:text-md font-heading font-medium pt-4  text-center">
                    Frequently Asked Questions
                    <br />
                    <span className="">{t("faq.title")}</span>
                </p>
            </div>

            <div
                className="join join-vertical md:w-[50%] flex gap-1"
                data-aos="flip-up"
                data-aos-duration="700"
            >
                <div className="collapse collapse-arrow  border-[1px]  ">
                    <input
                        type="radio"
                        name="my-accordion-1"
                        aria-label="ac2"
                    />
                    <div className="collapse-title text-xl  font-body font-semibold">
                        {t("faq.q1")}
                    </div>
                    <div className="collapse-content">
                        <p className="">{t("faq.a1")}</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow  border-[1px] border-gray-400">
                    <input
                        type="radio"
                        name="my-accordion-1"
                        aria-label="ac22"
                    />

                    <div className="collapse-title text-xl  font-body font-semibold">
                        {t("faq.q2")}
                    </div>
                    <div className="collapse-content">
                        <p className="">{t("faq.a2")}</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow  border-[1px] border-gray-400">
                    <input
                        type="radio"
                        name="my-accordion-1"
                        aria-label="ac232"
                    />
                    <div className="collapse-title text-xl t font-body font-semibold">
                        {t("faq.q3")}
                    </div>
                    <div className="collapse-content">
                        <p className="">{t("faq.a3")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
