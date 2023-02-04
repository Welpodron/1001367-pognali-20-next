import { SVGProps } from "react";

import FlagSeychellesIcon from "/public/icons/svg/______-flag-seychelles.svg";
import FlagThailandIcon from "/public/icons/svg/______-flag-thailand.svg";
import FlagSriLankaIcon from "/public/icons/svg/______-flag-sri-lanka.svg";
import FlagBelgiumIcon from "/public/icons/svg/______-flag-belgium.svg";
import FlagCzechiaIcon from "/public/icons/svg/______-flag-czech.svg";
import FlagFranceIcon from "/public/icons/svg/______-flag-france.svg";

import BusIcon from "/public/icons/svg/1D2E5B-transport-bus.svg";
import PlaneIcon from "/public/icons/svg/1D2E5B-transport-plane.svg";
import WalkIcon from "/public/icons/svg/1D2E5B-transport-run.svg";
import BicycleIcon from "/public/icons/svg/1D2E5B-transport-bike.svg";

export const TRANSPORTS = [
  {
    name: "Самолет",
    icon: (props?: SVGProps<SVGElement>) => <PlaneIcon {...props} />,
  },
  {
    name: "Автобус",
    icon: (props?: SVGProps<SVGElement>) => <BusIcon {...props} />,
  },
  {
    name: "Велосипед",
    icon: (props?: SVGProps<SVGElement>) => <BicycleIcon {...props} />,
  },
  {
    name: "Пешком",
    icon: (props?: SVGProps<SVGElement>) => <WalkIcon {...props} />,
  },
];

export const COUNTRIES = [
  {
    name: "Шри-Ланка",
    icon: (props?: SVGProps<SVGElement>) => <FlagSriLankaIcon {...props} />,
  },
  {
    name: "Таиланд",
    icon: (props?: SVGProps<SVGElement>) => <FlagThailandIcon {...props} />,
  },
  {
    name: "Сейшелы",
    icon: (props?: SVGProps<SVGElement>) => <FlagSeychellesIcon {...props} />,
  },
  {
    name: "Бельгия",
    icon: (props?: SVGProps<SVGElement>) => <FlagBelgiumIcon {...props} />,
  },
  {
    name: "Чехия",
    icon: (props?: SVGProps<SVGElement>) => <FlagCzechiaIcon {...props} />,
  },
  {
    name: "Франция",
    icon: (props?: SVGProps<SVGElement>) => <FlagFranceIcon {...props} />,
  },
];

export const COMPANIONS = [
  {
    name: "Таня Фирсова",
    firstname: "Таня",
    lastname: "Фирсова",
    countries: ["Шри-Ланка", "Таиланд", "Сейшелы"],
    hashtags: "#ЗОЖ #ПП #Фитнес #пляж #авокадо #смузи",
    transports: ["Самолет"],
    img: "/images/firsova-desktop@2x.jpg",
    level: 99,
    likes: 1500000,
    online: true,
  },
  {
    name: "Петя Демин",
    firstname: "Петя",
    lastname: "Демин",
    countries: ["Бельгия", "Чехия"],
    hashtags: "#бургер #бар #футбол #концерт #крафт",
    transports: ["Самолет", "Автобус", "Пешком"],
    img: "/images/demin-desktop@2x.jpg",
    level: 80,
    likes: 1500,
    online: false,
  },
  {
    name: "Марк Смолов",
    firstname: "Марк",
    lastname: "Смолов",
    countries: ["США", "Австралия", "Доминика"],
    hashtags: "#рэп #тату #хайпбист #кроссовки #суприм",
    transports: ["Самолет", "Велосипед"],
    img: "/images/smolov-desktop@2x.jpg",
    level: 25,
    likes: 170,
    online: false,
  },
  {
    name: "Лариса Роговая",
    firstname: "Лариса",
    lastname: "Роговая",
    countries: ["Великобритания", "Германия"],
    hashtags: "#образование #карьера #учеба #линкедин",
    transports: ["Самолет", "Автобус"],
    img: "/images/rogovaya-desktop@2x.jpg",
    level: 50,
    likes: 23,
    online: true,
  },
];

export const ROUTES = [
  {
    name: "Таиланд",
    description: "Джунгли зовут!",
    watchers: 18321,
    img: "/images/thailand-desktop@2x.jpg",
  },
  {
    name: "Франция",
    description: "Трэ бьен, манифик!",
    watchers: 12518,
    img: "/images/france-desktop@2x.jpg",
  },
  {
    name: "Чехия",
    description: "Закоулки старой Европы",
    watchers: 5326,
    img: "/images/czech-desktop@2x.jpg",
  },
];

export const BASIC_PRICES = [
  {
    feature: "Базовое размещение",
    price: "Бесплатно",
  },
  {
    feature: "Вывод на первых позициях",
    price: "99 руб./мес",
  },
  {
    feature: "Кастомный цвет карточки",
    price: "59 руб./мес",
  },
];

export const BUSINESS_PRICES = [
  {
    feature: "Реклама у блоггера",
    price: "300 000 руб./пост",
  },
  {
    feature: "Накрутка подписчиков",
    price: "от 1 руб./шт.",
  },
  {
    feature: "Лайки от ботов",
    price: "от 20 коп./лайк",
  },
  {
    feature: "Ваш продакт-плейсмент",
    price: "Индивидуально",
  },
];

export const PLANS = [
  {
    route: "Франция, Италия",
    companions: 3,
    time: {
      start: "2020-03-26",
      end: "2020-03-29",
    },
  },
  {
    route: "Таиланд, Индонезия",
    companions: 1,
    time: {
      start: "2020-07-01",
      end: "2020-07-15",
    },
  },
];

export const COUNTRIES_ALL_RAW = [
  "Австралия",
  "Австрия",
  "Азербайджан",
  "Албания",
  "Алжир",
  "Ангола",
  "Андорра",
  "Антигуа и Барбуда",
  "Аргентина",
  "Армения",
  "Афганистан",
  "Багамские Острова",
  "Бангладеш",
  "Барбадос",
  "Бахрейн",
  "Белоруссия",
  "Белиз",
  "Бельгия",
  "Бенин",
  "Болгария",
  "Боливия",
  "Босния и Герцеговина",
  "Ботсвана",
  "Бразилия",
  "Бруней",
  "Буркина-Фасо",
  "Бурунди",
  "Бутан",
  "Вануату",
  "Великобритания",
  "Венгрия",
  "Венесуэла",
  "Восточный Тимор",
  "Вьетнам",
  "Габон",
  "Гаити",
  "Гайана",
  "Гамбия",
  "Гана",
  "Гватемала",
  "Гвинея",
  "Гвинея-Бисау",
  "Германия",
  "Гондурас",
  "Гренада",
  "Греция",
  "Грузия",
  "Дания",
  "Джибути",
  "Доминика",
  "Доминикана",
  "Египет",
  "Замбия",
  "Зимбабве",
  "Израиль",
  "Индия",
  "Индонезия",
  "Иордания",
  "Ирак",
  "Иран",
  "Ирландия",
  "Исландия",
  "Испания",
  "Италия",
  "Кабо-Верде",
  "Казахстан",
  "Камбоджа",
  "Камерун",
  "Канада",
  "Катар",
  "Кения",
  "Кипр",
  "Киргизия",
  "Кирибати",
  "Китай",
  "Колумбия",
  "Лаос",
  "Латвия",
  "Лесото",
  "Либерия",
  "Ливан",
  "Ливия",
  "Литва",
  "Лихтенштейн",
  "Люксембург",
  "Маврикий",
  "Мавритания",
  "Мадагаскар",
  "Малави",
  "Малайзия",
  "Мали",
  "Мальдивы",
  "Мальта",
  "Марокко",
  "Намибия",
  "Науру",
  "Непал",
  "Нигер",
  "Нигерия",
  "Нидерланды",
  "Никарагуа",
  "Новая Зеландия",
  "Норвегия",
  "ОАЭ",
  "Оман",
  "Пакистан",
  "Палау",
  "Панама",
  "Папуа",
  "Парагвай",
  "Перу",
  "Польша",
  "Португалия",
  "Руанда",
  "Румыния",
  "Россия",
  "Сальвадор",
  "Самоа",
  "Сан-Марино",
  "Саудовская Аравия",
  "Сейшелы",
  "Сенегал",
  "Сербия",
  "Сингапур",
  "Сирия",
  "Словакия",
  "Словения",
  "США",
  "Таджикистан",
  "Таиланд",
  "Танзания",
  "Того",
  "Тонга",
  "Тринидад и Тобаго",
  "Тувалу",
  "Тунис",
  "Туркмения",
  "Турция",
  "Уганда",
  "Узбекистан",
  "Украина",
  "Уругвай",
  "Фиджи",
  "Филиппины",
  "Финляндия",
  "Франция",
  "Хорватия",
  "Чад",
  "Черногория",
  "Чехия",
  "Чили",
  "Швейцария",
  "Швеция",
  "Шри-Ланка",
  "Эквадор",
  "Эритрея",
  "Эсватини",
  "Эстония",
  "Эфиопия",
  "ЮАР",
  "Южный Судан",
  "Ямайка",
  "Япония",
];

export const COUNTRIES_WITH_FLAGS = [
  ["ABKHAZIA", "Abkhazia", "Абхазия", null, null],
  ["AD", "Andorra", "Андорра", "AND", "20"],
  ["AE", "United Arab Emirates", "Объединённые Арабские Эмираты", "ARE", "784"],
  ["AF", "Afghanistan", "Афганистан", "AFG", "4"],
  ["AG", "Antigua and Barbuda", "Антигуа и Барбуда", "ATG", "28"],
  ["AI", "Anguilla", "Ангилья", "AIA", "660"],
  ["AL", "Albania", "Албания", "ALB", "8"],
  ["AM", "Armenia", "Армения", "ARM", "51"],
  ["AN", "Netherlands Antilles", "Нидерландские Антилы", "ANT", "530"],
  ["AO", "Angola", "Ангола", "AGO", "24"],
  ["AQ", "Antarctica", "Антарктида", "ATA", "10"],
  ["AR", "Argentina", "Аргентина", "ARG", "32"],
  ["AS", "American Samoa", "Американское Самоа", "ASM", "16"],
  ["AT", "Austria", "Австрия", "AUT", "40"],
  ["AU", "Australia", "Австралия", "AUS", "36"],
  ["AW", "Aruba", "Аруба", "ABW", "533"],
  ["AX", "Aland Islands", "Эландские острова", "ALA", "248"],
  ["AZ", "Azerbaijan", "Азербайджан", "AZE", "31"],
  ["BA", "Bosnia and Herzegovina", "Босния и Герцеговина", "BIH", "70"],
  ["BB", "Barbados", "Барбадос", "BRB", "52"],
  ["BD", "Bangladesh", "Бангладеш", "BGD", "50"],
  ["BE", "Belgium", "Бельгия", "BEL", "56"],
  ["BF", "Burkina Faso", "Буркина Фасо", "BFA", "854"],
  ["BG", "Bulgaria", "Болгария", "BGR", "100"],
  ["BH", "Bahrain", "Бахрейн", "BHR", "48"],
  ["BI", "Burundi", "Бурунди", "BDI", "108"],
  ["BJ", "Benin", "Бенин", "BEN", "204"],
  ["BL", "Saint Barthelemy", "Сен-Бартельми", "BLM", "652"],
  ["BM", "Bermuda", "Бермуды", "BMU", "60"],
  ["BN", "Brunei", "Бруней", "BRN", "96"],
  ["BO", "Bolivia", "Боливия", "BOL", "68"],
  ["BR", "Brazil", "Бразилия", "BRA", "76"],
  ["BS", "Bahamas", "Багамы", "BHS", "44"],
  ["BT", "Bhutan", "Бутан", "BTN", "64"],
  ["BV", "Bouvet Island", "Остров Буве", "BVT", "74"],
  ["BW", "Botswana", "Ботсвана", "BWA", "72"],
  ["BY", "Belarus", "Беларусь", "BLR", "112"],
  ["BZ", "Belize", "Белиз", "BLZ", "84"],
  ["CA", "Canada", "Канада", "CAN", "124"],
  ["CC", "Cocos (Keeling) Islands", "Кокосовые (Килинг) острова", "CCK", "166"],
  [
    "CD",
    "Congo (Democratic Republic)",
    "Конго (Демократическая Республика)",
    "COD",
    "180",
  ],
  [
    "CF",
    "Central African Republic",
    "Центральноафриканская Республика",
    "CAF",
    "140",
  ],
  ["CG", "Congo", "Конго", "COG", "178"],
  ["CH", "Switzerland", "Швейцария", "CHE", "756"],
  ["CI", "Cote d’Ivoire", "Кот-д’Ивуар", "CIV", "384"],
  ["CK", "Cook Islands", "Острова Кука", "COK", "184"],
  ["CL", "Chile", "Чили", "CHL", "152"],
  ["CM", "Cameroon", "Камерун", "CMR", "120"],
  ["CN", "China", "Китай", "CHN", "156"],
  ["CO", "Colombia", "Колумбия", "COL", "170"],
  ["CR", "Costa Rica", "Коста-Рика", "CRI", "188"],
  ["CU", "Cuba", "Куба", "CUB", "192"],
  ["CV", "Cape Verde", "Кабо-Верде", "CPV", "132"],
  ["CX", "Christmas Island", "Остров Рождества", "CXR", "162"],
  ["CY", "Cyprus", "Кипр", "CYP", "196"],
  ["CZ", "Czech Republic", "Чехия", "CZE", "203"],
  ["DE", "Germany", "Германия", "DEU", "276"],
  ["DJ", "Djibouti", "Джибути", "DJI", "262"],
  ["DK", "Denmark", "Дания", "DNK", "208"],
  ["DM", "Dominica", "Доминика", "DMA", "212"],
  ["DO", "Dominican Republic", "Доминиканская Республика", "DOM", "214"],
  ["DZ", "Algeria", "Алжир", "DZA", "12"],
  ["EC", "Ecuador", "Эквадор", "ECU", "218"],
  ["EE", "Estonia", "Эстония", "EST", "233"],
  ["EG", "Egypt", "Египет", "EGY", "818"],
  ["EH", "Western Sahara", "Западная Сахара", "ESH", "732"],
  ["ER", "Eritrea", "Эритрея", "ERI", "232"],
  ["ES-CE", "Ceuta", "Сеута", null, null],
  ["ES-ML", "Melilla", "Мельлия", null, null],
  ["ES", "Spain", "Испания", "ESP", "724"],
  ["ET", "Ethiopia", "Эфиопия", "ETH", "231"],
  ["EU", "European Union", "Евросоюз", null, null],
  ["FI", "Finland", "Финляндия", "FIN", "246"],
  ["FJ", "Fiji", "Фиджи", "FJI", "242"],
  [
    "FK",
    "Falkland Islands (Malvinas)",
    "Фолклендские острова (Мальвинские)",
    "FLK",
    "238",
  ],
  ["FM", "Micronesia", "Микронезия", "FSM", "583"],
  ["FO", "Faroe Islands", "Фарерские острова", "FRO", "234"],
  ["FR", "France", "Франция", "FRA", "250"],
  ["GA", "Gabon", "Габон", "GAB", "266"],
  ["GB", "United Kingdom", "Великобритания", "GBR", "826"],
  ["GD", "Grenada", "Гренада", "GRD", "308"],
  ["GE", "Georgia", "Грузия", "GEO", "268"],
  ["GF", "French Guiana", "Французская Гвиана", "GUF", "254"],
  ["GG", "Guernsey", "Гернси", "GGY", "831"],
  ["GH", "Ghana", "Гана", "GHA", "288"],
  ["GI", "Gibraltar", "Гибралтар", "GIB", "292"],
  ["GL", "Greenland", "Гренландия", "GRL", "304"],
  ["GM", "Gambia", "Гамбия", "GMB", "270"],
  ["GN", "Guinea", "Гвинея", "GIN", "324"],
  ["GP", "Guadeloupe", "Гваделупа", "GLP", "312"],
  ["GQ", "Equatorial Guinea", "Экваториальная Гвинея", "GNQ", "226"],
  ["GR", "Greece", "Греция", "GRC", "300"],
  [
    "GS",
    "South Georgia and the South Sandwich Islands",
    "Южная Джорджия и Южные Сандвичевы острова",
    "SGS",
    "239",
  ],
  ["GT", "Guatemala", "Гватемала", "GTM", "320"],
  ["GU", "Guam", "Гуам", "GUM", "316"],
  ["GW", "Guinea-Bissau", "Гвинея-Бисау", "GNB", "624"],
  ["GY", "Guyana", "Гайана", "GUY", "328"],
  ["HK", "Hong Kong", "Гонконг", "HKG", "344"],
  [
    "HM",
    "Heard Island and McDonald Islands",
    "Остров Херд и острова Макдональд",
    "HMD",
    "334",
  ],
  ["HN", "Honduras", "Гондурас", "HND", "340"],
  ["HR", "Croatia", "Хорватия", "HRV", "191"],
  ["HT", "Haiti", "Гаити", "HTI", "332"],
  ["HU", "Hungary", "Венгрия", "HUN", "348"],
  ["IC", "Canary Islands", "Канарские острова", null, null],
  ["ID", "Indonesia", "Индонезия", "IDN", "360"],
  ["IE", "Ireland", "Ирландия", "IRL", "372"],
  ["IL", "Israel", "Израиль", "ISR", "376"],
  ["IM", "Isle of Man", "Остров Мэн", "IMN", "833"],
  ["IN", "India", "Индия", "IND", "356"],
  [
    "IO",
    "British Indian Ocean Territory",
    "Британская территория в Индийском океане",
    "IOT",
    "86",
  ],
  ["IQ", "Iraq", "Ирак", "IRQ", "368"],
  ["IR", "Iran", "Иран", "IRN", "364"],
  ["IS", "Iceland", "Исландия", "ISL", "352"],
  ["IT", "Italy", "Италия", "ITA", "380"],
  ["JE", "Jersey", "Джерси", "JEY", "832"],
  ["JM", "Jamaica", "Ямайка", "JAM", "388"],
  ["JO", "Jordan", "Иордания", "JOR", "400"],
  ["JP", "Japan", "Япония", "JPN", "392"],
  ["KE", "Kenya", "Кения", "KEN", "404"],
  ["KG", "Kyrgyzstan", "Киргизия", "KGZ", "417"],
  ["KH", "Cambodia", "Камбоджа", "KHM", "116"],
  ["KI", "Kiribati", "Кирибати", "KIR", "296"],
  ["KM", "Comoros", "Коморы", "COM", "174"],
  ["KN", "Saint Kitts and Nevis", "Сент-Китс и Невис", "KNA", "659"],
  ["KOSOVO", "Kosovo", "Косово", null, null],
  ["KP", "North Korea", "Северная Корея", "PRK", "408"],
  ["KR", "South Korea", "Южная Корея", "KOR", "410"],
  ["KW", "Kuwait", "Кувейт", "KWT", "414"],
  ["KY", "Cayman Islands", "Острова Кайман", "CYM", "136"],
  ["KZ", "Kazakhstan", "Казахстан", "KAZ", "398"],
  ["LA", "Laos", "Лаос", "LAO", "418"],
  ["LB", "Lebanon", "Ливан", "LBN", "422"],
  ["LC", "Saint Lucia", "Сент-Люсия", "LCA", "662"],
  ["LI", "Liechtenstein", "Лихтенштейн", "LIE", "438"],
  ["LK", "Sri Lanka", "Шри-Ланка", "LKA", "144"],
  ["LR", "Liberia", "Либерия", "LBR", "430"],
  ["LS", "Lesotho", "Лесото", "LSO", "426"],
  ["LT", "Lithuania", "Литва", "LTU", "440"],
  ["LU", "Luxembourg", "Люксембург", "LUX", "442"],
  ["LV", "Latvia", "Латвия", "LVA", "428"],
  ["LY", "Libya", "Ливия", "LBY", "434"],
  ["MA", "Morocco", "Марокко", "MAR", "504"],
  ["MC", "Monaco", "Монако", "MCO", "492"],
  ["MD", "Moldova", "Молдова", "MDA", "498"],
  ["ME", "Montenegro", "Черногория", "MNE", "499"],
  ["MF", "Saint Martin", "Остров Святого Мартина", "MAF", "663"],
  ["MG", "Madagascar", "Мадагаскар", "MDG", "450"],
  ["MH", "Marshall Islands", "Маршалловы острова", "MHL", "584"],
  ["MK", "Macedonia", "Македония", "MKD", "807"],
  ["ML", "Mali", "Мали", "MLI", "466"],
  ["MM", "Myanmar", "Мьянма", "MMR", "104"],
  ["MN", "Mongolia", "Монголия", "MNG", "496"],
  ["MO", "Macao", "Макао", "MAC", "446"],
  [
    "MP",
    "Northern Mariana Islands",
    "Северные Марианские острова",
    "MNP",
    "580",
  ],
  ["MQ", "Martinique", "Мартиника", "MTQ", "474"],
  ["MR", "Mauritania", "Мавритания", "MRT", "478"],
  ["MS", "Montserrat", "Монтсеррат", "MSR", "500"],
  ["MT", "Malta", "Мальта", "MLT", "470"],
  ["MU", "Mauritius", "Маврикий", "MUS", "480"],
  ["MV", "Maldives", "Мальдивы", "MDV", "462"],
  ["MW", "Malawi", "Малави", "MWI", "454"],
  ["MX", "Mexico", "Мексика", "MEX", "484"],
  ["MY", "Malaysia", "Малайзия", "MYS", "458"],
  ["MZ", "Mozambique", "Мозамбик", "MOZ", "508"],
  ["NA", "Namibia", "Намибия", "NAM", "516"],
  ["NC", "New Caledonia", "Новая Каледония", "NCL", "540"],
  ["NE", "Niger", "Нигер", "NER", "562"],
  ["NF", "Norfolk Island", "Остров Норфолк", "NFK", "574"],
  ["NG", "Nigeria", "Нигерия", "NGA", "566"],
  ["NI", "Nicaragua", "Никарагуа", "NIC", "558"],
  [
    "NKR",
    "Nagorno-Karabakh Republic",
    "Нагорно-Карабахская Республика",
    null,
    null,
  ],
  ["NL", "Netherlands", "Нидерланды", "NLD", "528"],
  ["NO", "Norway", "Норвегия", "NOR", "578"],
  ["NP", "Nepal", "Непал", "NPL", "524"],
  ["NR", "Nauru", "Науру", "NRU", "520"],
  ["NU", "Niue", "Ниуэ", "NIU", "570"],
  ["NZ", "New Zealand", "Новая Зеландия", "NZL", "554"],
  ["OM", "Oman", "Оман", "OMN", "512"],
  ["PA", "Panama", "Панама", "PAN", "591"],
  ["PE", "Peru", "Перу", "PER", "604"],
  ["PF", "French Polynesia", "Французская Полинезия", "PYF", "258"],
  ["PG", "Papua New Guinea", "Папуа-Новая Гвинея", "PNG", "598"],
  ["PH", "Philippines", "Филиппины", "PHL", "608"],
  ["PK", "Pakistan", "Пакистан", "PAK", "586"],
  ["PL", "Poland", "Польша", "POL", "616"],
  ["PM", "Saint Pierre and Miquelon", "Сен-Пьер и Микелон", "SPM", "666"],
  ["PN", "Pitcairn", "Питкерн", "PCN", "612"],
  ["PR", "Puerto Rico", "Пуэрто-Рико", "PRI", "630"],
  ["PS", "Palestinian Territory", "Палестинская автономия", "PSE", "275"],
  ["PT", "Portugal", "Португалия", "PRT", "620"],
  ["PW", "Palau", "Палау", "PLW", "585"],
  ["PY", "Paraguay", "Парагвай", "PRY", "600"],
  ["QA", "Qatar", "Катар", "QAT", "634"],
  ["RE", "Reunion", "Реюньон", "REU", "638"],
  ["RO", "Romania", "Румыния", "ROM", "642"],
  ["RS", "Serbia", "Сербия", "SRB", "688"],
  ["RU", "Russian Federation", "Россия", "RUS", "643"],
  ["RW", "Rwanda", "Руанда", "RWA", "646"],
  ["SA", "Saudi Arabia", "Саудовская Аравия", "SAU", "682"],
  ["SB", "Solomon Islands", "Соломоновы острова", "SLB", "90"],
  ["SC", "Seychelles", "Сейшелы", "SYC", "690"],
  ["SD", "Sudan", "Судан", "SDN", "736"],
  ["SE", "Sweden", "Швеция", "SWE", "752"],
  ["SG", "Singapore", "Сингапур", "SGP", "702"],
  ["SH", "Saint Helena", "Святая Елена", "SHN", "654"],
  ["SI", "Slovenia", "Словения", "SVN", "705"],
  ["SJ", "Svalbard and Jan Mayen", "Шпицберген и Ян Майен", "SJM", "744"],
  ["SK", "Slovakia", "Словакия", "SVK", "703"],
  ["SL", "Sierra Leone", "Сьерра-Леоне", "SLE", "694"],
  ["SM", "San Marino", "Сан-Марино", "SMR", "674"],
  ["SN", "Senegal", "Сенегал", "SEN", "686"],
  ["SO", "Somalia", "Сомали", "SOM", "706"],
  ["SOUTH-OSSETIA", "South Ossetia", "Южная Осетия", null, null],
  ["SR", "Suriname", "Суринам", "SUR", "740"],
  ["SS", "South Sudan", "Южный Судан", "SSD", "728"],
  ["ST", "Sao Tome and Principe", "Сан-Томе и Принсипи", "STP", "678"],
  ["SV", "El Salvador", "Эль-Сальвадор", "SLV", "222"],
  ["SY", "Syrian Arab Republic", "Сирийская Арабская Республика", "SYR", "760"],
  ["SZ", "Swaziland", "Свазиленд", "SWZ", "748"],
  ["TC", "Turks and Caicos Islands", "Острова Теркс и Кайкос", "TCA", "796"],
  ["TD", "Chad", "Чад", "TCD", "148"],
  [
    "TF",
    "French Southern Territories",
    "Французские Южные территории",
    "ATF",
    "260",
  ],
  ["TG", "Togo", "Того", "TGO", "768"],
  ["TH", "Thailand", "Таиланд", "THA", "764"],
  ["TJ", "Tajikistan", "Таджикистан", "TJK", "762"],
  ["TK", "Tokelau", "Токелау", "TKL", "772"],
  ["TL", "Timor-Leste", "Тимор-Лесте", "TLS", "626"],
  ["TM", "Turkmenistan", "Туркмения", "TKM", "795"],
  ["TN", "Tunisia", "Тунис", "TUN", "788"],
  ["TO", "Tonga", "Тонга", "TON", "776"],
  ["TR", "Turkey", "Турция", "TUR", "792"],
  ["TT", "Trinidad and Tobago", "Тринидад и Тобаго", "TTO", "780"],
  ["TV", "Tuvalu", "Тувалу", "TUV", "798"],
  ["TW", "Taiwan", "Тайвань", "TWN", "158"],
  ["TZ", "Tanzania", "Танзания", "TZA", "834"],
  ["UA", "Ukraine", "Украина", "UKR", "804"],
  ["UG", "Uganda", "Уганда", "UGA", "800"],
  [
    "UM",
    "United States Minor Outlying Islands",
    "Малые Тихоокеанские отдаленные острова Соединенных Штатов",
    "UMI",
    "581",
  ],
  ["US", "United States", "Соединенные Штаты Америки", "USA", "840"],
  ["UY", "Uruguay", "Уругвай", "URY", "858"],
  ["UZ", "Uzbekistan", "Узбекистан", "UZB", "860"],
  ["VA", "Holy See (Vatican)", "Папский Престол (Ватикан)", "VAT", "336"],
  [
    "VC",
    "Saint Vincent and the Grenadines",
    "Сент-Винсент и Гренадины",
    "VCT",
    "670",
  ],
  ["VE", "Venezuela", "Венесуэла", "VEN", "862"],
  [
    "VG",
    "Virgin Islands (British)",
    "Виргинские острова (Британские)",
    "VGB",
    "92",
  ],
  ["US", "The United States Of America", "США", "USA", "840"],
  ["VI", "Virgin Islands (U.S.)", "Виргинские острова (США)", "VIR", "850"],
  ["VN", "Viet Nam", "Вьетнам", "VNM", "704"],
  ["VU", "Vanuatu", "Вануату", "VUT", "548"],
  ["WF", "Wallis and Futuna", "Уоллис и Футуна", "WLF", "876"],
  ["WS", "Samoa", "Самоа", "WSM", "882"],
  ["YE", "Yemen", "Йемен", "YEM", "887"],
  ["YT", "Mayotte", "Майотта", "MYT", "175"],
  ["ZA", "South Africa", "Южная Африка", "ZAF", "710"],
  ["ZM", "Zambia", "Замбия", "ZMB", "894"],
  ["ZW", "Zimbabwe", "Зимбабве", "ZWE", "716"],
];
