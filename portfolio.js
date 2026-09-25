/* Apply the owner-edited config to the existing static page. No HTML injection. */
(() => {
  "use strict";
  const config = window.MIKI_PORTFOLIO;
  if (!config || typeof config !== "object") return;
  const root = document.documentElement;
  const object = value => value && typeof value === "object" && !Array.isArray(value) ? value : {};
  const entries = value => Object.entries(object(value));
  const slot = key => /^[a-z0-9-]+$/.test(key);
  const find = selector => document.querySelector(selector);
  const all = selector => document.querySelectorAll(selector);
  const get = path => path.split(".").reduce((value, key) => object(value)[key], config);
  const warn = message => console.warn(`Portfolio config: ${message}`);

  function text(element, value) {
    if (!element || typeof value !== "string") return;
    // Preserve numbered spans, decorative dots, arrows and their accessibility.
    const nodes = [...element.childNodes].filter(node => node.nodeType === 3);
    const target = nodes.find(node => node.textContent.trim()) || nodes[0];
    if (target) {
      const before = /^\s/.test(target.textContent) ? " " : "";
      const after = /\s$/.test(target.textContent) ? " " : "";
      target.textContent = `${before}${value}${after}`;
      nodes.filter(node => node !== target).forEach(node => node.remove());
    } else element.append(document.createTextNode(value));
  }

  function css(element, property, value) {
    if (!element || typeof value !== "string" || !value.trim()) return;
    if (window.CSS && !CSS.supports(property, value)) {
      warn(`invalid ${property}: ${value}`);
      return;
    }
    element.style.setProperty(property, value);
  }

  function variable(element, name, value, property = "width") {
    if (!element || typeof value !== "string" || !value.trim()) return;
    if (window.CSS && !CSS.supports(property, value)) {
      warn(`invalid ${name}: ${value}`);
      return;
    }
    element.style.setProperty(name, value);
  }

  function numeric(element, name, value, unit, min, max) {
    if (element && typeof value === "number" && Number.isFinite(value)) {
      element.style.setProperty(name, `${Math.min(max, Math.max(min, value))}${unit}`);
    }
  }

  function url(value, image = false) {
    if (typeof value !== "string") return null;
    const clean = value.trim();
    if (!clean) return "";
    if (/[\u0000-\u0020\u007f]/.test(clean.replace(/ /g, ""))) return null;
    const scheme = clean.match(/^([a-z][a-z0-9+.-]*):/i)?.[1].toLowerCase();
    if (!scheme || ["http", "https"].includes(scheme)) return clean;
    if (!image && ["mailto", "tel"].includes(scheme)) return clean;
    if (image && /^data:image\/(png|jpe?g|webp|gif|avif|svg\+xml)[;,]/i.test(clean)) return clean;
    warn(`unsupported ${image ? "image" : "link"} URL scheme`);
    return null;
  }

  function link(element, value, newTab) {
    if (!element || typeof value !== "string") return;
    const href = url(value);
    if (href === null) return;
    element.setAttribute("href", href || "#links-needed");
    if (newTab === true && href && !href.startsWith("#")) {
      element.setAttribute("target", "_blank");
      element.setAttribute("rel", "noopener noreferrer");
    } else {
      element.removeAttribute("target");
      element.removeAttribute("rel");
    }
  }

  const site = object(config.site);
  if (typeof site.title === "string") document.title = site.title;
  if (typeof site.description === "string") find('meta[name="description"]')?.setAttribute("content", site.description);
  if (typeof site.language === "string" && /^[a-z]{2,3}(-[a-z0-9]+)*$/i.test(site.language)) root.lang = site.language;
  if (typeof site.brandHomeLabel === "string") find(".link-brand-header")?.setAttribute("aria-label", site.brandHomeLabel);

  for (const [key, value] of entries(config.text)) {
    if (!slot(key)) continue;
    const element = find(`.copy-${key}`);
    if (key === "hero-title" && element && Array.isArray(value?.lines)) {
      const fragment = document.createDocumentFragment();
      const lines = value.lines.filter(line => typeof line === "string");
      lines.forEach((line, index) => {
        if (index) fragment.append(document.createElement("br"));
        fragment.append(document.createTextNode(line));
      });
      if (typeof value.accentLine === "string" && value.accentLine) {
        if (lines.length) fragment.append(document.createElement("br"));
        const accent = document.createElement("span");
        accent.textContent = value.accentLine;
        fragment.append(accent);
      }
      element.replaceChildren(fragment);
    } else text(element, value);
  }
  for (const [key, value] of entries(config.linkLabels)) if (slot(key)) text(find(`.link-${key}`), value);

  const destinations = {
    video: ["work-video"], soundcloud: ["work-soundcloud", "destination-soundcloud"],
    "music-portfolio": ["work-music-portfolio", "destination-music-portfolio"],
    deviantart: ["work-deviantart", "destination-deviantart"],
    codepen: ["work-codepen", "destination-codepen"], "junk-drawer": ["work-junk-drawer"],
    kofi: ["kofi"], "commission-details": ["commission-details"]
  };
  for (const [key, value] of entries(config.links?.destinations)) {
    const targets = Object.hasOwn(destinations, key) ? destinations[key] : [];
    for (const target of targets) link(find(`.link-${target}`), value, config.links.newTab);
  }
  for (const [key, value] of entries(config.links?.overrides)) {
    if (slot(key)) link(find(`.link-${key}`), value?.url, value?.newTab ?? config.links?.newTab);
  }

  for (const [key, image] of entries(config.images)) {
    if (!slot(key)) continue;
    const element = find(`.image-${key}`);
    if (!element) continue;
    const src = url(image?.src, true);
    if (src) element.setAttribute("src", src);
    for (const dimension of ["width", "height"]) {
      const value = image?.[dimension];
      if (value === null) element.removeAttribute(dimension);
      else if (Number.isInteger(value) && value > 0) element.setAttribute(dimension, value);
    }
    if (typeof image?.alt === "string") element.setAttribute("alt", image.alt);
    css(element, "object-fit", image?.fit);
    css(element, "object-position", image?.position);
    css(element, "mix-blend-mode", image?.blendMode);
  }

  for (const state of ["open", "closed"]) {
    all(`.commission-status-label--${state}`).forEach(element => text(element, config.commissions?.labels?.[state]));
  }
  for (const [key, badge] of entries(config.commissions?.categories)) {
    if (!slot(key)) continue;
    const element = find(`.commission-status--${key}`);
    if (!element) continue;
    if (["open", "closed"].includes(badge?.status)) element.dataset.status = badge.status;
    else if (badge?.status != null) warn(`${key} status must be "open" or "closed"`);
    const row = find(`.commission-row--${key}`);
    if (row && typeof badge?.visible === "boolean") row.hidden = !badge.visible;
    for (const [field, name, property] of [
      ["openFill", "--commission-open-fill", "background"], ["openDot", "--commission-open-dot", "color"],
      ["closedFill", "--commission-closed-fill", "background"], ["closedDot", "--commission-closed-dot", "color"]
    ]) variable(element, name, badge?.[field], property);
  }

  // Bridge the two separate card layers to the existing lightweight tile renderer.
  window.MIKI_WORK_PREVIEWS = {};
  let hiddenCards = false;
  for (const key of ["video", "sound", "visual", "code"]) {
    const card = find(`.work-card--${key}`);
    const settings = object(config.workCards?.[key]);
    if (!card) continue;
    if (typeof settings.visible === "boolean") card.hidden = !settings.visible;
    hiddenCards ||= card.hidden;
    text(card.querySelector(".card-number"), settings.number);
    numeric(card, "--work-card-tilt", settings.rotationDegrees, "deg", -30, 30);
    variable(card, "--work-card-min-height", settings.minHeight, "min-height");
    variable(card, "--work-card-mobile-min-height", settings.mobileMinHeight, "min-height");
    variable(card, "--work-card-padding", settings.padding, "padding");
    variable(card, "--work-card-radius", settings.borderRadius, "border-radius");
    variable(card, "--work-card-text", settings.textColor, "color");
    variable(card, "--work-card-fill", settings.colorOverlay?.fill, "background");
    const project = object(settings.featuredProject);
    const feature = card.querySelector(".featured-project");
    if (feature) {
      const hasTitle = typeof project.title === "string" && !!project.title.trim();
      feature.hidden = project.enabled === false || !hasTitle;
      text(feature.querySelector(".project-title"), typeof project.title === "string" ? project.title : "");
      text(feature.querySelector(".project-eyebrow"), config.projectLabels?.eyebrow);
      let hasDetails = false;
      for (const field of ["role", "result"]) {
        const value = typeof project[field] === "string" ? project[field] : "";
        const present = !!value.trim();
        feature.querySelector(`.project-${field}-row`).hidden = !present;
        text(feature.querySelector(`.project-${field}`), value);
        text(feature.querySelector(`.project-${field}-label`), config.projectLabels?.[field]);
        hasDetails ||= present;
      }
      feature.querySelector(".project-details").hidden = !hasDetails;
      const projectLink = feature.querySelector(".project-link");
      const href = url(project.url);
      projectLink.hidden = !href;
      if (href) link(projectLink, href, project.newTab ?? config.links?.newTab);
      else {
        projectLink.removeAttribute("href");
        projectLink.removeAttribute("target");
        projectLink.removeAttribute("rel");
      }
      text(feature.querySelector(".project-link-label"), project.linkLabel || "View project");
    }
    const tiles = object(settings.tiledBackground);
    window.MIKI_WORK_PREVIEWS[key] = {
      ...tiles,
      images: tiles.enabled === false || card.hidden || config.sections?.work === false ? [] : tiles.images,
      imageOpacity: tiles.opacity,
      overlayOpacity: settings.colorOverlay?.opacity
    };
  }
  find(".work-grid")?.classList.toggle("work-grid--compact", hiddenCards);

  const palette = {furBase:"fur-base",furSecondary:"fur-secondary",hairBase:"hair-base",spots:"spots",linework:"linework",turquoise:"turquoise",pads:"pads",eyeOrange:"eye-orange",eyeGold:"eye-gold",sheetBackground:"sheet-bg"};
  for (const [key, name] of Object.entries(palette)) variable(root, `--${name}`, config.theme?.palette?.[key], "color");
  for (const [key, value] of entries(config.theme?.gradients)) if (slot(key)) variable(root, `--gradient-${key}`, value, "background");
  for (const name of ["body", "display", "labels"]) variable(root, `--portfolio-font-${name}`, config.theme?.fonts?.[name], "font-family");
  const backgrounds = {page:["body", ".site-canvas"],header:[".site-header"],banner:[".marquee-band"],about:[".about-grid"],commissions:[".commission-wrap"],footer:[".site-footer"]};
  for (const [key, selectors] of Object.entries(backgrounds)) selectors.forEach(selector => css(find(selector), "background", config.theme?.backgrounds?.[key]));

  for (const [path, name, property] of [
    ["contentMaxWidth","content-width","width"], ["desktopGutters","desktop-gutters","width"],
    ["mobileGutters","mobile-gutters","width"], ["sectionSpacing","section-spacing","padding"],
    ["sectionTitleMaxSize","section-title-max","font-size"],
    ["headerMinHeight","header-height","min-height"],
    ["hero.titleMinSize","hero-title-min","font-size"], ["hero.titleMaxSize","hero-title-max","font-size"],
    ["hero.mobileTitleMinSize","hero-title-mobile-min","font-size"], ["hero.mobileTitleMaxSize","hero-title-mobile-max","font-size"],
    ["hero.portraitMaxWidth","hero-portrait-width","width"], ["hero.tabletPortraitMaxWidth","hero-portrait-tablet-width","width"],
    ["hero.columnGap","hero-column-gap","gap"], ["hero.verticalPadding","hero-padding","padding"],
    ["hero.accentFill","hero-accent-fill","background"],
    ["hero.posterAspectRatio","poster-ratio","aspect-ratio"], ["hero.posterShadow","poster-shadow","width"],
    ["hero.posterMobileShadow","poster-mobile-shadow","width"],
    ["frames.borderWidth","frame-border","border-width"], ["frames.shadowOffset","frame-shadow","width"],
    ["frames.mobileShadowOffset","frame-mobile-shadow","width"],
    ["banner.maxWidth","banner-width","width"], ["banner.fontSize","banner-font-size","font-size"],
    ["banner.mobileFontSize","banner-mobile-font-size","font-size"], ["about.maxWidth","about-width","width"],
    ["work.columnGap","work-column-gap","gap"], ["work.rowGap","work-row-gap","gap"],
    ["work.borderWidth","work-border-width","border-width"], ["work.shadowOffset","work-shadow","width"],
    ["work.mobileShadowOffset","work-mobile-shadow","width"],
    ["readability.cardLinkSize","link-size","font-size"],
    ["readability.cardBodySize","card-copy-size","font-size"],
    ["readability.statusLabelSize","badge-size","font-size"],
    ["readability.buttonLabelSize","button-size","font-size"],
    ["readability.minTapHeight","tap-height","min-height"]
  ]) variable(root, `--portfolio-${name}`, get(`layout.${path}`), property);

  for (const [path, name] of [
    ["hero.portraitRotationDegrees","hero-portrait-tilt"], ["about.rotationDegrees","about-tilt"],
    ["about.mobileRotationDegrees","about-mobile-tilt"], ["about.portraitRotationDegrees","about-portrait-tilt"],
    ["about.mobilePortraitRotationDegrees","about-portrait-mobile-tilt"]
  ]) numeric(root, `--portfolio-${name}`, get(`layout.${path}`), "deg", -30, 30);
  numeric(root, "--portfolio-title-scale", config.layout?.hero?.titleScale, "cqi", 1, 30);
  numeric(root, "--portfolio-title-leading", config.layout?.hero?.titleLineHeight, "", .85, 1.6);
  numeric(root, "--portfolio-accent-scale", config.layout?.hero?.accentScale, "em", .5, 1.25);
  numeric(root, "--portfolio-hover-lift", config.motion?.hoverLiftPx, "px", 0, 30);
  numeric(root, "--portfolio-hover-shadow", config.motion?.hoverShadowPx, "px", 0, 60);
  numeric(root, "--portfolio-transition", config.motion?.transitionMs, "ms", 0, 2000);

  for (const [key, value] of [
    ["stickyHeader", config.layout?.stickyHeader], ["motion", config.motion?.enabled],
    ["workHover", config.motion?.hoverEnabled], ["smoothScroll", config.motion?.smoothScroll],
    ["pageMarks", config.decorations?.pageMarks], ["workMarks", config.decorations?.workMarks],
    ["cardMarks", config.decorations?.cardMarks]
  ]) if (typeof value === "boolean") root.dataset[key] = value ? "on" : "off";

  const sections = {banner:".marquee-band",work:"#work",about:"#about",commissions:"#commissions",links:"#links",footer:".site-footer",draftNote:"#links-needed"};
  for (const [key, selector] of Object.entries(sections)) {
    const visible = config.sections?.[key];
    if (typeof visible !== "boolean") continue;
    const element = find(selector);
    if (element) element.hidden = !visible;
    if (selector.startsWith("#") && key !== "draftNote") all(`a[href="${selector}"]`).forEach(anchor => { anchor.hidden = !visible; });
  }

  // A hidden draft note must not leave visible buttons with a dead destination.
  const draftNote = find("#links-needed");
  if (!draftNote || draftNote.closest("[hidden]")) {
    all('a[href="#links-needed"]').forEach(anchor => {
      anchor.removeAttribute("href");
      anchor.removeAttribute("target");
      anchor.removeAttribute("rel");
      anchor.setAttribute("role", "link");
      anchor.setAttribute("aria-disabled", "true");
    });
  }

  // Keep anchor headings below the sticky header, including wrapped mobile nav.
  const header = find(".site-header");
  const updateScrollOffset = () => {
    const height = root.dataset.stickyHeader === "off" ? 0 : header?.offsetHeight || 0;
    root.style.setProperty("--portfolio-scroll-offset", `${height + 16}px`);
  };
  updateScrollOffset();
  if (header && "ResizeObserver" in window) new ResizeObserver(updateScrollOffset).observe(header);
  else window.addEventListener("resize", updateScrollOffset, { passive: true });
})();
