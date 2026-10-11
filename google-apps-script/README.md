# Haven Cebu – Google Apps Script Setup

This script receives registration form submissions from the website and writes them to a Google Sheet, then sends a confirmation email to the registrant.

---

## Prerequisites

- A Google account using your **company email**
- A Google Sheet where registrations will be saved

---

## Setup Steps

### 1. Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. Name it something like `Haven Cebu Registrations`.
3. Leave it blank — the script will create the headers automatically on first submission.

### 2. Create the Apps Script project

1. Inside the spreadsheet, click **Extensions → Apps Script**.
2. Delete any existing code in the editor.
3. Copy the entire contents of `Code.gs` and paste it in.
4. Click **Save** (the floppy disk icon). Name the project `Haven Cebu Registration`.

### 3. (Optional) Set your reply-to email

In `Code.gs`, find this line near the bottom of `sendConfirmationEmail_`:

```js
// replyTo: "your-company-email@example.com",  // ← uncomment and fill in
```

Uncomment it and replace the placeholder with your company email so replies from registrants land in the right inbox.

### 4. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the fields:
   - **Description:** `Haven Cebu Registration Handler`
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
4. Click **Deploy**.
5. Google will ask you to authorize the script — click through and approve (it needs Sheets + Gmail access).
6. Copy the **Web app URL** that appears at the end. It looks like:
   ```
   https://script.google.com/macros/s/XXXXXXXX/exec
   ```

### 5. Update the website config

Open `js/config.js` in the website repo and replace the existing endpoint URL with your new one:

```js
registrationEndpoint: "https://script.google.com/macros/s/XXXXXXXX/exec",
```

---

## Re-deploying after changes

If you edit `Code.gs` later, you **must** create a new deployment for changes to take effect:

1. Click **Deploy → Manage deployments**.
2. Click the pencil (edit) icon on your existing deployment.
3. Change the version to **"New version"**.
4. Click **Deploy**.

The URL stays the same — no need to update `config.js` again.

---

## What the script does

| Action | Details |
|---|---|
| Receives POST | From the registration form on the website |
| Writes to Sheet | Appends a new row with all form fields + timestamp |
| Creates sheet if missing | Auto-creates a "Registrations" tab with bold headers on first run |
| Sends confirmation email | Emails the registrant from your Google account |
| GET request | Returns a plain text message — useful for checking the deployment is live |

---

## Troubleshooting

- **No data showing up in the sheet** — make sure you deployed with "Execute as: Me" and authorized the script.
- **Emails not sending** — GmailApp uses your account's Gmail quota (100 emails/day for regular accounts, 1,500/day for Google Workspace). Check the Apps Script logs via **Executions** in the left sidebar.
- **Need to test locally** — open the Apps Script editor, run `doGet` manually, and check the **Executions** log for errors.
