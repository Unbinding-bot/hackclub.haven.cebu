export function registerSection() {
  return `
    <section class="register" id="register">
      <div class="signup-shell">
        <div class="signup-banner">
          <img src="assets/images/logo.png" alt="Hack Club Haven" />
        </div>

        <form class="signup-card" data-registration-form>
          <span class="eyebrow">SEE YOU IN CEBU</span>
          <h2>Sign up for Haven Cebu!</h2>
          <p>Hey! Before heading to the official Hack Club Haven registration, we need a few details specific to our Cebu event. This only takes a minute.</p>
          <p>After you hit <strong>Next</strong>, you'll be taken to the Hack Club Haven form to complete your registration, and most fields will already be filled in for you!</p>

          <div class="form-divider"></div>

          <div class="form-grid">
            <label>First name *<input name="firstName" autocomplete="given-name" placeholder="Jolly" required /></label>
            <label>Last name *<input name="lastName" autocomplete="family-name" placeholder="Wang" required /></label>
            <label class="full-field">Email *<input name="email" type="email" autocomplete="email" placeholder="you@example.com" required /></label>
            <label class="full-field">Phone number *<input name="phone" type="tel" autocomplete="tel" placeholder="+63 912 345 6789" pattern="[\+]?[\d\s\-\(\)]{7,20}" title="Please enter a valid phone number (e.g. +63 912 345 6789)" required /></label>
            <label class="full-field">T-shirt size *
              <select name="tshirtSize" required>
                <option value="" selected disabled>Select a size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </label>
          </div>

          <div class="form-divider"></div>

          <fieldset class="allergy-fieldset">
            <legend>Dietary restrictions / allergies</legend>
            <span class="field-help">Check any that apply, or type in your own. Leave blank if none.</span>
            <div class="allergy-checkboxes">
              <label class="checkbox-label"><input type="checkbox" name="allergy" value="Vegetarian" /> Vegetarian</label>
              <label class="checkbox-label"><input type="checkbox" name="allergy" value="Vegan" /> Vegan</label>
              <label class="checkbox-label"><input type="checkbox" name="allergy" value="Halal" /> Halal</label>
              <label class="checkbox-label"><input type="checkbox" name="allergy" value="Gluten-free" /> Gluten-free</label>
              <label class="checkbox-label"><input type="checkbox" name="allergy" value="Nut allergy" /> Nut allergy</label>
              <label class="checkbox-label"><input type="checkbox" name="allergy" value="Lactose intolerant" /> Lactose intolerant</label>
              <label class="checkbox-label"><input type="checkbox" name="allergy" value="Seafood allergy" /> Seafood allergy</label>
            </div>
            <label class="other-allergy-label">Other (please specify)
              <input name="allergyOther" type="text" placeholder="e.g. soy, eggs…" autocomplete="off" />
            </label>
          </fieldset>

          <div class="form-divider"></div>

          <fieldset class="emergency-fieldset">
            <legend>Emergency contact *</legend>
            <span class="field-help">We only contact this person if there's an emergency during the event.</span>
            <div class="form-grid emergency-grid">
              <label class="full-field">Contact name *<input name="emergencyName" autocomplete="off" placeholder="Maria Santos" required /></label>
              <label>Relationship *
                <select name="emergencyRelationship" required>
                  <option value="" selected disabled>Select relationship</option>
                  <option>Mother</option>
                  <option>Father</option>
                  <option>Guardian</option>
                  <option>Other</option>
                </select>
              </label>
              <label>Contact number *<input name="emergencyPhone" type="tel" autocomplete="off" placeholder="+63 912 345 6789" pattern="[\+]?[\d\s\-\(\)]{7,20}" title="Please enter a valid phone number (e.g. +63 912 345 6789)" required /></label>
            </div>
          </fieldset>

          <div class="form-divider"></div>

          <div class="privacy-copy">
            <p>We need the above information to coordinate Haven Cebu safely. Here are our promises:</p>
            <ul>
              <li>This data will never be shared with third parties.</li>
              <li>We will never sell your data.</li>
              <li>Emergency contact details are only used during the event.</li>
            </ul>
          </div>

          <button class="submit-signup" type="submit">Next &nbsp;→</button>
          <p class="form-note">After clicking Next, you'll complete your registration on the official Hack Club Haven form.</p>
        </form>
      </div>
    </section>
  `;
}
