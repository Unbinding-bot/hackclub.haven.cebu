import { navigation } from "./components/navigation.js";
import { hero } from "./components/hero.js";
import { about } from "./components/about.js";
import { events } from "./components/events.js";
import { faq } from "./components/faq.js";
import { footer } from "./components/footer.js";

import { setupNavigation } from "./ui/navigation.js";
import { setupRegistration } from "./ui/registration.js";
import { createToast } from "./ui/toast.js";

const app = document.getElementById("app");

app.innerHTML = `
  ${navigation()}
  <main>
    ${hero()}
    ${about()}
    ${events()}
    ${faq()}
  </main>
  ${footer()}
`;

const toast = createToast();
setupNavigation();
setupRegistration(toast);
