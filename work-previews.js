/* Progressive enhancement: the original cards work without these scripts. */
(() => {
  "use strict";

  const configs = window.MIKI_WORK_PREVIEWS || {};
  const number = (value, fallback, min, max) =>
    typeof value === "number" && Number.isFinite(value)
      ? Math.min(max, Math.max(min, value)) : fallback;

  function loadPreview(entry, config) {
    const source = typeof entry === "string" ? { src: entry } : entry;
    if (!source || typeof source.src !== "string" || !source.src.trim()) {
      return Promise.resolve(null);
    }
    return new Promise(resolve => {
      const img = new Image();
      let timer;
      const finish = valid => {
        clearTimeout(timer);
        img.onload = img.onerror = null;
        resolve(valid ? img : null);
      };
      img.alt = "";
      img.draggable = false;
      img.decoding = "async";
      img.style.objectFit = source.fit === "contain" ? "contain"
        : source.fit === "cover" ? "cover"
        : config.imageFit === "contain" ? "contain" : "cover";
      img.style.objectPosition = source.position || config.imagePosition || "50% 50%";
      img.onload = () => finish(img.naturalWidth > 0);
      img.onerror = () => finish(false);
      timer = setTimeout(() => finish(false), 10000);
      img.src = source.src;
    });
  }

  async function mount(card) {
    const key = card.dataset.workPreview;
    const config = configs[key];
    if (!config || card.closest("[hidden]") || !Array.isArray(config.images) || !config.images.length) return;

    // Display successful images immediately; a slow image must not block the card.
    // Keep slots in config order so arrival order never changes the final pattern.
    const loaded = new Array(config.images.length).fill(null);

    const width = number(config.tileWidth, 160, 48, 1200);
    const height = number(config.tileHeight, 135, 48, 1200);
    const gap = number(config.tileGap, 4, 0, 32);
    const preview = document.createElement("div");
    preview.className = `work-card-preview work-card-preview--${key}`;
    preview.setAttribute("aria-hidden", "true");
    preview.setAttribute("inert", "");

    const tiles = document.createElement("div");
    tiles.className = `work-card-tiles work-card-tiles--${key}`;
    const overlay = document.createElement("div");
    overlay.className = `work-card-overlay work-card-overlay--${key}`;
    preview.append(tiles, overlay);

    card.style.setProperty("--work-overlay-opacity", number(config.overlayOpacity, .82, 0, 1));
    card.style.setProperty("--work-image-opacity", number(config.imageOpacity, 1, 0, 1));
    card.style.setProperty("--work-tile-height", `${height}px`);
    card.style.setProperty("--work-tile-gap", `${gap}px`);

    let mounted = false;
    let previousCount = 0;
    let previousImageCount = 0;
    function fill() {
      const images = loaded.filter(Boolean);
      if (!images.length) return;
      const columns = Math.max(1, Math.ceil((preview.clientWidth + gap) / (width + gap)));
      const rows = Math.max(1, Math.ceil((preview.clientHeight + gap) / (height + gap)));
      const count = columns * rows;
      tiles.style.setProperty("--work-tile-columns", columns);
      if (count === previousCount && images.length === previousImageCount) return;
      previousCount = count;
      previousImageCount = images.length;
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < count; i++) {
        const sourceIndex = i % images.length;
        const tile = images[sourceIndex].cloneNode();
        tile.className = `work-card-tile work-card-tile--${key}-${sourceIndex + 1}`;
        fragment.append(tile);
      }
      tiles.replaceChildren(fragment);
    }

    await Promise.all(config.images.map(async (entry, index) => {
      const img = await loadPreview(entry, config);
      if (!img) {
        console.warn(`Work previews (${key}): image ${index + 1} could not load. Check tiledBackground.images.`);
        return;
      }
      loaded[index] = img;
      if (!mounted) {
        mounted = true;
        card.prepend(preview);
        if ("ResizeObserver" in window) new ResizeObserver(fill).observe(card);
        else window.addEventListener("resize", fill, { passive: true });
      }
      fill();
      card.classList.add("has-work-previews");
    }));
  }

  function start(card) {
    mount(card).catch(error => {
      card.querySelector(".work-card-preview")?.remove();
      card.classList.remove("has-work-previews");
      console.warn(`Work previews (${card.dataset.workPreview}): could not render tiles.`, error);
    });
  }

  // Start near the viewport, with immediate loading on older browsers.
  // One shared observer is released once every eligible card has started.
  const pending = new Set();
  const observer = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || !pending.has(entry.target)) return;
      pending.delete(entry.target);
      observer.unobserve(entry.target);
      start(entry.target);
    });
    if (!pending.size) observer.disconnect();
  }, { rootMargin: "400px 0px" }) : null;

  document.querySelectorAll(".work-card[data-work-preview]").forEach(card => {
    const config = configs[card.dataset.workPreview];
    if (card.closest("[hidden]") || !Array.isArray(config?.images) || !config.images.length) return;
    if (observer && config.loading !== "eager") {
      pending.add(card);
      observer.observe(card);
    } else start(card);
  });
  if (observer && !pending.size) observer.disconnect();
})();
