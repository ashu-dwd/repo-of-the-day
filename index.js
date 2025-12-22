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
  },
);

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Adding a new route for the daily report
app.get("/daily-report", (req, res) => {
  runDailyReport();
  res.send("Daily report generated");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
