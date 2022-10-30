import * as React from "react";
import RootNavigation from "./navigation";
import * as Notifications from "expo-notifications";

export default function App() {
  Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
  return <RootNavigation/>;
}
