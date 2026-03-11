// const express = require("express");
// const SopChunk = require("../models/SopChunk");
// const generateEmbedding = require("../services/embedding");

// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const { question } = req.body;

//     const queryEmbedding = await generateEmbedding(question);

//     const results = await SopChunk.aggregate([
//       {
//         $vectorSearch: {
//           index: "vector_index",
//           path: "embedding",
//           queryVector: queryEmbedding,
//           numCandidates: 100,
//           limit: 5,
//         },
//       },
//       {
//         $project: {
//           text: 1,
//           source: 1,
//           score: { $meta: "vectorSearchScore" },
//         },
//       },
//     ]);

//     res.json(results);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("✅ /api/query route HIT");
  res.json({
    message: "Query route working",
    body: req.body
  });
});

module.exports = router;