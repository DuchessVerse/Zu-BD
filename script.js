/**
 * script.js — small behaviors for Zu’s birthday page
 * ---------------------------------------------------
 * This file does two things only (on purpose — easy to read):
 * 1. Puts the current year in the footer so the page never looks “stale.”
 * 2. Shows the hidden “extra note” when the visitor clicks the button.
 *
 * How the browser runs this:
 * - The HTML loads from top to bottom.
 * - Our <script> tag is at the bottom of <body>, so the elements exist
 *   before this code runs. That’s why we can safely grab them by id.
 */

// ---------------------------------------------------------------------------
// Wait until the HTML document is fully parsed
// ---------------------------------------------------------------------------
/*
  DOMContentLoaded fires when the structure (DOM) is ready.
  We wrap our code in a listener so we don’t run too early.
*/
document.addEventListener("DOMContentLoaded", function () {
  // -------------------------------------------------------------------------
  // Task 1: Footer year
  // -------------------------------------------------------------------------
  /*
    document.getElementById returns ONE element with that id, or null if missing.
    We bail out early (guard clause) if the element isn’t found — avoids crashes.
  */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    /*
      new Date() is “right now.” getFullYear() returns a four-digit year (number).
      textContent sets plain text (safer than innerHTML when you only need text).
    */
    yearEl.textContent = new Date().getFullYear();
  }

  // -------------------------------------------------------------------------
  // Task 2: Reveal the surprise panel
  // -------------------------------------------------------------------------
  var btn = document.getElementById("surprise-btn");
  var panel = document.getElementById("surprise-panel");

  /*
    If either piece is missing (typo in HTML), do nothing instead of throwing.
    This is defensive coding for a tiny static site.
  */
  if (!btn || !panel) {
    return;
  }

  /*
    Click handler: an anonymous function runs each time the user clicks.
    We use a named concept in comments, but keep the function small.
  */
  btn.addEventListener("click", function () {
    /*
      HTML’s hidden attribute is a boolean attribute.
      - panel.hidden = false → element becomes visible (browser removes display:none behavior).
      - We also update the button so repeat clicks don’t confuse people.
    */
    panel.hidden = false;
    btn.textContent = "You’ve opened it — enjoy the day";
    btn.disabled = true;

    /*
      Optional polish: move keyboard focus to the revealed content so screen
      reader users land on the new text. Not all browsers need this for static
      text, but it’s a kind gesture when content “appears.”
    */
    panel.setAttribute("tabindex", "-1");
    panel.focus();
  });
});
