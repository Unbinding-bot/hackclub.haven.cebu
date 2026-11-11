import { SITE_CONFIG } from "../config.js";

export function registerSection() {
  return `
    <section class="register" id="register">
      <div class="signup-shell">
        <div class="signup-banner">
          <img src="assets/images/logo.png" alt="Hack Club Haven" />
        </div>

        <div class="signup-card">
          <span class="eyebrow">SEE YOU IN CEBU</span>
          <h2>Sign up for Haven Cebu!</h2>
          <p>Registration is handled directly through the official Hack Club Haven form. Click below to get started — it only takes a couple of minutes!</p>

          <a class="submit-signup" href="${SITE_CONFIG.hackclubFormUrl}">Register on Hack Club Haven &nbsp;→</a>
          <p class="form-note">You'll be taken to forms.hackclub.com to complete your signup.</p>
        </div>
      </div>
    </section>
  `;
}
