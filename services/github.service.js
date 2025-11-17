import axios from "axios";
import * as cheerio from "cheerio";
import { summarizeText } from "./openai.service.js";

/**
 * Fetches the top 5 trending repositories from GitHub Trending.
 * @returns {Promise<Array>} Array of repo objects: { name, url, description, language, stars }
 */
export async function fetchTopTrendingRepos() {
  const url = "https://github.com/trending";
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const repos = [];

  $("article.Box-row")
    .slice(0, 5)
    .each((i, elem) => {
      const title = $(elem).find("h2 a").text().trim().replace(/\s/g, "");
      const repoUrl = "https://github.com" + $(elem).find("h2 a").attr("href");
      const description = $(elem).find("p").text().trim();
      const language = $(elem)
        .find("[itemprop=programmingLanguage]")
        .text()
        .trim();
      const stars = $(elem)
        .find('a[href$="/stargazers"]')
        .first()
        .text()
        .trim();

      repos.push({
        name: title,
        url: repoUrl,
        description,
        language,
        stars,
      });
    });
  // const res = await summarizeText(JSON.stringify(repos));

  // return res;
  return repos;
}

// console.log(await fetchTopTrendingRepos());
