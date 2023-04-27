import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import NotificationsSystem, { NotificationsProvider } from "reapop";
import { atalhoTheme, useNotifications } from "reapop";
import { setUpNotifications } from "reapop";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationsProvider>
      <ATopLevelComponent />
      <Component {...pageProps} />
    </NotificationsProvider>
  );
}

const ATopLevelComponent = () => {
  // 1. Retrieve the notifications to display, and the function used to dismiss a notification.
  const { notifications, dismissNotification } = useNotifications();
  return (
    <>
      <NotificationsSystem
        // 2. Pass the notifications you want Reapop to display.
        notifications={notifications}
        // 3. Pass the function used to dismiss a notification.
        dismissNotification={(id) => dismissNotification(id)}
        // 4. Pass a builtIn theme or a custom theme.
        theme={atalhoTheme}
      />
    </>
  );
};

// run this function when your application starts before creating any notifications
setUpNotifications({
  defaultProps: {
    position: "top-right",
    dismissible: false,
    allowHTML: true,
  },
});
