/*
 * MIKI PORTFOLIO CONFIG
 * Edit this file, save, then reload index.html. No build or server is required.
 * Current values preserve the approved lorem-ipsum fork.
 *
 * Strings need quotes. Numbers, true/false and null do not. Keep commas between
 * properties. null means retain the existing style where documented.
 * Image paths are relative to index.html. Copy actual portfolio previews into
 * assets/work/. Keep this file beside index.html when uploading the site.
 *
 * Read CONFIG-GUIDE.md for examples and the complete group map.
 */
window.MIKI_PORTFOLIO = {
  // PAGE METADATA. Text only; language is an HTML language tag such as en or hr.
  "site": {
    "title": "Miki — Portfolio and work",
    "description": "This is my site where I show off my stuff",
    "language": "en",
    "brandHomeLabel": "Miki, home"
  },

  // VISIBILITY. true shows a section; false hides it and its internal navigation links.
  "sections": {
    "banner": true,
    "work": true,
    "about": true,
    "commissions": true,
    "links": true,
    "footer": true,
    "draftNote": true
  },

  // PAGE COPY. Keys match .copy-* classes in index.html. Keep the keys; edit values.
  // Hero title: one array entry per line; accentLine keeps the highlighted final line.
  // All values are literal text. HTML is not executed.
  "text": {
    "hero-eyebrow": "Concepts / edits / art",
    "hero-title": {
      "lines": [
        "Picture",
        "Sound"
      ],
      "accentLine": "& Motion"
    },
    "hero-intro": "I’m Miki: a video editor, art history student, musician and maker of whatever I feel like.",
    "hero-monogram": "M",
    "hero-stamp": "MIKI / NO. 01",
    "hero-caption-primary": "Based in Zagreb",
    "hero-caption-secondary": "A cat on the Internet",
    "hero-category-video": "Video",
    "hero-category-sound": "Sound",
    "hero-category-visual": "Art",
    "hero-category-code": "Web oddities",
    "banner-video": "ART",
    "banner-sound": "COMMUNICATES",
    "banner-visual": "THROUGH",
    "banner-code": "PEOPLE",
    "work-eyebrow": "The meat of it",
    "work-title": "Work, sorted loosely.",
    "work-intro": "I've always valued diversity. Below is a sample of my work over the years. I tried to keep it concise.",
    "work-video-title": "Moving pictures",
    "work-video-description": "Editing, trailers, promos, documentary work and experiments",
    "work-sound-title": "Sound",
    "work-sound-description": "Music I make for myself, music I make for others and sound exploration I make for fun",
    "work-visual-title": "Visual",
    "work-visual-description": "Photography, photomanipulation, character design, visuals.",
    "work-code-title": "Code + debris",
    "work-code-description": "Small web applets, half-useful tools and pure conceptual stuff",
    "about-eyebrow": "About",
    "about-title": "One person, many mediums.",
    "about-intro": "I work across editing, music, visual art and small digital experiments. My process is intuitive, experimental and genre-blending",
    "about-body": "I focus on texture, atmosphere and clear storytelling. Most of my work is melancholy but that might just be a coincidence.",
    "practice-editing": "compact",
    "practice-motion": "fusion",
    "practice-music": "composition",
    "practice-bass": "vibes",
    "practice-research": "digital",
    "portrait-caption": "Character portrait / Miki",
    "portrait-details": "fur · spots · turquoise · coral · amber",
    "commissions-eyebrow": "Commissions",
    "commissions-title": "Hire me to make things.",
    "commissions-intro": "Commissions are currently closed. When availability changes, each category will be updated here independently..",
    "commission-type-heading": "Type",
    "commission-status-heading": "Status",
    "commission-illustration-category": "Character / illustration",
    "commission-video-category": "Video editing",
    "commission-audio-category": "Music / audio",
    "links-eyebrow": "Elsewhere",
    "links-title": "Links to follow.",
    "kofi-title": "Ko-fi",
    "kofi-description": "Tip jar / support ↗",
    "destination-deviantart-title": "DeviantArt",
    "destination-deviantart-description": "Visual work",
    "destination-soundcloud-title": "SoundCloud",
    "destination-soundcloud-description": "Tracks + sketches",
    "destination-codepen-title": "CodePen",
    "destination-codepen-description": "Frontend experiments",
    "destination-music-portfolio-title": "Music portfolio",
    "destination-music-portfolio-description": "selected audio work",
    "draft-title": "Final note",
    "draft-description": "It's pretty, but is it art?",
    "footer-description": "Website deigned and coded by me."
  },

  // BUTTON / NAVIGATION LABELS. Keys match .link-* classes. Arrows and dots are retained.
  // Platform headings and descriptions are in text above.
  "linkLabels": {
    "skip": "Skip to content",
    "brand-header": "MIKI",
    "nav-work": "Work",
    "nav-about": "About",
    "nav-commissions": "Commissions",
    "nav-links": "Links",
    "hero-work": "Browse the work",
    "hero-about": "More about me",
    "work-video": "Selected video work",
    "work-soundcloud": "SoundCloud",
    "work-music-portfolio": "Music portfolio",
    "work-deviantart": "DeviantArt",
    "work-codepen": "CodePen",
    "work-junk-drawer": "The junk drawer",
    "commission-details": "Commission details",
    "brand-footer": "MIKI",
    "back-to-top": "Back to top ↑"
  },

  // DESTINATIONS. Set each URL once to update all matching buttons. Empty string keeps
  // the draft-note link. If that note or Links is hidden, empty destinations are
  // disabled instead. Use https://, mailto:, tel:, a relative path, or a #section.
  // newTab applies to external destinations. overrides can target a unique link class,
  // for example: "work-soundcloud": { "url": "https://soundcloud.com/your-track", "newTab": true }.
  "links": {
    "newTab": false,
    "destinations": {
      "video": "https://www.youtube.com/@mikishomeonyoutube2116/featured",
      "soundcloud": "https://soundcloud.com/miki-brusly/albums",
      "music-portfolio": "",
      "deviantart": "https://www.deviantart.com/mikiinmotion",
      "codepen": "",
      "junk-drawer": "",
      "kofi": "https://ko-fi.com/mikiinmotion",
      "commission-details": ""
    },
    "overrides": {}
  },

  // PORTRAITS. Paths are relative to index.html. Keep descriptive alt text for About.
  // null keeps the existing responsive image styling. fit accepts cover or contain;
  // position accepts a crop focus such as "50% 25%"; blendMode can be "normal" or "multiply".
  // width/height are the source image's pixel dimensions, used to reserve space.
  // Update both when replacing an image, or use null for both if they are unknown.
  "images": {
    "hero-character": {
      "src": "assets/miki-hero-poster.webp",
      "width": 1122,
      "height": 1402,
      "alt": "",
      "fit": null,
      "position": null,
      "blendMode": null
    },
    "about-character": {
      "src": "assets/miki-portrait.webp",
      "width": 1024,
      "height": 1024,
      "alt": "Miki, a pale-furred anthro cheetah with dark spots and turquoise hair, waving against a soft pink background",
      "fit": null,
      "position": null,
      "blendMode": null
    }
  },

  // COMMISSION BADGES. Each category is independent. status accepts "open" or "closed".
  // Colors accept CSS colors; fills also accept gradients. null preserves existing CSS.
  "commissions": {
    "labels": {
      "open": "Open",
      "closed": "Closed"
    },
    "categories": {
      "illustration": {
        "visible": true,
        "status": "closed",
        "openFill": "#ade6b9",
        "openDot": "#176537",
        "closedFill": "var(--gradient-warm)",
        "closedDot": "var(--coral)"
      },
      "video": {
        "visible": true,
        "status": "closed",
        "openFill": "#ade6b9",
        "openDot": "#176537",
        "closedFill": "var(--gradient-warm)",
        "closedDot": "var(--coral)"
      },
      "audio": {
        "visible": true,
        "status": "closed",
        "openFill": "#ade6b9",
        "openDot": "#176537",
        "closedFill": "var(--gradient-warm)",
        "closedDot": "var(--coral)"
      }
    }
  },

  // WORK CARDS. The four keys correspond to the four existing cards.
  // The tiledBackground is a separate layer UNDER colorOverlay. Neither fades the text.
  // opacity: 0 = transparent; 1 = fully opaque. Tile dimensions/gaps are pixels, without quotes.
  // images: paths such as "assets/work/trailer-01.webp"; lists repeat to fill the card.
  // Optional crop for one image: { "src": "assets/work/art.webp", "position": "50% 25%", "fit": "cover" }.
  // Empty/broken image lists keep the card fill. enabled:false disables tiling for that card.
  // CSS sizes (minHeight, padding, radius) need units. Rotation is a number of degrees.
  // featuredProject is hidden until title is filled. Add your actual role, result and
  // URL; empty fields/links are hidden. enabled:false hides it even with content.
  // Tile loading defaults to lazy: requests start near the viewport. "eager" starts immediately.
  "workCards": {
    "video": {
      "visible": true,
      "number": "01",
      "rotationDegrees": -1,
      "minHeight": "350px",
      "mobileMinHeight": "330px",
      "padding": "clamp(1.8rem, 4vw, 3rem)",
      "borderRadius": "0px",
      "textColor": "#262321",
      "featuredProject": {
        "enabled": true,
        "title": "",
        "role": "",
        "result": "",
        "url": "",
        "linkLabel": "View project",
        "newTab": false
      },
      "tiledBackground": {
        "enabled": true,
        "loading": "lazy",
        "images": [],
        "opacity": 1,
        "tileWidth": 180,
        "tileHeight": 110,
        "tileGap": 4,
        "imageFit": "cover",
        "imagePosition": "50% 50%"
      },
      "colorOverlay": {
        "fill": "var(--gradient-paper)",
        "opacity": 0.82
      }
    },
    "sound": {
      "visible": true,
      "number": "02",
      "rotationDegrees": 1.3,
      "minHeight": "350px",
      "mobileMinHeight": "330px",
      "padding": "clamp(1.8rem, 4vw, 3rem)",
      "borderRadius": "0px",
      "textColor": "#262321",
      "featuredProject": {
        "enabled": true,
        "title": "",
        "role": "",
        "result": "",
        "url": "",
        "linkLabel": "View project",
        "newTab": false
      },
      "tiledBackground": {
        "enabled": true,
        "loading": "lazy",
        "images": [],
        "opacity": 1,
        "tileWidth": 135,
        "tileHeight": 135,
        "tileGap": 4,
        "imageFit": "cover",
        "imagePosition": "50% 50%"
      },
      "colorOverlay": {
        "fill": "var(--gradient-warm)",
        "opacity": 0.82
      }
    },
    "visual": {
      "visible": true,
      "number": "03",
      "rotationDegrees": -1.5,
      "minHeight": "350px",
      "mobileMinHeight": "330px",
      "padding": "clamp(1.8rem, 4vw, 3rem)",
      "borderRadius": "0px",
      "textColor": "#262321",
      "featuredProject": {
        "enabled": true,
        "title": "",
        "role": "",
        "result": "",
        "url": "",
        "linkLabel": "View project",
        "newTab": false
      },
      "tiledBackground": {
        "enabled": true,
        "loading": "lazy",
        "images": [],
        "opacity": 1,
        "tileWidth": 150,
        "tileHeight": 150,
        "tileGap": 4,
        "imageFit": "cover",
        "imagePosition": "50% 50%"
      },
      "colorOverlay": {
        "fill": "var(--gradient-cool)",
        "opacity": 0.82
      }
    },
    "code": {
      "visible": true,
      "number": "04",
      "rotationDegrees": 0.8,
      "minHeight": "350px",
      "mobileMinHeight": "330px",
      "padding": "clamp(1.8rem, 4vw, 3rem)",
      "borderRadius": "0px",
      "textColor": "#262321",
      "featuredProject": {
        "enabled": true,
        "title": "",
        "role": "",
        "result": "",
        "url": "",
        "linkLabel": "View project",
        "newTab": false
      },
      "tiledBackground": {
        "enabled": true,
        "loading": "lazy",
        "images": [],
        "opacity": 1,
        "tileWidth": 180,
        "tileHeight": 115,
        "tileGap": 4,
        "imageFit": "cover",
        "imagePosition": "50% 50%"
      },
      "colorOverlay": {
        "fill": "var(--gradient-warm-reverse)",
        "opacity": 0.82
      }
    }
  },

  // Shared labels for featured projects; the individual project link label is above.
  "projectLabels": {
    "eyebrow": "Featured project",
    "role": "My role",
    "result": "Result"
  },

  // PALETTE / FONTS / BACKGROUNDS. CSS colors, font stacks and gradients are strings.
  // backgrounds.page:null preserves the watercolor ground; "#ffffff" makes it white.
  // Palette colors feed gradient recipes; some legacy decorative marks retain baked-in colors.
  // Use any CSS color or gradient as a card colorOverlay.fill for individual changes.
  "theme": {
    "palette": {
      "furBase": "#f8f8ff",
      "furSecondary": "#fff8e7",
      "hairBase": "#f0f8ff",
      "spots": "#404040",
      "linework": "#302d2b",
      "turquoise": "#00ced1",
      "pads": "#e46f7b",
      "eyeOrange": "#ff7e00",
      "eyeGold": "#ffbf00",
      "sheetBackground": "#cbcbcb"
    },
    "fonts": {
      "body": "Arial, Helvetica, sans-serif",
      "display": "\"Anton\", Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif",
      "labels": "\"Courier New\", Courier, monospace"
    },
    "backgrounds": {
      "page": null,
      "header": "var(--gradient-dark)",
      "banner": "var(--gradient-warm-reverse)",
      "about": "var(--gradient-dark)",
      "commissions": "var(--gradient-warm)",
      "footer": "var(--gradient-dark)"
    },
    "gradients": {
      "paper": "linear-gradient(128deg, var(--fur-base) 0%, var(--fur-secondary) 52%, var(--hair-base) 100%)",
      "cool": "linear-gradient(128deg, var(--fur-base) 0%, var(--hair-base) 38%, var(--turquoise) 100%)",
      "cool-reverse": "linear-gradient(128deg, var(--turquoise) 0%, var(--hair-base) 62%, var(--fur-base) 100%)",
      "warm": "linear-gradient(128deg, var(--eye-gold) 0%, var(--eye-orange) 54%, var(--pads) 100%)",
      "warm-reverse": "linear-gradient(128deg, var(--pads) 0%, var(--eye-orange) 48%, var(--eye-gold) 100%)",
      "spectrum": "linear-gradient(128deg, var(--turquoise) 0%, var(--hair-base) 30%, var(--fur-secondary) 46%, var(--eye-gold) 63%, var(--eye-orange) 82%, var(--pads) 100%)",
      "dark": "linear-gradient(128deg, var(--linework) 0%, var(--spots) 100%)",
      "cool-soft": "linear-gradient(128deg, #f0f8ffe6 0%, #00ced13d 58%, #e46f7b29 100%)"
    }
  },

  // RESPONSIVE LAYOUT. Quoted CSS lengths need units; clamp(...) expressions are supported.
  // Gutters are the TOTAL width subtracted from the viewport. titleScale is percent of
  // the hero text column (30 means 30cqi). Tablet/mobile overrides keep small screens bounded.
  // titleLineHeight is a unitless multiplier (0.85–1.6); accentScale is relative to the
  // headline size (0.5–1.25). accentFill affects the title highlight and hero eyebrow.
  // posterAspectRatio uses a CSS ratio; portraitRotationDegrees now tilts only the artwork.
  // Work uses a two-column desktop grid and one column on mobile, including hidden cards.
  "layout": {
    "contentMaxWidth": "1200px",
    "desktopGutters": "3.5rem",
    "mobileGutters": "2rem",
    "sectionSpacing": "clamp(4.5rem, 7vw, 7rem)",
    "sectionTitleMaxSize": "5.5rem",
    "headerMinHeight": "4.5rem",
    "stickyHeader": true,
    "readability": {
      "cardLinkSize": ".875rem",
      "cardBodySize": ".9375rem",
      "statusLabelSize": ".8125rem",
      "buttonLabelSize": ".875rem",
      "minTapHeight": "44px"
    },
    "hero": {
      "titleMinSize": "3rem",
      "titleMaxSize": "11.5rem",
      "titleScale": 30,
      "titleLineHeight": 1.02,
      "accentScale": 0.84,
      "accentFill": "linear-gradient(100deg, var(--turquoise) 0%, var(--hair-base) 28%, var(--fur-secondary) 44%, var(--eye-gold) 64%, var(--pads) 100%)",
      "mobileTitleMinSize": "2.5rem",
      "mobileTitleMaxSize": "11.5rem",
      "columnGap": "clamp(2rem, 4vw, 4rem)",
      "verticalPadding": "clamp(2rem, 3vw, 3rem)",
      "portraitMaxWidth": "31rem",
      "tabletPortraitMaxWidth": "30rem",
      "posterAspectRatio": "4 / 5",
      "posterShadow": "12px",
      "posterMobileShadow": "8px",
      "portraitRotationDegrees": 1.5
    },
    // Borders and hard shadows shared by labels, copy panels, buttons and link rows.
    "frames": {
      "borderWidth": "3px",
      "shadowOffset": "7px",
      "mobileShadowOffset": "4px"
    },
    "banner": {
      "maxWidth": "1440px",
      "fontSize": "clamp(1rem, 1.4vw, 1.25rem)",
      "mobileFontSize": ".95rem"
    },
    "about": {
      "maxWidth": "1180px",
      "rotationDegrees": -0.6,
      "mobileRotationDegrees": -0.6,
      "portraitRotationDegrees": 2,
      "mobilePortraitRotationDegrees": 1.5
    },
    "work": {
      "columnGap": "2.25rem",
      "rowGap": "clamp(3rem, 5vw, 4.5rem)",
      "borderWidth": "5px",
      "shadowOffset": "12px",
      "mobileShadowOffset": "8px"
    }
  },

  // MOTION. enabled:false disables animation/transitions. Hover can be disabled separately.
  // Reduced-motion system preferences always take precedence. These settings control existing effects.
  "motion": {
    "enabled": true,
    "hoverEnabled": true,
    "hoverLiftPx": 4,
    "hoverShadowPx": 18,
    "transitionMs": 150,
    "smoothScroll": true
  },

  // DECORATIVE MARKS. Toggles affect background pseudo-elements, never content or portraits.
  // pageMarks starts false to match the approved page; true restores the outer marks.
  "decorations": {
    "pageMarks": false,
    "workMarks": true,
    "cardMarks": true
  }
};
