// Haven Cebu – Registration Handler
// Paste this entire file into your Google Apps Script project.
// Deploy as a Web App (execute as: Me, access: Anyone).

var SHEET_NAME = "Registrations";

// Column headers — order must match the appendRow() call below.
var HEADERS = [
  "Timestamp",
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "T-Shirt Size",
  "Dietary Restrictions",
  "Emergency Contact Name",
  "Emergency Contact Relationship",
  "Emergency Contact Phone",
];

// ─── Entry points ────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    var params = e.parameter;
    var sheet = getOrCreateSheet_();

    sheet.appendRow([
      new Date(),                            // Timestamp
      params.firstName             || "",    // First Name
      params.lastName              || "",    // Last Name
      params.email                 || "",    // Email
      params.phone                 || "",    // Phone
      params.tshirtSize            || "",    // T-Shirt Size
      params.dietaryRestrictions   || "None",// Dietary Restrictions
      params.emergencyName         || "",    // Emergency Contact Name
      params.emergencyRelationship || "",    // Emergency Contact Relationship
      params.emergencyPhone        || "",    // Emergency Contact Phone
    ]);

    sendConfirmationEmail_(params);

    return jsonResponse_({ status: "ok" });
  } catch (err) {
    Logger.log(err);
    return jsonResponse_({ status: "error", message: err.message });
  }
}

// GET handler — receives form data as query params from the website,
// and also serves as a liveness check when called with no params.
function doGet(e) {
  var params = (e && e.parameter) ? e.parameter : {};

  // If no data fields present, just return a liveness check
  if (!params.firstName && !params.email) {
    return ContentService
      .createTextOutput("Haven Cebu registration endpoint is live.")
      .setMimeType(ContentService.MimeType.TEXT);
  }

  try {
    var sheet = getOrCreateSheet_();

    sheet.appendRow([
      new Date(),
      params.firstName             || "",
      params.lastName              || "",
      params.email                 || "",
      params.phone                 || "",
      params.tshirtSize            || "",
      params.dietaryRestrictions   || "None",
      params.emergencyName         || "",
      params.emergencyRelationship || "",
      params.emergencyPhone        || "",
    ]);

    sendConfirmationEmail_(params);

    return jsonResponse_({ status: "ok" });
  } catch (err) {
    Logger.log(err);
    return jsonResponse_({ status: "error", message: err.message });
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Returns the target sheet, creating it with headers if it doesn't exist yet.
 * Also inserts headers if the sheet exists but row 1 is empty (self-healing).
 */
function getOrCreateSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  // Insert headers if row 1 col 1 is empty
  if (!sheet.getRange(1, 1).getValue()) {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length)
         .setFontWeight("bold")
         .setBackground("#b8c220");
  }

  return sheet;
}

/**
 * Sends a confirmation email to the registrant.
 */
function sendConfirmationEmail_(params) {
  var to = params.email;
  if (!to) return;

  var firstName = params.firstName || "there";

  var subject = "You're registered for Haven Cebu! 🎉";

  var body = [
    "Hey " + firstName + ",",
    "",
    "You're officially signed up for Haven Cebu (November 14–15, 2026)!",
    "",
    "Here's a summary of what you submitted:",
    "  • Name: " + params.firstName + " " + params.lastName,
    "  • T-shirt size: " + (params.tshirtSize || "—"),
    "  • Dietary restrictions: " + (params.dietaryRestrictions || "None"),
    "  • Emergency contact: " + (params.emergencyName || "—") + " (" + (params.emergencyRelationship || "—") + ") — " + (params.emergencyPhone || "—"),
    "",
    "If any of the above is wrong, just reply to this email and we'll sort it out.",
    "",
    "One more step: if you haven't already, complete your official Hack Club Haven registration at:",
    "https://forms.hackclub.com/haven-signup?event=reckcxvFOWyevRNH0",
    "",
    "See you in Cebu!",
    "— The Haven Cebu Team",
  ].join("\n");

  GmailApp.sendEmail(to, subject, body, {
    name: "Haven Cebu",
    // replyTo: "your-company-email@example.com",  // ← uncomment and fill in
  });
}

/**
 * Wraps a plain object as a JSON ContentService response.
 */
function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
