import { SITE_CONFIG } from "../config.js";

export function hero() {
  return `
    <section class="hero rule-frame">
      <div class="hero-copy">
        <div class="hero-lockup">
          <img class="hero-logo" src="assets/images/logo.png" alt="Hack Club Haven" />
        </div>

        <p class="hero-tagline">24-hour game jam for teens</p>
        <p class="hero-date">
          ${SITE_CONFIG.date} <span>•</span> ${SITE_CONFIG.location}
        </p>

        <div class="hero-actions">
          <a class="primary-btn" data-register href="register.html">Register for Haven Cebu</a>
          <a class="text-link" href="#about" onclick="event.preventDefault(); const el = document.getElementById('about'); window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' });">See what happens at Haven ↓</a>
        </div>
      </div>

      <aside class="city-card" aria-label="Haven Cebu event card">
        <div class="city-card-label">EVENT VENUE</div>
        <h2>iAcademy Cebu</h2>
        <p>
          Haven Cebu will be held at iAcademy Cebu, where teens can build games,
          meet new friends, and spend a full day creating together.
        </p>

        <img
          class="venue-image"
          src="assets/images/iAcademy_Venue.png"
          alt="iAcademy Cebu venue"
        />

        <div class="city-facts">
          <div><strong>${SITE_CONFIG.attendeeTarget}</strong><span>teen builders</span></div>
          <div><strong>24h</strong><span>of building</span></div>
          <div><strong>FREE</strong><span>to attend</span></div>
        </div>
      </aside>

      <img class="hero-hedgehog" src="assets/images/hedgehog.webp" alt="" aria-hidden="true" />
      <img class="hero-foreground" src="assets/images/hero-foreground.webp" alt="" aria-hidden="true" />
    </section>
  `;
}
