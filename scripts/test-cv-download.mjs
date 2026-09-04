import { existsSync, readFileSync } from "node:fs";
import assert from "node:assert/strict";

const pdfPath = "public/files/CV-Tran-Xuan-Bac.pdf";
const cvHtml = readFileSync("public/files/CV-Tran-Xuan-Bac.html", "utf8");
const heroVue = readFileSync("src/features/home/components/Hero.vue", "utf8");
const contactVue = readFileSync("src/features/home/components/Contact.vue", "utf8");
const indexHtml = readFileSync("index.html", "utf8");
const enMessages = readFileSync("src/i18n/messages/namespaces/common/en.json", "utf8");
const viMessages = readFileSync("src/i18n/messages/namespaces/common/de.json", "utf8");

assert.equal(existsSync(pdfPath), true, `CV PDF file should exist: ${pdfPath}`);

assert.match(
  heroVue,
  /const cvPagePath = `\$\{import\.meta\.env\.BASE_URL\}files\/CV-Tran-Xuan-Bac\.html`;/,
  "Hero Download CV button should open the CV page first",
);
assert.match(
  contactVue,
  /const cvPagePath = `\$\{import\.meta\.env\.BASE_URL\}files\/CV-Tran-Xuan-Bac\.html`;/,
  "Contact Download CV link should open the CV page first",
);
assert.doesNotMatch(
  heroVue,
  /download="CV-Tran-Xuan-Bac\.pdf"/,
  "Hero Download CV button should not download the PDF directly",
);

assert.match(
  cvHtml,
  /<a\s+href="\.\/CV-Tran-Xuan-Bac\.pdf"\s+download="CV-Tran-Xuan-Bac\.pdf"\s+onclick="downloadPdf\(event\)">Tải CV PDF<\/a>/,
  "CV page should have direct PDF download link",
);
assert.match(
  cvHtml,
  /Backend \.NET Intern\/Fresher \| System Analysis/,
  "Default CV should target only Backend .NET and System Analysis",
);
assert.doesNotMatch(
  cvHtml,
  /API Testing Intern/,
  "Default CV should not target API Testing as a job",
);
assert.match(
  indexHtml,
  /Backend \.NET Intern\/Fresher \| System Analysis/,
  "Portfolio metadata should target only Backend .NET and System Analysis",
);
assert.match(
  enMessages + viMessages,
  /BACKEND \.NET DEVELOPER \| SYSTEM ANALYST/,
  "Portfolio hero title should target only Backend .NET and System Analysis",
);
assert.doesNotMatch(
  cvHtml,
  /<h2>Career Fit<\/h2>/,
  "CV page should not include the Career Fit section",
);
assert.doesNotMatch(
  cvHtml,
  /Can support ASP\.NET Core MVC\/Web API features/,
  "CV page should not include the removed Backend .NET career fit copy",
);
assert.doesNotMatch(
  cvHtml,
  /translating business logic into backend implementation notes/,
  "CV page should not include the removed System Analyst career fit copy",
);
assert.match(
  cvHtml,
  /function downloadPdf\(event\)/,
  "CV page should force the PDF download instead of relying on the browser PDF viewer",
);
assert.match(
  cvHtml,
  /<button type="button" onclick="window\.print\(\)">In CV<\/button>/,
  "Print action should remain available as a button",
);

console.log("All CV tests passed successfully!");
