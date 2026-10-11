import { navigation } from "./components/navigation.js";
import { registerSection } from "./components/register.js";
import { footer } from "./components/footer.js";
import { setupRegistration } from "./ui/registration.js";
import { createToast } from "./ui/toast.js";

document.getElementById("app").innerHTML = `
  ${navigation()}
  <main>${registerSection()}</main>
  ${footer()}
`;

const toast = createToast();
setupRegistration(toast);
