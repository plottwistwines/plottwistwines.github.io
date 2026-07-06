// Plot Twist Wines — interactions

(function () {
  "use strict";

  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navMobile = document.getElementById("navMobile");

  // Sticky nav styling on scroll
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add("nav--scrolled");
    else nav.classList.remove("nav--scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  const closeMenu = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navMobile.classList.remove("open");
    nav.classList.remove("nav--open");
  };
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    navMobile.classList.toggle("open", !open);
    nav.classList.toggle("nav--open", !open);
  });
  navMobile.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  // Scroll reveal
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || (i % 4) * 90;
            setTimeout(() => el.classList.add("is-visible"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Reservation form (front-end only)
  const form = document.getElementById("reserveForm");
  const msg = document.getElementById("reserveMsg");
  if (form) {
    const RESERVATION_EMAIL = "hello@plottwistwines.com";
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const date = form.querySelector('[name="date"]').value;
      const time = form.querySelector('[name="time"]').value;
      const guests = form.querySelector('[name="guests"]').value;

      if (!name || !email || !date || !time) {
        msg.textContent = "Please add your name, email, date, and time so we can confirm.";
        msg.style.color = "var(--wine-soft)";
        return;
      }

      const when = `${date} ${time}`.trim();
      const subject = `[Reservation Request] Plot Twist Wines — ${when}`;
      const body = [
        "Reservation Request — Plot Twist Wines",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Date: ${date}`,
        `Time: ${time}`,
        `Party size: ${guests || "Not specified"}`,
      ].join("\n");

      const mailto = `mailto:${RESERVATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      msg.textContent = `Thanks, ${name.split(" ")[0]} — your email app should open to send the request.`;
      msg.style.color = "var(--wine)";
    });
  }

  // Notify-me capture (mailto handoff)
  const notifyForm = document.getElementById("notifyForm");
  const notifyMsg = document.getElementById("notifyMsg");
  if (notifyForm) {
    notifyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = notifyForm.querySelector('[name="notifyEmail"]').value.trim();
      if (!value || !/.+@.+\..+/.test(value)) {
        notifyMsg.textContent = "Please enter a valid email address.";
        return;
      }
      const subject = "[Notify Me] Plot Twist Wines";
      const body = `Please add me to the opening list.\n\nEmail: ${value}`;
      window.location.href = `mailto:hello@plottwistwines.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      notifyMsg.textContent = "Thanks! Your email app should open to confirm.";
      notifyForm.reset();
    });
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
