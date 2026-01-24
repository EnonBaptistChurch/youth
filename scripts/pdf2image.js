const { Poppler } = require("node-poppler");
const fs = require("fs");
const path = require("path");

const poppler = new Poppler();

const inputDir = path.join(__dirname, "../public/pdfs");
const outputDir = path.join(__dirname, "../public/origami/images");

fs.readdirSync(inputDir).forEach(async (file) => {
  if (!file.endsWith(".pdf")) return;

  const name = path.basename(file, ".pdf");
  const pdfPath = path.join(inputDir, name);
  const outFolder = path.join(outputDir, name);

  if (!fs.existsSync(outFolder)) fs.mkdirSync(outFolder, { recursive: true });

  await poppler.pdfToCairo(pdfPath, outFolder, {
    pngFile: true,
    singleFile: true, // produce multiple page images
  });

  console.log(`Converted ${file} → ${outFolder}`);
});
