# Poster redesign

Date: 22 September 2026.
Baseline: `8ee3a5abb448b9c7bddc8bf3c9f2dd6eb03158eb` on `lorem-ipsum`.

## Design

The approved image preview is the reference for the new visual treatment:

- Large condensed Picture / Sound / & Motion headline, with a framed spectrum
  highlight behind the last line and the original three-line copy retained.
- Pale paper ground, charcoal navigation, framed introduction and buttons,
  hard offset shadows and the existing turquoise/gold/orange/pink palette.
- New character-poster artwork matching the preview, with an editable HTML
  stamp and monogram. Only its artwork frame tilts; captions and categories stay level.
- Two balanced Work columns on desktop, one on mobile. The cards retain their
  individual fills, tilts, editable dimensions, featured projects and image layers.
- Matching framed treatment and condensed headings across About, Commissions,
  Links and the footer, with less empty space between sections.
- Locally bundled Anton display font, including its SIL Open Font License.
  Source: https://github.com/google/fonts/tree/main/ofl/anton

`poster-design.css` contains the new design and is loaded after the existing
stylesheets. `portfolio.config.js` remains the main editing interface. New
controls cover headline line spacing, accent scale/fill, hero spacing, poster
aspect ratio/shadows, shared frame borders/shadows and section-heading scale.
The guide documents these controls; old configurations still load.

## Preserved behavior

All content hooks, navigation targets, link settings, section visibility,
commission states, featured-project slots and tile-loading behavior are retained.
Original work-card fills remain above the tiles, and both opacity controls are
still independent. Text and links stay above both layers.

No project examples, destination URLs or commission availability were invented.
Existing copy is unchanged. The About portrait and original portrait files remain.

## Checks

The exact 16-file previous version was captured and hashed before editing.
Existing simulated-DOM behavior suites pass against the baseline and redesign,
including configuration edits, statuses, links, hidden content, missing-config
fallback, lazy tile loading, errors/timeouts, independent opacity controls,
featured-project fields and header-dependent anchor offsets.

JavaScript and CSS syntax, the HTML structure, local references, duplicate IDs,
internal anchor targets, optional new config controls and backward compatibility
are checked separately. Source comparison confirms content, URLs, commission
states and work-card settings match the baseline.

The hero WebP is a lossless format conversion of the generated poster PNG;
their decoded pixels are identical. It is 1122 × 1402 and 1,776,394 bytes.
The bundled font is 79,848 bytes and includes Croatian letters. Its source TTF
matches GitHub blob `4d65707db9d8663ccfa99cd28cd3a4e0025be178`.

## Verification limits

The browser's URL security policy blocked opening the local site. No browser
screenshots, actual responsive geometry, font rendering or visual comparison are
claimed. Source checks and font-metric estimates do not replace those checks.
Review the actual page at 320, 375, 768 and 1440 CSS pixels, with 200% zoom and
keyboard navigation, when a browser-accessible preview is available.

The larger poster artwork adds image weight relative to the previous shared
portrait. It loads with high priority; the original About portrait stays lazy.
The rejected checkerboard cutout is not included. Work image lists and URLs are
still empty and the rest of the copy is still the editable draft.
