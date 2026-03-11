const pdf = require("pdf-parse");
const fs = require("fs");

const parsePDF = async (filePath) => {
  const dataBuffer = fs.readFileSync(filePath);
  const pdfData = await pdf(dataBuffer);
  return pdfData.text;
};

module.exports = parsePDF;