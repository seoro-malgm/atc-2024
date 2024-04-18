export default defineAppConfig({
  ui: {
    primary: "spring-green",
    gray: "grayscale",
    toggle: {
      default: {
        color: "spring-green",
        variant: "spring-green"
      }
    },
    icons: {
      dynamic: true
    },
    notifications: {
      position: "bottom-0 trasnlate-x-center",
      enterActiveClass: "transform ease-out duration-300 transition",
      enterFromClass:
        "translate-y-6 opacity-0 sm:translate-y-0 sm:translate-x-64",
      enterToClass: "translate-y-0 opacity-100 sm:translate-x-0",
      leaveActiveClass: "transition ease-in duration-100",
      leaveFromClass: "opacity-100",
      leaveToClass: "opacity-0"
    },
    tooltip: {
      background: "bg-black dark:bg-white",
      color: "text-white dark:text-grayscale-900",
      arrow: {
        background: "before:bg-black dark:before:bg-white"
      }
    },
    accordion: {
      wrapper: "w-full flex flex-col",
      container: "w-full flex flex-col",
      item: {
        base: "",
        size: "text-sm",
        color: "text-gray-500 dark:text-gray-400",
        padding: "py-0",
        icon: "ms-auto transform transition-transform duration-200"
      },
      transition: {
        enterActiveClass:
          "overflow-hidden transition-[height] duration-200 ease-out",
        leaveActiveClass:
          "overflow-hidden transition-[height] duration-200 ease-out"
      },
      default: {
        openIcon: "i-heroicons-chevron-down-20-solid",
        closeIcon: "",
        class: "mb-1.5 w-full",
        variant: "soft"
      }
    },
    carousel: {
      indicators: {
        wrapper:
          "absolute flex items-center justify-center gap-3 lg:gap-4 bottom-6 inset-x-0",
        base: "rounded-none h-4 w-4 lg:w-5 lg:h-5",
        active: "bg-spring-green-500 dark:bg-spring-green-400",
        inactive: "bg-hawkes-blue-900 dark:bg-gray-800 mix-blend-overlay"
      }
    },
    selectMenu: {
      rounded: "rounded-none",
      option: {
        rounded: "rounded-none"
      }
    }
  }
});
