<h1 align="center">🚀 Repo of the Day 🎉</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="Version"/>
  <img src="https://img.shields.io/badge/license-ISC-green" alt="License"/>
  <img src="https://img.shields.io/badge/node-%3E%3D%2012.0.0-orange" alt="Node.js"/>
</p>

<div align="center">
  <img src="https://media.giphy.com/media/3o7aCVpH3dZ8Ho8i9C/giphy.gif" alt="funny-meme" width="320" height="180"/>
  <br/>
  <strong>Find the coolest open-source repo. Level up every day. Meme guaranteed.</strong>
</div>

---

## 📝 Table of Contents

- [What is Repo of the Day?](#what-is-repo-of-the-day)
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Usage Examples](#️-usage-examples)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## What is Repo of the Day?

Every day deserves a new open-source surprise! **Repo of the Day** is your friendly bot/service that finds & shares awesome public GitHub repositories. It fetches, analyzes, and serves up a daily dose of the best repos—using AI and good old human curation. Great for devs who want to expand their horizons or just need a spark of inspiration.

<div align="center">
  <img src="https://media1.tenor.com/m/BjyfLv31RQAAAAAC/lets-go-yes.gif" height="80" alt="excited sticker"/>
  
</div>

---

## ✨ Features

- 🔥 **Daily Pick:** Get a new, interesting GitHub repo every day.
- 🤖 **AI-powered Analysis:** Summarizes repo content using OpenAI.
- 🕸️ **Web Scraping:** Uses Cheerio for instant repo insights.
- 📬 **Email Alerts:** Notifies subscribers via Nodemailer.
- 🌱 **Beginner Friendly:** Clear code & documentation.
- ⚡ **Ready to Deploy:** Docker & CI/CD friendly.

---

## 🚀 Quick Start

1. **Clone this repo:**

   ```bash
   git clone https://github.com/ashu-dwd/repo-of-the-day.git
   cd repo-of-the-day
   ```

2. **Install dependencies** (PNPM recommended):

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Configure environment:**

   - Copy `.env.example` to `.env` and fill in your API keys (OpenAI, email provider, etc).

4. **Run the app:**

   ```bash
   pnpm start
   ```

5. **Run tests:**

   ```bash
   pnpm test
   ```

6. **Test the tool and send a daily report email:**

   ```bash
   pnpm test:tool
   # or
   npm run test:tool
   ```

   > This command will run the tool and simulate a daily report, sending a summary of trending repositories as an email to the configured recipient (see your `.env` for recipient and email config).

---

## 🛠️ Usage Examples

- **Get today's repo** (sample Express endpoint):

  ```js
  // GET /repo-of-the-day
  app.get("/repo-of-the-day", async (req, res) => {
    const repo = await getTodaysRepo();
    res.json(repo);
  });
  ```

- **Send daily email:**

  ```js
  // jobs/dailyReport.js
  sendDailyRepoEmail();
  ```

- **AI-powered summary:**

  ```js
  import { summarizeRepo } from "./services/openai.service.js";
  summarizeRepo("octocat/hello-world");
  ```

## 🤝 Contributing

We love contributors! Feel free to submit issues, ideas, or a PR. Please check out our guidelines [here](CONTRIBUTING.md).

---

## 📄 License

Licensed under the ISC License. See [LICENSE](LICENSE) for details.

---

<div align="center">
  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="Thank you meme" width="100"/>
  <br/><b>Have a fun, open-source filled day!</b> 🚀🎉
</div>
