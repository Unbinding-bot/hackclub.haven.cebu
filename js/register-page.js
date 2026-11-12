import { navigation } from "./components/navigation.js";
import { registerSection } from "./components/register.js";
import { footer } from "./components/footer.js";

document.getElementById("app").innerHTML = `
  ${navigation()}
  <main>${registerSection()}</main>
  ${footer()}
`;
