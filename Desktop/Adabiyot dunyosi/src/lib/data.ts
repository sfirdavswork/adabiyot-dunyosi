export type Author = {
  slug: string;
  name: string;
  years: string;
  country: string;
  short: string;
  bio: string;
  works: string[];
  facts: string[];
  youtubeId: string; // biography video
  image: string; // unsplash portrait-ish
};

export const authors: Author[] = [
  {
    slug: "odil-yoqubov",
    name: "Odil Yoqubov",
    years: "1926 – 2009",
    country: "O‘zbekiston",
    short:
      "O‘zbek nasrining yirik vakili, “Ulug‘bek xazinasi” romani muallifi.",
    bio: "Odil Yoqubov 1926-yilda Janubiy Qozog‘istonning Qarnoq qishlog‘ida tug‘ilgan. O‘zbek adabiyotining yetuk nosirlaridan biri sifatida tan olingan. Uning asarlari tarix, ma’rifat va inson qadr-qimmati mavzularini chuqur yoritadi. “Ulug‘bek xazinasi” romani jahon adabiyotiga qo‘shilgan munosib hissadir.",
    works: ["Ulug‘bek xazinasi", "Ko‘hna dunyo", "Diyonat", "Adolat manzili"],
    facts: [
      "O‘zbekiston Qahramoni unvoniga sazovor bo‘lgan.",
      "Asarlari 20 dan ortiq tillarga tarjima qilingan.",
      "Uzoq yillar “O‘zbekiston adabiyoti va san’ati” gazetasiga rahbarlik qilgan.",
    ],
    youtubeId: "QxrhN3VTvnk",
    image:
      "https://www.gazeta.uz/media/img/2025/10/YHzpcm17609413834532_b.webp",
  },
  {
    slug: "nodar-dumbadze",
    name: "Nodar Dumbadze",
    years: "1928 – 1984",
    country: "Gruziya",
    short: "Gruzin adibi, “Men, buvim, Iliko va Illarion” asari muallifi.",
    bio: "Nodar Dumbadze — XX asr gruzin adabiyotining mashhur namoyandasi. Uning asarlari samimiyligi, yumori va insonparvarligi bilan ajralib turadi. O‘zbek o‘quvchilari uchun ham juda yaqin va sevimli adib.",
    works: [
      "Men, buvim, Iliko va Illarion",
      "Quyoshni ko‘rmoqchiman",
      "Oq bayroqlar",
      "Abadiyat qonuni",
    ],
    facts: [
      "Asarlari ko‘plab tillarga tarjima qilingan.",
      "“Abadiyat qonuni” romani uchun Lenin mukofotini olgan.",
      "Asarlari asosida bir necha badiiy filmlar suratga olingan.",
    ],
    youtubeId: "SXcf5js6_Co",
    image:
      "https://asarlar-assets-prod.s3.eu-north-1.amazonaws.com/authors/medium/nodar-dumbadze-65d9e3b5309e19.03975385.webp",
  },
  {
    slug: "rabindranath-tagor",
    name: "Rabindranath Tagor",
    years: "1861 – 1941",
    country: "Hindiston",
    short: "Nobel mukofoti sovrindori, hind adabiyoti va falsafasi ulug‘ ustozi.",
    bio: "Rabindranath Tagor — hind shoiri, yozuvchisi, bastakori va faylasufi. 1913-yilda “Gitanjali” she’riy to‘plami uchun Nobel adabiyot mukofotiga sazovor bo‘lgan birinchi osiyolik adibdir. Asarlari insoniylik, tabiat go‘zalligi va ma’naviyat mavzularida.",
    works: ["Gitanjali", "Gora", "Uy va dunyo", "Bog‘bon"],
    facts: [
      "Hindistonning milliy madhiyasi muallifi.",
      "Bangladesh madhiyasi ham uning she’riga yozilgan.",
      "Rassom va bastakor sifatida ham faoliyat yuritgan.",
    ],
    youtubeId: "m_o6ZdHxrSU",
    image:
      "https://cdn.britannica.com/49/134949-050-242B08C7/Rabindranath-Tagore.jpg",
  },
  {
    slug: "chingiz-aytmatov",
    name: "Chingiz Aytmatov",
    years: "1928 – 2008",
    country: "Qirg‘iziston",
    short: "“Asrga tatigulik kun” romani muallifi, jahonga mashhur adib.",
    bio: "Chingiz Aytmatov — XX asr jahon adabiyotining yirik vakili. Uning asarlari inson va tabiat, ma’naviyat va mas’uliyat mavzularini chuqur tahlil qiladi. Asarlari 150 dan ortiq tillarga tarjima qilingan.",
    works: [
      "Jamila",
      "Asrga tatigulik kun",
      "Oq kema",
      "Qiyomat",
    ],
    facts: [
      "Sovet va Qirg‘iziston Qahramoni unvonlariga sazovor bo‘lgan.",
      "Diplomat sifatida ham faoliyat yuritgan.",
      "“Mankurt” obrazi jahon adabiyotiga kirib qolgan.",
    ],
    youtubeId: "y59ik_neaVw",
    image:
      "https://briefly.ru/static/cache/authors/600/ajtmatov.avif",
  },
];

export const news = [
  {
    id: "1",
    title: "Toshkentda yosh adiblar anjumani bo‘lib o‘tdi",
    date: "2026-06-12",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Anjumanda 200 dan ortiq yosh ijodkor ishtirok etib, zamonaviy o‘zbek nasri istiqbollari muhokama qilindi.",
    body: "Anjumanda taniqli adiblar, adabiyotshunoslar va talabalar ishtirok etdi. Maxsus sessiyada raqamli adabiyot va onlayn nashriyotchilik masalalari ko‘rib chiqildi.",
  },
  {
    id: "2",
    title: "“Adabiyot olami” portali yangilandi",
    date: "2026-06-05",
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Portal foydalanuvchilari uchun yangiliklar va qiziqarli maqolalar mavjud.",
    body: "Yangi to‘plam va resurslar saytning muhtammasida joy olgan.",
  },
  {
    id: "3",
    title: "Maktab o‘quvchilari uchun adabiy viktorina e’lon qilindi",
    date: "2026-05-28",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "8-9-sinf o‘quvchilari uchun respublika miqyosida onlayn viktorina o‘tkaziladi.",
    body: "Viktorina g‘oliblari maxsus sovrinlar bilan taqdirlanadi. Ro‘yxatdan o‘tish saytda ochiq.",
  },
];

export const audiobooks = [
  {
    id: "ub-1",
    title: "Ulug‘bek xazinasi",
    author: "Odil Yoqubov",
    audio: "../resources/01Z. Ulug‘bek xazinasi @audiokitoblar_uz.mp3",
    cover:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
    description:
      "Mirzo Ulug‘bek davri va ilm-fan xazinasi haqidagi mashhur tarixiy roman.",
    duration: "12 soat 40 daqiqa",
  },
  {
    id: "ub-2",
    title: "Asrga tatigulik kun",
    author: "Chingiz Aytmatov",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800&auto=format&fit=crop",
    description:
      "Inson, xotira va ma’naviyat haqida falsafiy mushohadaga to‘la roman.",
    duration: "14 soat 10 daqiqa",
  },
  {
    id: "ub-3",
    title: "Men, buvim, Iliko va Illarion",
    author: "Nodar Dumbadze",
    cover:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
    description:
      "Samimiy, kulgili va g‘amgin lavhalarga boy avtobiografik qissa.",
    duration: "7 soat 25 daqiqa",
  },
  {
    id: "ub-4",
    title: "Gitanjali",
    author: "Rabindranath Tagor",
    cover:
      "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=800&auto=format&fit=crop",
    description: "Nobel mukofotiga sazovor bo‘lgan she’riy to‘plam.",
    duration: "3 soat 15 daqiqa",
  },
];


export const materials = {
  "8": [
    { title: "8-sinf adabiyot", type: "Dars",
      file: "https://drive.google.com/file/d/1g2dLC4_B_W_SOdqr9zv1emJOidox-gD4/view?usp=drive_link"
    }
  ],
  "9": [
    { title: "9-sinf adabiyot", type: "Dars",
      file: "https://drive.google.com/file/d/1LzR-363he7XFhFyI0a2X9jxrcfBisLtX/view?usp=drive_link"
    }
  ],
} as const;

export const quiz = [
  {
    q: "Odil Yoqubovning 1951-yilda e'lon qilingan ilk asari qaysi?",
    options: ["Muqaddas", "Tengdoshlar", "Er boshiga ish tushsa", "Ulug‘bek xazinasi"],
    answer: 1,
  },
  {
    q: "Mashhur adib Chingiz Aytmatov Odil Yoqubovning qaysi qissasini juda yuksak baholab, o‘zining 'Jamila' asaridan ham avvalroq o‘qiganini e'tirof etgan?",
    options: ["Dastlabki qadam", "Ikki muhabbat", "Muqaddas", "Ko‘hna dunyo"],
    answer: 2,
  },
  {
    q: "Mirzo Ulug‘bek qaysi tepalikda o‘sha davr asrme'morchiligining nodir namunalaridan biri bo‘lgan rasadxonani bunyod ettirgan?",
    options: ["Cho‘ponota tepaligida", "Murodtepada", "Ko‘hak tepaligida", "Afrosiyob tepaligida"],
    answer: 2,
  },
  {
    q: "Mirzo Ulug‘bekning qaysi shogirdi Turkiyaga ko‘chib borib, 'Ziji jadidi Ko‘ragoniy' asarining dunyo bo‘ylab keng tarqalishiga katta hissa qo‘shdi?",
    options: ["Ali Qushchi", "Qozizoda Rumiy", "G‘iyosiddin Jamshid", "Alouddavla"],
    answer: 0,
  },
  {
    q: "Sulton Shohruh vafotidan keyin rasmiy voris tayinlanmaganligi sababli Temuriy mirzolarning o‘zaro nifoqida taxtni egallab olgan Boysung‘urning o‘g‘li kim edi?",
    options: ["Abdullatif", "Muzaffar Temur", "Alouddavla", "Ulug‘bekbek"],
    answer: 2,
  },
  {
    q: "Ulug‘bek xazinasi romani qaysi tarixiy voqeadan keyin yuzaga kelgan siyosiy vaziyat va taxt uchun kurashlar tasviri bilan boshlanadi?",
    options: [
      "Sulton Shohruh vafotidan keyin",
      "Ali Qushchi Turkiyaga ko‘chib ketgandan keyin",
      "Rasadxona qurilishi yakunlangandan keyin",
      "Mirzo Ulug‘bek kutubxonasi yo‘qotilgandan keyin",
    ],
    answer: 0,
  },
  {
    q: "Rasadxonada kechasi samoviy holatlarni kuzatib o‘tirgan, qo‘lida asboblari bilan navkarlar ovozini eshitgan olim kim edi?",
    options: [
      "Qozizoda Rumiy",
      "Alouddin Ali ibn Muhammad Qushchi",
      "Sulton Shohruh",
      "Xoqoni Said",
    ],
    answer: 1,
  },
  {
    q: "Mavlono Ali Qushchi huzuriga kelgan navkarlar boshlig‘i uni zudlik bilan qayerga boshlab borishni buyurdi?",
    options: [
      "Ko‘shkka, Mirzo Ulug‘bek huzuriga",
      "Qalmoqshoh saroyiga",
      "Shodasoy koniga",
      "Ko‘shkdan tashqariga, Bozor-ocharga",
    ],
    answer: 0,
  },
  {
    q: "Mavlono Ali Qushchi munosabat bildirishdan oldin asboblarni joyiga qo‘yish uchun qancha muddat so‘radi?",
    options: [
      "Bir daqiqa fursat",
      "Bir soat muhlat",
      "Qirq kun muddat",
      "Olti oy vaqt",
    ],
    answer: 0,
  },
  {
    q: "O‘tgan kuni tong payti ustod Mirzo Ulug‘bek rasadxonaga tashrif buyurganda qaysi hayvon terisi yopilgan o‘z kursisida o‘tirgan edi?",
    options: ["Bo‘ri terisi", "Yo‘lbars terisi", "Ayiq terisi", "Arslon terisi"],
    answer: 1,
  },
  {
    q: "Mavlono Ali Qushchi osmonga tikilib turganda, bir-biriga yaqin kelishi kutilayotgan qaysi sayyoralarni ko‘radi?",
    options: ["Merkuriy va Venera", "Mars va Saturn", "Mushtariy va Zuhro", "Yer va Oy"],
    answer: 2,
  },
  {
    q: "Ko‘ragoniy unvoni tarixan qanday shaxslarga nisbatan berilgan?",
    options: [
      "Chingizxon xonadoniga mansub malikalarga uylangan shaxslarga",
      "Rasadxonada eng yuqori unvonga erishgan olimlarga",
      "Urushda g‘olib kelgan qahramon sarkardalarga",
      "Taxtni kuch bilan egallagan mirzolarga",
    ],
    answer: 0,
  },
  {
    q: "Sudsi faxri asbobi zamonaviy tilda nima deb ataladi?",
    options: ["Durbin", "Teleskop", "Sekstant", "Kompas"],
    answer: 2,
  },
  {
    q: "Ali Qushchi qaysi ustod vafot etgandan keyin uning Riyoziyotini varoqlab uzoq o‘tirdi?",
    options: [
      "Qozizoda Rumiy",
      "G‘iyosiddin Jamshid",
      "Mirzo Ulug‘bek",
      "Alouddavla",
    ],
    answer: 0,
  },
  {
    q: "Ustod Qozizoda Rumiyning kitoblarini varoqlayotgan shaxsning bo‘yni xam bo‘lib qolganicha qaysi so‘zni bot-bot takrorlar edi?",
    options: ["Riyoziyot", "Xazinam", "Vatanim", "Inqiroz"],
    answer: 1,
  },
  {
    q: "Mavlono Ali Qushchi qora duxoba taqyasining ustidan mudarra dastarini o‘rab, qanday nimcha kiygan holda yuqoriga chiqa boshladi?",
    options: [
      "Sheviot shim va etik",
      "Yengsiz kimxob nimcha",
      "Temir va po‘lat sovut",
      "Qalin bo‘g‘oz kigiz kiyim",
    ],
    answer: 1,
  },
  {
    q: "Ali Qushchi portreti illyustratsiyasi muallifi kim?",
    options: ["Aziza Mamatova", "L. Kaydalov", "Akmal Nur", "Javlon Umarbekov"],
    answer: 1,
  },
  {
    q: "Ali Qushchi navkarlardan biri qorong‘ida betoqat depsinib turgan qanday otning jilovini qo‘liga oldi?",
    options: ["Chipor otning", "Oqko‘k chopqir otning", "Saman otning", "Arg‘umoqning"],
    answer: 1,
  },
  {
    q: "Olim xayoli parishon holda kutubxonada o‘tirganda, uning nigohi qanday stolda yotgan qog‘oz va kitoblarga qaratilgan edi?",
    options: [
      "Marmar stol ustidagi",
      "Yog‘och stol ustidagi",
      "Shisha stol ustidagi",
      "Temir stol ustidagi",
    ],
    answer: 0,
  },
  {
    q: "Rasadxonaga kelgan mehmonga qarab, 'u qushchi nomini bekorga olmagan, a’lohazratlari bilan o‘ynagan paytlarida ne-ne asov...' deb kim ta’rif beradi?",
    options: ["Navkarlar", "Shohrux Mirzo", "Ali Qushchining o‘zi", "Akbarali"],
    answer: 3,
  },
  {
    q: "Navkarlar ot choptirib borayotganda Siyobdan o‘tib, do‘ngga chiqqanlarida uzoqdan qaysi qabristonning qo‘rg‘oni va qator maqbaralari ko‘rindi?",
    options: ["Shohizinda", "Shohimardon", "Murodtepa", "Chorsu"],
    answer: 0,
  },
  {
    q: "Otliqlarning dupurini eshitib, o‘rinlaridan sakrab turgan va uzoq yo‘l poylab, davra qurib o‘tirgan posbonlar qayerda joylashgan edi?",
    options: [
      "Rasadxona darvozasida",
      "Qabriston o‘ng tomonida, masjid jomega yaqinlashganlarida",
      "Registon maydoni markazida",
      "Siyob bo‘yidagi eski ko‘prikda",
    ],
    answer: 1,
  },
  {
    q: "Joyning geografik koordinatalarini, vaqtni, quyosh va yulduzlarning chiqish va botish paytlarini aniqlashda ishlatiladigan ko‘chma astronomik asbob qanday nomlanadi?",
    options: ["Usturlab", "Sekstant", "Durbin", "Kompas"],
    answer: 0,
  },
  {
    q: "Maydon lashkarga to‘lib ketgan, sarbozlar guldurak yoqib o‘tirishgan, qalandarlarning ovozlari baralla eshitilib turgan keng maydon qayer edi?",
    options: [
      "Ko‘hak tepaligi",
      "Registon oldidagi keng maydon",
      "Mirzo Ulug‘bek madrasasi hovlisi",
      "Shohizinda qabristoni yo‘li",
    ],
    answer: 1,
  },
  {
    q: "Ali Qushchini saroy kutib turishi lozimligini bildirib, a’lohazratlarining salomxonasiga kim boshlab kirdi?",
    options: ["Saroybon", "Qultoy", "Salohdor", "Yasovul"],
    answer: 2,
  },
  {
    q: "Robindranath Thakur nechanchi yillarda yashab ijod etgan?",
    options: ["1861–1941", "1851–1931", "1871–1951", "1881–1961"],
    answer: 0, // A
  },
  {
    q: "Adib Kalkutta shahridagi oilada nechanchi farzand bo'lib tug'ilgan?",
    options: ["Birinchi", "Beshinchi", "O'ninchi", "O'n to'rtinchi"],
    answer: 3, // D
  },
  {
    q: "Robindranath Thakur necha yoshidan she'rlar yoza boshlagan?",
    options: ["8 yoshidan", "10 yoshidan", "12 yoshidan", "15 yoshidan"],
    answer: 0, // A
  },
  {
    q: "Yozuvchining 1882-yilda e'lon qilingan ilk she'riy to'plami qanday nomlanadi?",
    options: ["Tonggi qo'shiqlar", "Oqshom qo'shiqlar", "Suratlar va qo'shiqlar", "Gitanjali"],
    answer: 1, // B
  },
  {
    q: "Adib qaysi asari uchun 1913-yilda Nobel mukofotiga sazovor bo'ladi?",
    options: ["Bibha sohili", "Donishmand Roja", "Gitanjali", "Xalq qalbi"],
    answer: 2, // C
  },
  {
    q: "Mukofot puliga Hindiston bolalariga bag'ishlab qanday muassasa ochilgan?",
    options: ["Katta muzey", "Bepul maktab", "Bolalar teatri", "Kutubxona"],
    answer: 1, // B
  },
  {
    q: "Adibning 1911-yilda yozilgan 'Xalq qalbi' nomli qo'shig'i qaysi davlatning milliy madhiyasiga aylangan?",
    options: ["Bangladesh", "Hindiston", "Pokiston", "Shon-sharaf"],
    answer: 1, // B
  },
  {
    q: "Shubxa hikoyasidagi qizchaga tug'ilganida nima sababdan Shubxashini deb ism qo'yishgan edi?",
    options: [
      "Chiroyli bo'lgani uchun",
      "Shirin zabon bo'lsin deb",
      "Boy-badavlat bo'lsin deb",
      "San'atni sevgani uchun"
    ],
    answer: 1, // B
  },
  {
    q: "Shubxa qaysi qishloqda yashagan?",
    options: ["Chondipur", "Kalkutta", "Marhamat", "Parij"],
    answer: 0, // A
  },
  {
    q: "Chondipur qishlog'idan oqib o'tuvchi kichkina daryo qaysi toifadagi qizlarga o'xshatilgan?",
    options: [
      "Boy va badavlat qizlarga",
      "O'rta tabaqaga mansub qizlardek",
      "Saroy malikalariga",
      "Sho'x va quvnoq qizlarga"
    ],
    answer: 1, // B
  },
  {
    q: "Tamarind qanday daraxt turi hisoblanadi?",
    options: [
      "Tropik mamlakatlarda o'sadigan dukkakli, mevali daraxt",
      "Faqat tog'li hududlarda o'sadigan ignabargli daraxt",
      "Sahro sharoitiga moslashgan tikonli o'simlik",
      "Daryo bo'ylarida o'sadigan gullanmaydigan daraxt"
    ],
    answer: 0, // A
  },
  {
    q: "Banikontxaning hovlisi qayerga tutashgan edi?",
    options: [
      "Baland tog' etagiga",
      "Qalin o'rmon ichiga",
      "Katta bozor maydoniga",
      "Daryo qirg'og'iga"
    ],
    answer: 3, // D
  },
  {
    q: "Shubxaning eng yaqin sirdoshi bo'lgan ikki sigirining ismi nima edi?",
    options: [
      "Shorboshi va Panguli",
      "Qumri va Sa'va",
      "Protap va Gonshay",
      "Bibha va Shubxa"
    ],
    answer: 0, // A
  },
  {
    q: "Sigirlardan tashqari Shubxaning molxonasida yana qaysi jonivorlar bor edi?",
    options: [
      "Ot va eshak",
      "Echki bilan mushuk",
      "Qunduz va ohu",
      "Qaldirg'och va bulbul"
    ],
    answer: 1, // B
  },
  {
    q: "Shubxaning gapira oladigan do'sti, Gonshayning kichik o'g'lining ismi nima edi?",
    options: ["Banikontxa", "Thakur", "Protap", "Yusuf"],
    answer: 2, // C
  },
  {
    q: "Atrofni to'sish, himoya uchun o'rash qaysi so'z orqali ifodalangan?",
    options: ["Ihota", "Tamarind", "Choshgoh", "Parom"],
    answer: 0, // A
  },
  {
    q: "Protapning asosiy mashg'uloti nima edi?",
    options: [
      "Dehqonchilik qilish",
      "Qarmoq bilan baliq ovlash",
      "Kitob mutolaa qilish",
      "Sayohatga chiqish"
    ],
    answer: 1, // B
  },
  {
    q: "Yalvorgan odamning xohishi yoki g'arazi qaysi so'z orqali ifodalangan?",
    options: ["Iltijo", "Ta'na", "Malomat", "G'iybat"],
    answer: 0, // A
  },
  {
    q: "Chaynash uchun mo'ljallangan barglari bor o'simlik qanday nomlanadi?",
    options: ["Tamarind", "Betel", "Rayhon", "Yalpiz"],
    answer: 1, // B
  },
  {
    q: "Odamlar Shubxaning soqov ekanligini ko'rsatish uchun uni qanday atashardi?",
    options: ["Shubxashini", "Suv parisi", "Sodda qiz Shub", "Begona qiz"],
    answer: 1, // B
  },
  {
    q: "Protap qarmoq solganda, Shubxa qaysi daraxt tagida o'tirardi?",
    options: ["Olma daraxti", "Tamarind daraxti", "Terak daraxti", "Yong'oq daraxti"],
    answer: 1, // B
  },
  {
    q: "Banikontxa oilasi qayerga borishga qaror qiladi?",
    options: ["Chondipur", "Marhamat", "Kalkutta", "Parij"],
    answer: 2, // C
  },
  {
    q: "Eshikni ochib, qo'rqab-pisa tashqariga chiqish qaysi paytda sodir bo'ladi?",
    options: ["Quyosh chiqqanda", "Bir oydin kechada", "Qorong'u tunda", "Yomg'irli kunda"],
    answer: 1, // B
  },
  {
    q: "Qo'shnilari Banikontxa oilasi haqida qanday g'iybatlar qilishardi?",
    options: [
      "Uni qizini erga bera olmaydi deb",
      "Juda kambag'al oila deb",
      "Qishloqdan ko'chib ketadi deb",
      "Boshqa yurtga boradi deb"
    ],
    answer: 0, // A
  },
  {
    q: "Protap bir kuni tushda qarmog'ini tashlab, Shubxaga qarab nima deydi?",
    options: [
      "Senga er topishibdi, endi senga o'xshash yigitga erga tegasan",
      "Bu yerdan ketma, baliq ovlashga yordam ber",
      "Senga er topishibdi, endi sen u yerga borib erga tegasan",
      "Kalkuttaga borma, shu yerda qol"
    ],
    answer: 2, // C
  },
  {
    q: "Chingiz Aytmatov nechanchi yilda va qayerda tavallud topgan?",
    options: [
      "1928-yilda, Talas vodiysidagi Shakar ovulida",
      "1930-yilda, O‘sh viloyatining Shakar ovulida",
      "1925-yilda, Bishkek shahridagi Shakar ovulida",
      "1932-yilda, Talas vodiysidagi Chuy ovulida",
    ],
    answer: 0, // A
  },
  {
    q: "Chingiz Aytmatov 1948-yilda qaysi bilim yurtini tamomlagan?",
    options: [
      "Jambul zooveterinariya tehnikumini",
      "Moskvadagi Oliy adabiyot kursini",
      "Qirg‘iziston qishloq xo‘jaligi institutini",
      "Toshkent davlat universitetini",
    ],
    answer: 0, // A
  },
  {
    q: "Yozuvchi 1953-yilda qaysi oliy ta’lim muassasini tamomlagan?",
    options: [
      "Jambul zooveterinariya tehnikumini",
      "Qirg‘iziston qishloq xo‘jaligi institutini",
      "Moskvadagi Oliy adabiyot kursini",
      "Toshkent pedagogika institutini",
    ],
    answer: 1, // B
  },
  {
    q: "Chingiz Aytmatovning Moskvadagi Yozuvchilar uyushmasi qoshida o‘qigan kursi qanday nomlanadi?",
    options: [
      "Oliy jurnalistika kursi",
      "Oliy adabiyot kursi",
      "Badiiy ijod studiyasi",
      "Tarjimonlik mahorati kursi",
    ],
    answer: 1, // B
  },
  {
    q: "Chingiz Aytmatov yoshligida kim unga turli ertak, qo‘shiq va dostonlar aytib, badiiy adabiyotga mehr uyg‘otganini eslaydi?",
    options: ["Otasi", "Onasi", "Buvisi", "Ustozi"],
    answer: 2, // C
  },
  {
    q: "Yozuvchining buvisi unga tez-tez nimalar haqida gapirib berar edi va Chingiz uxlab qolsa ham uni uyg‘otib davomini aytib berishini so‘rar edi?",
    options: [
      "O‘zining tushlari haqida",
      "Tarixiy janglar haqida",
      "Sayohatchilar haqida",
      "Ovchilik sarguzashtlari haqida",
    ],
    answer: 0, // A
  },
  {
    q: "Chingiz Aytmatovning asarlari dunyo bo‘yicha qancha tilga tarjima qilingan?",
    options: [
      "100 dan ortiq",
      "120 dan ortiq",
      "150 dan ortiq",
      "200 dan ortiq",
    ],
    answer: 3, // D
  },
  {
    q: "Chingiz Aytmatov nechanchi yilda va qaysi sanada vafot etgan?",
    options: [
      "2005-yil 15-mayda",
      "2008-yil 10-iyunda",
      "2010-yil 1-avgustda",
      "2008-yil 25-oktabrda",
    ],
    answer: 1, // B
  },
  {
    q: "Chingiz Aytmatov qaysi viloyatdagi Qarqira yaylovlariga borib, tosh haykallarni izlaydi?",
    options: [
      "Issiqko‘l viloyatidagi",
      "Talas viloyatidagi",
      "O‘sh viloyatidagi",
      "Jalolobod viloyatidagi",
    ],
    answer: 0, // A
  },
  {
    q: "Yozuvchi yaylovda kim ismli o‘rmonchi va uning yonidagi bolakay bilan deyarli ikki soat suhbatlashadi?",
    options: ["Mo‘min", "Sharif", "Qobil", "Omon"],
    answer: 0, // A
  },
  {
    q: "Chingiz Aytmatov eshitganlari asosida yozgan 'Oq kema' asari birinchi marta qaysi jurnalda nashr etilgan?",
    options: [
      "Yangi olam (Noviy mir)",
      "Sharq yulduzi",
      "Yoshlik",
      "Jahon adabiyoti",
    ],
    answer: 0, // A
  },
  {
    q: "Oq kema qissasining boshqa qanday nomi ham bor?",
    options: [
      "Ertakdan so‘ng",
      "Sariq devni minib",
      "Tosh haykallar siri",
      "O‘rmondagi bolakay",
    ],
    answer: 0, // A
  },
  {
    q: "Qissadagi bolakay necha yoshda bo‘lib, maktabga borish uchun sakkizga qadam qo‘ygan edi?",
    options: [
      "Besh yoshda",
      "Olti yoshda",
      "Yetti yoshda",
      "Sakkiz yoshda",
    ],
    answer: 2, // C
  },
  {
    q: "Bolakayning o‘zi bag‘rini yerga berib yotgan sarg‘ish bukri toshni nima deb atar edi?",
    options: [
      "Cho‘kib yotgan tuya",
      "Egar",
      "Bo‘ri",
      "Tank",
    ],
    answer: 3, // D
  },
  {
    q: "Bolakay uchun suv yuvib ketgan qirg‘oqdagi kattakon xarsanglar ichida eng sevimli tosh qaysi edi?",
    options: [
      "Cho‘kib yotgan tuya",
      "Egar",
      "Bo‘ri",
      "Tank",
    ],
    answer: 0, // A
  },
  {
    q: "Bolakayning bobosi uni ba’zan kino ko‘rsatgani qo‘shni daradagi qaysi muassasaga olib borardi?",
    options: [
      "Chorvachilik xo‘jaligiga",
      "Naslchilik fermasiga",
      "O‘rmonchilik xo‘jaligiga",
      "Qishloq maktabiga",
    ],
    answer: 1, // B
  },
  {
    q: "O‘tlar orasida eng birinchi dushman hisoblangan, bola u bilan kuniga o‘n martalab jang qilgan o‘simlik nomi nima?",
    options: [
      "Shirojlin",
      "Chaqurtikan",
      "Pechakgul",
      "Binafsha",
    ],
    answer: 1, // B
  },
  {
    q: "Sahro va daladagi qaysi o‘simliklar eng aqlli, quvnoq bo‘lib, ertalab quyoshni hammadan ortiq quvonch bilan kutib oladi?",
    options: [
      "Shirojlinlar",
      "Pechakgullar",
      "Binafshalar",
      "Chaqurtikanlar",
    ],
    answer: 1, // B
  },
  {
    q: "Kunduzlari, odatda tush vaqtida qaysi o‘simlik bor bo‘yicha serpoya shirojlinlar quyuq bo‘lib o‘sgan tomonga jo‘nashni yaxshi ko‘radi?",
    options: [
      "Shirojlin",
      "Pechakgul",
      "Quyosh",
      "Shamol",
    ],
    answer: 0, // A
  },
  {
    q: "O‘rmon yoqasidagi qaysi daraxtlar singari yuqumli hid taratib turadigan shirojlin quchog‘i qaynoq va sokin bo‘ladi?",
    options: [
      "Teraklar",
      "Tollor",
      "Qarag‘ayzorlar",
      "Chinorlar",
    ],
    answer: 2, // C
  },
  {
    q: "Darslik matni chetidagi izohda 'yuk mashinasini o‘zgartirib qilingan ko‘chma do‘kon' ma'nosini anglatuvchi so‘z qaysi?",
    options: [
      "Avtolavka",
      "Mashina-magazin",
      "Soyabon",
      "Ko‘chma do‘kon",
    ],
    answer: 0, // A
  },
  {
    q: "Bola uyga yetib kelganida, ko‘chma do‘kon hovliga yaqinlashib qolganda nima deb qichqirib yuboradi?",
    options: [
      "Keldi! Mashina-magazin keldi!",
      "Do‘kon keldi, yuguring!",
      "Avtolavka keldi, hovliga chiqing!",
      "Yordam bering, mashina keldi!",
    ],
    answer: 0, // A
  },
  {
    q: "Ko‘pni ko‘rgan kishilar keksa Mo‘minni qanday ism bilan chaqirishar edi?",
    options: [
      "Mo‘min polvon",
      "Mo‘min cho‘loq",
      "Mo‘min chaqqon",
      "Mo‘min dono",
    ],
    answer: 1, // B
  },
  {
    q: "Mo‘minning atrofda hamma tanishi bo‘lib, u qanday fazilatlari tufayli shunday laqab olgan edi?",
    options: [
      "Judayam boy va saxovatli bo‘lgani uchun",
      "Kuchsiz va doimo yordamga muhtojligi uchun",
      "Har kimning xizmatiga hozir-u nozir bo‘lgani, hammaga sadoqatliligi va xushmuomalaligi uchun",
      "Kamgap va odamoviligi tufayli",
    ],
    answer: 2, // C
  },
  {
    q: "Mo‘minga katta ma’rakalarda buyurtma berilmasin, u ana-mana deguncha barini saranjom-sarishta qilar, eng muhimi, nima qilmasdi?",
    options: [
      "Hech kim bilan gaplashmasdi",
      "Boshqalardek bo‘yin tovlamasdi",
      "Pul so‘ramasdi",
      "Ishni oxiriga yetkazmasdi",
    ],
    answer: 1, // B
  }
];