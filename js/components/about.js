export function about() {
  return `
    <section class="middle" id="about">
      <div class="section-intro">
        <span class="eyebrow">HAVEN CEBU</span>
        <h2>What is a Haven Game Jam?</h2>
        <p>
          It’s a social coding event where you make a video game with friends,
          learn new things, and enjoy free food.
        </p>
      </div>

      <div class="perk-grid" id="experience">
        <article class="wood-card">
          <h3>Learn & Build</h3>
          <div class="photo-pair">
            <img src="assets/images/projects-1.webp" alt="A game made at a past event" />
            <img src="assets/images/projects-3.webp" alt="Another game made at a past event" />
          </div>
          <p>Follow beginner workshops or create your own game at your own pace.</p>
        </article>

        <article class="wood-card offset-card">
          <h3>Make Friends</h3>
          <div class="photo-pair">
            <img src="assets/images/friends-1.webp" alt="Attendees hanging out" />
            <img src="assets/images/friends-2.webp" alt="Teens working together" />
          </div>
          <p>Meet other creative teens from Cebu and build something together.</p>
        </article>

        <article class="wood-card">
          <h3>Free Food & Prizes</h3>
          <div class="photo-pair">
            <img src="assets/images/food-1.webp" alt="Snacks and event merchandise" />
            <img src="assets/images/food-3.webp" alt="Attendees with prizes" />
          </div>
          <p>Stay fueled while you build, then celebrate the projects made during the jam.</p>
        </article>
      </div>

      <div class="pitch-area">
        <img
          class="pitch-mascot"
          src="assets/images/pitch/excited-daven.webp"
          alt=""
          aria-hidden="true"
        />

        <div class="pitch-content">
          <h2>Why Haven Cebu?</h2>
          <div class="bubble">
            This November, <mark>you can join a huge teen game jam</mark> right here in Cebu.
          </div>
          <div class="bubble bubble-right">
            No game development experience? <mark>No problem.</mark>
            Workshops and mentors will help you get started.
            <br>Follow our pages to stay updated for workshops!!!
          </div>
          <div class="bubble">
            Come to <mark>learn something new, meet new friends,</mark>
            and leave with a game you helped make.
          </div>
        </div>
      </div>
    </section>
  `;
}
