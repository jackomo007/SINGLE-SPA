import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import("@single-spa/welcome"),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@angel47/react-single",
  app: () => System.import("@angel47/react-single"),
  activeWhen: (location) => location.pathname === "/single",
});

registerApplication({
  name: "@angel47/react-many",
  app: () => System.import("@angel47/react-many"),
  activeWhen: ["/many"],
});

registerApplication({
  name: "@angel47/react-route",
  app: () => System.import("@angel47/react-route"),
  activeWhen: (location) => location.pathname === "/route",
});

registerApplication({
  name: "@angel47/react-header",
  app: () => System.import("@angel47/react-header"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
