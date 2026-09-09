# Alan Hall Counselling

A static preview website for Alan's counselling and CBT practice in Southport.
Built with HTML and CSS, with no JavaScript, build step, analytics or embedded
third-party content. The page remains marked `noindex, nofollow` for review.

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
| `assets/fonts/` | Self-hosted Jost and Open Sans plus their licence files |
| `assets/accreditation/` | PSA mark sourced from the directory profile, pending approval |
| `.gitignore` | Excludes editor settings, agent files, handoffs and verification scratch work |

## Design and content

The theme follows [Inner Shield Therapy](https://innershieldtherapy.co.uk/):
Jost headings, Open Sans body text, square blue buttons, soft yellow panels
and a centred masthead. The design was checked against the reference's rendered
styles on 9 September 2026. It uses the existing portrait and original botanical
artwork; no photographs or organisation logos were recreated from the reference.

Core colours live in `:root`: blue `#25648e`, yellow `#f7e6a3`, dark text
`#171717` and secondary text `#454545`. Pale blue is used for supporting sections.
Recheck contrast on every background when changing these values.

Main first-person prose comes from
[Alan's Counselling Directory profile](https://www.counselling-directory.org.uk/counsellors/alan-hall).
Keep his wording, British spelling and the existing section meanings. Typographic
normalisation and structural labels are separate from his prose. Any new advice,
service promise or FAQ wording needs a visible draft marker until approved.
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
mark, not the BACP member logo. The draft labels it accordingly. Confirm the
artwork and its use with BACP before publication. The BACP slot deliberately
contains text until Alan supplies his own member-specific logo and registration
number from his account. Retain the logo's collective-mark wording and original
format. See [BACP's current guidance](https://www.bacp.co.uk/membership/promoting-your-membership/)
and [PSA's Quality Mark guidance](https://www.professionalstandards.org.uk/organisations-we-oversee/our-work-accredited-registers/about-accredited-registers).

## Contact and privacy

Telephone links use `+447736770100`. Booking and enquiry buttons link to Alan's
existing Counselling Directory forms. They are external services, not embedded
forms, and have their own privacy policies. No personal email address has been
invented. The [booking page](https://secure.counselling-directory.org.uk/introductory-call/110919/select-slot)
states a response within approximately one working day and calls lasting no more
than 20 minutes. The response timing is scoped to introductory-call requests;
the [enquiry page](https://secure.counselling-directory.org.uk/counselloremail_110919.html)
does not state a response time. Both pages were read directly on 9 September 2026.

The page itself sets no cookies and loads its subresources locally. This does
not establish how a future hosting provider logs requests, or how Alan handles
contact information. A full privacy notice still needs his approval.

## Approval checklist

Before presenting this as a finished public practice site, obtain:

- Alan's approval of all draft wording and client types, especially couples,
  families, groups and organisations.
- Session length, cancellation/payment terms, confidentiality wording and a
  full privacy notice, including hosting and contact-data handling.
- BACP registration number, official member logo and confirmation of PSA use.
- Resolution of `BSc (Hons)` in the profile heading versus `BSc (Econ)` in its
  qualifications list. Both are currently preserved from the source.
- Address confirmation: his profile contains both `PR8 1JR` and `PR9 0PA`.
  The draft uses the therapy-room postcode, `PR8 1JR`.
- Confirmation of current building access. The access statement comes from
  Alan's profile and has not been independently checked at the building.
- A higher-resolution portrait, confirmation that it can be used, and a personal
  email address if he wants one displayed.
- A real-phone check of the menu, availability grid and contact buttons.
- A final hosting/domain choice before adding canonical metadata or removing
  the preview banner and `noindex` directive. Noindex is not access control.

## Hosting status

This directory is an independent local Git repository. Creation of the proposed
`duzos/alan-hall-counselling` GitHub repository and publication await approval.
The existing preview is at
[duzo.is-a.dev/sites/counselling/](https://duzo.is-a.dev/sites/counselling/).
It does not yet contain this restyle.

For GitHub Pages, publish `main` from the repository root. Assets use relative
paths, so the site supports a project subdirectory. Verify the actual HTTPS URL
and every asset after deployment. Only then remove the former portfolio copy.

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
