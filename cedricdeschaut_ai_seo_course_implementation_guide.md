# CedricDeSchaut.com AI SEO Course Implementation Guide

Date: March 13, 2026
Audience: coding agent
Input strategy: [cedricdeschaut_ai_seo_course_website_strategy_dataforseo.md](/Users/cedricdeschaut/code/headofgrowthmarketing/cedricdeschaut_ai_seo_course_website_strategy_dataforseo.md)

## Objective

Implement a site update that increases purchases of the `AI SEO for Large Enterprises` course by:

1. repositioning the site around `AI SEO` demand
2. creating a proper money page for `AI SEO course`
3. supporting enterprise buyers with a team-training page
4. improving crawlability, metadata, schema, and internal linking
5. turning existing articles into a real AI SEO authority cluster

## Important strategy constraints

- Treat `AI SEO` as the main authority topic.
- Treat `AI SEO course` as the main money-page keyword.
- Treat `for enterprise teams` and `for large enterprises` as positioning language, not the main SEO anchor.
- Do not build the site around `enterprise ai seo` as the main keyword target.
- Do not keep any homepage or course-page copy that implies users can get the paid course for free via the community.

## Build scope

Implement the following:

1. Rework the homepage to focus on enterprise AI SEO training.
2. Create a new primary money page at `/ai-seo-course/`.
3. Create a new support/commercial page at `/enterprise-ai-seo-training/`.
4. Rebuild `/articles/ai-seo/` into a true pillar page.
5. Fix the existing broken CTA path from the AI SEO article.
6. Add metadata, social tags, and JSON-LD to all key indexable pages.
7. Update crawl/index signals, including `robots.txt` policy.
8. Expand internal linking between homepage, course page, pillar page, and support pages.
9. Add analytics events for the full commercial funnel.

## If the site code is not in this repo

This repository does not appear to contain the production site templates for `www.cedricdeschaut.com`.

If the website source lives elsewhere:

- use this document as the implementation contract
- map each URL below to the corresponding template or page file in the real site repo
- preserve the exact route names where possible

## Route plan

### Existing routes to update

- `/`
- `/articles/`
- `/articles/ai-seo/`
- `/ai-seo-course-preview/`

### New routes to create

- `/ai-seo-course/`
- `/enterprise-ai-seo-training/`
- `/enterprise-ai-seo-course-syllabus/`
- `/articles/enterprise-seo-for-ai-search/`
- `/articles/ai-search-optimization/`
- `/articles/chatgpt-seo/`
- `/articles/llm-seo/`

### Route behavior decisions

- Keep `/ai-seo-course-preview/` as a preview/support page only if needed.
- If `/ai-seo-course/` becomes the primary sales page, then:
  - update homepage CTAs to point there
  - update article CTAs to point there
  - consider adding a clear link from preview to full course page
- Do not route commercial traffic primarily to `/ai-seo-course-preview/` once `/ai-seo-course/` exists.

## Homepage implementation

### Goal

Make the homepage clearly communicate:

`Cedric teaches AI SEO for enterprise teams`

### Required above-the-fold content

- H1: `AI SEO training for enterprise teams`
- Subheadline focused on enterprise teams winning visibility in ChatGPT, Perplexity, Gemini, and Google AI Overviews
- Primary CTA: `View the AI SEO course`
- Secondary CTA: `Book team training`
- Trust signals:
  - `10,000+ students taught`
  - `30+ multinational companies trained`

### Required homepage sections

1. Hero
2. Trust bar
3. Why AI SEO matters now
4. Featured course section
5. What teams will learn
6. Outcomes for enterprise teams
7. Featured articles/resources
8. FAQ
9. Final CTA

### Required homepage removals

- Remove or demote non-core course portfolio content from the main conversion path.
- Remove any line that says the free community includes the paid course.
- Remove generic CTA labels like `Learn More` in primary conversion areas.

### Homepage metadata

- Title: `AI SEO Training for Enterprise Teams | Cedric De Schaut`
- Meta description: mention `AI SEO`, `enterprise teams`, and `AI SEO course`
- Canonical: homepage URL
- Open Graph:
  - `og:title`
  - `og:description`
  - `og:url`
  - `og:type=website`
  - `og:image`
- Twitter card tags

### Homepage schema

Add JSON-LD:

- `Person`
- `Organization` or `EducationalOrganization`
- optional `WebSite`

## AI SEO course page implementation

### Route

- `/ai-seo-course/`

### Goal

This is the main money page.

It should rank for `AI SEO course` and convert enterprise-fit buyers.

### Required metadata

- Title: `AI SEO Course for Enterprise Teams | Cedric De Schaut`
- Meta description containing:
  - `AI SEO course`
  - `enterprise teams`
  - `ChatGPT`, `Perplexity`, or `AI search`
- Canonical: `/ai-seo-course/`
- Full OG and Twitter tags

### Required page structure

1. Hero
2. Who this course is for
3. Why AI SEO is different for enterprises
4. Outcomes after completing the course
5. Curriculum
6. Included templates and resources
7. Instructor proof
8. Team access / multi-seat option
9. FAQ
10. Final CTA

### Required hero content

- H1 must include exact phrase: `AI SEO Course`
- Include enterprise qualifier in H1 or subheadline
- Include proof
- Include a primary CTA
- Include a secondary CTA for teams

### Required commercial UX changes

- Add distinct purchase path for:
  - individual seat
  - team license
  - private workshop / cohort
- Keep Stripe checkout for individual purchase if already working.
- Add a visible team-training CTA that can go to:
  - a contact form
  - email
  - calendaring link

### Required course-page schema

Add JSON-LD:

- `Course`
- `Offer`
- `FAQPage`
- `Person`
- `VideoObject` for embedded course videos

### Required content upgrades

- Replace generic bullet points with enterprise-operational outcomes.
- Add a proper curriculum section in HTML.
- Add transcript text or summary text for embedded videos.
- Add an HTML syllabus section or dedicated syllabus page.
- Add proof artifacts:
  - logos if available
  - testimonials if available
  - screenshots of curriculum/frameworks if available

### Required CTA labels

- `Buy the course`
- `Get team access`
- `See the full syllabus`
- `Book enterprise training`

## Enterprise training page implementation

### Route

- `/enterprise-ai-seo-training/`

### Goal

Capture commercial intent around `SEO training` and `enterprise SEO` with enterprise buying logic.

### Required content

1. Hero focused on team training
2. Audience fit:
   - heads of SEO
   - content teams
   - digital teams
   - agencies serving enterprise clients
3. Delivery formats:
   - team access
   - private workshop
   - cohort training
4. Outcomes
5. FAQ
6. CTA to enquire/book

### Metadata

- Title: `Enterprise AI SEO Training for Teams | Cedric De Schaut`
- Description should mention `SEO training`, `enterprise`, `AI search`

### Schema

- `Service` or `Course`
- `FAQPage`
- `Person`

## AI SEO pillar implementation

### Route

- `/articles/ai-seo/`

### Goal

Turn the existing article into the main authority page for `AI SEO`.

### Required changes

1. Rewrite the article so the first paragraph directly answers `What is AI SEO?`
2. Add a table of contents.
3. Add FAQ section using the observed PAA themes:
   - `Can SEO be done with AI?`
   - `What is AI SEO?`
   - `What is the difference between SEO and AI SEO?`
   - `Is AI going to replace SEO?`
4. Add internal links to:
   - `/ai-seo-course/`
   - `/enterprise-ai-seo-training/`
   - `/articles/chatgpt-seo/`
   - `/articles/llm-seo/`
5. Replace the broken CTA pointing to `#courses` with a direct link to `/ai-seo-course/`
6. Add author box
7. Add breadcrumbs
8. Add JSON-LD

### Required schema

- `Article`
- `FAQPage`
- `BreadcrumbList`
- `Person`

### Required content style

- direct-answer section openings
- comparison tables
- FAQ-friendly headings
- strong enterprise examples and language

## Support article implementation

Create these support articles:

- `/articles/enterprise-seo-for-ai-search/`
- `/articles/ai-search-optimization/`
- `/articles/chatgpt-seo/`
- `/articles/llm-seo/`

### Shared requirements

Every support article must:

- link to `/articles/ai-seo/`
- link to `/ai-seo-course/`
- link to one adjacent support article
- include FAQ section
- include author attribution
- include metadata and schema

## Article hub implementation

### Route

- `/articles/`

### Goal

Make the article hub feel like a resource center, not just a list of posts.

### Required changes

- Add a clear heading and subtitle around AI SEO / enterprise AI search resources.
- Feature the AI SEO pillar prominently.
- Add explicit path options:
  - `Start with AI SEO`
  - `View the AI SEO course`
  - `Book team training`
- Group content by topic when more pages exist.

## Crawl and indexing implementation

### robots.txt

Update `robots.txt` so the site no longer blocks the major AI crawlers that conflict with the AI SEO goal.

Current issue:

- `GPTBot`, `ClaudeBot`, `Google-Extended`, and `Applebot-Extended` are blocked

Implementation intent:

- standard search engines should continue to crawl
- AI visibility policy should no longer contradict the commercial goal

If business/legal still wants `ai-train=no`, keep that only if it does not block the retrieval/citation behavior you want.

### sitemap

Expand `sitemap.xml` to include:

- homepage
- article hub
- AI SEO pillar
- new course page
- team training page
- syllabus page
- all support articles

## Metadata implementation checklist

Every indexable page must have:

- unique `<title>`
- unique `<meta name="description">`
- canonical
- OG tags
- Twitter tags
- clean H1

## JSON-LD implementation checklist

### Homepage

- `Person`
- `Organization` or `EducationalOrganization`

### Course page

- `Course`
- `Offer`
- `FAQPage`
- `Person`
- `VideoObject`

### Team training page

- `Service` or `Course`
- `FAQPage`
- `Person`

### Articles

- `Article`
- `FAQPage`
- `BreadcrumbList`
- `Person`

## Internal linking requirements

### Homepage

Must link to:

- `/ai-seo-course/`
- `/enterprise-ai-seo-training/`
- `/articles/ai-seo/`

### Course page

Must link to:

- `/articles/ai-seo/`
- `/enterprise-ai-seo-training/`
- `/enterprise-ai-seo-course-syllabus/`

### AI SEO pillar

Must link to:

- `/ai-seo-course/`
- `/enterprise-ai-seo-training/`
- `/articles/chatgpt-seo/`
- `/articles/llm-seo/`
- `/articles/ai-search-optimization/`

### Support articles

Each must link to:

- `/articles/ai-seo/`
- `/ai-seo-course/`
- one sibling support article

## Analytics implementation

Track these events:

- `homepage_primary_cta_click`
- `homepage_secondary_cta_click`
- `course_page_view`
- `course_buy_click`
- `course_purchase_complete`
- `team_training_click`
- `syllabus_view`
- `article_course_cta_click`
- `newsletter_signup`

If GTM is already installed:

- implement these through GTM and/or dataLayer events
- ensure buttons and links have stable selectors or explicit tracking hooks

## Copy implementation notes

Coding agent should not invent messaging direction.

Use these rules:

- primary keyword on money page: `AI SEO course`
- primary positioning qualifier: `for enterprise teams`
- avoid broad generic hero language like `Lead AI Instructor & Best-Selling Author` as the only positioning signal
- avoid weak CTA labels like `Learn More` in commercial sections

## Visual implementation notes

If visuals are rebuilt:

- use enterprise, diagram-first visuals
- avoid generic lifestyle stock imagery
- keep a consistent AI SEO visual language across homepage, course page, and articles

## Acceptance criteria

The work is done only when all of the following are true:

1. Homepage clearly positions Cedric around enterprise AI SEO.
2. `/ai-seo-course/` exists and functions as the main money page.
3. `/enterprise-ai-seo-training/` exists and supports team-buying intent.
4. `/articles/ai-seo/` links correctly to the new commercial pages.
5. The broken article CTA to `#courses` is removed.
6. All key pages have metadata and JSON-LD.
7. `robots.txt` no longer contradicts the AI SEO goal.
8. `sitemap.xml` includes the new strategic pages.
9. The homepage no longer offers a free path that cannibalizes the paid course.
10. Analytics events are wired for the main conversion funnel.

## Suggested implementation order

### Phase 1

- homepage rewrite
- course page launch
- broken CTA fix
- metadata/schema foundation
- robots and sitemap updates

### Phase 2

- team training page
- syllabus page
- AI SEO pillar rebuild

### Phase 3

- support articles
- resource hub improvements
- proof assets and testimonials

## Deliverables expected from coding agent

1. Updated routes/pages
2. Updated metadata and schema
3. Updated internal linking
4. Updated tracking hooks
5. Short change log listing:
   - pages created
   - pages modified
   - schema added
   - analytics events added
   - any blockers or unresolved content dependencies
