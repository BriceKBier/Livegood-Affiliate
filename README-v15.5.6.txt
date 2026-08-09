UCanWorkFromHome v15.5.6 — RELIABLE LIVE NEWS CHYRON

What changed:
- Removed browser-to-GDELT API calls that were failing during local preview.
- The ticker now reads a local news-data.js file, so it works even when index.html is opened directly from a ZIP/temp folder.
- A GitHub Actions workflow refreshes news-data.js automatically every hour after the site is published.
- Headlines come from Google News RSS on the GitHub server; no API key is required.
- news.html uses the same same-origin headline data and includes Latest, Business, Technology, Health, Sports, Entertainment.
- The ticker checks for newly generated data every 10 minutes while a visitor has a page open.

IMPORTANT WHEN UPLOADING:
Upload the ENTIRE contents of this ZIP, including the hidden .github folder and the scripts folder.
The scheduled updater is: .github/workflows/update-news.yml
The updater script is: scripts/update_news.py

You can also run the workflow manually in GitHub under Actions > Update live news > Run workflow.
