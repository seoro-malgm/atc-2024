// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  app: {
    head: {
      title: "ATC 2024 | 지리산둘레길 걷기축제  & 아시아 트레일 컨퍼런스",
      htmlAttrs: {
        lang: "ko-KR"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        {
          hid: "description",
          name: "description",
          content:
            "2024년 제 5회를 맞은 아시아 트레일즈 컨퍼런스(Asia Trails Conference, ATC)는 아시아 트레일 네트워크(Asia Trails Network, ATN)를 중심으로 전 세계의 트레일 운영관리 단체들과 각 국의 정책결정자, 실무자 및 이해관계자들이 한자리에 모여 트레일의 운영관리, 도보여행의 영향력, 그리고 각 국의 정책 등에 대해 논의하며 미래세대를 위한 방향성을 제시하는 컨퍼런스입니다."
        },
        {
          name: "keyword",
          content:
            "festival, 숲길, 지리산둘레길, 사단법인 숲길, 아시아 트레일 컨퍼런스, 아시아 워킹 페스티벌, 걷기축제"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/og-image.png"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "ATC 2024 | 지리산둘레길 걷기축제  & 아시아 트레일 컨퍼런스"
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "2024년 제 5회를 맞은 아시아 트레일즈 컨퍼런스(Asia Trails Conference, ATC)는 아시아 트레일 네트워크(Asia Trails Network, ATN)를 중심으로 전 세계의 트레일 운영관리 단체들과 각 국의 정책결정자, 실무자 및 이해관계자들이 한자리에 모여 트레일의 운영관리, 도보여행의 영향력, 그리고 각 국의 정책 등에 대해 논의하며 미래세대를 위한 방향성을 제시하는 컨퍼런스입니다."
        },
        {
          name: "msapplication-tooltip",
          content: "2024 지리산둘레길 걷기축제  & 아시아 트레일 컨퍼런스"
        },
        {
          name: "application-name",
          content: "2024 지리산둘레길 걷기축제  & 아시아 트레일 컨퍼런스"
        },
        {
          property: "og:url",
          content: "https://atcjirisan.com"
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:site_name",
          content: "ATC 2024 | 지리산둘레길 걷기축제  & 아시아 트레일 컨퍼런스"
        },
        {
          name: "msapplication-TileImage",
          content: "/ms-icon-144x144.png"
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff"
        },
        {
          name: "theme-color",
          content: "#ffffff"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "/og-image.png"
        },
        {
          property: "twitter:domain",
          content: "https://atcjirisan.com"
        },
        {
          property: "twitter:url",
          content: "https://atcjirisan.com"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "ATC 2024 | 지리산둘레길 걷기축제  & 아시아 트레일 컨퍼런스"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "2024년 제 5회를 맞은 아시아 트레일즈 컨퍼런스(Asia Trails Conference, ATC)는 아시아 트레일 네트워크(Asia Trails Network, ATN)를 중심으로 전 세계의 트레일 운영관리 단체들과 각 국의 정책결정자, 실무자 및 이해관계자들이 한자리에 모여 트레일의 운영관리, 도보여행의 영향력, 그리고 각 국의 정책 등에 대해 논의하며 미래세대를 위한 방향성을 제시하는 컨퍼런스입니다."
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/og-image.png"
        }
        //   {
        //     name: "naver-site-verification",
        //     content: "a25c95dede3280f26c1083e63a051b011f3519d2"
        //   }
      ],
      link: [
        //   // 파비콘
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/apple-icon-57x57.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/apple-icon-60x60.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/apple-icon-72x72.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/apple-icon-76x76.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/apple-icon-114x114.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/apple-icon-120x120.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/apple-icon-144x144.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/apple-icon-152x152.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-icon-180x180.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/android-icon-192x192.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon-96x96.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        }
        // 사이트맵
        // {
        //   rel: "sitemmap",
        //   type: "application/xml",
        //   title: "Sitemap",
        //   href: "https://seorom-malgm.studio/sitemap.xml"
        // },
        // {
        //   rel: "alternate",
        //   type: "application/rss+xml",
        //   title: "Seoro-malgm Studio works feeds",
        //   href: "https://seorom-malgm.studio/rss.xml"
        // }
      ],
      script: [
        // {
        //   src: "https://www.googletagmanager.com/gtag/js?id=G-R7FYNEMFH4",
        //   async: true
        // },
        // {
        //   innerHTML: `
        //       window.dataLayer = window.dataLayer || [];
        //       function gtag(){dataLayer.push(arguments);}
        //       gtag('js', new Date());
        //       gtag('config', 'G-R7FYNEMFH4');
        //     `,
        //   type: "text/javascript"
        // }
      ]
    },
    pageTransition: { name: "slide-out", mode: "out-in" }
  },
  // router
  router: {
    options: {
      scrollBehaviorType: "smooth",
      linkActiveClass: "active",
      linkExactActiveClass: "exact-active"
    }
    // middleware: ["auth"]
  },
  css: [],
  // modules
  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt"
  ],
  tailwindcss: {
    cssPath: "@/assets/css/global.css",
    configPath: "@/tailwind.config.js",
    viewer: false
  },
  ui: {
    global: true
  },
  // plugins
  plugins: [
    "@/plugins/firebase.js",
    "@/plugins/authChecker.js",
    "@/plugins/router.scrollBehavior.js"
  ],
  // nuxt-iamge
  image: {
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1440
    },
    presets: {
      adminThumbnail: {
        modifiers: {
          format: "jpg, gif",
          width: 88,
          height: 88
        }
      },
      adminLogo: {
        modifiers: {
          format: "jpg, gif",
          width: 48,
          height: 48
        }
      }
    },
    providers: {
      defaultProvider: {
        name: "defaultProvider",
        provider: "~/providers/default-provider.ts",
        options: {
          baseURL: process.env.BASE_URL
        }
      },
      storageBucket: {
        name: "storageBucket",
        provider: "~/providers/storage-bucket.ts"
      }
    }
  },
  // 기본 컬러모드
  colorMode: {
    preference: "light"
  },
  // i18n
  i18n: {
    strategy: "prefix_except_default",
    vueI18n: "./i18n.config.ts",
    defaultLocale: "ko",
    detectBrowserLanguage: false
  },
  serverHandlers: [
    // { route: "/rss", middleware: true, handler: "~/server/middleware/rss.js" }
  ],
  // env
  runtimeConfig: {
    // private: {
    public: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID || "",
      databaseURL: process.env.DATABASE_URL,
      domainURL: process.env.DOMAIN_URL,
      authId: process.env.AUTH_ID,
      authPwd: process.env.AUTH_PWD,
      tokenName: process.env.TOKEN_NAME,
      baseURL: process.env.BASE_URL,
      mapId: process.env.MAP_ID
    },
    stibee_apiKey: process.env.STIBEE_APIKEY,
    stibee_listId: process.env.STIBEE_LISTID
  },
  // render: {
  //   cacheControl: {
  //     static: "public, max-age=604800", // 정적 자원 캐싱 설정
  //     server: false // renderingCache 비활성화
  //   }
  // },
  nitro: {
    preset: "firebase",
    firebase: {
      gen: 2,
      nodeVersion: "20"
    }
  },
  imports: {
    dirs: [
      "composables/**" // scan all composables
    ]
  }
});
