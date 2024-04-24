import BestItems from "./BestItems";
import { Link as RouterLink } from "@inertiajs/react";

// Translation
import { useTranslation } from "react-i18next";

const BestItemsSection = ({ item }) => {
    const { t, i18n } = useTranslation(["global"]);
    return (
        <div className="w-full min-h-full flex flex-col items-center justify-center bg-[url(/Image/CardSectionBg.svg)] py-7 md:px-4 gap-10">
            <div className="pb-7 px-4 md:px-0">
                <h1 className="text-white text-xl md:text-3xl lg:text-3xl font-heading font-semibold text-center px-4">
                    {t("best_item.title")}
                    <br />
                    {t("best_item.title_two")}
                </h1>
                <p className="text-center pt-2 text-gray-300">
                    {t("best_item.subtitle")}
                </p>
            </div>

            <div>
                <ul className=" w-full min-h-screen grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center ">
                    {item.map((item, index) => (
                        <li className="list-none" key={index}>
                            <div data-aos="fade-up" data-aos-duration="100">
                                <BestItems
                                    name={item.name}
                                    type={item.jenis}
                                    price={item.harga}
                                    img={item.image_url}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <RouterLink
                    href="/supplies"
                    className="btn bg-indigo-700 text-white hover:bg-indigo-600 hover:scale-[1.05]"
                >
                    {t("best_item.button")}
                </RouterLink>
            </div>
        </div>
    );
};

export default BestItemsSection;
