export const isPWA = (): boolean => {
  let isInstalled: boolean = false;
  let standalone;

  if ("standalone" in window.navigator) {
    standalone = window.navigator.standalone;
  }

  if (
    window.matchMedia("(display-mode: standalone)").matches ||
    standalone === true
  ) {
    // User is currently navigating on the PWA so yes it's installed
    isInstalled = true;
  } else {
    // User is navigating in browser
    window.addEventListener("beforeinstallprompt", () => {
      isInstalled = false;
      // User can get an installation prompt meaning the app is not installed
    });
    window.addEventListener("onappinstalled", () => {
      isInstalled = true;
    });
  }

  return isInstalled;
};
