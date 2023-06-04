/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : gptRoutes
 */

const express = require("express");
const gptControllers = require("../controllers/gptControllers");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.GPT_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);

const router = express.Router();

router.post("/recommend", gptControllers.sendGptRecommendController);
router.post("/chain", gptControllers.sendGptChainController);
router.post("/relation", gptControllers.sendGptRelationController);
router.post("/summary", gptControllers.sendGptSummaryController);
// router.get("/test", (req, res) => {
//   res.setHeader("Cache-Control", "no-cache");
//   res.setHeader("Content-Type", "text/event-stream");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Connection", "keep-alive");
//   res.flushHeaders(); // flush the headers to establish SSE with client

//   const response = openai.createChatCompletion(
//     {
//       model: "gpt-3.5-turbo",
//       prompt: "창업 아이템 1개만 알려줘!",
//       max_tokens: 100,
//       temperature: 0.7,
//       stream: true,
//     },
//     { responseType: "stream" }
//   );

//   response.then((resp) => {
//     resp.data.on("data", (data) => {
//       const lines = data
//         .toString()
//         .split("\n")
//         .filter((line) => line.trim() !== "");
//       for (const line of lines) {
//         const message = line.replace(/^data: /, "");
//         if (message === "[DONE]") {
//           console.log("hi");
//           res.end();
//           break;
//         }
//         const parsed = JSON.parse(message);
//         res.write(`data: ${parsed.choices[0].text}\n\n`);
//       }
//     });
//   });
// });

module.exports = router;
