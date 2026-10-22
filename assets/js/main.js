/* IMO Core website scripts */
(function () {
  // Contact details used across the site. Update these in one place.
  var SITE = {
    email: "nyuad.imo@nyu.edu",
    phone: "",                         // optional, e.g. "+971 2 628 0000"
    location: "Core Technology Platforms, New York University Abu Dhabi, Saadiyat Island, Abu Dhabi, UAE"
  };

  // Fill in contact placeholders
  document.querySelectorAll("[data-site-email]").forEach(function (el) {
    el.textContent = SITE.email;
    if (el.tagName === "A") el.href = "mailto:" + SITE.email;
  });
  document.querySelectorAll("[data-site-email-link]").forEach(function (el) {
    var q = el.getAttribute("href").replace(/^mailto:[^?]*/, "");
    el.href = "mailto:" + SITE.email + q;
  });
  document.querySelectorAll("[data-site-location]").forEach(function (el) {
    el.textContent = SITE.location;
  });
  document.querySelectorAll("[data-site-phone]").forEach(function (el) {
    if (SITE.phone) { el.textContent = SITE.phone; } else { el.closest("p") && (el.closest("p").style.display = "none"); }
  });

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Project submission form: composes an email to the core (no backend required).
  // To route submissions to a form service instead, set the form's action attribute.
  var form = document.getElementById("project-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      if (form.getAttribute("action")) return; // a form service handles it
      e.preventDefault();
      var f = function (id) { var el = form.querySelector("#" + id); return el ? el.value.trim() : ""; };
      var lines = [
        "New project consultation request (IMO Core website)",
        "",
        "Name: " + f("name"),
        "Email: " + f("email"),
        "Department / Institution: " + f("affiliation"),
        "PI / Lab: " + f("pi"),
        "",
        "Research question:",
        f("question"),
        "",
        "Sample type: " + f("sample_type"),
        "Number of samples: " + f("n_samples"),
        "Desired analysis: " + f("analysis"),
        "Timeline: " + f("timeline"),
        "",
        "Expected outcome:",
        f("outcome"),
        "",
        "Additional notes:",
        f("notes")
      ];
      var subject = "Project consultation request: " + (f("analysis") || "IMO Core");
      window.location.href = "mailto:" + SITE.email +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));
      var status = document.getElementById("form-status");
      if (status) { status.style.display = "block"; }
    });
  }

  // Current year in footer
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
