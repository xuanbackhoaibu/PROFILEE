import { existsSync, readFileSync } from "node:fs";
import assert from "node:assert/strict";

const pdfPath = "public/files/CV-Tran-Xuan-Bac.pdf";
const cvHtml = readFileSync("public/files/CV-Tran-Xuan-Bac.html", "utf8");

assert.equal(existsSync(pdfPath), true, `CV PDF file should exist: ${pdfPath}`);

assert.match(
  cvHtml,
  /<a\s+href="\.\/CV-Tran-Xuan-Bac\.pdf"\s+download="CV-Tran-Xuan-Bac\.pdf">Tải CV PDF<\/a>/,
  "CV page should have direct PDF download link",
);
assert.match(
  cvHtml,
  /<button type="button" onclick="window\.print\(\)">In CV<\/button>/,
  "Print action should remain available as a button",
);

console.log("All CV tests passed successfully!");
