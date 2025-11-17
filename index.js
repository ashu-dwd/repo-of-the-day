import express from "express";
import cron from "node-cron";
import { runDailyReport } from "./jobs/dailyReport.js";

// Schedule the daily report at 8 AM Asia/Calcutta time
cron.schedule(
  "0 8 * * *",
  () => {
    runDailyReport();
  },
  {
    timezone: "Asia/Kolkata",
  }
);

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
