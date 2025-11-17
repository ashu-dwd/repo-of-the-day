import { fetchTopTrendingRepos } from "../services/github.service.js";
import { summarizeText } from "../services/openai.service.js";
import { sendMail } from "../services/mail.service.js";
import config from "../config/index.js";

export async function runDailyReport() {
  try {
    const repos = await fetchTopTrendingRepos();
    const summaries = [];

    for (const repo of repos) {
      const text = `Repository: ${repo.name}\nDescription: ${repo.description}\nLanguage: ${repo.language}\nStars: ${repo.stars}\nURL: ${repo.url}`;
      const summary = await summarizeText(text, config.OPENAI_API_KEY);
      summaries.push(`* ${repo.name}\n${summary}\n${repo.url}\n`);
    }

    const emailBody = [
      "Top 5 Trending GitHub Repositories (Daily Digest):",
      "",
      ...summaries,
    ].join("\n");

    await sendMail(
      {
        to: config.RECIPIENT_EMAIL,
        subject: "Top 5 Trending GitHub Repos - Daily Digest",
        text: emailBody,
      },
      config.EMAIL_CONFIG
    );

    console.log("Daily report sent successfully.");
  } catch (err) {
    console.error("Error in daily report job:", err);
  }
}

// For direct execution (node jobs/dailyReport.js)
if (import.meta.url === `file://${process.argv[1]}`) {
  runDailyReport();
}
