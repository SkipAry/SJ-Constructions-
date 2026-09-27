# Design guidelines

Reference: https://wilmer.qodeinteractive.com/landing/

Navy #09194a, safety orange #ff6029, white and pale gray. Barlow type with heavy uppercase display text. Reference signature: floating image panels, diagonal texture, large outlined labels, generous whitespace and orange rectangular actions. Content belongs to SJ Constructions.

Transforms and opacity power decorative motion. Continuous movement can be paused; reduced-motion preferences remove animation. Mobile collapses the gallery, equipment and form layout. Buttons and links have keyboard focus states; native dialogs provide focus trapping and Escape dismissal.

## Readability revision

Use 17–19px body copy, 16px interactive text and 14–15px notes. Stronger muted-text color #505d72. Preserve fluid heading sizes and minimum 44px tap targets. At ≤700px, render the existing project table as labeled stacked records rather than forcing horizontal table navigation. At ≤420px, stack team roles and films. Mobile hero flows naturally without absolute-positioned text overlap. Breakpoint verification: 320/375/430/768/1024/1440/1920px.

## Hero-only revision

The floating hero collage is replaced by a full-width muted background video from `hero_video.mp4`. Sentence-case hero text, readable overlays and individual playback control are scoped to the hero. All other sections retain the previous navy/orange palette, uppercase display headings, photography, spacing and decorations. Keep the existing responsive readability improvements.

## Spacing and alignment audit

Retain the current visual design and video navigation. Content sections use 48–72px vertical padding on desktop/tablet and 40px on phones, replacing the previous 95–130px desktop and 64px phone padding. Body line-height is 1.6, display headings 1.12–1.14. Section headings, intro columns and project captions align consistently; dashboard, inventory and team spacing follow a tighter rhythm. Body text stays at least 17px. Verified no page overflow at 320, 414, 768 and 1440px; production build passes.
