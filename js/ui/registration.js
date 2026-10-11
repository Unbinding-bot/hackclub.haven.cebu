import { SITE_CONFIG } from "../config.js";
import { showToast } from "./toast.js";

export function setupRegistration(toast) {
  const registrationForms = document.querySelectorAll("[data-registration-form]");

  // Reset button state when user navigates back (browser restores page from cache)
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) {
      registrationForms.forEach((form) => {
        const btn = form.querySelector(".submit-signup");
        if (btn) {
          btn.disabled = false;
          btn.textContent = "Next \u00a0→";
          form.querySelectorAll(".btn-spinner").forEach((s) => s.remove());
        }
      });
    }
  });

  registrationForms.forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const email = form.querySelector('input[type="email"]');
      if (!email.checkValidity()) {
        email.reportValidity();
        return;
      }

      // Show loading state on the button
      const submitBtn = form.querySelector(".submit-signup");
      const originalText = submitBtn.textContent;

      const spinner = document.createElement("span");
      spinner.className = "btn-spinner";
      spinner.setAttribute("aria-hidden", "true");

      const setLoading = (on, label = "Submitting…") => {
        submitBtn.disabled = on;
        submitBtn.textContent = on ? label : originalText;
        if (on) {
          submitBtn.prepend(spinner);
        } else {
          spinner.remove();
        }
      };
      setLoading(true);

      // Collect checked allergies into a comma-separated string
      const checkedAllergies = [...form.querySelectorAll('input[name="allergy"]:checked')]
        .map((cb) => cb.value);
      const allergyOther = form.querySelector('input[name="allergyOther"]')?.value.trim();
      if (allergyOther) checkedAllergies.push(allergyOther);
      const allergySummary = checkedAllergies.join(", ") || "None";

      // Build the payload for our Google Sheet
      const payload = new URLSearchParams({
        firstName:             form.querySelector('[name="firstName"]').value.trim(),
        lastName:              form.querySelector('[name="lastName"]').value.trim(),
        email:                 form.querySelector('[name="email"]').value.trim(),
        phone:                 form.querySelector('[name="phone"]').value.trim(),
        tshirtSize:            form.querySelector('[name="tshirtSize"]').value,
        dietaryRestrictions:   allergySummary,
        emergencyName:         form.querySelector('[name="emergencyName"]').value.trim(),
        emergencyRelationship: form.querySelector('[name="emergencyRelationship"]').value,
        emergencyPhone:        form.querySelector('[name="emergencyPhone"]').value.trim(),
      });

      // Submit to our Google Apps Script endpoint.
      // Uses an image ping — sidesteps CORS/redirect issues that affect fetch with GAS URLs.
      if (SITE_CONFIG.registrationEndpoint) {
        const ok = await new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = `${SITE_CONFIG.registrationEndpoint}?${payload.toString()}`;
        });

        // GAS returns JSON (not an image), so onerror always fires — that's expected.
        // We treat both as success since no-cors means we can't read the real response.
        // Only a network-level failure (no internet) would mean the request didn't go through.
      }

      // Build pre-filled URL for the Hack Club Haven form.
      // Param keys come from the form's Fillout JSON schema (urlParams references).
      const hcParams = new URLSearchParams({
        first_name: form.querySelector('[name="firstName"]').value.trim(),
        last_name:  form.querySelector('[name="lastName"]').value.trim(),
        email:      form.querySelector('[name="email"]').value.trim(),
      });

      const hackclubUrl = `${SITE_CONFIG.hackclubFormUrl}&${hcParams.toString()}`;

      submitBtn.textContent = "Redirecting…";
      submitBtn.prepend(spinner);
      showToast(toast, "You're registered! Taking you to the Hack Club Haven form now…");

      // Small delay so the toast is readable before navigating
      setTimeout(() => {
        window.location.href = hackclubUrl;
      }, 2000);
    });
  });
}
