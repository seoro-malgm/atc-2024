export default defineAppConfig({
  ui: {
    primary: "spring-green",
    gray: "gray",
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
      color: "text-white dark:text-black",
      arrow: {
        background: "before:bg-black dark:before:bg-white"
      }
    }
  }
});
