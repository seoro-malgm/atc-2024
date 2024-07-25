// https://nuxt.com/docs/api/configuration/nuxt-config
import seoData from "./data/seoData.js";

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  app: {
    head: {
      ...seoData
    },
    bodyAttrs: {
      "data-gtm-body": true
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
  // nuxt-image
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
  },
  vue: {
    compilerOptions: {
      directiveTransforms: {
        gtm: () => ({ props: [] })
      }
    }
  },
  hooks: {
    "render:route": (url, result, context) => {
      result.html = result.html.replace(
        "</body>",
        `<!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MX9VR9Q2" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) --></body>`
      );
    }
  }
});
