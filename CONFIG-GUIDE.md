# Editing the portfolio

Open **portfolio.config.js** in a text editor. Change values, save, and reload
`index.html`. The comments and existing values are the editable template.
Upload the whole folder when self-hosting; no build step is required.

Strings use quotes, numbers do not. Use `true` and `false` for switches.
Keep commas between properties. `null` preserves an existing style where the
comment permits it. A syntax error prevents the config from loading; the page
then keeps its saved HTML. Browser console messages flag unsupported values.

## Settings map

| Group | What you can edit |
| --- | --- |
| `site` | Tab title, description, language and home-link accessibility label |
| `sections` | Show/hide sections, footer and draft note; matching navigation hides too |
| `text` | All 60 marked text fields, including headings, body copy, captions and category names |
| `linkLabels` | Button/navigation labels and both wordmarks; existing arrows and dots stay intact |
| `links.destinations` | Set each destination URL once for all its occurrences |
| `links.overrides` | Change one particular link without changing other occurrences |
| `images` | Each portrait's source, alt text, crop, fit and blend mode |
| `commissions` | Individual states, category visibility, state labels and badge colors |
| `workCards` | Card visibility, number, size, padding, corner radius, tilt and description color |
| `workCards.<card>.featuredProject` | Featured title, your role, a result and one project link; empty entries remain hidden |
| `projectLabels` | Shared featured-project, role and result labels |
| `workCards.<card>.tiledBackground` | Preview images, tile sizes, spacing, crop and image opacity |
| `workCards.<card>.colorOverlay` | Original gradient/color above the tiles and its separate opacity |
| `theme` | Palette tokens, font stacks, gradient recipes and section backgrounds |
| `layout` | Width limits, gutters, section spacing, headline scale, mobile settings and shadows |
| `layout.readability` | Card-copy, link, button and status-label sizes, plus minimum link height |
| `layout.hero` | Headline sizes, accent scale/fill, spacing, poster size, aspect ratio, tilt and shadows |
| `layout.frames` | Shared frame border and desktop/mobile hard shadows |
| `motion` | Existing animation/transition, hover and scrolling behavior |
| `decorations` | Page marks, work-grid marks and individual card marks |

The existing card keys are `video`, `sound`, `visual` and `code`. Commission
keys are `illustration`, `video` and `audio`. Keep these keys and the content
slot keys unchanged. This config edits existing cards; adding a fifth card or
a new section also requires HTML and styling.

## Add work previews and adjust the original color overlay

Put images in `assets/work/`. In `workCards.video`, edit these two groups:

```js
"tiledBackground": {
  "enabled": true,
  "images": ["assets/work/trailer-01.webp", "assets/work/trailer-02.webp"],
  "opacity": 1,
  "tileWidth": 180,
  "tileHeight": 110,
  "tileGap": 4,
  "imageFit": "cover",
  "imagePosition": "50% 50%"
},
"colorOverlay": {
  "fill": "var(--gradient-paper)",
  "opacity": 0.65
}
```

The tiles repeat beneath the color overlay, with the text above both layers.
Each card has its own settings. Opacity `0` is transparent; `1` is opaque.
Lower `colorOverlay.opacity` to reveal more of the work. Increasing it strengthens
the original color. Text, links, borders and decorative marks keep their opacity.

Tile sizes and gaps are numbers in pixels. Values are bounded to 48–1200 pixels
for dimensions and 0–32 for gaps. Width is a target: columns fit the card's width.
Tile count updates when the card resizes. `tileGap: 0` creates a continuous mosaic.
Use `cover` to crop or `contain` to fit complete images inside their tiles.

An image can have an individual crop:

```js
"images": [
  "assets/work/trailer-01.webp",
  { "src": "assets/work/art-01.webp", "position": "50% 25%", "fit": "cover" }
]
```

Image lists start empty. Empty lists, disabled tiling, or entirely failed images
retain the card's configured fill. Individual failures are skipped; image requests
still pending after ten seconds are skipped. Successful images appear as they load,
even while another image is pending; the final pattern follows your list order.
Failures are reported in the browser console. Hidden cards and a hidden Work section
do not request tile images. Check text contrast with your images.

`tiledBackground.loading` defaults to `"lazy"`: requests start when the card is
within 400 pixels of the viewport. Use `"eager"` for immediate loading. Browsers
without IntersectionObserver load immediately; the original fills are always present.

## Featured projects

Each card now has a `featuredProject` group. Fill it with one actual example:

```js
"featuredProject": {
  "enabled": true,
  "title": "Your project title",
  "role": "Your contribution",
  "result": "What you made or achieved",
  "url": "https://example.com/your-project",
  "linkLabel": "View project",
  "newTab": false
}
```

These are example values, not claims about your work. The installed fields start
empty. A blank title hides the whole feature; blank roles, results and URLs hide
their respective fields. `enabled: false` hides a filled feature. Long text wraps.
Titles, roles and results are literal text, not HTML. Existing platform/profile
links remain separate. The project's light panel keeps these details readable
above the card's tiles, even when you lower the card overlay opacity.

## Copy and links

`text["work-video-title"]` changes the video-card heading.
`text["about-body"]` changes the About paragraph. Values are literal text,
so punctuation such as `<` will not become HTML.

The hero title has explicit line breaks:

```js
"hero-title": {
  "lines": ["Picture", "Sound"],
  "accentLine": "& Motion"
}
```

`linkLabels["brand-header"]` and `linkLabels["brand-footer"]` control the two
wordmarks independently. Portrait and platform captions are in `text`.

Set `links.destinations.soundcloud` to your profile URL. This updates both the
Sound card and the destination list. For one different SoundCloud destination:

```js
"overrides": {
  "work-soundcloud": {
    "url": "https://soundcloud.com/your-profile/your-track",
    "newTab": true
  }
}
```

Empty destination URLs keep the draft-note link. Hide `sections.draftNote` after
you have supplied the actual URLs. If the note or its Links section is hidden,
remaining draft links become dimmed, disabled links instead of jumping to hidden
content. Supplying a real URL and reloading enables them. New-tab links receive
`noopener noreferrer`.

## Commission availability

Change `commissions.categories.video.status` from `"closed"` to `"open"`.
Only the video badge becomes green and shows the Open label. The other categories
retain their own states. `openFill`, `openDot`, `closedFill` and `closedDot` control
that category's colors. States are lowercase `open` or `closed`.

## Appearance and responsive layout

CSS lengths need units: `"1280px"`, `"3rem"`, or `"clamp(2rem, 4vw, 4rem)"`.
The config has separate mobile values for headline size, banner type and tilts.
`layout.hero.titleScale: 30` scales the headline to 30% of its available text
column, bounded by the configured minimum and maximum sizes.

The poster design uses these additional optional controls:

| Property | Default | Effect |
| --- | --- | --- |
| `layout.hero.titleMaxSize` | `"11.5rem"` | Desktop headline ceiling |
| `layout.hero.mobileTitleMaxSize` | `"11.5rem"` | Mobile ceiling; matches desktop to avoid a size jump at 680px |
| `layout.hero.titleLineHeight` | `1.02` | Headline line spacing; accepts 0.85–1.6 |
| `layout.hero.accentScale` | `0.84` | Highlighted line size relative to the headline; accepts 0.5–1.25 |
| `layout.hero.accentFill` | Spectrum gradient | Highlight and hero eyebrow background |
| `layout.hero.columnGap` | `"clamp(2rem, 4vw, 4rem)"` | Desktop gap between copy and poster |
| `layout.hero.verticalPadding` | `"clamp(2rem, 3vw, 3rem)"` | Hero padding above 680px; mobile uses 2rem / 2.75rem |
| `layout.hero.posterAspectRatio` | `"4 / 5"` | Shape of the character artwork frame |
| `layout.hero.posterShadow` | `"12px"` | Desktop/tablet artwork shadow |
| `layout.hero.posterMobileShadow` | `"8px"` | Artwork shadow at 680px and below |
| `layout.frames.borderWidth` | `"3px"` | Shared label, panel, button and link-row borders |
| `layout.frames.shadowOffset` | `"7px"` | Shared desktop hard shadow |
| `layout.frames.mobileShadowOffset` | `"4px"` | Shared hard shadow at 680px and below |
| `layout.sectionTitleMaxSize` | `"5.5rem"` | Work, About, Commissions and Links heading ceiling |

The poster tilt now applies to the artwork frame only; its captions and category
grid remain level. Work uses two balanced columns above 680px and one below.
Hidden cards pack into the remaining grid positions. Text remains free to wrap
when you supply longer copy; there is no forced one-line clipping.

`layout.contentMaxWidth` bounds regular content. `layout.about.maxWidth` bounds
the About panel separately. `desktopGutters` and `mobileGutters` are the total
width removed from the viewport, split between the left and right sides.
`sectionSpacing` controls regular section padding; Hero and About retain their
special layout. Large dimensions or extreme tilts can still require visual tuning.
Anchor scrolling automatically allows for the actual sticky-header height, including
navigation labels that wrap on narrow screens. With `stickyHeader: false`, the
header scrolls with the page and anchor destinations use a small top margin.

`layout.readability` controls the new readable defaults: card links and buttons
at `.875rem`, card descriptions at `.9375rem`, and availability badges at
`.8125rem`. Links have a minimum 44-pixel hit height; `minTapHeight` can increase
it. Existing larger buttons keep their 54-pixel minimum. The skip link appears
when reached by keyboard and goes directly to the hero content.
Card descriptions use darker `textColor: "#262321"` to improve contrast against
the warm fills. This stays editable per card. Low overlay opacity or different
images can still require a contrast adjustment; size changes alone do not fix it.

The hero uses `assets/miki-hero-poster.webp`, a poster composition based on the
approved preview. Its colors are already in the image, so the default blend mode
is normal. Changing the palette does not recolor the raster artwork; replace its
source image to change the poster artwork. The stamp and large M are editable HTML.
About keeps the original `assets/miki-portrait.webp`. The original portrait PNG
also remains in `assets/` for compatibility with earlier configs. Both WebP files
are lossless encodings of their respective source PNGs.
The `images` entries include `width` and `height` to reserve the correct space
before loading. Update both when replacing a portrait, or set both to `null`
if its dimensions are unknown. The hero has high fetch priority; About is lazy.

`theme.backgrounds.page: "#ffffff"` sets a white page ground. `null` retains the
watercolor ground. The `decorations` switches control its separate geometric marks.
`decorations.pageMarks` starts `false`, matching the approved design; set it to
`true` to show the outer geometric marks. Work and card marks have separate switches.
Palette tokens drive gradients and principal surfaces; existing decorative marks
with baked-in colors are preserved. Edit `theme.gradients` to change a shared recipe,
or a card's `colorOverlay.fill` to change just that card.

The display stack now starts with Anton, bundled locally in
`assets/fonts/anton-regular.woff` and declared in `poster-design.css`. Its license
is included in `assets/fonts/OFL.txt`. The site makes no third-party font request.
Other font names use the visitor's installed fonts unless you also add their
font files and CSS declarations. Keep the bundled font with the uploaded site.

`motion.enabled: false` disables animation/transitions. `motion.hoverEnabled: false`
also disables work-card, button and destination-row hover movement. Reduced-motion system preferences always
disable animation and animated scrolling, including when motion is enabled here.

## File responsibilities

- `portfolio.config.js`: the central file to edit.
- `portfolio.js`: applies settings to existing HTML.
- `portfolio.css`: layout and appearance settings, with original-value fallbacks.
- `poster-design.css`: the approved poster design, shared frames, font and responsive overrides; load last.
- `work-previews.js` and `work-previews.css`: the tile and overlay layers.
- `index.html`: saved fallback content and the existing editable class hooks.

Unused framework utilities were removed from `styles.css`. The page's custom
styles, reset, responsive rules and palette definitions were retained. Add new
custom CSS for new class names; this is not a general-purpose utility stylesheet.

The config replaces `work-previews.config.js`. The old file is no longer used.
The website remains a static frontend. With JavaScript disabled, its saved HTML
shows the Picture / Sound / & Motion headline and the remaining draft copy. Update that fallback before release if final content
must also be available to readers without scripts or tools that read only HTML.
