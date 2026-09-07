// Minimal lightbox for gallery grids. Progressive enhancement: with JS off,
// each thumbnail is still a plain link to the full-size image.
(function () {
  var grids = document.querySelectorAll("[data-lightbox]");
  if (!grids.length) return;

  var items = [];
  grids.forEach(function (grid) {
    grid.querySelectorAll(".gallery-item").forEach(function (a) { items.push(a); });
  });
  if (!items.length) return;

  var box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.innerHTML =
    '<button class="lightbox-prev" aria-label="Previous">&#8249;</button>' +
    '<img alt="">' +
    '<button class="lightbox-next" aria-label="Next">&#8250;</button>' +
    '<button class="lightbox-close" aria-label="Close">&times;</button>' +
    '<div class="lightbox-caption"></div>';
  document.body.appendChild(box);

  var img = box.querySelector("img");
  var caption = box.querySelector(".lightbox-caption");
  var index = 0;
  var lastFocused = null;

  function show(i) {
    index = (i + items.length) % items.length;
    var a = items[index];
    img.src = a.getAttribute("href");
    img.alt = a.querySelector("img") ? a.querySelector("img").alt : "";
    caption.textContent = a.getAttribute("data-caption") || "";
  }

  function open(i) {
    lastFocused = document.activeElement;
    show(i);
    box.classList.add("is-open");
    document.body.style.overflow = "hidden";
    box.querySelector(".lightbox-close").focus();
  }

  function close() {
    box.classList.remove("is-open");
    document.body.style.overflow = "";
    img.src = "";
    if (lastFocused) lastFocused.focus();
  }

  items.forEach(function (a, i) {
    a.addEventListener("click", function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      open(i);
    });
  });

  box.querySelector(".lightbox-close").addEventListener("click", close);
  box.querySelector(".lightbox-prev").addEventListener("click", function () { show(index - 1); });
  box.querySelector(".lightbox-next").addEventListener("click", function () { show(index + 1); });
  box.addEventListener("click", function (e) { if (e.target === box) close(); });

  document.addEventListener("keydown", function (e) {
    if (!box.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(index - 1);
    else if (e.key === "ArrowRight") show(index + 1);
  });
})();
