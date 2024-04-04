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
    carousel: {
      indicators: {
        wrapper:
          "absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",
        base: "rounded-none h-3 w-3 lg:w-6 lg:h-6",
        active: "bg-spring-green-500 dark:bg-spring-green-400",
        inactive: "bg-hawkes-blue-900 dark:bg-gray-800 mix-blend-overlay"
      }
    }
  }
});
