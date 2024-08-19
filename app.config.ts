export default defineAppConfig({
  ui: {
    primary: "green",
    gray: "grayscale",
    toggle: {
      default: {
        color: "green",
        variant: "green"
      }
    },
    icons: {
      dynamic: true
    },
    notification: {
      rounded: "rounded-none",
      container: "border border-grayscale-900"
    },
    notifications: {
      rounded: "rounded-none"
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
        active: "bg-green-500 dark:bg-green-400",
        inactive: "bg-hawkes-blue-900 dark:bg-gray-800 mix-blend-overlay"
      }
    },
    selectMenu: {
      rounded: "rounded-none",
      option: {
        rounded: "rounded-none"
      }
    },
    modal: {
      wrapper: "relative z-[4000]",
      width: "w-full lg:max-w-[64vw] sm:max-w-lg",
      shadow: "shadow-none",
      rounded: "rounded-none",
      background: "border border-grayscale-800 dark:border-grayscale-200"
    },
    popover: {
      rounded: "rounded-none"
    }
  }
});
