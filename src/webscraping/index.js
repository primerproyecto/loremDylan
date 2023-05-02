const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();

  await page.goto("https://www.bobdylan.com/songs/", {
    waitUntil: "load",
    timeout: 0,
  });
  await page.screenshot({
    path: "songsPage.png",
    fullPage: true,
  });
  await page.waitForSelector("#item-list");

  const songLinks = await page.$$eval(".song a", (links) =>
    links.map((link) => link.href)
  );

  const lyrics = [];

  for (const link of songLinks) {
    await page.goto(link), { waitUntil: "load", timeout: 0 };

    await page.waitForSelector(".interior-content");

    const title = await page.$eval(".headline", (title) =>
      title.textContent.trim()
    );
    const text = await page.$eval(".article-content", (content) =>
      content.innerHTML.trim()
    );

    const imagen = await page.$eval(".photo img", (content) => content.src);

    try {
      if (text.length > 20 && title !== null) {
        lyrics.push({
          song: title,
          lyrics: text,
          cover: imagen,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const fs = require("fs");

  fs.writeFileSync("data/bobDylanSongs.json", JSON.stringify(lyrics, null, 2));

  await browser.close();
})();
