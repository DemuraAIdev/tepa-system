// Translation
import { useTranslation } from "react-i18next";

const TheCard = () => {
    // Translation
    const { t, i18n } = useTranslation(["global"]);
    return (
        <div>
            <div className="bg-[url(/Image/CardBg.svg)] h-[14em] w-[20em] p-4 flex items-start justify-center flex-col rounded-lg gap-2">
                <h2 className="text-xl text-gray-100 font-heading font-semibold">
                    {t("card_selection.card_one")}
                </h2>
                <p className=" text-gray-200 font-heading text-sm">
                    {t("card_selection.card_one_subtitle")}
                </p>
            </div>
        </div>
    );
};

export default TheCard;
