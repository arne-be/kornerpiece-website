# kornerpiece — redesign plan

Goal: keep the brand (colours, Kanit, puzzle pieces), drop the dark, old-school look. Lighter, cleaner, more whitespace. Add the work since the last update (Powernaut, KU Leuven thesis, Deilbach).

## Brand tokens (checked against the Figma file, Brand Guide page)

| Token | Hex | Old use | New use |
|---|---|---|---|
| primary | `#010208` | page background | text and dark accents |
| secondary | `#D15F4C` | buttons, headings | main accent: links, highlights, the "active" puzzle piece |
| accent | `#FFAEAB` | highlights | soft fills: tags, card tints, chart bands |
| neutral | `#E3E4E6` | body text (65 / 45 % opacity) | borders, dividers, light surfaces |
| new: paper | `#FAFAF8` | — | page background (light, slightly warm) |

Figma's colour names: Primary `#D15F4C`, Accent `#FFAEAB`, Neutral 1 `#E3E4E6` (Neutral 2/3 are the same grey at lower opacity), BG `#010208`. They match `tailwind.config.js`, only the names differ.

Font: **Kanit** (Figma's brand font; the current site wrongly loads Poppins). Weights 300 Light, 600 SemiBold, 700 Bold, 800 ExtraBold. Type scale from Figma, line-height 1.5:

| Style | Size | Notes |
|---|---|---|
| H1 | 56px | tracking −1.12px |
| H2 | 40px | |
| H3 | 32px | |
| H4 | 24px | uppercase, tracking 1.44px |
| H5 | 16px | uppercase, tracking 0.64px |
| Body 1 | 18px | |
| Button | 16px | uppercase, tracking 0.64px |
| Label | 14px | uppercase |

Assets exported from Figma (vector, so they stay sharp and are easy to recolour):
- `src/assets/kornerpiece_logo.svg`: the single piece logo, coral.
- `src/assets/kornerpiece_matched.svg`: the four pieces joined.
- `src/assets/puzzle/piece_{tl,tr,bl,br}_{ink,coral}.svg`: each piece on its own, all on the same 368×368 canvas. Stacking them gives the joined square, so the hero animation only has to transform each one back to `none`.

Text contrast note: `#D15F4C` on white is about 3.9:1, so it's fine for large headings and UI, not for small body text. Use `#B84A38` (a darker shade of secondary) for small links.

## Page structure

Nav: `Now · Projects · About · Contact`, with the kornerpiece logo on the left (style A header, sticky, no bottom border). The `navLinks` ids change to `arne`, `now`, `projects`, `about`, `contact`.

### 1. Hero (`#arne`)

Same idea as today: the "I am Arne" statement, the headshot and the puzzle.

- Layout (style C): a centred headline, a subline, then the large puzzle centred below it, with a "Scroll to put the pieces together" hint.
- Headline: **I am [round headshot inline] Arne,** a **Software & ML Engineer** with a passion for **Energy**. The headshot is a small circle in the text line (style A).
- Subline: *Forecasting, optimisation and trading systems for a grid that runs on renewables.*
- **3D scroll animation:** four puzzle pieces start spread out and tilted in 3D (rotateX/rotateY, different z depths). As you scroll through the hero, they fly together and lock into the square `kornerpiece_matched` shape. The last piece to snap in is coral (`secondary`), "the corner piece".
  - Build: a sticky stage about 200vh tall. Scroll progress 0→1 drives `translate3d` and `rotate3d` for each piece. Use the existing `useScrollPosition` and `useOffsetTop` hooks, so there's no new dependency (no three.js needed).
  - Pieces as inline SVG paths, so they stay sharp and can be recoloured.
  - `prefers-reduced-motion`: show the assembled puzzle and skip the animation.
  - Mobile: a shorter sticky distance (about 120vh) and smaller offsets.

### 2. Currently working on (`#now`)

One large feature card.

- **River level prediction** (Deilbach Pegel Vorhersage): water level forecast for the Deilbach at Essen-Kupferdreh.
- Text (the personal part is part of the paragraph, not a separate callout): *An hourly 24-hour water level forecast for the Deilbach in Essen-Kupferdreh, the stream that runs right past my family's house. The July 2021 flood reached us too, and since then our own gauge has watched the water. The forecast combines it with three upstream gauges and DWD rain radar and forecasts, and shows the highest expected level with flood categories and an uncertainty range. That gives us and our neighbours a few hours' head start.*
- Facts row: `Hourly updates` · `24 h horizon` · `4 gauges + DWD radar` · `AWS`.
- Visual: screenshot of the live page's house illustration + chart, without the page header (`src/assets/deilbach_screenshot.jpg`), shown with rounded corners and linked to the live site. Retake it when the site's design changes.
- Links: **Live forecast** → https://deilbach-pegel.energiekonzepte-ruhr.de/ · **GitHub** → https://github.com/arne-be/deilbach-pegel-prediction
- Tags: Python · AWS · Postgres · Time-series forecasting

### 3. Past projects (`#projects`)

Horizontal scroll row like today, with lighter cards. Card = label (org · year), title, 2-line summary, tags, and links only where they exist (Paper, GitHub, Client). No "Read more": cards without links just end after the tags. Newest first.

**New, from the CV (no public links):**

1. **Home energy optimiser** · Powernaut · 2025–now
   - Summary: Optimiser for batteries, PV and EV charging, running across 500+ residential homes.
   - Longer text (optional, e.g. for a tooltip or later): *Built the optimiser that schedules home batteries, PV and EV charging against day-ahead and imbalance prices. It runs across 500+ residential homes and earns about €300 per household per year in trading revenue, while keeping comfort and device limits.*
   - Tags: Optimisation · Python · Flexibility · EMS
2. **Intraday trading algorithms** · Powernaut · 2025–now
   - Summary: Led the development of intraday trading algorithms that cut the PV portfolio's imbalance exposure by 4.4%.
   - Longer text (optional, e.g. for a tooltip or later): *Led the development of the algorithms that trade a PV portfolio's forecast updates on the intraday market, so less of the forecast error ends up as imbalance. Result: 4.4% less imbalance exposure.*
   - Tags: Intraday market · Trading · Imbalance
3. **Trading value of flexibility** · Powernaut · 2025–now
   - Summary: Owned the evaluation behind pilots with 3 of Belgium's largest B2C energy suppliers.
   - Longer text (optional, e.g. for a tooltip or later): *Built the framework that measures what home flexibility is worth in pilots with 3 of Belgium's largest B2C energy suppliers. Its results were the basis for the positive business case.*
   - Tags: Evaluation · Data analysis · Business case
4. **PV forecasting service** · Powernaut · 2024–2025
   - Summary: Co-built the forecasting service for 921 PV assets (179.7 MW), 35% lower error than the naive baseline.
   - Longer text (optional, e.g. for a tooltip or later): *Co-built the production service that forecasts 921 PV assets, 179.7 MW in total. Its forecasts drive day-ahead and intraday order creation. The forecast error is 35% lower than the naive baseline.*
   - Tags: Time-series forecasting · PyTorch · AWS · ClickHouse
5. **Heat pump control vs. price signals** · KU Leuven MSc thesis · 2024
   - Summary: Economic evaluation of heat pump controls on day-ahead and imbalance price signals.
   - Longer text (optional, e.g. for a tooltip or later): *My master's thesis: how much a heat pump can save when its control reacts to day-ahead or imbalance prices instead of running on a fixed schedule, and what that means for comfort.*
   - Tags: Heat pumps · Flexibility · Simulation
   - Open: link to the thesis PDF if you want to publish it.

**Kept from the current site:**

6. **PV power forecasting with sky images and sun motion**: IEEE ICASSP 2024 paper, thesis graded 10/10. Links: Paper, GitHub (unchanged).
7. **Volunteer-success forecasting (Emergent)**: unchanged.
8. **kornerpiece**: this site. Update the text to describe the redesign.
9. **Face Mask Detection**, **ML & Computer Vision projects**: keep, or move to an "older work" toggle at the end of the row.

**Optional:** *Release & CI/CD tooling at Schneider Electric*: coordinated releases across 20+ projects, optimised GitHub Actions. It's engineering, but less on-theme. Your call.

**Left out on purpose:** solution engineering and pre-sales (not an engineering project).

Data change: add `org`, `year` and `tags` to the `projects` entries in `src/constants/index.tsx`. Make `button*`/`image` optional.

### 4. About me (`#about`, replaces the old About)

Calm and personal, not a sales pitch. Two columns: a short heading on the left, three paragraphs on the right, then a small fun-fact card with the coral puzzle piece.

- Heading: **It started with a camera pointed at the sky.**
- *For my bachelor thesis I tried to predict how much power a solar panel would produce in the next few minutes by looking at clouds. That question never really left me. A grid that runs on renewables has to live with weather it can't control, and I like the quiet work of making it a little more predictable.*
- *What drives me is curiosity, and the feeling of owning something from the first idea to the version people actually use. I like small teams, simple products and things made with care. That goes for software, and just as much for music, photography and design.*
- *The name comes from how I like to work: start with one piece, understand its shape, and see what fits next.*
- Fun fact (draft, swap freely): *I've lived in Essen, Barcelona, Seoul, Leuven and Berlin, and I can order a coffee in four languages. Catalan is still the shakiest.*

### 5. Contact (`#contact`)

Same as today: "Get in touch" + email, LinkedIn, GitHub. Suggest dropping Twitter/X unless it's still used. Fix while touching it: `socialMedia` in constants has a broken email (`arne.berresheimgmail.com`) and placeholder links. It's unused, so delete it (and `footerLinks`, which are leftover HooBank template links).

## Style direction

Chosen: **D · Combined** on the design canvas (https://claude.ai/artifact/YATAii6mXUJvYn5f18aFES).
- The off-white `#FAFAF8` page, thin `#E3E4E6` lines and white cards from A.
- The header from A, with no bottom line.
- The centred hero and the large puzzle from C, with A's round headshot inline in the headline.
- The Now card and project cards from A. The new About section above, then A's contact section.

Implementation order:

1. Tailwind: add `paper` and the darker secondary shade, and switch `fontFamily` and the Google Fonts import in `src/input.css` from Poppins to Kanit. Switch `App.tsx` backgrounds from `bg-primary` to `bg-paper`, and text from `text-neutral`/`text-white` to `text-primary`.
2. Hero: the new copy + the scroll puzzle (new `Puzzle.tsx`).
3. New `Now.tsx` for the current project.
4. `Projects.tsx`: the lighter card; links only where they exist.
5. Rewrite `About.tsx` with the new text. It keeps its name.
6. Update the og:description in `index.html` ("ML engineer" → "Software & ML engineer in energy").
