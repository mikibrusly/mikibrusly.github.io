# Portfolio debug pass

Implementation follow-up: see `IMPROVEMENTS.md` for the 20 September changes
and comparison results. The audit below records the preceding iteration.

Date: 19 September 2026  
Scope: the configurable `lorem-ipsum` fork.

The source and focused DOM/logic checks pass. **Browser rendering remains
unverified:** the preview connection was refused. No desktop/mobile screenshot,
real image-decoding, keyboard-navigation or visual contrast result is claimed.

## Fixes applied

| Issue | Correction |
| --- | --- |
| The canvas used `overflow: hidden`, creating a scroll container around the sticky header. | Use `overflow: clip` so decorative overflow stays clipped without trapping sticky positioning. Browser behavior still needs visual verification. |
| Anchor clearance was fixed even when the header grew because of wrapped navigation or config edits. | Observe the actual header height and update scroll padding. Disabling the sticky header removes that clearance. |
| Hiding the draft note or its Links section left placeholder buttons targeting hidden content. | Those destinations become dimmed, disabled links. Configured URLs remain active. |
| Hiding the entire Work section still started its preview image requests. | Hidden Work and hidden cards skip those requests. |
| Configured labels removed the whitespace before decorative arrows and beside numbered spans. | Preserve the surrounding text spacing while keeping the icons and literal-text safety. |
| One slow image delayed every image on its card until all requests settled, up to ten seconds. | Successful images render immediately. The completed pattern follows config order. Failed/timed-out images retain the existing fallback and produce a diagnostic. |
| `decorations.pageMarks: true` did not overcome the saved CSS that hid those marks. | Wire both switch states. Set the default to `false` to preserve the existing appearance. |

The original card fills remain above the work tiles. `colorOverlay.opacity`
and `tiledBackground.opacity` remain independent; neither fades the text.

## Checks completed

- JavaScript and all five stylesheet syntax checks.
- A DOM fixture regenerated from the actual HTML: all 60 copy fields and
  16 direct labels, preserved title breaks/icons, literal text, metadata,
  link overrides and new-tab attributes, portrait settings, commission states,
  theme/layout settings and invalid-value fallbacks.
- Hidden section/card handling, disabled placeholder destinations and active
  configured URLs, header-resize offsets and the non-sticky setting.
- Partial, failed and timed-out image loads; final image ordering; tile resizing;
  observer fallback; independent opacity values including `0` and `1`.
- HTML nesting, six unique anchor IDs, 21 internal references and all ten
  local asset references.
- The added label-spacing regression fails against the pre-fix source and
  passes against the corrected source.

These checks use a small DOM model. They do not replace a browser's layout,
CSS value validation, network image decoding or accessibility tree.

## Suggested improvements

1. **Show what each project demonstrates.** Keep the tiled examples, then add
   one clear featured-project link per discipline with your role and a short
   result. The image mosaic is decorative, so that project information should
   also appear as readable text.
2. **Improve small-screen reading and interaction.** Work-card links are
   `0.68rem` and availability badges `0.65rem`. Try larger labels and more
   generous link hit areas. Test long project names, commission categories and
   custom fonts at 320, 375, 768 and 1440 CSS pixels, plus 200% zoom. Check the
   sticky header, focus outlines and anchor clearance in an actual browser.
3. **Reduce download size.** The portrait PNG is 1,187,008 bytes and the base
   stylesheet is 143,317 bytes before transfer compression. Make a suitably
   sized WebP/AVIF portrait, reserve its dimensions, and remove unused CSS only
   with visual comparisons. Use small preview images for tiles and consider
   loading their requests as the Work section approaches the viewport.
4. **Prepare the final content for launch.** This fork intentionally contains
   Lorem Ipsum, empty preview lists and placeholder destinations. Add the real
   content when ready; check text contrast over those actual images at the
   chosen overlay opacity. Export or update the saved HTML from the final config
   so no-script readers and metadata consumers receive the same content. Add
   favicon and social-preview metadata for a more complete shared link.

Recommended next step: a real-browser desktop/mobile pass before publishing,
using the actual project images and final copy.
