import { toast } from "react-toastify";
import { toastContent } from "../components/toast/toast";

export const getToast = (val) => {
    toast.success(val, toastContent);
}

export const getToastWarn = (val) => {
    toast.warn(val, toastContent);
}

export const getToastError = (val) => {
    toast.error(val, toastContent);
}

export const errorHandler = (error) => {
    if (typeof error?.response?.data !== "string") {
        let keys = Object.keys(error?.response?.data);
        let values = Object.values(error?.response?.data);
        if (values?.length > 0) {
            values.forEach((item, index) => {
                if (item?.length > 0 && Array.isArray(item)) {
                    item.map(el => {
                        getToastError(keys[index] + ": " + el);
                    })
                } else {
                    getToastError(keys[index] + ": " + item);
                }
            })
        }
    } else getToastWarn("На сервере произошла ошибка.");
}

export const getCategory = value => {
    let categories = ["Категория", "Материал", "Размер", "Цвет", "Цена"];
    let categoriesCode = ["id_category", "id_material", "size", "id_color", "price"];

    let index = categories.indexOf(value.title);
    if (index > -1) {
        return categoriesCode[index];
    } else return ""
}

export const getEngName = [
    {
        ru: "Женская коллекция",
        en: "womens_collection",
    },
    {
        ru: "Мужская коллекция",
        en: "mens_collection",
    },
    {
        ru: "Парки",
        en: "parks",
    },
    {
        ru: "Аксессуары",
        en: "accessories",
    },
    {
        ru: "Интерьер",
        en: "interior",
    },
    {
        ru: "Меха",
        en: "furs",
    },
    {
        ru: "пальто",
        en: "coat",
    },
];

export const helmetTitle = [
    {
        id: 1,
        header: "Меха",
        title: "Купить меха в СПБ| FUR&CASHMERE",
        desc: "Приобретите роскошные меха в FUR&CASHMERE и наслаждайтесь теплом и элегантностью в холодное время года. Оставить заявку можно на сайте",
    },
    {
        id: 2,
        header: "Пальто",
        title: "Купить пальто в СПБ | FUR&CASHMERE",
        desc: "FUR&CASHMERE предлагает коллекцию стильных и качественных пальто, созданных для тех, кто ценит комфорт и элегантность. Оставьте заявку на нашем сайте",
    },
    {
        id: 3,
        header: "Casual",
        title: "Купить кэжуал в СПБ| FUR&CASHMERE",
        desc: "FUR&CASHMERE представляет коллекцию одежды в стиле casual, которая идеально подходит для повседневной носки. Оставляйте заявку на нашем сайте",
    },
    {
        id: 4,
        header: "Парки",
        title: "Купить парку в СПБ | FUR&CASHMERE",
        desc: "Откройте для себя стильные и теплые парки от FUR&CASHMERE. Оставьте заявку на сайте",
    },
    {
        id: 5,
        header: "Аксессуары",
        title: "Купить аксессуары в СПБ| FUR&CASHMERE",
        desc: "Пополните свой образ стильными аксессуарами от FUR&CASHMERE. Оставить заявку можно на сайте",
    },
    {
        id: 6,
        header: "Интерьер",
        title: "Товары для интерьера в СПБ| FUR&CASHMERE",
        desc: "Создайте атмосферу роскоши и уюта в вашем доме с коллекцией товаров для интерьера от FUR&CASHMERE. Оставить заявку можно на сайте",
    },
    {
        id: 7,
        header: "Индивидуальный пошив",
        title: "Пошив шуб в СПБ | FUR&CASHMERE",
        desc: "FUR&CASHMERE предлагает индивидуальный пошив шуб. Оставляйте заявку на сайте",
    },
    {
        id: 8,
        header: "Мужская коллекция",
        title: "Мужская коллекция | FUR&CASHMERE",
        desc: "В нашем ассортименте представлены мужские шубы, пальто и стильные аксессуары, созданные с вниманием к деталям и качеству. Оставляйте заявку на сайте",
    },
    {
        id: 9,
        header: "Все коллекции",
        title: "Каталог | FUR&CASHMERE",
        desc: "FUR&CASHMERE - Каталог наших шуб и меховых изделий. Большой выбор, приятные цены. Оставить заявку можно на сайте",
    },
];

export const videoExtensions = ['.mpg', '.mp2', '.mpeg', '.mpe', '.mpv', '.mp4'] //you can add more extensions
export const imageExtensions = ['.gif', '.jpg', '.jpeg', '.png'] // you can add more extensions

// export const isImage = (v) => {
//     let status = -1;

//     imageExtensions.forEach((e) => {
//         status = v.indexOf(e);
//     });
//     return status > -1;
// };

// export const isVideo = (v) => {
//     let status2 = -1;
//     videoExtensions.forEach((e) => {
//         status2 = v.indexOf(e);
//     });
//     return status2 > -1;
// };