MIKI PORTFOLIO / CONFIGURABLE LOREM IPSUM FORK

POSTER REDESIGN: Picture / Sound / & Motion
The approved preview is now the design reference for the full page: large
condensed type, framed copy and buttons, an illustrated character poster,
hard shadows, balanced work cards and matching About/Commissions/Links panels.
poster-design.css loads last. Keep its bundled font and poster artwork in assets/.

Open index.html, or upload this folder's contents to a static web host.
Keep the CSS, JavaScript and assets beside index.html. No packages,
build step, server or backend are needed.

EDIT PORTFOLIO.CONFIG.JS

This is the central editable file for:
- Metadata, section visibility and all 60 marked copy fields.
- Navigation/button labels, shared destination URLs and individual overrides.
- Portrait images, alt text, cropping and blend modes.
- Independent open/closed commission states and badge colors.
- Each card's dimensions, tilt, tiledBackground and colorOverlay.
- Each card's optional featured project, your role, result and destination URL.
- Palette, gradients, fonts, backgrounds, responsive spacing and shadows.
- Readability settings for card links, descriptions, buttons and status badges.
- Hero accent size/fill, poster proportions, frame borders and desktop/mobile shadows.
- Decorative marks, motion, hover behavior and smooth scrolling.

The file includes current values and comments about types and units.
CONFIG-GUIDE.md provides examples and a map of settings. Save and reload.
If your host caches files, perform a hard refresh or clear its cache.

The old work-previews.config.js settings moved to:
portfolio.config.js > workCards > video / sound / visual / code.
Edit tiledBackground for image previews; edit colorOverlay for the original
color/gradient ABOVE the previews. Their opacities are independent; neither
changes text opacity. Put your real preview images in assets/work/ first.

All commission categories remain closed. Image lists remain empty.
Featured projects remain hidden until you add their actual titles. Empty
roles, results and project links are hidden individually. No credits are invented.
Personal URLs still lead to the draft note until you supply real URLs.
If you hide that note or the Links section, missing destinations become disabled.

REDESIGN.md records this redesign, its baseline comparison and verification limits.
DEBUG-PASS.md and IMPROVEMENTS.md record earlier fixes and comparisons.

The hero uses a new lossless WebP poster; About keeps the original WebP portrait.
The original PNG is retained for older configs. Anton is bundled locally with
its license, so the display typography does not require a third-party font service.
Tile images load near the viewport by default. Set tiledBackground.loading
to "eager" for immediate loading. No new runtime dependencies were added.

Existing .copy-*, .link-*, .image-* and .commission-status--* hooks remain.
With JavaScript enabled, config values take precedence over direct HTML edits.
Without JavaScript, the saved HTML retains the new headline, other draft copy, links and
closed commission states. Keep that fallback HTML in sync before publishing
if it must show final content without scripts.

Branch: lorem-ipsum
Repository: https://github.com/mikibrusly/mikibrusly.github.io
The main branch retains the approved original-copy version.
