const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const links = {
  newsletter: 'https://cedrics-newsletter-53ee29.beehiiv.com/subscribe',
  skool: 'https://www.skool.com/ai-seo-the-2025-community-4247',
  calendly: 'https://calendly.com/cedricdeschaut/intro-call',
  agenticSeo: 'https://www.agentic-seo.ai/',
  email: 'mailto:cedric@agenticautomates.com',
};

const nav = `
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="/" aria-label="AI Growth Systems by Cedric De Schaut">
                    <span>AI Growth Systems</span>
                    <small>Cedric De Schaut</small>
                </a>
            </div>
            <ul class="nav-menu">
                <li class="nav-item"><a href="/start-here/" class="nav-link">Start Here</a></li>
                <li class="nav-item"><a href="/#ai-growth-systems" class="nav-link">AI Growth Systems</a></li>
                <li class="nav-item"><a href="/consulting/" class="nav-link">Consulting</a></li>
                <li class="nav-item"><a href="/ai-training/" class="nav-link">Workshops</a></li>
                <li class="nav-item"><a href="/community/" class="nav-link">Community</a></li>
                <li class="nav-item"><a href="/newsletter/" class="nav-link">Newsletter</a></li>
                <li class="nav-item"><a href="/articles/" class="nav-link">Articles</a></li>
                <li class="nav-item"><a href="/about/" class="nav-link">About</a></li>
                <li class="nav-item nav-action-item"><a href="${links.newsletter}" target="_blank" rel="noopener" class="nav-link nav-button nav-button-primary">Join the Newsletter</a></li>
                <li class="nav-item nav-action-item"><a href="${links.calendly}" target="_blank" rel="noopener" class="nav-link nav-button nav-button-secondary">Book a Strategy Call</a></li>
            </ul>
            <button class="hamburger" type="button" aria-label="Open navigation">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
        </div>
    </nav>`;

const footer = `
    <footer class="footer">
        <div class="container">
            <div class="footer-content ecosystem-footer">
                <div class="footer-info">
                    <h3>AI Growth Systems</h3>
                    <p>Cedric De Schaut helps founders, consultants, marketers, operators, and lean teams use AI to get found, get customers, run lean, and build reusable business assets.</p>
                </div>
                <div class="footer-links">
                    <div class="footer-section">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="/#ai-growth-systems">AI Growth Systems</a></li>
                            <li><a href="/start-here/">Start Here</a></li>
                            <li><a href="/articles/">Articles</a></li>
                            <li><a href="/about/">About</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Ecosystem</h4>
                        <ul>
                            <li><a href="/newsletter/">Newsletter</a></li>
                            <li><a href="/community/">Community</a></li>
                            <li><a href="${links.agenticSeo}" target="_blank" rel="noopener">Agentic SEO</a></li>
                            <li><a href="/ai-growth-systems-sprint/">AI Growth Systems Sprint</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Work With Cedric</h4>
                        <ul>
                            <li><a href="/consulting/">Consulting</a></li>
                            <li><a href="/ai-training/">Workshops</a></li>
                            <li><a href="${links.calendly}" target="_blank" rel="noopener">Book a Strategy Call</a></li>
                            <li><a href="/ai-seo-course/">AI SEO Course</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Connect</h4>
                        <div class="social-links">
                            <a href="https://www.linkedin.com/in/cedric-de-schaut-428ba191/" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i></a>
                            <a href="https://x.com/cedricdeschaut" class="social-link" aria-label="X (Twitter)" target="_blank" rel="noopener"><i class="fab fa-x-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Cedric De Schaut. All rights reserved.</p>
            </div>
        </div>
    </footer>`;

function pageHead({ title, description, canonical, image = 'https://www.cedricdeschaut.com/images/cedric-hero.jpeg', jsonLd = '' }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T7Q7TDSC');</script>
<!-- End Google Tag Manager -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="${image}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">
    <meta name="twitter:site" content="@cedricdeschaut">
    ${jsonLd}
    <link rel="stylesheet" href="/styles.css?v=20260626-ags">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script src="https://analytics.ahrefs.com/analytics.js" data-key="vvdL2ekduW5OSl5e33yYPg" async></script>
</head>
<body>
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T7Q7TDSC"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
${nav}`;
}

function layout(options, main) {
  return `${pageHead(options)}
    <main>
${main}
    </main>
${footer}
    <script src="/script.js"></script>
</body>
</html>
`;
}

function writePage(route, html) {
  const target = path.join(root, route);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
}

function sectionHeader(title, text = '') {
  return `
                <div class="section-heading">
                    <h2>${title}</h2>
                    ${text ? `<p>${text}</p>` : ''}
                </div>`;
}

function cards(items, className = 'ags-card-grid') {
  return `
                <div class="${className}">
                    ${items.map((item) => `
                    <article class="ags-card">
                        ${item.icon ? `<i class="${item.icon}" aria-hidden="true"></i>` : ''}
                        <h3>${item.title}</h3>
                        <p>${item.text}</p>
                        ${item.href ? `<a href="${item.href}" ${item.external ? 'target="_blank" rel="noopener"' : ''}>${item.cta || 'Learn more'}</a>` : ''}
                    </article>`).join('')}
                </div>`;
}

function agenticBridge() {
  return `
        <section class="section agentic-bridge">
            <div class="container ags-split">
                <div>
                    <p class="section-kicker">Agentic SEO bridge</p>
                    <h2>AI SEO is often the first bottleneck teams feel.</h2>
                </div>
                <div class="bridge-copy">
                    <p>AI SEO is often the first bottleneck teams feel: competitors start appearing in ChatGPT, Perplexity, Gemini, and AI Overviews while your brand remains invisible.</p>
                    <p>Agentic SEO is Cedric's specialist AI visibility service for companies that want to understand, measure, and improve how they show up in AI-mediated search.</p>
                    <p>It sits inside the broader AI Growth Systems approach: get found first, then turn that visibility into customers, workflows, and assets that compound.</p>
                    <div class="button-row">
                        <a href="${links.agenticSeo}" target="_blank" rel="noopener" class="btn btn-primary">Explore Agentic SEO</a>
                        <a href="/start-here/#ai-visibility-baseline" class="btn btn-secondary">Run an AI Visibility Quick Check</a>
                    </div>
                </div>
            </div>
        </section>`;
}

const proofText = 'Head of Data & AI at Firgun Ventures. Lead AI Lecturer at Le Wagon. AI consultant, author, former ecommerce founder, and AI SEO researcher. Designed and taught AI programs for teams including Warner Music, SLB, ODDO, Engie, Stellantis, Eiffage, Roland Berger, and Bain & Company.';

const pillars = [
  {
    title: 'Get Found',
    icon: 'fas fa-search',
    text: 'Show up where buyers now search: Google, AI Overviews, ChatGPT, Perplexity, Gemini, newsletters, communities, and category conversations. Build the content, authority, entity signals, and proof assets that make your brand easier for humans and AI systems to understand.',
    cta: 'Start With Get Found',
    href: '/start-here/#get-found',
  },
  {
    title: 'Get Customers',
    icon: 'fas fa-handshake',
    text: 'Turn visibility into demand with sharper offers, lead magnets, landing pages, email sequences, sales research, and follow-up workflows. Use AI to support the full acquisition loop, not just produce more content.',
    cta: 'Improve Acquisition',
    href: '/start-here/#get-customers',
  },
  {
    title: 'Run Lean',
    icon: 'fas fa-diagram-project',
    text: 'Reduce operational drag with useful agents, automations, dashboards, SOPs, and internal workflows. The goal is not more tools. It is clearer work, faster execution, and systems your team can actually repeat.',
    cta: 'Map Automation Opportunities',
    href: '/start-here/#run-lean',
  },
  {
    title: 'Build Assets',
    icon: 'fas fa-layer-group',
    text: 'Turn expertise into things that compound: templates, audits, playbooks, courses, communities, GPTs, datasets, internal knowledge bases, and productized services. Stop starting from scratch every week.',
    cta: 'Productize Expertise',
    href: '/start-here/#build-assets',
  },
];

function homepage() {
  return layout({
    title: 'AI Growth Systems | Cedric De Schaut',
    description: 'Cedric De Schaut helps founders, consultants, marketers, operators, and lean teams build AI Growth Systems for visibility, acquisition, automation, and reusable assets.',
    canonical: 'https://www.cedricdeschaut.com/',
    jsonLd: `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://www.cedricdeschaut.com/#person",
          "name": "Cedric De Schaut",
          "url": "https://www.cedricdeschaut.com",
          "image": "https://www.cedricdeschaut.com/images/cedric-hero.jpeg",
          "jobTitle": "Head of Data & AI",
          "description": "Cedric De Schaut helps lean teams build AI Growth Systems for visibility, acquisition, operations, and reusable business assets.",
          "worksFor": [
            { "@type": "Organization", "name": "Firgun Ventures", "url": "https://firgun.vc" },
            { "@type": "Organization", "name": "Le Wagon", "url": "https://www.lewagon.com" }
          ],
          "sameAs": [
            "https://www.linkedin.com/in/cedric-de-schaut-428ba191/",
            "https://x.com/cedricdeschaut",
            "https://www.agentic-seo.ai/",
            "https://www.skool.com/ai-seo-the-2025-community-4247"
          ],
          "knowsAbout": [
            "AI Growth Systems",
            "AI SEO",
            "Generative Engine Optimization",
            "LLM visibility",
            "AI automation",
            "AI-assisted customer acquisition",
            "Data and AI systems"
          ]
        },
        {
          "@type": "WebSite",
          "url": "https://www.cedricdeschaut.com",
          "name": "AI Growth Systems by Cedric De Schaut",
          "description": "Authority hub and conversion center for practical AI Growth Systems.",
          "publisher": { "@id": "https://www.cedricdeschaut.com/#person" }
        }
      ]
    }
    </script>`,
  }, `
        <header class="ags-hero">
            <div class="container ags-hero-grid">
                <div class="ags-hero-copy">
                    <h1>Build AI Growth Systems that help you get found, get customers, and run lean.</h1>
                    <p>Cedric De Schaut helps founders, consultants, marketers, operators, and lean teams turn AI from scattered experiments into practical systems for visibility, acquisition, automation, and reusable business assets.</p>
                    <div class="button-row">
                        <a href="${links.newsletter}" target="_blank" rel="noopener" class="btn btn-primary">Join the Newsletter</a>
                        <a href="${links.calendly}" target="_blank" rel="noopener" class="btn btn-secondary">Book a Strategy Call</a>
                    </div>
                </div>
                <div class="ags-hero-panel" aria-label="AI Growth Systems map">
                    <div class="system-loop">
                        ${pillars.map((pillar, index) => `<div class="system-node node-${index + 1}"><i class="${pillar.icon}" aria-hidden="true"></i><span>${pillar.title}</span></div>`).join('')}
                    </div>
                    <div class="system-center">
                        <strong>AI Growth Systems</strong>
                        <span>Visibility, acquisition, operations, assets</span>
                    </div>
                </div>
            </div>
        </header>

        <section class="proof-strip">
            <div class="container">
                <p>${proofText}</p>
            </div>
        </section>

        <section id="ai-growth-systems" class="section">
            <div class="container">
                ${sectionHeader('Four practical systems, one growth loop', 'AI Growth Systems organize AI work around outcomes: discovery, demand, operational leverage, and assets that compound.')}
                ${cards(pillars, 'ags-card-grid pillar-grid')}
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('Choose your path', 'Start from the business bottleneck you can actually feel.')}
                ${cards([
                  { title: 'For Founders', icon: 'fas fa-seedling', text: 'Build growth leverage without hiring a large team. Start with visibility, offers, workflows, and simple systems that make your business easier to find and easier to buy from.', href: '/start-here/#diagnostic', cta: 'Find Your First AI Growth System' },
                  { title: 'For Consultants & Experts', icon: 'fas fa-briefcase', text: 'Turn your expertise into authority, leads, and reusable assets. Build proof pages, audit offers, templates, content systems, and productized services.', href: '/start-here/#build-assets', cta: 'Build Visibility And Assets' },
                  { title: 'For Marketers', icon: 'fas fa-bullseye', text: 'Adapt SEO, content, and acquisition for AI search. Learn how to improve visibility across Google, ChatGPT, Perplexity, and the places buyers now ask questions.', href: '/start-here/#get-found', cta: 'Improve AI Search Visibility' },
                  { title: 'For Operators', icon: 'fas fa-list-check', text: 'Use AI to remove repetitive work, improve reporting, and make internal workflows easier to run. Build systems that support better judgment instead of adding noise.', href: '/start-here/#run-lean', cta: 'Map Automation Opportunities' },
                  { title: 'For Lean Teams', icon: 'fas fa-people-group', text: 'Move from scattered AI experiments to a practical roadmap across growth, operations, reporting, and adoption.', href: '/ai-training/', cta: 'Book a Workshop Call' },
                ], 'ags-card-grid path-grid')}
            </div>
        </section>

        ${agenticBridge()}

        <section class="section">
            <div class="container">
                ${sectionHeader('Offer ladder', 'Move from reading to building at the level of support that matches the decision in front of you.')}
                <div class="offer-ladder">
                    ${[
                      ['Newsletter', 'Free', 'Practical AI Growth Systems for visibility, acquisition, automation, and reusable assets.', links.newsletter, 'Join the Newsletter', true],
                      ['AI Growth Systems Lab', 'Free community', 'A Skool implementation lab where members build one useful AI growth system every week.', '/community/', 'Join the Lab', false],
                      ['AI Growth Systems Sprint', 'Guided sprint', 'A 4-week implementation sprint to build one working system tied to a real bottleneck.', '/ai-growth-systems-sprint/', 'Join the Next Sprint', false],
                      ['Consulting', 'Strategy and implementation', 'Advisory and working sessions for lean teams that need decisions, systems, and execution support.', '/consulting/', 'Explore Consulting', false],
                      ['Workshops', 'Team enablement', 'Practical AI workshops for teams that need workflows people can actually use.', '/ai-training/', 'Bring Cedric to Your Team', false],
                      ['Agentic SEO', 'Specialist service', 'Focused AI visibility support for brands that need to show up in AI-mediated search.', links.agenticSeo, 'Explore Agentic SEO', true],
                    ].map(([name, meta, text, href, cta, external]) => `
                    <article class="ladder-item">
                        <div>
                            <span>${meta}</span>
                            <h3>${name}</h3>
                            <p>${text}</p>
                        </div>
                        <a href="${href}" ${external ? 'target="_blank" rel="noopener"' : ''}>${cta}</a>
                    </article>`).join('')}
                </div>
            </div>
        </section>

        <section id="about" class="section section-alt">
            <div class="container ags-split">
                <div>
                    <h2>Cedric proof narrative</h2>
                    <p class="lede">Cedric sits at the intersection of AI, growth, education, and execution.</p>
                </div>
                <div class="rich-copy">
                    <p>He is Head of Data & AI at Firgun Ventures, Lead AI Lecturer at Le Wagon, an AI consultant, author, former ecommerce founder, and AI SEO researcher.</p>
                    <p>His background spans data engineering, BI, technical consulting, ecommerce, media operations, growth, and applied AI education. That mix shapes the point of view behind AI Growth Systems: AI is only useful when it becomes part of a repeatable business system.</p>
                    <a href="/about/" class="btn btn-secondary">Read Cedric's full background</a>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                ${sectionHeader('Featured writing organized by pillars', 'Start with the Get Found wedge, then connect visibility to acquisition, operations, and assets.')}
                <div class="pillar-archive">
                    ${[
                      ['Get Found', 'AI SEO, LLM visibility, AI Overviews, ChatGPT, Perplexity, entity clarity, and authority signals.', [['What is AI SEO?', '/articles/ai-seo/'], ['ChatGPT SEO', '/articles/chatgpt-seo/'], ['LLM SEO', '/articles/llm-seo/']]],
                      ['Get Customers', 'Offers, landing pages, lead magnets, email sequences, and follow-up workflows.', [['Start with the customer path', '/start-here/#get-customers'], ['Read the newsletter', '/newsletter/']]],
                      ['Run Lean', 'Agents, automations, dashboards, SOPs, workflow redesign, and internal tools.', [['Advanced RAG guide', '/articles/advanced-rag/'], ['Map automation opportunities', '/start-here/#run-lean']]],
                      ['Build Assets', 'Templates, audits, playbooks, courses, communities, datasets, and productized services.', [['AI Growth Systems Sprint', '/ai-growth-systems-sprint/'], ['Build assets in the Lab', '/community/']]],
                    ].map(([title, text, linksList]) => `
                    <article class="archive-column">
                        <h3>${title}</h3>
                        <p>${text}</p>
                        <ul>
                            ${linksList.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join('')}
                        </ul>
                    </article>`).join('')}
                </div>
            </div>
        </section>

        <section class="final-cta-section">
            <div class="container">
                <h2>Start with the newsletter if you are exploring. Book a call if you need help designing the system.</h2>
                <p>Either way, the next step is one practical AI Growth System, not another scattered experiment.</p>
                <a href="${links.newsletter}" target="_blank" rel="noopener" class="btn-white">Join the Newsletter</a>
                <a href="${links.calendly}" target="_blank" rel="noopener" class="btn-outline-white">Book a Strategy Call</a>
            </div>
        </section>`);
}

function startHere() {
  return layout({
    title: 'Start Here | AI Growth Systems',
    description: 'Choose the right AI Growth Systems path for getting found, getting customers, automating operations, productizing expertise, training a team, or working with Cedric.',
    canonical: 'https://www.cedricdeschaut.com/start-here/',
  }, `
        <header class="page-hero clean-page-hero">
            <div class="container">
                <h1>Start building your AI Growth System.</h1>
                <p>AI Growth Systems are repeatable workflows, tools, automations, and assets that help a team use AI across visibility, customer acquisition, operations, and productized expertise.</p>
                <div class="button-row centered">
                    <a href="#diagnostic" class="btn btn-primary">Take the Diagnostic</a>
                    <a href="${links.newsletter}" target="_blank" rel="noopener" class="btn btn-secondary">Join the Newsletter</a>
                    <a href="${links.calendly}" target="_blank" rel="noopener" class="btn btn-secondary">Book a Strategy Call</a>
                </div>
            </div>
        </header>

        <section id="diagnostic" class="section">
            <div class="container">
                ${sectionHeader('Choose by intent', 'Pick the path that matches the bottleneck you are trying to solve now.')}
                ${cards([
                  { title: 'I want to get found', icon: 'fas fa-search', text: 'Start with AI SEO, LLM visibility, entity clarity, citations, content strategy, and an AI visibility baseline.', href: '#get-found', cta: 'Start With Get Found' },
                  { title: 'I want more customers', icon: 'fas fa-handshake', text: 'Improve offers, lead magnets, landing pages, email sequences, sales research, and follow-up workflows.', href: '#get-customers', cta: 'Improve Acquisition' },
                  { title: 'I want to automate operations', icon: 'fas fa-gears', text: 'Map repetitive work, reporting gaps, SOPs, dashboards, and workflow redesign opportunities.', href: '#run-lean', cta: 'Map Automation' },
                  { title: 'I want to productize expertise', icon: 'fas fa-layer-group', text: 'Turn knowledge into templates, audits, playbooks, courses, communities, internal knowledge bases, and services.', href: '#build-assets', cta: 'Build Assets' },
                  { title: 'I want team training', icon: 'fas fa-chalkboard-user', text: 'Bring practical AI workshops to leadership, marketing, sales, operations, data, or technical teams.', href: '/ai-training/', cta: 'Explore Workshops' },
                  { title: "I want Cedric's help", icon: 'fas fa-comments', text: 'Use consulting when the work needs senior strategy, implementation judgment, or a clearer roadmap.', href: '/consulting/', cta: 'Explore Consulting' },
                ], 'ags-card-grid path-grid')}
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('Free entry points', 'Use these if you are still clarifying the opportunity.')}
                ${cards([
                  { title: 'Newsletter', icon: 'fas fa-envelope', text: 'Practical AI systems for getting found, getting customers, running lean, and building assets.', href: links.newsletter, cta: 'Join the Newsletter', external: true },
                  { title: 'AI Visibility Quick Check', icon: 'fas fa-magnifying-glass-chart', text: 'Run a quick baseline for how understandable, credible, and citable your brand is in AI-mediated search.', href: '#ai-visibility-baseline', cta: 'Run the Baseline' },
                  { title: 'Skool Lab', icon: 'fas fa-people-group', text: 'Join the AI Growth Systems Lab and build one useful AI growth system every week.', href: '/community/', cta: 'Join the Lab' },
                ])}
            </div>
        </section>

        <section id="get-found" class="section">
            <div class="container ags-split">
                <div>
                    <h2>Start with Get Found if visibility is the bottleneck.</h2>
                    <p class="lede">This is the AI SEO and LLM visibility wedge.</p>
                </div>
                <div class="rich-copy">
                    <p>Use this path if buyers are asking Google, ChatGPT, Perplexity, Gemini, or AI Overviews for recommendations and your brand is not showing up clearly enough.</p>
                    <ul class="check-list">
                        <li>Audit how AI systems understand your brand, category, and proof.</li>
                        <li>Improve content structure, citations, schema, author pages, and entity clarity.</li>
                        <li>Connect visibility work to offers, lead capture, and follow-up workflows.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="get-customers" class="section section-alt">
            <div class="container ags-split reverse">
                <div>
                    <h2>Choose Get Customers when attention is not turning into demand.</h2>
                    <p class="lede">AI supports the acquisition loop when it sharpens the workflow around it.</p>
                </div>
                <div class="rich-copy">
                    <ul class="check-list">
                        <li>Clarify the offer and the page that sells it.</li>
                        <li>Build lead magnets, email sequences, sales research, and follow-up workflows.</li>
                        <li>Use AI to reduce time from insight to usable campaign assets.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="run-lean" class="section">
            <div class="container ags-split">
                <div>
                    <h2>Choose Run Lean when the team is carrying too much manual work.</h2>
                    <p class="lede">The goal is clearer work, not more tools.</p>
                </div>
                <div class="rich-copy">
                    <ul class="check-list">
                        <li>Map repetitive workflows, reporting loops, and handoff friction.</li>
                        <li>Design agents, automations, dashboards, SOPs, and internal tools around real decisions.</li>
                        <li>Document the system so people can repeat it without mystery.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="build-assets" class="section section-alt">
            <div class="container ags-split reverse">
                <div>
                    <h2>Choose Build Assets when expertise keeps resetting to zero.</h2>
                    <p class="lede">Package what you know into repeatable things people can use, buy, or build from.</p>
                </div>
                <div class="rich-copy">
                    <ul class="check-list">
                        <li>Create templates, audits, playbooks, courses, datasets, GPTs, or productized services.</li>
                        <li>Turn delivery patterns into reusable IP.</li>
                        <li>Use the newsletter, community, and sprint to test what should become an asset.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="ai-visibility-baseline" class="section diagnostic-band">
            <div class="container">
                <h2>First challenge: run your AI Visibility Baseline.</h2>
                <p>Search for your category, problem, competitors, and buying criteria in Google AI Overviews, ChatGPT, Perplexity, and Gemini. Capture whether your brand appears, what sources are cited, and which proof points are missing. Then decide what content, authority, and entity work to build first.</p>
                <div class="button-row centered">
                    <a href="${links.agenticSeo}" target="_blank" rel="noopener" class="btn btn-primary">Explore Agentic SEO</a>
                    <a href="${links.newsletter}" target="_blank" rel="noopener" class="btn btn-secondary">Join the Newsletter</a>
                </div>
            </div>
        </section>

        ${agenticBridge()}
`);
}

function consulting() {
  return layout({
    title: 'AI Growth Systems Consulting | Cedric De Schaut',
    description: 'AI Growth Systems consulting for lean teams that need strategy and implementation across visibility, acquisition, operations, automation, and reusable assets.',
    canonical: 'https://www.cedricdeschaut.com/consulting/',
  }, `
        <header class="page-hero clean-page-hero">
            <div class="container">
                <h1>AI Growth Systems consulting for lean teams that need strategy and implementation.</h1>
                <p>Cedric helps founders, consultants, marketers, operators, and growing teams diagnose growth bottlenecks, design practical AI workflows, and build systems across visibility, acquisition, operations, and reusable assets.</p>
                <div class="button-row centered">
                    <a href="${links.calendly}" target="_blank" rel="noopener" class="btn btn-primary">Book a Strategy Call</a>
                    <a href="${links.newsletter}" target="_blank" rel="noopener" class="btn btn-secondary">Join the Newsletter</a>
                </div>
            </div>
        </header>

        <section class="proof-strip">
            <div class="container"><p>${proofText}</p></div>
        </section>

        <section class="section">
            <div class="container">
                ${sectionHeader('Who it is for', 'Consulting is useful when the system needs judgment, prioritization, and implementation discipline.')}
                ${cards([
                  { title: 'Founders', icon: 'fas fa-seedling', text: 'You need AI to create leverage without adding a large team or a messy stack.' },
                  { title: 'Consultants & experts', icon: 'fas fa-briefcase', text: 'You want to turn expertise into authority, leads, reusable assets, and productized delivery.' },
                  { title: 'Marketing & growth teams', icon: 'fas fa-bullseye', text: 'You need visibility, content, offers, and follow-up workflows that match how buyers now search.' },
                  { title: 'Operators', icon: 'fas fa-list-check', text: 'You need better dashboards, automations, SOPs, and workflow redesign without losing clarity.' },
                ])}
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('Problems Cedric helps solve')}
                <div class="outcomes-list">
                    ${[
                      'Scattered AI experiments with no clear business owner or next step.',
                      'Weak AI visibility across Google, ChatGPT, Perplexity, Gemini, and AI Overviews.',
                      'Offers, landing pages, content, and follow-up workflows that do not connect.',
                      'Manual research, reporting, and operations loops that slow the team down.',
                      'Dashboards nobody uses because they do not change the next decision.',
                      'Expertise that should become templates, audits, courses, playbooks, or productized services.',
                    ].map((text) => `<div class="outcome-row"><i class="fas fa-check-circle"></i><p>${text}</p></div>`).join('')}
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                ${sectionHeader('Engagement types')}
                ${cards([
                  { title: 'Strategy call', icon: 'fas fa-comments', text: 'A focused working session to diagnose one bottleneck, pressure-test a plan, or choose the next system to build.' },
                  { title: 'AI Growth Systems advisory', icon: 'fas fa-compass', text: 'A recurring advisory rhythm for teams moving from experiments to a practical roadmap.' },
                  { title: 'Fractional Head of Data & AI', icon: 'fas fa-sitemap', text: 'Embedded leadership for data, AI, dashboards, automation, and internal capability building.' },
                  { title: 'AI visibility advisory', icon: 'fas fa-search', text: 'Focused AI SEO and LLM visibility strategy when Get Found is the first bottleneck.' },
                  { title: 'Workflow and dashboard roadmap', icon: 'fas fa-chart-line', text: 'A practical map of the workflows, automations, dashboards, SOPs, and internal tools to build first.' },
                ])}
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('Process', 'The work starts with the bottleneck, not the tool.')}
                <div class="process-steps">
                    ${[
                      ['1', 'Diagnose', 'Clarify the business bottleneck, current workflow, and decision that matters.'],
                      ['2', 'Prioritize', 'Choose the system that can create the most useful leverage now.'],
                      ['3', 'Design the system', 'Map the workflow, assets, data, prompts, tools, owners, and handoffs.'],
                      ['4', 'Implement or hand off', 'Build the first version or document it clearly enough for your team to own.'],
                      ['5', 'Measure', 'Decide what signal tells you whether the system should be improved, repeated, or retired.'],
                    ].map(([num, title, text]) => `<article class="process-step"><div class="step-num">${num}</div><h3>${title}</h3><p>${text}</p></article>`).join('')}
                </div>
            </div>
        </section>

        ${agenticBridge()}

        <section class="section">
            <div class="container two-column-list">
                <div>
                    <h2>Good fit</h2>
                    <ul class="check-list">
                        <li>You have a real business bottleneck and want practical systems, not AI theater.</li>
                        <li>You value clear diagnosis before buying more tools.</li>
                        <li>You want the work tied to visibility, acquisition, operations, or reusable assets.</li>
                        <li>You can share enough context for the advice to be specific.</li>
                    </ul>
                </div>
                <div>
                    <h2>Not a fit</h2>
                    <ul class="check-list muted-checks">
                        <li>You want guaranteed rankings, revenue, or AI search placement.</li>
                        <li>You want generic prompt lists without a business workflow.</li>
                        <li>You need a hands-off done-for-you agency with no internal ownership.</li>
                        <li>You are looking for abstract transformation slides instead of implementation choices.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('Frequently asked questions')}
                <div class="faq-list">
                    <details class="faq-item"><summary>What can we work on together?</summary><p>AI visibility, content systems, lead generation, sales workflows, automation, dashboards, internal AI adoption, productized services, courses, communities, templates, and playbooks.</p></details>
                    <details class="faq-item"><summary>Is this only about AI SEO?</summary><p>No. AI SEO is often the flagship wedge because visibility is urgent and measurable, but consulting can also cover acquisition, automation, operations, and reusable assets.</p></details>
                    <details class="faq-item"><summary>Do I need to be technical?</summary><p>No. The work can get technical when needed, but the systems are designed to be understandable and usable by business teams.</p></details>
                </div>
            </div>
        </section>

        <section class="final-cta-section">
            <div class="container">
                <h2>Need help designing the system?</h2>
                <p>Book a strategy call and bring the bottleneck you want to solve first.</p>
                <a href="${links.calendly}" target="_blank" rel="noopener" class="btn-white">Book a Strategy Call</a>
                <a href="${links.newsletter}" target="_blank" rel="noopener" class="btn-outline-white">Join the Newsletter</a>
            </div>
        </section>`);
}

function workshops() {
  return layout({
    title: 'Practical AI Workshops for Teams | Cedric De Schaut',
    description: 'Practical AI workshops your team can actually use, covering AI Growth Systems, AI SEO, agents, automation, content systems, data workflows, and adoption.',
    canonical: 'https://www.cedricdeschaut.com/ai-training/',
  }, `
        <header class="page-hero clean-page-hero">
            <div class="container">
                <h1>Practical AI workshops your team can actually use.</h1>
                <p>Custom workshops on AI growth, AI SEO, agents, automation, content systems, data workflows, and team adoption, designed for business teams that need useful workflows instead of abstract AI theory.</p>
                <div class="button-row centered">
                    <a href="${links.email}?subject=AI%20workshop%20enquiry" class="btn btn-primary">Bring Cedric to Your Team</a>
                    <a href="${links.calendly}" target="_blank" rel="noopener" class="btn btn-secondary">Book a Strategy Call</a>
                </div>
            </div>
        </header>

        <section class="proof-strip">
            <div class="container"><p>Lead AI Lecturer at Le Wagon. Designed and taught AI programs for teams including Warner Music, SLB, ODDO, Engie, Stellantis, Eiffage, Roland Berger, and Bain & Company.</p></div>
        </section>

        <section class="section">
            <div class="container">
                ${sectionHeader('Workshop menu')}
                ${cards([
                  { title: 'AI Growth Systems for teams', icon: 'fas fa-diagram-project', text: 'A practical operating map for using AI across visibility, acquisition, operations, and reusable assets.' },
                  { title: 'AI SEO and LLM visibility', icon: 'fas fa-search', text: 'How to improve visibility across Google, AI Overviews, ChatGPT, Perplexity, Gemini, and answer engines.' },
                  { title: 'GenAI for business teams', icon: 'fas fa-wand-magic-sparkles', text: 'Role-specific workflows for research, writing, synthesis, decision support, and everyday execution.' },
                  { title: 'AI agents and automation', icon: 'fas fa-gears', text: 'How to map workflows, identify automation opportunities, and design agents that make work calmer.' },
                  { title: 'AI for research, reporting, and dashboards', icon: 'fas fa-chart-line', text: 'Use AI and data workflows to improve reporting, analysis, dashboards, and decision loops.' },
                  { title: 'Custom role-specific training', icon: 'fas fa-chalkboard-user', text: 'Workshops for leadership, marketing, sales, operations, product, data, or technical teams.' },
                ])}
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('What a workshop includes')}
                <div class="process-steps">
                    ${[
                      ['1', 'Pre-work survey', 'Collect team goals, roles, current workflows, and examples before the session.'],
                      ['2', 'Live session', 'Teach the strategic model, then apply it to realistic team workflows.'],
                      ['3', 'Workflow exercises', 'Build or map useful workflows during the session instead of staying theoretical.'],
                      ['4', 'Templates and playbooks', 'Give the team reusable starting points for prompts, SOPs, audits, dashboards, and assets.'],
                      ['5', 'Follow-up recommendations', 'Leave with prioritized use cases and next systems to build.'],
                    ].map(([num, title, text]) => `<article class="process-step"><div class="step-num">${num}</div><h3>${title}</h3><p>${text}</p></article>`).join('')}
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                ${sectionHeader('Outcomes')}
                <div class="outcomes-list">
                    ${[
                      'Prioritized AI use cases tied to actual business workflows.',
                      'Reusable workflows for research, content, reporting, operations, or acquisition.',
                      'Clearer AI adoption path for the team.',
                      'Team confidence from working through realistic examples together.',
                      'A practical next-step roadmap after the workshop.',
                    ].map((text) => `<div class="outcome-row"><i class="fas fa-check-circle"></i><p>${text}</p></div>`).join('')}
                </div>
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('Proof from Le Wagon B2B and teams trained', 'Cedric has designed and taught applied AI programs for business and technical audiences.')}
                <div class="logo-wall">
                    ${[
                      ['warner-music.svg', 'Warner Music'],
                      ['slb.svg', 'SLB'],
                      ['oddo.svg', 'ODDO'],
                      ['engie.svg', 'Engie'],
                      ['stellantis.svg', 'Stellantis'],
                      ['eiffage.svg', 'Eiffage'],
                      ['roland-berger.png', 'Roland Berger'],
                      ['bain-company.svg', 'Bain & Company'],
                    ].map(([file, alt]) => `<div class="logo-card"><img src="/images/logos/${file}?v=20260417-2" alt="${alt}"></div>`).join('')}
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                ${sectionHeader('Frequently asked questions')}
                <div class="faq-list">
                    <details class="faq-item"><summary>Can the workshop be customized by role?</summary><p>Yes. Workshops can be tailored for leadership, marketing, sales, operations, product, data, or technical teams.</p></details>
                    <details class="faq-item"><summary>Is this AI SEO only?</summary><p>No. AI SEO is one workshop track. The broader workshop menu covers acquisition, automation, agents, reporting, dashboards, and team adoption.</p></details>
                    <details class="faq-item"><summary>What makes this different from generic AI training?</summary><p>The focus is not on prompts or tools in isolation. The focus is on building systems tied to real business outcomes.</p></details>
                </div>
            </div>
        </section>

        <section class="final-cta-section">
            <div class="container">
                <h2>Bring practical AI systems to your team.</h2>
                <p>Share your team size, roles, and the workflows you want people to improve.</p>
                <a href="${links.email}?subject=AI%20workshop%20enquiry" class="btn-white">Bring Cedric to Your Team</a>
                <a href="${links.calendly}" target="_blank" rel="noopener" class="btn-outline-white">Book a Strategy Call</a>
            </div>
        </section>`);
}

function community() {
  return layout({
    title: 'AI Growth Systems Lab | Community',
    description: 'AI Growth Systems Lab is a practical community for founders, consultants, marketers, operators, and lean teams building one useful AI growth system every week.',
    canonical: 'https://www.cedricdeschaut.com/community/',
  }, `
        <header class="page-hero clean-page-hero">
            <div class="container">
                <h1>AI Growth Systems Lab</h1>
                <p>Build one useful AI growth system every week.</p>
                <div class="button-row centered">
                    <a href="${links.skool}" target="_blank" rel="noopener" class="btn btn-primary">Join the Skool Lab</a>
                    <a href="${links.newsletter}" target="_blank" rel="noopener" class="btn btn-secondary">Join the Newsletter</a>
                    <a href="${links.calendly}" target="_blank" rel="noopener" class="btn btn-secondary">Book a Strategy Call</a>
                </div>
            </div>
        </header>

        <section class="section">
            <div class="container ags-split">
                <div>
                    <h2>A practical lab for people building AI Growth Systems.</h2>
                    <p class="lede">The community is for people who want implementation momentum, not passive trend-watching.</p>
                </div>
                <div class="rich-copy">
                    <p>AI Growth Systems Lab is a practical community for founders, consultants, marketers, operators, and lean teams building real AI growth systems.</p>
                    <p>Inside, members test AI visibility, improve how their brands show up in search and LLM answers, build customer acquisition workflows, create automations, share templates, and get feedback from Cedric and peers.</p>
                    <p>The rhythm is simple: build one useful AI growth system every week.</p>
                </div>
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('Who it is for')}
                ${cards([
                  { title: 'Founders', icon: 'fas fa-seedling', text: 'Build leverage without adding complexity or hiring a large team.' },
                  { title: 'Consultants', icon: 'fas fa-briefcase', text: 'Turn expertise into authority, leads, templates, audits, and productized services.' },
                  { title: 'Marketers', icon: 'fas fa-bullseye', text: 'Adapt visibility, content, and acquisition workflows for AI-mediated discovery.' },
                  { title: 'Operators', icon: 'fas fa-list-check', text: 'Remove operational drag with useful automations, dashboards, SOPs, and workflows.' },
                  { title: 'Lean teams', icon: 'fas fa-people-group', text: 'Build practical AI capability one useful system at a time.' },
                ])}
            </div>
        </section>

        <section class="section">
            <div class="container">
                ${sectionHeader('Four tracks')}
                ${cards(pillars, 'ags-card-grid pillar-grid')}
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('Member activities')}
                <div class="outcomes-list">
                    ${[
                      'AI visibility baselines across Google, ChatGPT, Perplexity, Gemini, and AI Overviews.',
                      'Teardown threads for pages, offers, content systems, workflows, and assets.',
                      'Workflow drops that turn an AI use case into a repeatable process.',
                      'Build sessions for one practical system at a time.',
                      'Office hours and peer feedback.',
                      'Monthly benchmarks to see what is changing in AI visibility and practical adoption.',
                    ].map((text) => `<div class="outcome-row"><i class="fas fa-check-circle"></i><p>${text}</p></div>`).join('')}
                </div>
            </div>
        </section>

        <section id="ai-visibility-baseline" class="section diagnostic-band">
            <div class="container">
                <h2>First challenge: Run your AI Visibility Baseline.</h2>
                <p>Search your category and problem space in the tools buyers now use. Capture whether your brand appears, which competitors are cited, what sources are trusted, and what proof is missing. That becomes your first Get Found system.</p>
                <a href="${links.skool}" target="_blank" rel="noopener" class="btn btn-primary">Join the Skool Lab</a>
            </div>
        </section>`);
}

function newsletter() {
  return layout({
    title: 'AI Growth Systems Newsletter | Cedric De Schaut',
    description: 'Practical AI systems for getting found, getting customers, running lean, and building assets.',
    canonical: 'https://www.cedricdeschaut.com/newsletter/',
  }, `
        <header class="page-hero clean-page-hero">
            <div class="container">
                <h1>AI Growth Systems</h1>
                <p>Practical AI systems for getting found, getting customers, running lean, and building assets.</p>
                <div class="button-row centered">
                    <a href="${links.newsletter}" target="_blank" rel="noopener" class="btn btn-primary">Join the AI Growth Systems Newsletter</a>
                    <a href="${links.calendly}" target="_blank" rel="noopener" class="btn btn-secondary">Book a Strategy Call</a>
                </div>
            </div>
        </header>

        <section class="section">
            <div class="container ags-split">
                <div>
                    <h2>A practical newsletter for people who need leverage, not hype.</h2>
                    <p class="lede">Each issue breaks down one useful system.</p>
                </div>
                <div class="rich-copy">
                    <p>A practical newsletter for founders, consultants, marketers, and operators who want to use AI as growth infrastructure.</p>
                    <p>Each issue breaks down one useful system: AI SEO and LLM visibility, content-to-customer workflows, lead magnets, agents, automations, dashboards, productized services, templates, and reusable assets.</p>
                    <p>No hype. No prompt tricks pretending to be strategy. Just practical AI growth systems you can understand, adapt, and use.</p>
                </div>
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('What readers get')}
                ${cards([
                  { title: 'AI Growth System of the Week', icon: 'fas fa-diagram-project', text: 'One repeatable workflow or asset you can understand, adapt, and use.' },
                  { title: 'AI Visibility Clinic', icon: 'fas fa-search', text: 'Notes on AI SEO, LLM visibility, answer engines, entity clarity, and citation opportunities.' },
                  { title: 'Growth Teardowns', icon: 'fas fa-magnifying-glass-chart', text: 'Breakdowns of pages, offers, lead magnets, emails, and acquisition loops.' },
                  { title: 'Agent Playbooks', icon: 'fas fa-gears', text: 'Practical ways to turn agents and automations into calmer workflows.' },
                  { title: 'One Prompt, One Workflow', icon: 'fas fa-list-check', text: 'Prompts used inside business processes, not as isolated tricks.' },
                  { title: 'Field notes', icon: 'fas fa-note-sticky', text: 'What Cedric is seeing across AI SEO research, consulting, teaching, and building.' },
                ])}
            </div>
        </section>

        <section class="section">
            <div class="container">
                ${sectionHeader('Pillar archive')}
                <div class="pillar-archive">
                    ${pillars.map((pillar) => `
                    <article class="archive-column">
                        <h3>${pillar.title}</h3>
                        <p>${pillar.text}</p>
                        <a href="${pillar.href}">${pillar.cta}</a>
                    </article>`).join('')}
                </div>
            </div>
        </section>

        ${agenticBridge()}

        <section class="final-cta-section">
            <div class="container">
                <h2>Get practical AI growth ideas in your inbox.</h2>
                <p>Use Beehiiv as the media engine. Use the website, community, sprint, and consulting when you are ready to build.</p>
                <a href="${links.newsletter}" target="_blank" rel="noopener" class="btn-white">Join the Newsletter</a>
                <a href="/community/" class="btn-outline-white">Join the Skool Lab</a>
            </div>
        </section>`);
}

function sprint() {
  return layout({
    title: 'AI Growth Systems Sprint | Cedric De Schaut',
    description: 'Build your first practical AI Growth System in 4 weeks with a guided sprint for visibility, acquisition, operations, or reusable assets.',
    canonical: 'https://www.cedricdeschaut.com/ai-growth-systems-sprint/',
  }, `
        <header class="page-hero clean-page-hero">
            <div class="container">
                <h1>Build your first practical AI Growth System in 4 weeks.</h1>
                <p>A guided sprint for founders, consultants, marketers, and lean teams who want to move from AI experiments to one working system for visibility, acquisition, operations, or reusable assets.</p>
                <div class="button-row centered">
                    <a href="${links.email}?subject=AI%20Growth%20Systems%20Sprint" class="btn btn-primary">Apply for the Sprint</a>
                    <a href="${links.newsletter}" target="_blank" rel="noopener" class="btn btn-secondary">Join the Newsletter</a>
                    <a href="${links.calendly}" target="_blank" rel="noopener" class="btn btn-secondary">Book a Strategy Call</a>
                </div>
            </div>
        </header>

        <section class="section">
            <div class="container ags-split">
                <div>
                    <h2>Who it is for</h2>
                    <p class="lede">You know AI could help, but you do not need another tool list.</p>
                </div>
                <div class="rich-copy">
                    <p>You need a clear use case, a repeatable workflow, and a system tied to a real business outcome.</p>
                    <ul class="check-list">
                        <li>Consultants.</li>
                        <li>B2B founders.</li>
                        <li>Expert-led service businesses.</li>
                        <li>Marketers at lean teams.</li>
                        <li>Operators responsible for growth.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('What you build', 'Choose one track: Get Found, Get Customers, Run Lean, or Build Assets.')}
                ${cards([
                  { title: 'AI visibility tracker', icon: 'fas fa-search', text: 'A simple system for measuring how your brand shows up in AI-mediated search.' },
                  { title: 'Lead magnet workflow', icon: 'fas fa-envelope-open-text', text: 'A repeatable process for turning a useful idea into a lead capture asset.' },
                  { title: 'Sales research process', icon: 'fas fa-handshake', text: 'An AI-assisted workflow for researching prospects, accounts, pain points, and follow-up.' },
                  { title: 'Reporting dashboard', icon: 'fas fa-chart-line', text: 'A dashboard that supports a real decision instead of adding noise.' },
                  { title: 'Content engine', icon: 'fas fa-file-lines', text: 'A system for turning expertise into structured, useful, findable content.' },
                  { title: 'Productized audit', icon: 'fas fa-layer-group', text: 'A reusable audit, template, or service asset that turns expertise into leverage.' },
                ])}
            </div>
        </section>

        <section class="section">
            <div class="container">
                ${sectionHeader('Four-week structure')}
                <div class="process-steps">
                    ${[
                      ['1', 'Diagnose and map the bottleneck', 'Pick the track, define the business outcome, and map the current workflow.'],
                      ['2', 'Design the system', 'Choose the inputs, tools, prompts, owners, handoffs, and output format.'],
                      ['3', 'Build the workflow and assets', 'Create the first working version with templates, examples, and operating notes.'],
                      ['4', 'Test, document, and create the 90-day plan', 'Run the system, improve the weak spots, and decide what to repeat next.'],
                    ].map(([num, title, text]) => `<article class="process-step"><div class="step-num">${num}</div><h3>${title}</h3><p>${text}</p></article>`).join('')}
                </div>
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('What is included')}
                <div class="outcomes-list">
                    ${[
                      'Live working sessions.',
                      'Templates.',
                      'Implementation prompts.',
                      'Feedback.',
                      'Teardown examples.',
                      'A 30-day action plan you can keep using after the sprint.',
                    ].map((text) => `<div class="outcome-row"><i class="fas fa-check-circle"></i><p>${text}</p></div>`).join('')}
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container ags-split">
                <div>
                    <h2>Outcome</h2>
                    <p class="lede">By the end, you will have one working AI growth system.</p>
                </div>
                <div class="rich-copy">
                    <p>By the end, you will have one working AI growth system, a clearer view of what to improve next, and a practical roadmap for turning AI into repeatable leverage.</p>
                </div>
            </div>
        </section>

        <section class="section section-alt">
            <div class="container two-column-list">
                <div>
                    <h2>Best fit</h2>
                    <ul class="check-list">
                        <li>You want one working system, not a passive course.</li>
                        <li>You can commit to implementation during the sprint.</li>
                        <li>You want feedback on a concrete workflow or asset.</li>
                    </ul>
                </div>
                <div>
                    <h2>Who it is not for</h2>
                    <ul class="check-list muted-checks">
                        <li>Generic AI tool tours.</li>
                        <li>Passive learning.</li>
                        <li>Guaranteed rankings or revenue.</li>
                        <li>A done-for-you service.</li>
                        <li>Prompt tricks without a business workflow.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                ${sectionHeader('FAQ')}
                <div class="faq-list">
                    <details class="faq-item"><summary>What are AI Growth Systems?</summary><p>AI Growth Systems are repeatable workflows, tools, automations, and assets that help a team use AI across visibility, customer acquisition, operations, and productized expertise.</p></details>
                    <details class="faq-item"><summary>Is this only about AI SEO?</summary><p>No. AI SEO is one track because visibility is urgent and measurable. The sprint can also focus on acquisition, automation, operations, or reusable assets.</p></details>
                    <details class="faq-item"><summary>Do I need to be technical?</summary><p>No. The systems are designed to be understandable and usable by business teams. Technical depth is added only where the workflow needs it.</p></details>
                    <details class="faq-item"><summary>What happens after the sprint?</summary><p>You keep the system, the operating notes, and a practical action plan for improving or repeating it over the next month.</p></details>
                </div>
            </div>
        </section>

        <section class="final-cta-section">
            <div class="container">
                <h2>Join the Next Sprint.</h2>
                <p>Apply with the bottleneck you want to solve and the track you want to build.</p>
                <a href="${links.email}?subject=AI%20Growth%20Systems%20Sprint" class="btn-white">Apply for the Sprint</a>
                <a href="${links.calendly}" target="_blank" rel="noopener" class="btn-outline-white">Book a Strategy Call</a>
            </div>
        </section>`);
}

function articles() {
  return layout({
    title: 'AI Growth Systems Articles | Cedric De Schaut',
    description: 'Featured writing organized by AI Growth Systems pillar: Get Found, Get Customers, Run Lean, and Build Assets.',
    canonical: 'https://www.cedricdeschaut.com/articles/',
    image: 'https://www.cedricdeschaut.com/images/ai-seo-article.png',
  }, `
        <header class="page-hero clean-page-hero">
            <div class="container">
                <h1>AI Growth Systems articles</h1>
                <p>Featured writing organized by AI Growth Systems pillar: Get Found, Get Customers, Run Lean, and Build Assets.</p>
                <div class="button-row centered">
                    <a href="${links.newsletter}" target="_blank" rel="noopener" class="btn btn-primary">Join the Newsletter</a>
                    <a href="${links.calendly}" target="_blank" rel="noopener" class="btn btn-secondary">Book a Strategy Call</a>
                </div>
            </div>
        </header>

        <section class="section">
            <div class="container">
                ${sectionHeader('Featured guide')}
                <article class="featured-article-clean">
                    <div>
                        <h2>What is AI SEO? The complete guide</h2>
                        <p>How AI assistants decide what to cite, where AI visibility differs from traditional SEO, and what teams should do first.</p>
                        <a href="/articles/ai-seo/" class="btn btn-primary">Read the AI SEO guide</a>
                    </div>
                    <img src="/images/ai-seo-article.png" alt="AI SEO framework for AI Growth Systems">
                </article>
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('Featured writing organized by AI Growth Systems pillar')}
                <div class="pillar-archive">
                    ${[
                      ['Get Found', 'AI SEO, GEO, LLM visibility, ChatGPT, Perplexity, Gemini, Google AI Overviews, authority, and citations.', [['What is AI SEO?', '/articles/ai-seo/'], ['ChatGPT SEO', '/articles/chatgpt-seo/'], ['LLM SEO', '/articles/llm-seo/'], ['AI search optimization', '/articles/ai-search-optimization/'], ['Enterprise SEO for AI search', '/articles/enterprise-seo-for-ai-search/']]],
                      ['Get Customers', 'Offers, landing pages, lead magnets, email, sales workflows, and funnels.', [['Start Here: customer path', '/start-here/#get-customers'], ['Newsletter formats', '/newsletter/'], ['AI Growth Systems Sprint', '/ai-growth-systems-sprint/']]],
                      ['Run Lean', 'Agents, automations, dashboards, SOPs, workflow redesign, internal tools, and technical depth.', [['Advanced RAG guide', '/articles/advanced-rag/'], ['Workshop track', '/ai-training/'], ['Start Here: automation path', '/start-here/#run-lean']]],
                      ['Build Assets', 'Digital products, paid communities, courses, templates, audits, productized services, and reusable IP.', [['AI Growth Systems Sprint', '/ai-growth-systems-sprint/'], ['AI Growth Systems Lab', '/community/'], ['AI SEO course', '/ai-seo-course/']]],
                    ].map(([title, text, linksList]) => `
                    <article class="archive-column">
                        <h3>${title}</h3>
                        <p>${text}</p>
                        <ul>${linksList.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul>
                    </article>`).join('')}
                </div>
            </div>
        </section>

        ${agenticBridge()}
`);
}

function about() {
  return layout({
    title: 'About Cedric De Schaut | AI Growth Systems',
    description: 'Cedric De Schaut is Head of Data & AI at Firgun Ventures, Lead AI Lecturer at Le Wagon, AI consultant, author, former ecommerce founder, and AI SEO researcher.',
    canonical: 'https://www.cedricdeschaut.com/about/',
  }, `
        <header class="page-hero clean-page-hero">
            <div class="container">
                <h1>About Cedric De Schaut</h1>
                <p>Cedric helps lean teams turn AI into practical growth systems for visibility, acquisition, operations, and reusable assets.</p>
                <div class="button-row centered">
                    <a href="${links.newsletter}" target="_blank" rel="noopener" class="btn btn-primary">Join the Newsletter</a>
                    <a href="${links.calendly}" target="_blank" rel="noopener" class="btn btn-secondary">Book a Strategy Call</a>
                </div>
            </div>
        </header>

        <section class="section">
            <div class="container about-grid">
                <div class="rich-copy">
                    <h2>Operator, educator, and systems builder.</h2>
                    <p>Cedric is Head of Data & AI at Firgun Ventures, Lead AI Lecturer at Le Wagon, an AI consultant, author, former ecommerce founder, and AI SEO researcher.</p>
                    <p>His work focuses on helping founders, consultants, marketers, operators, and lean teams move from scattered AI experiments to practical systems: get found, get customers, run lean, and build assets.</p>
                    <p>He has designed and taught AI programs for teams including Warner Music, SLB, ODDO, Engie, Stellantis, Eiffage, Roland Berger, and Bain & Company.</p>
                </div>
                <img src="/images/cedric-about.png" alt="Cedric De Schaut" class="about-img">
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                ${sectionHeader('Why AI Growth Systems')}
                <div class="rich-copy centered-copy">
                    <p>Most teams do not have an AI problem. They have a systems problem with AI sprinkled on top. Cedric's point of view is simple: AI only creates durable advantage when it becomes part of a repeatable business system.</p>
                    <p>AI SEO is the wedge because discovery is changing quickly. AI Growth Systems are the strategy because visibility only matters when it connects to acquisition, operations, and assets that compound.</p>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                ${sectionHeader('Ecosystem')}
                ${cards([
                  { title: 'cedricdeschaut.com', icon: 'fas fa-globe', text: 'The main authority hub and conversion center for AI Growth Systems.', href: '/', cta: 'Visit the hub' },
                  { title: 'Beehiiv newsletter', icon: 'fas fa-envelope', text: 'The media engine for practical AI systems and field notes.', href: links.newsletter, cta: 'Join the Newsletter', external: true },
                  { title: 'Skool Lab', icon: 'fas fa-people-group', text: 'The implementation community for building one useful AI growth system every week.', href: '/community/', cta: 'Explore Community' },
                  { title: 'Agentic SEO', icon: 'fas fa-search', text: 'The specialist AI visibility service inside the broader AI Growth Systems approach.', href: links.agenticSeo, cta: 'Explore Agentic SEO', external: true },
                ])}
            </div>
        </section>`);
}

function workWithMe() {
  return layout({
    title: 'Work With Cedric | AI Growth Systems',
    description: 'Choose the right way to work with Cedric De Schaut on AI Growth Systems: consulting, workshops, sprint, community, newsletter, and AI visibility support.',
    canonical: 'https://www.cedricdeschaut.com/work-with-me/',
  }, `
        <header class="page-hero clean-page-hero">
            <div class="container">
                <h1>Ways to build AI Growth Systems with Cedric.</h1>
                <p>Choose the level of support you need: explore for free, build with a community, join a sprint, train your team, or work directly with Cedric.</p>
                <div class="button-row centered">
                    <a href="/start-here/" class="btn btn-primary">Start Here</a>
                    <a href="${links.calendly}" target="_blank" rel="noopener" class="btn btn-secondary">Book a Strategy Call</a>
                </div>
            </div>
        </header>

        <section class="section">
            <div class="container">
                ${sectionHeader('Offer ladder')}
                ${cards([
                  { title: 'Newsletter', icon: 'fas fa-envelope', text: 'Practical AI Growth Systems in your inbox.', href: links.newsletter, cta: 'Join the Newsletter', external: true },
                  { title: 'AI Growth Systems Lab', icon: 'fas fa-people-group', text: 'Build one useful AI growth system every week with other operators.', href: '/community/', cta: 'Join the Lab' },
                  { title: 'AI Growth Systems Sprint', icon: 'fas fa-calendar-check', text: 'A guided 4-week sprint to build one working system.', href: '/ai-growth-systems-sprint/', cta: 'Join the Next Sprint' },
                  { title: 'Consulting', icon: 'fas fa-comments', text: 'Strategy and implementation support for lean teams.', href: '/consulting/', cta: 'Explore Consulting' },
                  { title: 'Workshops', icon: 'fas fa-chalkboard-user', text: 'Practical AI workshops your team can actually use.', href: '/ai-training/', cta: 'Bring Cedric to Your Team' },
                  { title: 'Agentic SEO', icon: 'fas fa-search', text: 'Specialist AI visibility support inside the broader AI Growth Systems approach.', href: links.agenticSeo, cta: 'Explore Agentic SEO', external: true },
                ])}
            </div>
        </section>`);
}

const pages = [
  ['index.html', homepage()],
  ['start-here/index.html', startHere()],
  ['consulting/index.html', consulting()],
  ['ai-training/index.html', workshops()],
  ['community/index.html', community()],
  ['newsletter/index.html', newsletter()],
  ['ai-growth-systems-sprint/index.html', sprint()],
  ['articles/index.html', articles()],
  ['about/index.html', about()],
  ['work-with-me/index.html', workWithMe()],
];

pages.forEach(([route, html]) => writePage(route, html));

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.git', 'output'].includes(entry.name)) return [];
      return walk(full);
    }
    return full;
  });
}

function syncSharedChromeAndClaims() {
  walk(root)
    .filter((file) => file.endsWith('.html'))
    .filter((file) => !file.endsWith(`${path.sep}admin.html`))
    .forEach((file) => {
      let content = fs.readFileSync(file, 'utf8');
      content = content.replace(/<nav class="navbar">[\s\S]*?<\/nav>/, nav);
      content = content.replace(/<footer class="footer">[\s\S]*?<\/footer>/, footer);
      const replacements = [
        [/Join\s+10,000\+ AI and SEO professionals\. No spam [^<]*/g, 'Join the AI Growth Systems newsletter. No spam, unsubscribe anytime.'],
        [/Join\s+10,000\+ AI and SEO professionals/g, 'Join the AI Growth Systems newsletter'],
        [/<div class="proof-stat"><strong>10,000\+<\/strong> students taught<\/div>/g, '<div class="proof-stat"><strong>Le Wagon<\/strong> AI lecturer</div>'],
        [/Amazon bestselling/g, 'AI'],
        [/Amazon bestseller/g, 'book'],
        [/Amazon Bestseller/g, 'Author'],
        [/world's top-rated coding bootcamp/g, 'global coding bootcamp'],
        [/Fortune 500 teams/g, 'enterprise teams'],
        [/Fortune 500 AI training/g, 'enterprise AI training'],
        [/trusted by Fortune 500 teams/g, "connected to Cedric's work training enterprise teams"],
        [/The leading AI SEO course/g, 'A practical AI SEO course'],
        [/the leading AI SEO course/g, 'a practical AI SEO course'],
        [/fastest way to learn how to win visibility/g, 'practical way to learn how AI search visibility works'],
        [/fastest way to win visibility/g, 'practical entry point for AI search visibility'],
      ];
      replacements.forEach(([pattern, replacement]) => {
        content = content.replace(pattern, replacement);
      });
      fs.writeFileSync(file, content);
    });
}

syncSharedChromeAndClaims();

console.log('Rendered AI Growth Systems pages and synced shared chrome.');
