import { SITE_CONFIG } from "../config.js";

export function footer() {
  return `
    <footer>
      <img
        class="footer-bushes"
        src="assets/images/footer/bottom-bushes.webp"
        alt=""
        aria-hidden="true"
      />

      <div class="footer-content">
        <img src="assets/images/logo.png" alt="Hack Club Haven" />
        <div>
          <strong>${SITE_CONFIG.eventName}</strong>
          <p>${SITE_CONFIG.date} • ${SITE_CONFIG.location}</p>
          <p>A local Haven game jam for teen builders in Cebu.</p>
        </div>
      </div>
    </footer>
  `;
}
