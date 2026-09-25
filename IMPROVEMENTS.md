# Portfolio improvements and comparison

Historical implementation record. See `REDESIGN.md` for the later poster redesign.

Date: 20 September 2026  
Comparison baseline: `2a9bd8ea1f20a6f370ee375698887f3fef497247` on `lorem-ipsum`.

## Implemented

- Larger configurable card links, card descriptions, button labels and
  availability badges. Card/project links have a minimum 44-pixel hit height.
- Long titles and labels can wrap; grid children can shrink within their tracks.
  Multi-line card headings have more line spacing. A keyboard skip link targets
  the start of the main content.
- Card-description ink is now `#262321`, adjustable separately on every card.
  The original gray fell below 4.5:1 against the coral/orange fill colors.
  The darker default exceeds 4.5:1 at every original gradient stop color with
  no work images. This is not a page-wide or image-overlay contrast certification.
- A lossless WebP portrait, explicit source dimensions to reserve space, priority
  loading for the hero and lazy loading for About. The original PNG remains
  available for older configurations.
- Removed 981 unused framework utility rules. Every other top-level CSS node
  in the base stylesheet was preserved exactly, including custom portfolio rules,
  reset styles, media queries and palette definitions.
- Optional featured-project fields on each card: title, role, result, URL and
  link label. Empty titles hide the feature; empty details and links hide
  individually. All fields start empty because actual project details were not
  supplied. The config and guide document them.
- Work previews load as their cards approach the viewport, using a 400-pixel
  margin. `tiledBackground.loading: "eager"` opts out. Browsers without the
  observer API load immediately. Original fills remain available throughout.

## Measured file changes

| Item | Previous | Updated | Reduction |
| --- | ---: | ---: | ---: |
| Portrait requested by the page | 1,187,008 bytes | 926,326 bytes | 22.0% |
| Base stylesheet | 143,317 bytes | 40,739 bytes | 71.6% |
| HTML plus unique referenced resources | 1,392,801 bytes | 1,040,353 bytes | 25.3% |

These are raw local file sizes, not measured network transfer or load time.
The downloadable package also contains the original PNG for compatibility.

## Comparison and regression checks

- Preserved an exact, hashed copy of the previous iteration before editing.
- Ran the existing behavior suite against both iterations. Both pass.
- Ran the previous config against the updated runtime. It passes and retains
  its original image paths. New config groups are optional.
- Compared palette, gradients, all four card fills, both opacity controls, tile
  dimensions/crops, copy, destination settings, commission states, layout sizes,
  rotations, decoration switches and motion settings with the baseline.
- Compared the HTML after accounting for the intended project blocks, skip link
  and portrait attributes. Existing content and structure match.
- Decoded PNG and WebP are identical at every RGB pixel and both are 1024 × 1024.
  Neither file has an embedded color profile that could alter that comparison.
- Tested all four project slots, literal text, omitted fields, disabled projects,
  invalid URLs, new-tab attributes and independence from platform links.
- Tested lazy/eager image loading, hidden cards, repeated intersection callbacks,
  observer cleanup, partial loads, timeouts, resize coverage and fallback behavior.
- Checked JavaScript and stylesheet syntax, ten unique IDs, 22 internal links
  and all nine unique local asset references.

## Limits and remaining inputs

**Rendered desktop/mobile checks are still unverified.** The available browser
environment denied the local preview server's listening permission. No claim is
made about screenshots, actual mobile geometry, visual focus behavior or real
browser image loading. Source and simulated DOM checks cannot establish those.

The branch remains the editable Lorem Ipsum draft. Real project titles, roles,
results, destination URLs and work images must be supplied before they can be
shown or tested. Check the final images with your chosen overlay opacity and
review widths of 320, 375, 768 and 1440 CSS pixels, plus 200% zoom, before launch.

The saved HTML still serves as a no-script draft. Updating it to match final
config copy, and adding final sharing metadata, remain publication tasks once
that content and the hosting URL are known.
