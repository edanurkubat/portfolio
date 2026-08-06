/* src/js/data/portfolioData.js */
export const portfolioData = {
  personalInfo: {
    name: "Edanur Kubat",
    title: {
      tr: "Bilgisayar Programcılığı Öğrencisi",
      en: "Computer Programming Student",
    },
    about: {
      tr: "Marmara Üniversitesi Bilgisayar Programcılığı 2. sınıf öğrencisiyim. Yazılım geliştirme alanında kendimi sürekli geliştirmeye odaklanıyor, özellikle web geliştirme ve mobil uygulama teknolojileri üzerine projeler üretiyorum. Modern yazılım geliştirme süreçlerini öğrenmeye, kullanıcı odaklı ve performanslı uygulamalar geliştirmeye önem veriyorum. Yeni teknolojileri araştırmayı, öğrendiklerimi gerçek projelerde uygulamayı ve problem çözme becerilerimi geliştirmeyi seviyorum. Hedefim, Lisans eğitimi alarak kendimi daha da geliştirmek ve bu doğrultuda devam etmek.",
      en: "I am a second-year Computer Programming student at Marmara University. I focus on continuously improving my skills in software development, particularly in web development and mobile application technologies. I aim to learn modern software development processes, create user-focused and performant applications, and develop my problem-solving abilities. My goal is to further my education with a bachelor's degree and continue developing my career in this field.",
    },
    location: "İstanbul, Türkiye",
    experienceMonths: 1,
    email: "edanurkubat0@gmail.com",
    cvUrl: "/public/resume.pdf",
    socials: {
      github: "https://github.com/edanurkubat",
      linkedin: "https://linkedin.com/in/edanurkubat",
    },
  },
  skills: [
    { category: "Programming Languages", items: ["Java", "C#", "Python", "C", "Kotlin"] },
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "Canvas API"] },
    { category: "Backend & Databases", items: ["Node.js", "SQL Server", "MongoDB", "Express.js"] },
    { category: "Game & Web Services", items: ["Unity", "RESTful API", "JWT (JSON Web Tokens)", "Nodemailer"] },
    { category: "IDEs & Tools", items: ["Visual Studio/Code", "Eclipse", "Android Studio", "Git/Github"], },
    { category: "Languages", items: ["Turkish (Native)", "English (Intermediate)"], },
  ],
  projects: [
    {
      id: 1,
      title: { tr: "Borsa Pusulası", en: "Borsa Pusulası" },
      description: {
        tr: "Gerçek kripto para borsa verilerini canlı olarak takip eden, sanal bakiye ile alım satım simülasyonu yapılabilen ve portföy yönetimi sunan tam işlevli bir web uygulaması.",
        en: "A fully functional web application that tracks real-time cryptocurrency exchange data, allows buying and selling simulations with virtual balances, and provides portfolio management features.",
      },
      longDescription: {
        tr: "Borsa Pusulası, kullanıcıların gerçek zamanlı kripto para piyasası verilerini takip edebilmelerine, herhangi bir finansal risk almadan sanal bakiye ile alım-satım simülasyonu yapabilmelerine ve detaylı portföy analizi gerçekleştirebilmelerine olanak tanıyan tam donanımlı bir web uygulamasıdır. Günümüz finansal teknolojilerinin gereksinimlerine uygun olarak tasarlanan bu platform; kripto para ekosistemine yeni adım atan kullanıcılar için güvenli bir deneme alanı sunarken, deneyimli yatırımcılar için de canlı piyasa takibi ve kişiselleştirilmiş alarm sistemleriyle güçlü bir yardımcı araç işlevi görür.Platform, finansal verilerin doğruluğunu ve güncelliğini sağlamak amacıyla sektörün öncü veri sağlayıcılarıyla entegre bir şekilde çalışır. Sistemin kalbinde, Binance REST API üzerinden 2 saniyede bir güncellenen canlı piyasa ve emir defteri (order book) verileri yer alır. Kullanıcılar; Bitcoin ve popüler altcoin’lerin anlık fiyat değişimlerini, 24 saatlik yüksek/düşük seviyelerini ve işlem hacimlerini canlı kayan fiyat bandı (ticker) üzerinden kesintisiz takip edebilirler. Piyasanın genel psikolojisini ölçmek adına Fear & Greed (Korku ve Açgözlülük) endeksi ve BTC dominansı gibi Kritik göstergeler de arayüzde anlık olarak sunulur. Ayrıca, herhangi bir harici kütüphaneye bağımlı kalmaksızın doğrudan Canvas API ile çizdirilen dinamik alan ve sparkline grafikleri sayesinde kullanıcılar farklı zaman dilimlerindeki (1S, 4S, 1G, 1H) fiyat hareketlerini pürüzsüz bir görsel deneyimle analiz edebilirler. CoinGecko, Coinbase ve Finnhub entegrasyonları ise piyasa değeri, dolaşımdaki arz, döviz dönüştürme ve güncel haber takibi gibi ek verilerle platformun bilgi ağını tamamlar.İşleyiş mekanizması bakımından uygulama, güvenli ve modern bir kullanıcı deneyimi üzerine kurulmuştur. Kullanıcılar Canvas tabanlı CAPTCHA ve OTP (E-posta aktivasyonu) adımlarını tamamlayarak sisteme kayıt olurlar. JWT (JSON Web Token) tabanlı oturum yönetimi ve bcryptjs şifreleme altyapısı sayesinde hesap güvenliği üst seviyede tutulur. Giriş yapan her kullanıcıya sunulan sınırsız sanal bakiye ile Al/Sat paneli üzerinden Limit, Market ve OCO (One-Cancels-the-Other) gibi gerçek borsalarda kullanılan gelişmiş emir türleriyle işlem yapılabilir. Yapılan tüm alım-satım işlemleri MongoDB Atlas veritabanında kalıcı olarak saklanır ve Binance’ten alınan anlık verilerle senkronize bir şekilde kullanıcının kâr/zarar durumu hesaplanır. Kullanıcılar portföylerinin dağılımını Donut grafikler üzerinden inceleyebilir, performans değişimlerini tarihsel olarak görüntüleyebilir, portföy özetlerini PDF veya CSV formatında dışa aktarabilirler.Projenin öne çıkan en güçlü yönlerinden biri, kullanıcıyı platforma bağımlı kılmayan akıllı bildirim ve zamanlanmış görev mimarisidir. Fiyat alarmları kuran kullanıcılar, hedef fiyatlara ulaşıldığında hem anlık tarayıcı push bildirimleri hem de Gmail SMTP altyapısı üzerinden e-posta ile bilgilendirilirler. Ayrıca Node.js ve node-cron zamanlayıcısı sayesinde her Pazartesi sabahı kullanıcılara haftalık portföy performans özetleri otomatik olarak e-posta ile iletilir. Kullanıcı profili yönetimi, karanlık ve aydınlık tema tercihleri, detaylı coin analiz sayfaları ve döviz/kripto dönüştürücü paneli ile Borsa Pusulası, veri yoğunluğunu kullanıcı dostu bir arayüzle buluşturan, uçtan uca mimariye sahip modern bir web platformudur.",
        en: "Borsa Pusulası, users can track real-time cryptocurrency market data, perform buying and selling simulations with virtual balances, and manage their portfolios. The platform is designed to meet the needs of modern financial technologies, providing a safe testing environment for newcomers to the crypto ecosystem while serving experienced investors with live market monitoring and personalized alert systems. The platform integrates with leading data providers to ensure the accuracy and timeliness of financial information. At the core of the system are live market and order book data updated every 2 seconds via the Binance REST API. Users can continuously monitor Bitcoin and popular altcoins' price changes, 24-hour high/low levels, and trading volumes through a live ticker. Critical indicators such as the Fear & Greed (Fear and Greed) index and BTC dominance are also displayed in real-time on the interface. Additionally, users can analyze price movements across different timeframes (1S, 4S, 1G, 1H) through dynamically rendered areas and sparkline charts created directly with the Canvas API. Integrations with CoinGecko, Coinbase, and Finnhub complete the platform's information network with additional data such as market value, circulating supply, currency conversion, and current news coverage. The application is built on a secure and modern user experience foundation. Users complete Canvas-based CAPTCHA and OTP (Email Activation) steps to register for the system. Account security is maintained at a high level through JWT (JSON Web Token)-based session management and bcryptjs encryption infrastructure. Each logged-in user is provided with an unlimited virtual balance to perform trades via the Buy/Sell panel using advanced order types used in real exchanges such as Limit, Market, and OCO (One-Cancels-the-Other). All transactions are permanently stored in MongoDB Atlas database synchronized with real-time data from Binance. Users can analyze their portfolio distribution through Donut charts, view performance changes historically, and export portfolio summaries in PDF or CSV format. One of the project's standout features is its smart notification system that does not tie users to a specific platform: users who set price alerts receive both instant browser push notifications and email updates via Gmail SMTP infrastructure when target prices are reached. Additionally, Node.js and node-cron schedulers automatically send weekly portfolio performance summaries to users every Monday morning via email. User profile management along with dark/light theme preferences combined with detailed coin analysis pages and a currency/cryptocurrency converter panel make Borsa Pusulası a modern web platform that bridges data intensity with a user-friendly interface.",
      },
      image: "/public/images/projects/BorsaPusulasi/BorsaPusulasiKapak.jpg",
      gallery: [
        "/public/images/projects/BorsaPusulasi/AnasayfaAllDark.jpg",
        "/public/images/projects/BorsaPusulasi/AnasayfaAllLight.jpg",
        "/public/images/projects/BorsaPusulasi/portfoy.jpg",
        "/public/images/projects/BorsaPusulasi/doviz.jpg",
        "/public/images/projects/BorsaPusulasi/donusturucu.jpg",
        "/public/images/projects/BorsaPusulasi/haberler.jpg",
        "/public/images/projects/BorsaPusulasi/aktif-hesap.jpg",
        "/public/images/projects/BorsaPusulasi/aktif-olmayan-hesap.jpg",
        "/public/images/projects/BorsaPusulasi/coin-detay.jpg",
        "/public/images/projects/BorsaPusulasi/ayarlar.jpg",
      ],
      tags: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Express.js",
        "Node.js",
        "MongoDB Atlas",
        "JWT",
        "Canvas API"
      ],
      featured: true,
      githubUrl: "https://github.com/edanurkubat/borsa-pusulasi",
    },
    {
      id: 2,
      title: { tr: "Pastane Sitesi", en: "Bakery Website" },
      description: {
        tr: "Ev'a Pastane, gerçek bir pastane işletmesinin dijital ihtiyaçlarını karşılayabilecek nitelikte, kurumsal kimliği ve modern e-ticaret dinamiklerini bir araya getiren kapsamlı bir web projesidir.",
        en: "Ev'a Pastane is a comprehensive web project that combines corporate identity and modern e-commerce dynamics, capable of meeting the digital needs of a real bakery business.",
      },
      longDescription: {
        tr: "Ev'a Pastane, gerçek bir pastane işletmesinin dijital ihtiyaçlarını karşılayabilecek nitelikte, kurumsal kimliği ve modern e-ticaret dinamiklerini bir araya getiren kapsamlı bir web projesidir. Proje, yalnızca ürün sergileyen statik bir vitrin sitesi olmanın ötesine geçerek; dinamik ürün arama, kategori bazlı filtreleme, favori listesi oluşturma, sepet yönetimi ve tema tercihi (karanlık/aydınlık mod) gibi tam donanımlı bir e-ticaret platformunun temel bileşenlerini sunmaktadır.Projenin teknik mimarisinde bilinçli bir mühendislik yaklaşımı benimsenmiş; React veya Vue gibi herhangi bir ön yüz kütüphanesi ya da Vite/Webpack gibi derleme araçları kullanılmadan doğrudan saf HTML5, CSS3 ve JavaScript (ES6+) standartlarına dayanılmıştır. ES6 modül yapısı sayesinde kod tabanı sürdürülebilir ve organize bileşenlere ayrılmış; CSS tarafında ise Custom Properties (değişkenler), Grid, Flexbox ve CSS columns tekniğiyle duyarlı (responsive) bir masonry galeri düzeni oluşturulmuştur.Kullanıcı deneyimini üst seviyeye çıkarmak adına performans ve erişilebilirlik ön planda tutulmuştur. Arama çubuğunda debounce tekniği kullanılarak gereksiz işlem yükü engellenmiş, kullanıcı tercihleri ve sepet verileri localStorage ile kalıcı hale getirilmiştir. Sayfa geçişleri ve görsel akış, tarayıcı dostu Intersection Observer API ile desteklenen kaydırma animasyonlarıyla zenginleştirilmiştir. Ayrıca erişilebilirlik (semantic HTML, aria etiketleri) ve SEO standartlarına (meta etiketleri, sitemap.xml, robots.txt) tam uyum sağlayan projenin tüm görselleri ve arayüz alanları hem masaüstü hem de mobil cihazlarda sorunsuz çalışacak şekilde tasarlanmıştır.",
        en: "Ev'a Pastane is a comprehensive web project that combines corporate identity and modern e-commerce dynamics, capable of meeting the digital needs of a real bakery business. The project goes beyond being a static showcase site by offering essential components of a fully functional e-commerce platform, including dynamic product search, category-based filtering, favorite list creation, cart management, and theme preference (dark/light mode).The technical architecture of the project adopts a conscious engineering approach, relying directly on pure HTML5, CSS3, and JavaScript (ES6+) standards without using any front-end libraries like React or Vue or build tools like Vite/Webpack. The ES6 module structure allows for a maintainable and organized codebase divided into components, while the CSS side utilizes Custom Properties (variables), Grid, Flexbox, and CSS columns techniques to create a responsive masonry gallery layout.Performance and accessibility are prioritized to enhance user experience. The search bar employs debounce techniques to prevent unnecessary processing load, while user preferences and cart data are persisted using localStorage. Page transitions and visual flow are enriched with scroll animations supported by the browser-friendly Intersection Observer API. Additionally, the project fully adheres to accessibility (semantic HTML, aria labels) and SEO standards (meta tags, sitemap.xml, robots.txt), ensuring that all images and interface areas function seamlessly on both desktop and mobile devices.",
      },
      image: "/public/images/projects/PastaneSitesi/PastaneSitesiKapak.jpg",
      gallery: [
        "/public/images/projects/PastaneSitesi/hero-section.jpg",
        "/public/images/projects/PastaneSitesi/dark-mode.jpg",
        "/public/images/projects/PastaneSitesi/categories-section.jpg",
        "/public/images/projects/PastaneSitesi/products-page.jpg",
        "/public/images/projects/PastaneSitesi/product-detail-page.jpg",
        "/public/images/projects/PastaneSitesi/gallery-page.jpg",
        "/public/images/projects/PastaneSitesi/cart-page.jpg",
        "/public/images/projects/PastaneSitesi/contact-page.jpg",
        "/public/images/projects/PastaneSitesi/faq-page.jpg",
      ],
      tags: [
        "JavaScript",
        "HTML5",
        "CSS3"
      ],
      featured: true,
      githubUrl: "https://github.com/edanurkubat/pastane-sitesi",
    },
    {
      id: 3,
      title: { tr: "Pomodoro Uygulaması", en: "Pomodoro App" },
      description: {
        tr: "Pomodoro, kullanıcıların odaklanmasını artırmak, çalışma alışkanlıklarını takip etmek ve günlük verimliliklerini analiz etmek amacıyla geliştirilmiş, native bir Android uygulamasıdır.",
        en: "Pomodoro is a native Android application developed to enhance users' focus, track their work habits, and analyze their daily productivity.",
      },
      longDescription: {
        tr: "Pomodoro, kullanıcıların odaklanma sürelerini artırmak, çalışma alışkanlıklarını takip etmek ve günlük verimliliklerini analiz etmek amacıyla geliştirilmiş native bir Android uygulamasıdır. Standart bir geri sayım sayacının ötesine geçen sistem; görev yönetimi, detaylı istatistiksel analizler, geçmiş oturum kayıtları ve tamamen kişiselleştirilebilir çalışma ile mola ayarları sunmaktadır. Uygulama, profesyonel yazılım geliştirme standartlarına uygun olarak MVVM ve Clean Architecture (Temiz Mimari) deseniyle inşa edilmiştir. Kod tabanı; Android bağımlılığı içermeyen iş kurallarının yer aldığı domain, veritabanı ve veri kaynaklarının yönetildiği data ile arayüzün yönetildiği presentation olmak üzere üç ana katmandan oluşmaktadır. Projenin teknik mimarisinde Android ekosisteminin modern ve standart kabul edilen teknolojileri tercih edilmiştir. Programlama dili olarak Kotlin, kullanıcı arayüzünde ise Jetpack Compose kullanılmıştır. Bağımlılık yönetimi Hilt ile sağlanırken, asenkron işlemler ve veri akışları Kotlin Coroutines ve Flow altyapısıyla yürütülmektedir. Yerel veri depolama tarafında veritabanı işlemleri için Room ORM katmanından, kullanıcı tercihlerinin saklanmasında ise Jetpack DataStore'dan faydalanılmıştır. Zamanlayıcının uygulama kapatılsa dahi kesintisiz çalışabilmesi Foreground Service ile garanti altına alınmış, istatistiksel grafiklerin görselleştirilmesinde MPAndroidChart, ekran navigasyonunda ise Navigation Compose kütüphanesi kullanılmıştır. Kod kalitesini korumak adına JUnit, MockK, Turbine ve Coroutines Test araçlarıyla birim test süreçleri kurgulanmıştır. Açık/koyu tema desteği, TalkBack uyumlu erişilebilirlik standartları ve farklı ekran boyutlarına uyum sağlayan duyarlı (responsive) tasarımıyla dikkat çeken uygulama, tüm kullanıcı verilerini cihaz üzerinde güvenle saklamaktadır.",
        en: "Pomodoro is a native Android application developed to enhance users' focus, track their work habits, and analyze their daily productivity. The system goes beyond a standard countdown timer by offering task management, detailed statistical analyses, historical session records, and fully customizable work and break settings. The application is built in accordance with professional software development standards using the MVVM and Clean Architecture patterns. The codebase consists of three main layers: domain, which contains business rules independent of Android; data, which manages database and data sources; and presentation, which handles the user interface. The technical architecture of the project leverages modern and widely accepted technologies within the Android ecosystem. Kotlin is used as the programming language, while Jetpack Compose is employed for the user interface. Dependency management is handled with Hilt, and asynchronous operations and data flows are executed using Kotlin Coroutines and Flow. For local data storage, Room ORM is utilized for database operations, while Jetpack DataStore is used for storing user preferences. To ensure uninterrupted operation of the timer even when the app is closed, a Foreground Service is implemented. MPAndroidChart is used for visualizing statistical graphs, and Navigation Compose handles screen navigation. Unit testing processes are established using JUnit, MockK, Turbine, and Coroutines Test tools to maintain code quality. The application stands out with its support for light/dark themes, TalkBack-compatible accessibility standards, and responsive design that adapts to different screen sizes, securely storing all user data on the device.",
      },
      image: "/public/images/projects/PomodoroApp/PomodoroAppKapak.jpg",
      gallery: [
        "/public/images/projects/PomodoroApp/home.jpg",
        "/public/images/projects/PomodoroApp/tasks.jpg",
        "/public/images/projects/PomodoroApp/statistics.jpg",
        "/public/images/projects/PomodoroApp/history.jpg",
        "/public/images/projects/PomodoroApp/settings.jpg",
        "/public/images/projects/PomodoroApp/light_theme.jpg",
      ],
      tags: [
        "Kotlin",
        "Jetpack Compose",
      ],
      featured: true,
      githubUrl: "https://github.com/edanurkubat/pomodoro-app",
    },
  ],
  experience: [
    {
      period: "2026 Temmuz - 2026 Ağustos",
      role: { tr: "Web Geliştirme Stajyeri", en: "Web Developer Intern" },
      company: "ICED Company",
      description: {
        tr: "Küçük ölçekli web uygulamalarının arayüz geliştirme süreçlerinde görev aldım.",
        en: "Contributed to UI development of small-scale web applications.",
      },
    },
  ],
  education: [
    {
      period: "2024 - 2026",
      degree: {
        tr: "Bilgisayar Programcılığı (Önlisans)",
        en: "Computer Programming (As.)",
      },
      school: "Marmara Üniversitesi",
    },
    {
      period: "2021 - 2023",
      degree: { tr: "Say", en: "Say" },
      school: "Dr. Vasıf Toçu Fen Lisesi",
    },
    {
      period: "2019 - 2021",
      degree: { tr: "Say", en: "Say" },
      school: "TOBB Fen Lisesi",
    },
  ],
  certificates: [
    {
      title: {
        tr: "C# Form ile Görsel ve Nesne Tabanlı Programlama",
        en: "Visual and Object-Oriented Programming with C# Forms",
      },
      institution: "Turkcell Geleceği Yazanlar",
      date: "2025",
      description: {
        tr: "C# ile form oluşturma ve sql bağlantısı kurma",
        en: "Creating forms and establishing SQL connections with C#",
      },
      verifyUrls: [
        {
          label: "1. Sertifika",
          url: "https://gelecegiyazanlar.turkcell.com.tr/sertifika/404631569bd44351abe0baa891e1d19b",
        },
        {
          label: "2. Sertifika",
          url: "https://gelecegiyazanlar.turkcell.com.tr/sertifika/220ef8f109f447288410ac90902efe91",
        },
      ],
    },
    {
      title: { tr: "Web Programlama", en: "Web Programming" },
      institution: "Turkcell Geleceği Yazanlar",
      date: "2025",
      description: {
        tr: "HTML ile basit web sayfaları oluşturma",
        en: "Creating simple web pages with HTML",
      },
      verifyUrls: [
        {
          label: "1. Sertifika",
          url: "https://gelecegiyazanlar.turkcell.com.tr/sertifika/086b0fa70a4c443fa6fdcc24a3aadd53",
        },
        {
          label: "2. Sertifika",
          url: "https://gelecegiyazanlar.turkcell.com.tr/sertifika/0db1a4f7f5a04d5da48def2f1d17e65e",
        },
        {
          label: "3. Sertifika",
          url: "https://gelecegiyazanlar.turkcell.com.tr/sertifika/fc7128e82b404e8da33254a12354911a",
        },
      ],
    },
  ],
};
