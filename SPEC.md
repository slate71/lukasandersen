# lukasandersen.com — specification

Draft 2026-10-22. Four parts: what exists, what it promises, how it acts,
how we know the how honors the what. Promises marked *(inferred)* are my
guesses at your decisions. Fix those; the rest follows.

## 1. What exists

- **Author.** Lukas Andersen. One person, "I", never "we".
- **Readers**, in the order they matter through 2026-12-09:
  1. A warm contact who tapped the link in a DM or the LinkedIn profile.
  2. A hiring manager or recruiter sent there by a warm contact.
  3. An operator or buyer sent there from slate71.com or the benchmark.
  4. A stranger from a post. Not designed for yet.
- **Direction.** One sentence, the same one as
  `anvil-private/market/direction.md`. The site renders it; it does not own it.
- **Proof.** One production system with measured numbers (MightyMite,
  since August 2026). The numbers come from the facts pack and slate71.com.
- **Career.** HouseCanary, Airbyte, Intel, twelve years in San Francisco.
- **Stories.** Things done, each with a number and a principle. Not built
  yet. The next increment after the batch is out.
- **Contact.** Email and phone. No form.
- **Surfaces.** Three, each owning something:
  - lukasandersen.com owns the person: direction, availability, career.
  - slate71.com owns the company: the system, the numbers, how it is built.
  - LinkedIn owns reach: headline and about are derived from this site,
    never written separately.
- **Deploy.** Astro static, Netlify, builds on every push to `main`.

## 2. What it promises

- **P1** *(inferred)* A warm contact understands within twenty seconds
  what Lukas does now, that he is available, and how to reply.
- **P2** Every claim on the page is a measured fact with a source. No
  claim rests on an adjective.
- **P3** *(inferred)* The direction sentence on the page is the one in
  `direction.md`, word for word. One source.
- **P4** *(inferred)* Both lanes are readable without the other getting in
  the way: a buyer sees the shape of a build and how it is priced, a hiring
  manager sees the career and what he is accountable for.
- **P5** Contact is one tap: email and phone, above the fold on a phone.
- **P6** The home page is the whole site. Nothing links to an empty or
  stale section.
- **P7** No number, date, or name on this site contradicts slate71.com or
  LinkedIn.
- **P8** Loads in under a second on a phone and reads without JavaScript.
- **P9** Nothing on the site says what Lukas is not: no team, no office,
  no services he would not take.

## 3. How it acts

- Copy lives in `src/pages/index.astro`. Numbers are copied from slate71.com
  and the facts pack, never recomputed here.
- When a number changes on slate71.com it changes here the same day.
- When `direction.md` changes, the first line of the page changes with it.
- LinkedIn headline and about are regenerated from the page copy when the
  page changes, and pasted by hand.
- Stories land one at a time, each with its number and source, below the
  proof and above the career.
- A push to `main` deploys. No branch lives longer than a day.

## 4. How we know

- **Link check** on every build: no 404 on the page.
- **Consistency check**: a script greps the numbers, dates, and names on
  this page against slate71.com and fails on a mismatch (P7).
- **Budget**: Lighthouse performance 95+ on mobile; page under 100 KB
  before fonts (P8).
- **The read test** (P1): before the batch, one warm contact reads the
  page cold and says back what Lukas does and whether he is available. Two
  misses means the copy is wrong, not the reader.
- **The measured number**: replies to the warm batch that mention the page
  or the proof, logged on the HubSpot deal in `came_back_with`. If the
  batch runs and no reply references it, the page is not doing its job.

## LinkedIn, derived from the page

Headline (220 chars max):
> I build AI systems that do real work inside a business. One fixed-scope
> build at a time. Room for one this quarter.

About:
> Since August 2026 a California pest-control company has filed its termite
> inspection reports through a system I built and run. The inspector talks
> through the property on an iPad and taps submit; the state report, its
> findings and the diagram are in the office's Salesforce under a minute
> later. Before, the report reached the office a median of one day after
> the inspection. All four inspectors use it every day, and they pay for it.
>
> I take on one fixed-scope build at a time, four to eight weeks, priced by
> the week: a messy input that has to become a document somebody signs or
> files, written into the system the business already runs. Narrow typed
> steps, the business's own vocabulary, every output stamped with what made
> it, a test suite built from real cases.
>
> Before this: twelve years of full-stack engineering in San Francisco.
> Seven at HouseCanary leading the team behind a data platform that drove
> 40% of revenue. Engineering lead at Airbyte. Intel before that.
>
> lukasandersen.com · lukas@lukasandersen.com
