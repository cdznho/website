const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));

const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

function includes(file, expected) {
  if (!exists(file)) {
    check(false, `${file} should exist before checking: ${expected}`);
    return;
  }
  const content = read(file);
  check(content.includes(expected), `${file} should include: ${expected}`);
}

const requiredRoutes = [
  'index.html',
  'start-here/index.html',
  'consulting/index.html',
  'ai-training/index.html',
  'community/index.html',
  'newsletter/index.html',
  'articles/index.html',
  'about/index.html',
  'ai-growth-systems-sprint/index.html',
];

requiredRoutes.forEach((file) => check(exists(file), `${file} should exist`));

const pagesToCheck = requiredRoutes.filter(exists);
const navLabels = [
  'Start Here',
  'AI Growth Systems',
  'Consulting',
  'Workshops',
  'Community',
  'Newsletter',
  'Articles',
  'About',
];

pagesToCheck.forEach((file) => {
  const content = read(file);
  navLabels.forEach((label) => {
    check(content.includes(`>${label}</a>`), `${file} nav should include ${label}`);
  });
  check(content.includes('Join the Newsletter'), `${file} should include Join the Newsletter CTA`);
  check(content.includes('Book a Strategy Call'), `${file} should include Book a Strategy Call CTA`);
});

[
  'Build AI Growth Systems that help you get found, get customers, and run lean.',
  'Get Found',
  'Get Customers',
  'Run Lean',
  'Build Assets',
  'Agentic SEO is Cedric',
].forEach((expected) => includes('index.html', expected));

includes('start-here/index.html', 'I want to get found');
includes('start-here/index.html', 'Take the Diagnostic');
includes('consulting/index.html', 'AI Growth Systems consulting for lean teams that need strategy and implementation.');
includes('ai-training/index.html', 'Practical AI workshops your team can actually use.');
includes('community/index.html', 'Build one useful AI growth system every week.');
includes('newsletter/index.html', 'Practical AI systems for getting found, getting customers, running lean, and building assets.');
includes('ai-growth-systems-sprint/index.html', 'Build your first practical AI Growth System in 4 weeks.');
includes('articles/index.html', 'Featured writing organized by AI Growth Systems pillar');

const allHtml = fs
  .readdirSync(root, { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
  .map((entry) => path.join(entry.parentPath || entry.path, entry.name))
  .filter((file) => !file.includes(`${path.sep}node_modules${path.sep}`));

const unsupportedClaimPatterns = [
  /Join\s+10,000\+ AI and SEO professionals/i,
  /guarantees?\s+(rankings|revenue)/i,
  /10x your business/i,
  /fastest way to win visibility/i,
  /world's top-rated coding bootcamp/i,
  /Fortune 500/i,
  /Amazon bestselling/i,
  /Amazon Bestseller/i,
  /consistently see measurable improvement/i,
];

allHtml.forEach((file) => {
  const relative = path.relative(root, file);
  const content = fs.readFileSync(file, 'utf8');
  unsupportedClaimPatterns.forEach((pattern) => {
    check(!pattern.test(content), `${relative} should not contain unsupported claim: ${pattern}`);
  });
});

const sitemap = read('sitemap.xml');
[
  '/start-here/',
  '/community/',
  '/newsletter/',
  '/about/',
  '/ai-growth-systems-sprint/',
].forEach((route) => {
  check(sitemap.includes(`https://www.cedricdeschaut.com${route}`), `sitemap should include ${route}`);
});

if (failures.length) {
  console.error(`AI Growth Systems verification failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('AI Growth Systems verification passed.');
