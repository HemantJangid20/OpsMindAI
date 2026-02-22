const express = require("express");
const multer = require("multer");
const parsePDF = require("../services/pdfParser");
const chunkText = require("../utils/chunkText");
const SopChunk = require("../models/SopChunk");
const generateEmbedding = require("../services/embedding");


const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const text = await parsePDF(req.file.path);
    const chunks = chunkText(text);

    // TEMP embedding (Week 1 mock)
    const fakeEmbedding = () => Array(384).fill(0);

    for (let chunk of chunks) {
      const embedding = await generateEmbedding(chunk);
    
      await SopChunk.create({
        text: chunk,
        embedding,
        source: {
          fileName: req.file.originalname,
        },
      });
    }

    res.json({ message: "SOP uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;