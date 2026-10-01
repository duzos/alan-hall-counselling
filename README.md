# Alan Hall Counselling

The public website for Alan's counselling and CBT practice in Southport.
Built with HTML and CSS, with a small local header script, no build step and no analytics.
The location section embeds Google Maps, which runs its own third-party code.
It is live and indexable at https://alanhallcounselling.co.uk/, with a canonical
URL, `robots.txt` and `sitemap.xml`.

## Preview locally

From this directory, run:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Open [the local preview](http://127.0.0.1:8765/). Stop the server with Ctrl+C.
You can also open `index.html` directly.

## Project files

| Path | Purpose |
| --- | --- |
| `index.html` | Page content, contact links, availability and native FAQ disclosures |
| `style.css` | Complete responsive theme and self-hosted font declarations |
| `assets/alan-hall.png` | Existing 400 by 400 portrait, displayed at a smaller size |
| `assets/favicon.svg` | Original botanical identity mark |
| `assets/mixed-flower-field.png` | Generated daisies, sunflowers and lavender meadow, served locally |
| `assets/sand-sunset.jpg` | Rippled sand at sunset, Alan's photo, in the introductory quote panel |
| `assets/cove.jpg` | Wooded cove, Alan's photo, behind the FAQs |
| `assets/fells-tree.jpg` | Tree below sunlit fells, Alan's photo, behind About me |
| `assets/sea-stack.jpg` | Sea stack in turquoise water, Alan's photo, behind the phone-number panel |
| `assets/fonts/` | Self-hosted Jost and Open Sans plus their licence files |
| `assets/accreditation/` | PSA Quality Mark sourced from the directory profile |
| `.gitignore` | Excludes editor settings, agent files, handoffs and verification scratch work |

## Design and content

The theme follows [Inner Shield Therapy](https://innershieldtherapy.co.uk/):
Jost headings, Open Sans body text, square blue buttons, soft yellow panels
and a centred masthead. The design was checked against the reference's rendered
styles on 9 September 2026. It uses the existing portrait and original botanical
artwork; no photographs or organisation logos were recreated from the reference.

The hero now uses Alan's supplied sunset sea photograph (22 September 2026); the mixed meadow is retained as an unused variant. The introductory quote, About and phone-number panels
each use a different close-up: a daffodil, a sunflower and a lavender spike.
Continuous radial yellow and blue washes span each panel, fading smoothly from
the text area towards the image edges without rectangular text backgrounds.
The moving image layers use 60% opacity. The quote
uses a stationary vertical fade to reveal the flower below its text. The daffodil covers its own panel, with 80px of vertical overscan and 120px of locally calculated parallax travel. It never uses a viewport-fixed background; reduced-motion disables its movement. Native CSS
scroll timelines move the background
through 360px of travel while the content stays still. The layer extends 200px
beyond each vertical edge to avoid gaps. Older desktop browsers use a
fixed-background fallback; other unsupported browsers show a still image.
Reduced-motion preferences disable both effects. No JavaScript is needed.

The header folds into a slim navigation bar while scrolling: about 45px on
desktop and 48px on phones. `header.js` switches the compact state after 80px
of scrolling, with CSS transitions and a stable spacer to avoid jumps. It also
updates on restored page positions. Reduced-motion disables transitions. Without
JavaScript, the full sticky header and mobile menu remain usable. Section links
account for header height.

The meadow was created with the built-in image generator. Prompt: a wide,
photorealistic sunlit English-style meadow filled with white daisies, golden
sunflowers, yellow cosmos and recognisable purple lavender; foreground flowers
at both edges, soft countryside depth, warm daylight, little sky and a softly
focused centre for text, with no people, buildings, text or logos. It depicts an
imagined setting. The original yellow-only image is retained as an unused variant.

The three individual flower assets also use the built-in image generator. Each
prompt requests a single photorealistic flower against a soft warm yellow
background, natural daylight and shallow depth of field, without text or logos:
a white daisy with a golden centre, a golden sunflower with a dark brown centre,
and a purple lavender spike on a slender stem. Each is a separate image.

The replacement assets use the built-in image generator. Dandelion prompt:
"Create a photorealistic botanical website background: a single delicate white
dandelion seed head on a slender stem, entire round seed head fully visible centred
horizontally and vertically, occupying about 45% of image width, ample clear space
around it. Soft warm pale yellow backdrop matching #f7e6a3, natural soft sunlight,
calm counselling website mood, square composition, no text, no watermark."
Lavender edit prompt: "Edit this botanical photograph. Preserve the single purple
lavender spike and natural detail. Replace the entire yellow green background with
a softly blurred rich blue backdrop matching #25648e, with subtle blue tonal
variation. Keep the landscape composition and lavender placement; no text or
logos. For a calm counselling website phone-number panel."
The earlier daisy and yellow-backed lavender images are retained as unused variants.

Core colours live in `:root`: blue `#25648e`, yellow `#f7e6a3`, dark text
`#171717` and secondary text `#454545`. Pale blue is used for supporting sections.
Recheck contrast on every background when changing these values.

Main first-person prose comes from
[Alan's Counselling Directory profile](https://www.counselling-directory.org.uk/counsellors/alan-hall).
Keep his wording, British spelling and the existing section meanings. Typographic
normalisation and structural labels are separate from his prose. FAQs now use
source-supported information only. Unresolved details stay in this README,
not as repeated notes addressed to Alan on the client-facing page. Do not invent
service promises or policy wording to fill those gaps.
Do not introduce em dashes.

The availability table preserves the profile's 35 individual states. Every cell
has accessible wording and available cells also have a visible tick. The eleven
experience entries use the ten-item professional-experience list plus the
internet/social-media experience described in his prose. They are not a list of
claimed specialisms.

## Fonts and artwork

Jost and the current Open Sans release use the SIL Open Font License 1.1.
Full licences are included as `JOST-OFL.txt` and `OPEN-SANS-OFL.txt`, alongside the
existing attribution notice. Fonts are served from this directory, never a CDN.
The retired Newsreader files are no longer required by the theme.

The PSA artwork is a **Professional Standards Authority accredited register**
mark, not the BACP member logo. PSA's published guidance explicitly permits
practitioners on accredited registers to display the Quality Mark. The existing
artwork is kept intact, with accurate alternative text. This policy check does
not independently verify Alan's current register entry; his directory profile
states registered membership.

BACP's generic corporate 'counselling changes lives' logo must not be used on
member promotional sites according to its current guidance. The membership block
uses text until Alan provides his account-issued member logo and registration
number. There is no empty logo placeholder on the page. Retain the official
logo's collective-mark wording and original format when supplied. Rules checked
on 9 September 2026: [BACP guidance](https://www.bacp.co.uk/membership/promoting-your-membership/)
and [PSA guidance](https://www.professionalstandards.org.uk/organisations-we-oversee/our-work-accredited-registers/about-accredited-registers).

## Contact and privacy

Telephone links use `+447736770100`. Booking and enquiry buttons link to Alan's
existing Counselling Directory forms. They are external services, not embedded
forms, and have their own privacy policies. No personal email address has been
invented. The [booking page](https://secure.counselling-directory.org.uk/introductory-call/110919/select-slot)
states a response within approximately one working day and calls lasting no more
than 20 minutes. The response timing is scoped to introductory-call requests;
the [enquiry page](https://secure.counselling-directory.org.uk/counselloremail_110919.html)
does not state a response time. Both pages were read directly on 9 September 2026.

Fonts and decorative images load locally. The room section contains a responsive,
lazy-loaded Google Maps iframe for Hesketh Mount Therapy Rooms at 92-96 Lord
Street, Southport PR8 1JR, plus a directions link. It connects to Google and may
involve Google cookies and visitor-data processing; privacy links appear beside
the map and in the footer. This does not establish how a future hosting provider
logs requests, or how Alan handles contact information. A full privacy notice
still needs his approval.

The footer now gives a factual website privacy summary without draft wording:
no site analytics or advertising trackers, locally hosted visual assets, Google
Maps processing, and external Counselling Directory forms with direct privacy
links. It does not claim to be a complete counselling-client privacy notice or
make unverified promises about retention, confidentiality or hosting logs.

## Outstanding details

The site went public on 23 September 2026. These details are still to come from
Alan and must not be invented in the meantime:

- Session length, cancellation/payment terms, confidentiality wording and a
  full privacy notice, including hosting and contact-data handling.
- BACP registration number and official member logo; verify the current register entry.
- A higher-resolution portrait, confirmation that it can be used, and a personal
  email address if he wants one displayed.

The degree is `BSc (Econ)`, and the therapy-room postcode is `PR8 1JR`
(the profile's `PR9 0PA` is not used). Both confirmed by James on 23 September 2026.

The real-phone check of the menu, availability grid and contact buttons passed on
23 September 2026.

Current building access was confirmed by James on 9 September 2026. The access
statement on the page is confirmed and needs no further approval.

All eight client types in "Who I see" were confirmed by James on 9 September
2026: young people, young adults, adults, older adults, couples, families, groups
and organisations. No further confirmation of this list is needed.

## Hosting status

Published from the `main` branch root of `duzos/alan-hall-counselling` through
GitHub Pages, on the custom domain `alanhallcounselling.co.uk` (`CNAME` file).
The domain is registered with Cloudflare, whose DNS points the apex at GitHub
Pages' A/AAAA records and `www` at `duzos.github.io`. Keep those records
DNS only (not proxied) so GitHub can renew its HTTPS certificate.

## Resource sources

Helpline information was checked on 9 September 2026 against:

- [Samaritans](https://www.samaritans.org/how-we-can-help/contact-samaritan/)
- [Shout](https://giveusashout.org/get-help/)
- [CALM](https://www.thecalmzone.net/suicide-prevention-helpline)
- [SANEline](https://www.sane.org.uk/how-we-help/emotional-support/saneline-services)
- [Papyrus](https://www.papyrus-uk.org/help-me/hopeline-24-7)
- [Mind](https://www.mind.org.uk/information-support/helplines/)
- [NHS urgent mental health help](https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/)

Papyrus currently advertises `0300 102 2470`; older directories and PDFs still
show a different number. Mind excludes bank holidays. Do not describe every
helpline as free: 0300 calls may be charged by the caller's provider.

The quote panel now uses `assets/daffodil.png`, generated with the built-in image generator. Prompt: "Photorealistic botanical website background, square composition. One golden yellow daffodil with its unmistakable trumpet-shaped centre and six outer petals, on a slender green stem. Entire flower head fully visible and centred horizontally and vertically, occupying about 45% of the image width, ample space around it. Soft warm pale yellow background matching #f7e6a3, gentle natural sunlight, calm mood for a counselling website. No text, logos or watermark." The dandelion is an unused variant.

Current profile refresh: the About section now specifies the Harris Manchester College, University of Oxford Research Fellowship dates (2022 to 2025) and research focus (mindfulness in education), as stated in the profile training and experience section. Rechecked against https://www.counselling-directory.org.uk/counsellors/alan-hall on 9 September 2026. The existing fee, introductory call, core qualifications and written availability remain consistent with the profile. The profile now states that other face-to-face locations in Lancashire, Merseyside and Greater Manchester may be available; the website mirrors that wording without naming a second room.

Booking buttons consistently say "Book a free 20-minute call" and open the Counselling Directory booking form. The hero summarises the fees (£50 in person, £35 online), free introductory call and meeting options. Availability retains the visual time-of-day grid with exact written weekly hours available in its reveals. The grid preserves broader availability, including Wednesday across all five time bands, without inventing exact Wednesday hours.

Availability layout trial: days now run down one table, with five time-band blocks. Hover, focus or tap available blocks for exact hours and session format. Mobile displays each day as a card using the same table content. All 35 availability states and the written hours are preserved; Thursday and Sunday explicitly show no listed availability.

## Coastal hero revision, 22 September 2026

The supplied `content.jpg` is preserved as `assets/sea-sunset.jpg`, and
`IMG_8013.png` as `assets/alan-hall-logo.png`. The screenshots are design references
only and are not website assets. No generated replacements or photo edits were used.
The header displays the cave emblem through CSS cropping of the supplied logo,
with a horizontal live-text wordmark. The supplied full logo is also the favicon.

The hero places the horizon near the lower third, uses a continuous light wash
behind the introduction, and moves the existing portrait to the right on desktop.
Fee, consultation and meeting details sit in a dark strip over the water.
Mobile has its own crop, smaller portrait above the copy and stacked details.
The header now starts at 100px on desktop (116px tablet, 84px phone) and compacts
on scroll, retaining its logo, centred desktop links and mobile burger menu.
Other sections and all availability details are unchanged. This revision is approved for publication on GitHub Pages.
