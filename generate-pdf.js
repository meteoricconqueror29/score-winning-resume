import puppeteer from 'puppeteer';

// WSL/Linux: if bundled Chrome fails (e.g. missing libnss3), install deps below or run:
//   sudo apt install -y chromium-browser
//   PUPPETEER_EXECUTABLE_PATH=$(command -v chromium-browser || command -v chromium) node generate-pdf.js
const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH || undefined;

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    ...(executablePath ? { executablePath } : {})
  });

  const page = await browser.newPage();

  await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' });

  // KEEP only resume-preview
  await page.evaluate(() => {
    const resume = document.getElementById('resume-preview');
    document.body.innerHTML = '';
    document.body.appendChild(resume);
  });

  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    printBackground: true,
    scale: 0.9,
    margin: { top: '0.2in', right: '0.2in', bottom: '0.2in', left: '0.2in' }
  });

  await browser.close();
})();
